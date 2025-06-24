import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { weddingPackages } from '../data/mockData';

/**
 * PackageDetailPage component - displays detailed information about a specific wedding package
 * Features: Full service list, detailed descriptions, terms and conditions
 * URL: /packages/:id
 */
const PackageDetailPage = () => {
  const { id } = useParams();
  
  // Find the package by ID from mock data
  const packageData = weddingPackages.find(p => p.id === parseInt(id));

  // Handle case where package is not found
  if (!packageData) {
    return (
      <div className="min-h-screen bg-primary text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 work-sans-bold">Package Not Found</h1>
          <Link to="/home" className="text-accent hover:underline inter-regular">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white pt-20">
      {/* Package Header Section */}
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
              <span className="ml-1">Packages</span> / 
              <span className="ml-1">{packageData.name}</span>
            </div>
            
            {/* Package Title and Price */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 work-sans-bold">
              {packageData.name} <span className="text-accent">Package</span>
            </h1>
            
            {/* Price Display */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              {packageData.originalPrice && (
                <span className="text-2xl text-gray-400 line-through work-sans-medium">
                  ₱{packageData.originalPrice}
                </span>
              )}
              <div className="text-6xl font-bold text-accent work-sans-bold">
                ₱{packageData.price}
              </div>
            </div>
            
            {/* Package Description */}
            <p className="text-xl text-gray-300 mb-8 inter-regular">
              {packageData.description}
            </p>
            
            {/* Popular Badge */}
            {packageData.popular && (
              <div className="inline-block">
                <span className="bg-accent text-primary px-6 py-2 rounded-full text-lg font-bold">
                  Most Popular Choice
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Complete Services List */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <h2 className="text-3xl font-bold mb-6 work-sans-semibold">
                  Complete <span className="text-accent">Services</span> Included
                </h2>
                <p className="text-gray-300 inter-regular mb-8">
                  This package includes all the essential services to make your wedding day perfect and stress-free.
                </p>
                
                {/* Full Services List */}
                <div className="space-y-4">
                  {packageData.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start group"
                    >
                      <svg className="w-6 h-6 text-accent mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-white inter-regular group-hover:text-accent transition-colors">
                          {service}
                        </p>
                        {/* Service description - customized based on service type */}
                        <p className="text-gray-400 text-sm mt-1">
                          {getServiceDescription(service)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Package Benefits & Terms */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Why Choose This Package */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 work-sans-medium">
                    Why Choose <span className="text-accent">{packageData.name}</span>?
                  </h3>
                  <ul className="space-y-3 text-gray-300 inter-regular">
                    <li className="flex items-center">
                      <span className="text-accent mr-3">•</span>
                      Perfect for couples seeking {packageData.name === 'Tulip' ? 'comprehensive luxury' : packageData.name === 'Rose' ? 'balanced elegance' : 'essential elegance'}
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-3">•</span>
                      Professional coordination throughout your special day
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-3">•</span>
                      Premium quality services from trusted vendors
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-3">•</span>
                      Flexible customization options available
                    </li>
                  </ul>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 work-sans-medium">
                    Terms & <span className="text-accent">Conditions</span>
                  </h3>
                  <div className="space-y-4 text-gray-300 inter-regular">
                    <div>
                      <h4 className="font-bold text-white mb-2">Booking Terms:</h4>
                      <p>{packageData.terms}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Payment Schedule:</h4>
                      <ul className="space-y-1">
                        <li>• Deposit due upon booking confirmation</li>
                        <li>• 30% payment due 3 months before event</li>
                        <li>• Final payment due 1 month before event</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Cancellation Policy:</h4>
                      <p>Cancellations made 6+ months prior: 80% refund. 3-6 months: 50% refund. Less than 3 months: 25% refund.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Additional Notes:</h4>
                      <ul className="space-y-1">
                        <li>• All services subject to availability</li>
                        <li>• Package customization available with additional fees</li>
                        <li>• Final guest count required 2 weeks before event</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-accent text-primary py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 inter-bold">
                    Book This Package
                  </button>
                  <button className="w-full border-2 border-accent text-accent py-4 rounded-lg text-lg font-bold hover:bg-accent hover:text-primary transition-all duration-300 inter-bold">
                    Request Customization
                  </button>
                  <button className="w-full bg-white/10 text-white py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 inter-bold">
                    Download Package Details
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 work-sans-semibold">
              Compare <span className="text-accent">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 inter-regular">
              See how this package compares to our other offerings
            </p>
          </motion.div>

          {/* Other Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pkg.id * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  pkg.id === packageData.id 
                    ? 'border-accent shadow-lg shadow-accent/20 transform scale-105' 
                    : 'border-white/10 hover:border-accent/30'
                }`}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2 work-sans-medium">
                    {pkg.name}
                  </h3>
                  <div className="text-2xl font-bold text-accent work-sans-bold">
                    ₱{pkg.price}
                  </div>
                </div>
                <p className="text-gray-300 inter-regular text-sm mb-4">{pkg.description}</p>
                <p className="text-accent font-bold inter-bold text-center">
                  {pkg.services.length} Services Included
                </p>
                {pkg.id !== packageData.id && (
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="block mt-4 text-center bg-accent/20 text-accent py-2 rounded-lg hover:bg-accent/30 transition-colors inter-bold"
                  >
                    View Package
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Helper function to provide service descriptions
 * This adds more context to each service item
 */
const getServiceDescription = (service) => {
  const descriptions = {
    'Catering': 'Professional catering service with menu selection',
    'Decorations': 'Custom venue decoration and styling',
    'Photography': 'Professional wedding photography services',
    'Videography': 'High-quality video recording and editing',
    'Bridal Gown': 'Premium bridal gown selection and fitting',
    'Groom Suit': 'Elegant groom suit rental or purchase',
    'Wedding Cake': 'Custom wedding cake design and creation',
    'Wine for Toasting': 'Premium wine selection for toasts',
    'Invitations & Souvenirs': 'Custom invitation design and wedding favors',
    'Bridal Car': 'Luxury transportation for the bride',
    'Sounds & Lights': 'Professional audio-visual equipment and setup',
    'Professional Host': 'Experienced wedding host and MC services',
    'Wedding Coordinators': '24/7 wedding day coordination and support',
    'Wedding Makeup': 'Professional bridal makeup and styling',
    'Photobooth': 'Interactive photobooth with props and prints'
  };
  
  // Return specific description or generic one
  return descriptions[service] || 'Professional service included in your package';
};

export default PackageDetailPage;