import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-wood-950">
      
      <div className="bg-wood-900 py-12 text-center border-b border-gold-900/50">
        <h1 className="text-4xl font-serif font-bold text-gold-500 mb-2">Contact Us</h1>
        <p className="text-stone-400">We’d love to serve you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-stone-200 mb-6 border-l-4 border-gold-500 pl-4">Restaurant Info</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                   <div className="bg-wood-800 p-3 rounded-full mr-4 border border-gold-800">
                     <MapPin className="text-gold-500" size={24} />
                   </div>
                   <div>
                     <h4 className="text-gold-100 font-bold">Address</h4>
                     <p className="text-stone-400">M-39, Shankar Market, Outer Circle,<br/>Connaught Place, New Delhi – 110001</p>
                   </div>
                </div>
                
                <div className="flex items-start">
                   <div className="bg-wood-800 p-3 rounded-full mr-4 border border-gold-800">
                     <Phone className="text-gold-500" size={24} />
                   </div>
                   <div>
                     <h4 className="text-gold-100 font-bold">Phone</h4>
                     <p className="text-stone-400">97177 20084<br/>93102 88808</p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="bg-wood-800 p-3 rounded-full mr-4 border border-gold-800">
                     <Clock className="text-gold-500" size={24} />
                   </div>
                   <div>
                     <h4 className="text-gold-100 font-bold">Opening Hours</h4>
                     <div className="text-stone-400 grid grid-cols-2 gap-x-4">
                       <span>Lunch:</span><span>12:00 PM – 4:00 PM</span>
                       <span>Dinner:</span><span>7:00 PM – 11:30 PM</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-wood-900 rounded-lg overflow-hidden border border-wood-700 relative flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.112345678901!2d77.2198!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36a88b5e69%3A0x6b8f3b1b1b1b1b1b!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                className="opacity-75 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-wood-900/50 p-1 rounded-lg">
             <ReservationForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;