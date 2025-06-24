import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import PackageCard from '../components/PackageCard';
import { eventCategories, weddingPackages, companyHighlights, whyChooseUs } from '../data/mockData';

/**
 * LandingPage component - for non-logged in users
 * Features: Hero section, services preview, packages preview, signup encouragement
 * Different from HomePage - focuses on conversion and user acquisition
 */
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section with CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1639475234964-40e685025708" 
            alt="Luxury Event Venue"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 work-sans-bold"
          >
            Welcome to <span className="text-accent">EventEase</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-8 text-gray-300 inter-regular"
          >
            Create unforgettable moments with Philippines' premier event planning service
          </motion.p>
          
          {/* Sign Up Encouragement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-xl text-accent mb-6 inter-bold">
              Join thousands of satisfied clients who trusted us with their special moments
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="bg-accent text-primary px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 inter-bold">
                Create Free Account
              </button>
              <div className="text-gray-300 inter-regular">
                Already have an account? 
                <Link to="/login" className="text-accent hover:underline ml-2 font-bold">
                  Log in here
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center space-x-8 text-gray-300"
          >
            <div className="flex items-center">
              <span className="text-accent text-2xl mr-2">⭐</span>
              <span className="inter-regular">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <span className="text-accent text-2xl mr-2">🏆</span>
              <span className="inter-regular">500+ Events Completed</span>
            </div>
            <div className="flex items-center">
              <span className="text-accent text-2xl mr-2">💎</span>
              <span className="inter-regular">Premium Quality Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Our <span className="text-accent">Premium</span> Services
            </h2>
            <p className="text-xl text-gray-300 inter-regular mb-8">
              Discover why EventEase is the Philippines' most trusted event planning platform
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-accent font-bold inter-bold">
                🎉 Sign up today and get a FREE consultation with our expert event planners!
              </p>
            </div>
          </motion.div>
          
          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.slice(0, 6).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-accent work-sans-medium">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 inter-regular text-sm">
                    {category.shortDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Sign Up CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <button className="bg-accent text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 inter-bold">
              Sign Up to Explore All Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Package Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Wedding <span className="text-accent">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 inter-regular mb-8">
              Affordable luxury packages starting from ₱300K
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-accent font-bold inter-bold">
                💰 Early Bird Special: Save up to ₱50K when you book in the next 30 days!
              </p>
            </div>
          </motion.div>
          
          {/* Packages Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 group ${
                  pkg.popular ? 'border-accent shadow-lg shadow-accent/20' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 work-sans-medium">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    {pkg.originalPrice && (
                      <span className="text-gray-400 line-through work-sans-medium">
                        ₱{pkg.originalPrice}
                      </span>
                    )}
                    <div className="text-3xl font-bold text-accent work-sans-bold">
                      ₱{pkg.price}
                    </div>
                  </div>
                  <p className="text-gray-300 inter-regular text-sm">{pkg.description}</p>
                </div>
                
                {/* Limited Services Preview */}
                <ul className="space-y-2 mb-6">
                  {pkg.services.slice(0, 4).map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm inter-regular">
                      <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                  <li className="text-accent inter-regular text-sm">
                    +{pkg.services.length - 4} more services included
                  </li>
                </ul>
                
                <button className="w-full bg-accent/20 text-accent py-2 rounded-lg font-bold hover:bg-accent/30 transition-all duration-300 inter-bold">
                  Sign Up to View Full Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Why Choose <span className="text-accent">EventEase</span>?
            </h2>
            <p className="text-xl text-gray-300 inter-regular">
              Join the thousands who trust us with their most important moments
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 work-sans-medium">{item.title}</h3>
                <p className="text-gray-300 inter-regular text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {companyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{highlight.icon}</div>
                <div className="text-3xl font-bold text-accent mb-1 work-sans-bold">
                  {highlight.number}
                </div>
                <p className="text-gray-300 work-sans-medium text-sm">{highlight.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/20 via-secondary to-accent/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 work-sans-bold">
              Ready to Create <span className="text-accent">Magic</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto inter-regular">
              Join EventEase today and turn your dream event into reality with our premium planning services.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <button className="bg-accent text-primary px-12 py-4 rounded-lg text-xl font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 glow-animation inter-bold">
                Start Your Journey - Sign Up Free
              </button>
              <Link 
                to="/login"
                className="border-2 border-accent text-accent px-12 py-4 rounded-lg text-xl font-bold hover:bg-accent hover:text-primary transition-all duration-300 inter-bold"
              >
                Already a Member? Log In
              </Link>
            </div>
            
            <p className="text-gray-400 inter-regular">
              No credit card required • Free consultation included • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;