import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../../../components/provider/Sidebar';
import useGetServices from '../../../hooks/useGetServices';
import toast from 'react-hot-toast';
import DarkMode from '../../../components/provider/DarkMode.jsx';

const ProviderEditService = () => {
  const navigate = useNavigate();
  const { data: services, loading, error } = useGetServices();
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceClick = (serviceId) => {
    setSelectedServices(prevServicesId => prevServicesId.includes(serviceId)
      ? prevServicesId.filter(_id => _id !== serviceId)
      : [...prevServicesId, serviceId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/v1/providers/me/updateService', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ services: selectedServices })
      });
      if (!response.ok) {
        throw new Error('Failed to update services');
      }
      toast.success('Services updated successfully!');
      navigate('/providers/dashboard');
    } catch (error) {
      toast.error('Error updating services: ' + error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading services: {error.message}</div>;

  return (
    <>
      <div className="flex bg-gray-100 dark:bg-gray-800">
        <Sidebar />
        <div className="p-4 flex-1">
        <DarkMode />
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-gray-700 dark:to-gray-900">    
          <h2 className="text-3xl font-bold mb-4 text-grey-200 dark:text-white">Edit Services</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-screen-lg p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map(service => (
                <div
                  key={service._id}
                  className={`rounded-lg dark:bg-gray-800 bg-gray-100 hover:scale-105  overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${selectedServices.includes(service._id) ? 'scale-105 shadow-2xl bg-green-100 dark:bg-green-800' : ''}`}
                  onClick={() => handleServiceClick(service._id)}
                >
                  <div
                    className="bg-cover bg-center h-48"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className={`p-4 ${selectedServices.includes(service._id) ? 'text-green-700 dark:text-green-300' : ''}`}>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{service.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                    <p className="text-gray-700 dark:text-gray-300 font-bold">{service.priceRange}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Add Services
              </button>
            </div>
          </form>
        </div>        
      </div>
      </div>
    </>
  );
};

export default ProviderEditService;
