import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-geelraca-green to-geelraca-blue">
        <div className="section-container">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Growth Through Strategic Funding
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Supporting businesses and education initiatives in Somalia with sustainable funding solutions
            </p>
            <Link to="/apply" className="inline-block bg-white text-geelraca-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Geelraca Firm</h2>
            <p className="text-gray-600 mb-6">
              We are dedicated to fostering economic growth and educational advancement in Somalia through strategic funding initiatives and support programs.
            </p>
            <Link to="/about" className="text-geelraca-green font-semibold hover:underline">
              Learn more about us →
            </Link>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-geelraca-green">500+</p>
                <p className="text-gray-600">Businesses Funded</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-geelraca-blue">1000+</p>
                <p className="text-gray-600">Students Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Funding',
                description: 'Supporting small and large businesses with flexible funding solutions'
              },
              {
                title: 'Education Funding',
                description: 'Providing scholarships and educational support for students'
              },
              {
                title: 'Advisory Services',
                description: 'Expert guidance for business growth and development'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-geelraca-green font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}