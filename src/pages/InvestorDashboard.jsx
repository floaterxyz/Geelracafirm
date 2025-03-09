
import React, { useState } from 'react';

// Mock data for demonstration
const mockProjects = [
  {
    id: 1,
    name: "EcoFarm Somalia",
    type: "Agriculture",
    requestedAmount: 50000,
    description: "Sustainable farming initiative in the Shabelle River Valley focused on drought-resistant crops.",
    submittedDate: "2023-02-15",
    status: "pending"
  },
  {
    id: 2,
    name: "Mogadishu Tech Hub",
    type: "Technology",
    requestedAmount: 75000,
    description: "Co-working space and incubator for tech startups in Mogadishu.",
    submittedDate: "2023-02-10",
    status: "pending"
  },
  {
    id: 3,
    name: "Somali Women's Textile Cooperative",
    type: "Manufacturing",
    requestedAmount: 35000,
    description: "Cooperative employing women to produce traditional textiles with modern designs for export.",
    submittedDate: "2023-02-01",
    status: "pending"
  },
  {
    id: 4,
    name: "Hargeisa Medical Training Center",
    type: "Education",
    requestedAmount: 60000,
    description: "Training facility for healthcare workers to improve medical services in rural areas.",
    submittedDate: "2023-01-25",
    status: "approved"
  },
  {
    id: 5,
    name: "Solar Power Initiative",
    type: "Energy",
    requestedAmount: 100000,
    description: "Installation of solar panels in 10 villages without electricity access.",
    submittedDate: "2023-01-20",
    status: "rejected"
  }
];

export default function InvestorDashboard() {
  const [projects, setProjects] = useState(mockProjects);
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = projects.filter(project => 
    activeTab === 'all' || project.status === activeTab
  );
  
  const handleVote = (projectId, vote) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, status: vote } 
        : project
    ));
    setSelectedProject(null);
  };

  return (
    <div className="section-container">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Investor Dashboard</h1>
        <p className="text-gray-600">
          Review and vote on funding applications. Your input helps determine which projects receive funding.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            
            <div className="flex border-b mb-4">
              <button 
                className={`px-4 py-2 ${activeTab === 'pending' ? 'border-b-2 border-geelraca-green text-geelraca-green' : 'text-gray-500'}`}
                onClick={() => setActiveTab('pending')}
              >
                Pending
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'approved' ? 'border-b-2 border-geelraca-green text-geelraca-green' : 'text-gray-500'}`}
                onClick={() => setActiveTab('approved')}
              >
                Approved
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'rejected' ? 'border-b-2 border-geelraca-green text-geelraca-green' : 'text-gray-500'}`}
                onClick={() => setActiveTab('rejected')}
              >
                Rejected
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'all' ? 'border-b-2 border-geelraca-green text-geelraca-green' : 'text-gray-500'}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
            </div>
            
            <div className="space-y-2">
              {filteredProjects.length === 0 ? (
                <p className="text-gray-500 py-4 text-center">No projects found</p>
              ) : (
                filteredProjects.map(project => (
                  <div 
                    key={project.id}
                    className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedProject?.id === project.id ? 'border-geelraca-green bg-green-50' : ''}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                        <p className="text-sm text-gray-600">{project.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${project.requestedAmount.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">{project.submittedDate}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        project.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          {selectedProject ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
                <div className="text-right">
                  <p className="text-xl font-bold">${selectedProject.requestedAmount.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Submitted: {selectedProject.submittedDate}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-2"><span className="font-semibold">Type:</span> {selectedProject.type}</p>
                <p className="text-gray-700 mb-4"><span className="font-semibold">Status:</span> 
                  <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                    selectedProject.status === 'approved' ? 'bg-green-100 text-green-800' : 
                    selectedProject.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                  </span>
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Project Description</h3>
                  <p className="text-gray-700">{selectedProject.description}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Business Plan & Financials</h3>
                  <div className="border p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-600">View attached documents:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm text-geelraca-green hover:underline cursor-pointer">Business_Plan.pdf</li>
                      <li className="text-sm text-geelraca-green hover:underline cursor-pointer">Financial_Projections.xlsx</li>
                      <li className="text-sm text-geelraca-green hover:underline cursor-pointer">Market_Analysis.pdf</li>
                    </ul>
                  </div>
                </div>
                
                {selectedProject.status === 'pending' && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Cast Your Vote</h3>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleVote(selectedProject.id, 'approved')}
                        className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Approve Funding
                      </button>
                      <button 
                        onClick={() => handleVote(selectedProject.id, 'rejected')}
                        className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Reject Funding
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Select a project to view details</p>
                <svg className="w-12 h-12 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
