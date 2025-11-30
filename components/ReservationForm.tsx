import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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
    const subject = `Table Reservation Request: ${formData.name} - ${formData.date}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nRequests: ${formData.requests}`;
    window.location.href = `mailto:reservations@thegtroad.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-wood-900 p-8 rounded border border-gold-600/30 text-center animate-fade-in">
        <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-500">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-serif text-white mb-2">Request Initiated</h3>
        <p className="text-stone-400 text-sm mb-6">Please check your email client to send the request.</p>
        <button onClick={() => setSubmitted(false)} className="text-gold-400 hover:text-white text-sm uppercase tracking-widest font-bold">New Booking</button>
      </div>
    );
  }

  // Helper for input classes
  const inputClass = "w-full bg-wood-900/50 border-b border-wood-700 rounded-t-sm px-4 py-3 text-stone-200 focus:border-gold-500 focus:bg-wood-800 focus:outline-none transition-all placeholder-transparent peer text-sm";
  const labelClass = "absolute left-4 -top-2.5 text-xs text-gold-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-gold-500 bg-wood-950 px-1";

  return (
    <div className="bg-wood-950 p-6 sm:p-8">
      <h3 className="text-xl font-serif font-bold text-white mb-6 text-center tracking-wide">
        <span className="text-gold-500">/</span> Book A Table
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Name" />
            <label htmlFor="name" className={labelClass}>Full Name</label>
          </div>
          <div className="relative">
            <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Phone" />
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative">
             <input type="date" name="date" id="date" required value={formData.date} onChange={handleChange} className={`${inputClass} text-stone-400`} />
             <label htmlFor="date" className={labelClass}>Date</label>
          </div>
           <div className="relative">
             <select name="time" id="time" required value={formData.time} onChange={handleChange} className={inputClass}>
               <option value="" disabled></option>
               <option value="12:00">12:00 PM</option>
               <option value="13:00">01:00 PM</option>
               <option value="14:00">02:00 PM</option>
               <option value="15:00">03:00 PM</option>
               <option value="19:00">07:00 PM</option>
               <option value="20:00">08:00 PM</option>
               <option value="21:00">09:00 PM</option>
               <option value="22:00">10:00 PM</option>
             </select>
             <label htmlFor="time" className={labelClass}>Time</label>
          </div>
          <div className="relative">
             <select name="guests" id="guests" value={formData.guests} onChange={handleChange} className={inputClass}>
               {[1,2,3,4,5,6,7,8,9,10, '10+'].map(n => (<option key={n} value={n}>{n}</option>))}
             </select>
             <label htmlFor="guests" className={labelClass}>Guests</label>
          </div>
        </div>

        <div className="relative">
           <textarea name="requests" id="requests" value={formData.requests} onChange={handleChange} rows={2} className={inputClass} placeholder="Requests"></textarea>
           <label htmlFor="requests" className={labelClass}>Special Requests</label>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-wood-950 font-bold py-4 rounded-sm transition-all duration-300 transform hover:scale-[1.01] shadow-lg flex items-center justify-center tracking-widest uppercase text-xs">
          Confirm Booking <ChevronRight size={16} className="ml-2" />
        </button>

      </form>
    </div>
  );
};

export default ReservationForm;