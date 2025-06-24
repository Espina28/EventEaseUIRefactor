import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * PackageCard component for displaying wedding packages
 * Props: package (object with id, name, price, services, etc.), index (for animation delay)
 * Features: Hover animations, popular badge, click navigation to package details
 */
const PackageCard = ({ package: pkg, index = 0 }) => {
  return (
    <motion.div
      // Animation when component comes into view
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 group ${
        pkg.popular ? 'border-accent shadow-lg shadow-accent/20' : 'border-white/10'
      }`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      {/* Package Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 work-sans-medium">{pkg.name}</h3>
        <div className="flex items-center justify-center space-x-2 mb-4">
          {pkg.originalPrice && (
            <span className="text-lg text-gray-400 line-through work-sans-medium">
              ₱{pkg.originalPrice}
            </span>
          )}
          <div className="text-4xl font-bold text-accent work-sans-bold">
            ₱{pkg.price}
          </div>
        </div>
        <p className="text-gray-300 inter-regular">{pkg.description}</p>
      </div>
      
      {/* Services List */}
      <ul className="space-y-3 mb-8">
        {pkg.services.slice(0, 6).map((service, serviceIndex) => (
          <li key={serviceIndex} className="flex items-start inter-regular">
            <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {service}
          </li>
        ))}
        {pkg.services.length > 6 && (
          <li className="text-accent inter-regular">
            +{pkg.services.length - 6} more services
          </li>
        )}
      </ul>
      
      {/* Action Buttons */}
      <div className="space-y-3">
        <Link
          to={`/packages/${pkg.id}`}
          className="w-full bg-accent text-primary py-3 rounded-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 pulse-animation inter-bold text-center block"
        >
          View Full Package
        </Link>
        <button className="w-full border-2 border-accent text-accent py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition-all duration-300 inter-bold">
          Choose Package
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;