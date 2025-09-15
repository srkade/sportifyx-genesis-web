import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import basketballEvent from '@/assets/past-event-basketball.jpg';
import cricketEvent from '@/assets/past-event-cricket.jpg';
import swimmingEvent from '@/assets/past-event-swimming.jpg';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  participants: string;
}

const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: "State Basketball Championship",
    date: "15 Aug 2024",
    description: "Inter-district basketball tournament with 32 teams competing for the championship title.",
    image: basketballEvent,
    participants: "500+ Athletes"
  },
  {
    id: 2,
    title: "Cricket Premier League",
    date: "22 Jul 2024",
    description: "Regional cricket tournament featuring emerging talent from across the state.",
    image: cricketEvent,
    participants: "300+ Players"
  },
  {
    id: 3,
    title: "Swimming Championship",
    date: "10 Jun 2024",
    description: "Annual swimming competition with multiple categories for all age groups.",
    image: swimmingEvent,
    participants: "250+ Swimmers"
  }
];

const PastEventsGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);

  const openModal = (event: PastEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="py-20 bg-gradient-gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Past Events Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Relive the excitement and achievements from our previous sporting events and competitions.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(event)}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform group-hover:scale-105">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-primary font-semibold text-sm mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">
                      {event.participants}
                    </span>
                    <span className="text-primary font-medium hover:text-primary-glow transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Event Details */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="text-primary font-semibold mb-2">
                  {selectedEvent.date}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {selectedEvent.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-accent font-semibold text-lg">
                    {selectedEvent.participants}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Click outside to close
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PastEventsGallery;