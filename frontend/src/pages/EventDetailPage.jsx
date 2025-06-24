import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventCategories, eventGalleries } from '../data/mockData';

/**
 * EventDetailPage component - displays detailed information about a specific event
 * Features: Event details, past events gallery, modal for image viewing
 * URL: /events/:id
 */
const EventDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Find the event by ID from mock data
  const event = eventCategories.find(e => e.id === parseInt(id));
  const gallery = eventGalleries[parseInt(id)] || [];

  // Handle case where event is not found
  if (!event) {
    return (
      <div className="min-h-screen bg-primary text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 work-sans-bold">Event Not Found</h1>
          <Link to="/home" className="text-accent hover:underline inter-regular">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white pt-20">
      {/* Event Header Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <div className="text-accent mb-4 inter-regular">
              <Link to="/home" className="hover:underline">Home</Link> / 
              <span className="ml-1">Events</span> / 
              <span className="ml-1">{event.name}</span>
            </div>
            
            {/* Event Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 work-sans-bold">
              {event.name}
            </h1>
            
            {/* Event Description */}
            <p className="text-xl text-gray-300 mb-8 inter-regular">
              {event.description}
            </p>
            
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={event.image} 
                alt={event.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {/* Event Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 work-sans-semibold">
                  About This <span className="text-accent">Event Type</span>
                </h2>
                <p className="text-gray-300 inter-regular mb-6">
                  {event.description} Our team specializes in creating memorable experiences 
                  that reflect your unique style and preferences.
                </p>
                
                {/* Key Features */}
                <h3 className="text-xl font-bold mb-4 work-sans-medium">What We Offer:</h3>
                <ul className="space-y-3 text-gray-300 inter-regular">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional event planning and coordination
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium venue selection and booking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom decoration and styling
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional photography and videography
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium catering and beverage services
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 work-sans-medium">
                  Ready to Plan Your <span className="text-accent">Event?</span>
                </h3>
                <p className="text-gray-300 inter-regular mb-6">
                  Contact our expert event planners to discuss your vision and get started.
                </p>
                
                {/* Contact Actions */}
                <div className="space-y-4">
                  <button className="w-full bg-accent text-primary py-3 rounded-lg font-bold hover:bg-accent/90 transition-all duration-300 inter-bold">
                    Get Free Consultation
                  </button>
                  <button className="w-full border-2 border-accent text-accent py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition-all duration-300 inter-bold">
                    Request Quote
                  </button>
                </div>
                
                {/* Contact Details */}
                <div className="mt-6 space-y-3 text-gray-300 inter-regular">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@eventease.com
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Past Events */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Past <span className="text-accent">Events</span> Gallery
            </h2>
            <p className="text-xl text-gray-300 inter-regular">
              Take a look at some of our successful {event.name.toLowerCase()} events
            </p>
          </motion.div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${event.name} Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;