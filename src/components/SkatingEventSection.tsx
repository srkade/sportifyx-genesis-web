import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
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
          {/* Association Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-primary-glow font-semibold mb-4 text-lg"
          >
            🌟 In Association with Skating Association of Maharashtra & Pune 🌟
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            SportifyX State Level Skating Championship – 2025
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-primary-glow font-bold mb-2"
          >
            🏆 Where Speed Meets Spirit, and Champions are Born! 🏆
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-xl md:text-2xl text-white font-semibold mb-8"
          >
            12th October 2025
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            🔥 Lace up, roll out, and own the rink! Whether you're racing for gold or cheering for your star — this is the event you can't miss.
          </motion.p>

          {/* Age Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 max-w-2xl mx-auto"
          >
            <h3 className="text-white font-bold text-xl mb-4">⛸ Age Categories:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-white/90">
              <div className="text-center">✨ Under 6 Years</div>
              <div className="text-center">✨ 6 – 8 Years</div>
              <div className="text-center">✨ 8 – 10 Years</div>
              <div className="text-center">✨ 10 – 12 Years</div>
              <div className="text-center">✨ 12 – 15 Years</div>
              <div className="text-center">✨ 15 Years & Above</div>
            </div>
          </motion.div>

          {/* Participation Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.47 }}
            className="bg-gradient-to-r from-primary/20 to-primary-glow/20 backdrop-blur-md rounded-2xl p-6 border border-primary/30 mb-12 max-w-2xl mx-auto"
          >
            <p className="text-white/90 text-lg text-center">
              🎁 Every participant gets a <span className="text-primary-glow font-bold">T-shirt & Participation Certificate!</span>
            </p>
            <p className="text-white/80 text-center mt-2">Because every effort deserves recognition. 🙌</p>
          </motion.div>
          
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
              <p className="text-white/90">Sunday, 12th October 2025</p>
              <p className="text-primary-glow font-medium">8 AM – 6 PM</p>
            </div>
            
            {/* Venue Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary-glow" size={24} />
                <h3 className="text-white font-semibold text-lg">Venue</h3>
              </div>
              <p className="text-white/90">Viman Nagar Skating Rink</p>
              <p className="text-white/80 text-sm">Pune, Maharashtra</p>
            </div>
            
            {/* Duration Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-primary-glow" size={24} />
                <h3 className="text-white font-semibold text-lg">Duration</h3>
              </div>
              <p className="text-primary-glow font-medium text-xl">10 Hours</p>
              <p className="text-white/90">Full Day Event</p>
            </div>
          </motion.div>
          
          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-white/90 text-lg mb-4">
              🎯 Limited slots available! Don't miss your chance to be part of history.
            </p>
            <Button 
              variant="sport" 
              size="xl" 
              className="text-xl px-12 py-6 font-bold transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://sportifyx.in" target="_blank" rel="noopener noreferrer">
                Register NOW
              </a>
            </Button>
            <p className="text-white/80 text-sm mt-4">
              📸 Trophies, cheers, and unforgettable moments await.<br />
              Let's roll into glory – the SportifyX way!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkatingEventSection;