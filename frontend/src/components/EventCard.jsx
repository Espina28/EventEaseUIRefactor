import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * EventCard component for displaying event categories
 * Props: event (object with id, name, image, description, shortDesc)
 * Features: Hover animations, click navigation to event details
 */
const EventCard = ({ event, index = 0 }) => {
  return (
    <motion.div
      // Animation when component comes into view
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
    >
      {/* Event Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent group-hover:from-accent/20 transition-all duration-300"></div>
      </div>
      
      {/* Event Information */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-accent work-sans-medium">
          {event.name}
        </h3>
        <p className="text-gray-300 inter-regular mb-4">
          {event.description}
        </p>
        
        {/* View Details Button */}
        <Link 
          to={`/events/${event.id}`}
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors inter-bold"
        >
          View Details
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default EventCard;