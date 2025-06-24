import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import PackageCard from '../components/PackageCard';
import { eventCategories, weddingPackages, companyHighlights, whyChooseUs } from '../data/mockData';

/**
 * HomePage component - main dashboard for logged-in users
 * Features: Hero section, event categories, wedding packages, company highlights
 * Uses mock data for easy modification
 */
const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <Hero showCTA={false} />

      {/* Event Categories Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Our <span className="text-accent">Premium</span> Services
            </h2>
            <p className="text-xl text-gray-300 inter-regular">
              Discover our range of luxury event services tailored to your needs
            </p>
          </motion.div>
          
          {/* Event Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <EventCard 
                key={category.id} 
                event={category} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EventEase Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Why Choose <span className="text-accent">EventEase</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto inter-regular">
              We combine luxury, convenience, and trust to deliver exceptional events that exceed expectations
            </p>
          </motion.div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 work-sans-medium">{item.title}</h3>
                <p className="text-gray-300 inter-regular">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages Section */}
      <section id="packages" className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Wedding <span className="text-accent">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 inter-regular">
              Choose the perfect package for your dream wedding
            </p>
          </motion.div>
          
          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <PackageCard 
                key={pkg.id} 
                package={pkg} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Our <span className="text-accent">Success</span> Story
            </h2>
            <p className="text-xl text-gray-300 inter-regular">
              Numbers that speak for our excellence and commitment
            </p>
          </motion.div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4">
                  <span className="text-4xl mb-2 block">{highlight.icon}</span>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2 work-sans-bold group-hover:scale-110 transition-transform duration-300">
                    {highlight.number}
                  </div>
                  <p className="text-gray-300 work-sans-medium">{highlight.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1582799003398-3368f5ac26e9" 
            alt="Luxury Event Setup"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Updated CTA Message */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 work-sans-bold">
              Start Planning Your <span className="text-accent">Dream Event</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto inter-regular">
              Let's bring your vision to life with our premium event planning services and luxury venues.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/30 glow-animation inter-bold"
              >
                Get Started Today
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent text-accent px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent hover:text-primary transition-all duration-300 inter-bold"
              >
                Schedule Consultation
              </motion.button>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 flex justify-center space-x-8 text-gray-300">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@eventease.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;