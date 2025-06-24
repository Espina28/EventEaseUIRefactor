import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const eventCategories = [
    { name: 'Weddings', image: 'https://images.unsplash.com/flagged/photo-1566155603908-2bbd3e6124cc', description: 'Create your perfect wedding day with our premium packages' },
    { name: 'Corporate Events', image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c', description: 'Professional corporate events that impress and inspire' },
    { name: 'Birthday Celebrations', image: 'https://images.unsplash.com/photo-1482731910308-31e96e5d1d28', description: 'Unforgettable birthday celebrations for all ages' },
    { name: 'Debuts', image: 'https://images.unsplash.com/photo-1639135689749-f8df3126b467', description: 'Elegant debut parties to mark special milestones' },
    { name: 'Premium Catering', image: 'https://images.pexels.com/photos/4705928/pexels-photo-4705928.jpeg', description: 'Exquisite culinary experiences for your events' },
    { name: 'Event Planning', image: 'https://images.unsplash.com/photo-1648297346835-8a7f7dd44528', description: 'Complete event planning from concept to execution' }
  ];

  const weddingPackages = [
    {
      name: 'Essential',
      price: '$2,999',
      features: ['Venue Decoration', 'Basic Photography', 'Standard Catering', 'Music System'],
      metrics: { couples: '50+', rating: '4.7' }
    },
    {
      name: 'Premium',
      price: '$5,999',
      features: ['Luxury Venue', 'Professional Photography', 'Premium Catering', 'Live Music', 'Wedding Coordinator'],
      metrics: { couples: '100+', rating: '4.9' },
      popular: true
    },
    {
      name: 'Luxury',
      price: '$9,999',
      features: ['Exclusive Venue', 'Celebrity Photographer', 'Gourmet Catering', 'Live Band', 'Full Event Management', 'Honeymoon Package'],
      metrics: { couples: '75+', rating: '5.0' }
    }
  ];

  const companyHighlights = [
    { number: '500+', label: 'Events Completed', icon: '🎉' },
    { number: '1000+', label: 'Happy Clients', icon: '😊' },
    { number: '50+', label: 'Venues Partners', icon: '🏛️' },
    { number: '24/7', label: 'Support Available', icon: '📞' }
  ];

  const whyChooseUs = [
    { icon: '👑', title: 'Luxury Experience', description: 'Premium venues and world-class service for your special moments' },
    { icon: '🎯', title: 'Personalized Planning', description: 'Tailored event planning that matches your unique vision and style' },
    { icon: '🤝', title: 'Trusted Partners', description: 'Exclusive partnerships with top venues and premium service providers' },
    { icon: '⚡', title: 'Seamless Execution', description: 'Flawless event coordination ensuring everything runs perfectly' }
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-accent work-sans-bold">EventEase</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-accent transition-colors work-sans-bold">Home</a>
                <a href="#services" className="hover:text-accent transition-colors work-sans-bold">Services</a>
                <a href="#packages" className="hover:text-accent transition-colors work-sans-bold">Packages</a>
                <a href="#about" className="hover:text-accent transition-colors work-sans-bold">About</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Message Box */}
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
              
              {/* Bell Icon */}
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
              
              {/* User Profile */}
              <div className="relative">
                <button 
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center hover:bg-accent/30 transition-colors"
                >
                  <span className="text-accent font-bold">U</span>
                </button>
                
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <a href="#profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Profile</a>
                    <a href="#reservations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Reservations</a>
                    <hr className="my-1" />
                    <a href="#logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1639475234964-40e685025708" 
            alt="Luxury Event Venue"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 work-sans-bold"
          >
            Create <span className="text-accent">Unforgettable</span> Moments
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 inter-regular"
          >
            Transform your special occasions into extraordinary experiences with our premium event services and luxury venues.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-accent text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 inter-bold"
          >
            Book Your Dream Event
          </motion.button>
        </div>
      </section>

      {/* Event Categories Carousel */}
      <section id="services" className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">Our <span className="text-accent">Premium</span> Services</h2>
            <p className="text-xl text-gray-300 inter-regular">Discover our range of luxury event services tailored to your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent group-hover:from-accent/20"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent work-sans-medium">{category.name}</h3>
                  <p className="text-gray-300 inter-regular">{category.description}</p>
                </div>
                
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EventEase */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">Why Choose <span className="text-accent">EventEase</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto inter-regular">
              We combine luxury, convenience, and trust to deliver exceptional events that exceed expectations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
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

      {/* Wedding Packages */}
      <section id="packages" className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">Wedding <span className="text-accent">Packages</span></h2>
            <p className="text-xl text-gray-300 inter-regular">Choose the perfect package for your dream wedding</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 group ${
                  pkg.popular ? 'border-accent shadow-lg shadow-accent/20' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 work-sans-medium">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-accent mb-4 work-sans-bold">{pkg.price}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center inter-regular">
                      <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-6 text-sm text-gray-300">
                    <div>
                      <span className="block text-accent font-bold">{pkg.metrics.couples}</span>
                      <span>Couples Served</span>
                    </div>
                    <div>
                      <span className="block text-accent font-bold">{pkg.metrics.rating}★</span>
                      <span>Rating</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-accent text-primary py-3 rounded-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 pulse-animation inter-bold">
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">Our <span className="text-accent">Success</span> Story</h2>
            <p className="text-xl text-gray-300 inter-regular">Numbers that speak for our excellence and commitment</p>
          </motion.div>
          
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 work-sans-bold">
              Ready to Create Your <span className="text-accent">Perfect Event</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto inter-regular">
              Let's bring your vision to life with our premium event planning services and luxury venues.
            </p>
            
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

      {/* Footer */}
      <footer className="bg-primary py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4 work-sans-bold">EventEase</h3>
              <p className="text-gray-300 inter-regular">Creating unforgettable moments through luxury event planning and premium venues.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 work-sans-medium">Services</h4>
              <ul className="space-y-2 text-gray-300 inter-regular">
                <li><a href="#" className="hover:text-accent transition-colors">Weddings</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Corporate Events</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Birthday Parties</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Debuts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 work-sans-medium">Company</h4>
              <ul className="space-y-2 text-gray-300 inter-regular">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 work-sans-medium">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300 inter-regular">
            <p>&copy; 2025 EventEase. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;