import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkatingEventSection from '@/components/SkatingEventSection';
import PastEventsGallery from '@/components/PastEventsGallery';

const Events = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main>
        <SkatingEventSection />
        <PastEventsGallery />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Events;