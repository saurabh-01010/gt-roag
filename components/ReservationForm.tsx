import React, { useState } from 'react';
import { Calendar, Clock, User, MessageSquare } from 'lucide-react';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Table Reservation Request: ${formData.name} - ${formData.date}`;
    const body = `Hello The G.T. Road Team,

I would like to request a table reservation.

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Special Requests: ${formData.requests}

Please confirm my booking.`;

    const mailtoLink = `mailto:reservations@thegtroad.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-wood-800/50 p-8 rounded-lg border border-gold-700 text-center animate-fade-in">
        <h3 className="text-2xl font-serif text-gold-500 mb-4">Reservation Request Sent</h3>
        <p className="text-stone-300">Thank you, {formData.name}. We have opened your email client with the reservation details. Please hit send to complete the request.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-gold-400 hover:text-gold-300 underline"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-wood-800 p-8 rounded-lg shadow-xl border border-wood-700">
      <h3 className="text-2xl font-serif font-bold text-gold-500 mb-6 text-center">Reserve Your Table</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-1">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gold-600" size={16} />
              <input 
                type="text" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-wood-950 border border-wood-600 rounded p-2 pl-10 text-stone-200 focus:border-gold-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-1">Phone</label>
            <div className="relative">
               <span className="absolute left-3 top-3 text-gold-600 text-xs">📞</span>
              <input 
                type="tel" 
                name="phone" 
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-wood-950 border border-wood-600 rounded p-2 pl-10 text-stone-200 focus:border-gold-500 focus:outline-none"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
             <label className="block text-xs font-bold text-stone-400 uppercase mb-1">Date</label>
             <div className="relative">
               <Calendar className="absolute left-3 top-3 text-gold-600" size={16} />
               <input 
                 type="date" 
                 name="date" 
                 required
                 value={formData.date}
                 onChange={handleChange}
                 className="w-full bg-wood-950 border border-wood-600 rounded p-2 pl-10 text-stone-200 focus:border-gold-500 focus:outline-none text-sm"
               />
             </div>
          </div>
           <div>
             <label className="block text-xs font-bold text-stone-400 uppercase mb-1">Time</label>
             <div className="relative">
               <Clock className="absolute left-3 top-3 text-gold-600" size={16} />
               <select 
                 name="time" 
                 required
                 value={formData.time}
                 onChange={handleChange}
                 className="w-full bg-wood-950 border border-wood-600 rounded p-2 pl-10 text-stone-200 focus:border-gold-500 focus:outline-none text-sm"
               >
                 <option value="" disabled>Select</option>
                 <option value="12:00">12:00 PM</option>
                 <option value="13:00">01:00 PM</option>
                 <option value="14:00">02:00 PM</option>
                 <option value="15:00">03:00 PM</option>
                 <option value="19:00">07:00 PM</option>
                 <option value="20:00">08:00 PM</option>
                 <option value="21:00">09:00 PM</option>
                 <option value="22:00">10:00 PM</option>
               </select>
             </div>
          </div>
          <div>
             <label className="block text-xs font-bold text-stone-400 uppercase mb-1">Guests</label>
             <div className="relative">
               <User className="absolute left-3 top-3 text-gold-600" size={16} />
               <select 
                 name="guests" 
                 value={formData.guests}
                 onChange={handleChange}
                 className="w-full bg-wood-950 border border-wood-600 rounded p-2 pl-10 text-stone-200 focus:border-gold-500 focus:outline-none text-sm"
               >
                 {[1,2,3,4,5,6,7,8,9,10, '10+'].map(n => (
                   <option key={n} value={n}>{n} Guests</option>
                 ))}
               </select>
             </div>
          </div>
        </div>

        <div>
           <label className="block text-xs font-bold text-stone-400 uppercase mb-1">Special Requests</label>
           <div className="relative">
             <MessageSquare className="absolute left-3 top-3 text-gold-600" size={16} />
             <textarea 
               name="requests" 
               value={formData.requests}
               onChange={handleChange}
               rows={3}
               className="w-full bg-wood-950 border border-wood-600 rounded p-2 pl-10 text-stone-200 focus:border-gold-500 focus:outline-none text-sm"
               placeholder="Anniversary, High Chair, etc."
             ></textarea>
           </div>
        </div>

        <button type="submit" className="w-full bg-gold-600 hover:bg-gold-500 text-wood-950 font-bold py-3 px-4 rounded transition-colors duration-200 mt-2">
          Confirm Reservation
        </button>

      </form>
    </div>
  );
};

export default ReservationForm;