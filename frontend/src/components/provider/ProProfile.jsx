import React from 'react';

const ProviderProfile = ({ name, location, contactNo, email }) => {
    const provider = {
        name: "Harsh Patel",
        location: "johnpur , Nainital , Uttrakhand , India",
        contactNo: "+91 1234567890",
        email: "harsh@example.com"
      };
        const { name, location, contactNo, email } = provider;
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}>
        <div className="flex justify-end">
          <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
        <p className="mt-2 text-gray-600">{location}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M2.01 6.53c-.13.38-.12.81.04 1.17.73 1.67 1.75 3.24 2.92 4.72 1.15 1.46 2.43 2.8 3.85 3.97l-.01-.01.02.02c1.52 1.33 3.23 2.44 5.04 3.24 1.43.63 2.95 1.11 4.54 1.34.32.05.65-.02.93-.18.3-.16.55-.4.73-.7l1.15-2c.27-.46.32-1.03.15-1.55-.25-.72-.98-1.19-1.76-1.15l-2.9.17c-2.6-.02-5.07-1.02-7.02-2.92-1.92-1.87-3.07-4.36-3.25-7.07-.05-.78-.43-1.51-1.15-1.76-.52-.17-1.09-.12-1.55.15l-2 1.15c-.3.17-.54.43-.7.73z" />
          </svg>
          <h1 className="px-2 text-sm">{contactNo}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <h1 className="px-2 text-sm">{email}</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
