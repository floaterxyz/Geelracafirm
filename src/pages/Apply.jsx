
import React, { useState } from 'react';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'startup',
    fundingAmount: '',
    fundingPurpose: '',
    businessPlan: null,
    additionalDocuments: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Your application has been submitted. We will contact you soon!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: 'startup',
      fundingAmount: '',
      fundingPurpose: '',
      businessPlan: null,
      additionalDocuments: null
    });
  };

  return (
    <div className="section-container max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Apply for Funding</h1>
        <p className="text-gray-600">
          Complete the form below to apply for a grant, loan, or investment from Geelraca Firm.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-geelraca-green mb-4 border-b pb-2">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-geelraca-green mb-4 border-b pb-2">Business Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="businessName">Business/Project Name *</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="businessType">Business Type *</label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              >
                <option value="startup">Startup</option>
                <option value="existing">Existing Business</option>
                <option value="expansion">Business Expansion</option>
                <option value="education">Educational Project</option>
                <option value="nonprofit">Non-Profit Initiative</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="fundingAmount">Requested Funding Amount (USD) *</label>
              <input
                type="number"
                id="fundingAmount"
                name="fundingAmount"
                value={formData.fundingAmount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 mb-2" htmlFor="fundingPurpose">Purpose of Funding *</label>
          <textarea
            id="fundingPurpose"
            name="fundingPurpose"
            value={formData.fundingPurpose}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
            required
            placeholder="Describe how you plan to use the funds..."
          ></textarea>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-geelraca-green mb-4 border-b pb-2">Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="businessPlan">Business Plan/Proposal *</label>
              <input
                type="file"
                id="businessPlan"
                name="businessPlan"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Upload a PDF file (Max: 10MB)</p>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="additionalDocuments">Additional Documents</label>
              <input
                type="file"
                id="additionalDocuments"
                name="additionalDocuments"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
              />
              <p className="text-xs text-gray-500 mt-1">Upload a PDF file (Max: 10MB)</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-geelraca-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
