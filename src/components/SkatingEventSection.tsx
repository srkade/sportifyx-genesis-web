import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import skatingHero from '@/assets/skating-event-hero.jpg';

const SkatingEventSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${skatingHero})` }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            State Level Skating Competition
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-primary-glow font-semibold mb-8"
          >
            12 Oct 2025
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            SportifyX Sports & Events Pvt. Ltd. is hosting a state-level skating competition to promote athletic excellence and youth fitness. Expected 600–1,000 participants. Full supervision, medical support, and venue safety protocols ensured.
          </motion.p>
          
          {/* Event Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {/* Date & Time Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-primary-glow" size={24} />
                <h3 className="text-white font-semibold text-lg">Date & Time</h3>
              </div>
              <p className="text-white/90">Sunday, 12 Oct 2025</p>
              <p className="text-primary-glow font-medium">9 AM – 6 PM</p>
            </div>
            
            {/* Venue Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary-glow" size={24} />
                <h3 className="text-white font-semibold text-lg">Venue</h3>
              </div>
              <p className="text-white/90">Viman Nagar Roller Skating Rink</p>
              <p className="text-white/80 text-sm">Sakore Nagar, Viman Nagar, Pune, MH – 411014</p>
            </div>
            
            {/* Participants Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-primary-glow" size={24} />
                <h3 className="text-white font-semibold text-lg">Expected</h3>
              </div>
              <p className="text-primary-glow font-medium text-xl">600 - 1,000</p>
              <p className="text-white/90">Participants</p>
            </div>
            
            {/* Duration Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-primary-glow" size={24} />
                <h3 className="text-white font-semibold text-lg">Duration</h3>
              </div>
              <p className="text-primary-glow font-medium text-xl">9 Hours</p>
              <p className="text-white/90">Full Day Event</p>
            </div>
          </motion.div>
          
          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="sport" 
              size="xl" 
              className="text-xl px-12 py-6 font-bold transform hover:scale-110 transition-all duration-300"
            >
              Register Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkatingEventSection;