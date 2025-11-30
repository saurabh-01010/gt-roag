import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChefHat } from 'lucide-react';
import { sendMessageToChef } from '../services/gemini';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am the Head Chef here. Ask me about our specials or the history of G.T. Road cuisine.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Add a placeholder for the stream
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      const streamResult = await sendMessageToChef(userMessage);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullText += c.text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
            return newMessages;
          });
        }
      }

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Apologies, the kitchen is very busy. I missed that. Could you repeat?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gold-600 text-wood-950 p-4 rounded-full shadow-lg hover:bg-gold-500 transition-all transform hover:scale-105 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Chat with Chef"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-wood-900 border border-gold-700/50 rounded-lg shadow-2xl flex flex-col overflow-hidden h-[500px]">
          {/* Header */}
          <div className="bg-wood-800 p-4 flex justify-between items-center border-b border-gold-800">
            <div className="flex items-center space-x-2">
              <div className="bg-gold-100 p-1 rounded-full text-wood-900">
                <ChefHat size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-gold-500 text-sm">Ask the Chef</h3>
                <p className="text-xs text-stone-400">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-wood-950/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-gold-600 text-wood-950 rounded-br-none'
                      : 'bg-wood-800 text-stone-200 rounded-bl-none border border-wood-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-wood-900 border-t border-gold-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about our dishes..."
              className="flex-1 bg-wood-950 text-stone-200 px-4 py-2 rounded-full border border-wood-700 focus:outline-none focus:border-gold-600 text-sm placeholder-stone-600"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className={`p-2 rounded-full ${isLoading ? 'bg-stone-700 text-stone-500' : 'bg-gold-600 text-wood-900 hover:bg-gold-500'}`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;