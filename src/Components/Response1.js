// components/RFQForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../Images/Image.png'
import {MessageSquare,ChevronLeft, Bell  } from 'lucide-react';

const Response1 = () => {
      const [currentStep, setCurrentStep] = useState(1);    
  const [items, setItems] = useState([
    {
      item: 'Oxygen Concentrator',
      variant: 'Blue',
      quantity: 100,
      unit: 'Pack',
      price: 12.00,
      delivery: '2023-12-02',
      amount: 1200.00
    }
  ]);

  const steps = [
    { number: 1, title: 'Request Information', description: 'Provide details about the RFQ' },
    { number: 2, title: 'Terms and Attachments', description: 'Payment and delivery terms' },
    { number: 3, title: 'Review', description: 'Confirm all information provided' }
  ];

  const handleContinue = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="ml-[350px] min-h-screen ">
    {/* Header */}
    <div className="bg-white p-4 flex items-center justify-between shadow">
      <div className="flex items-center">
        <ChevronLeft className="text-gray-500" />
        <span className="ml-2">Back</span>
      </div>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search here..."
          className="px-4 py-2 border rounded-lg mr-4"
        />
        <Bell className="text-gray-500 mr-4" />
        <MessageSquare className="text-gray-500 mr-4" />
        <img src={Image1} alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </div> 
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-3  ml-6">
          <Link to="/procurement/quotes" className=' text-blue-600 '>Quotes</Link>
          <span>/</span>
          <span>Quote Response</span>
        </div>
      </div>

      <div className="flex items-center mt-6 space-x-8 mb-6 border rounded-lg p-4 ml-6">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.number === currentStep 
                          ? 'bg-blue-600 text-white'
                          : step.number < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step.number}
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">{step.title}</div>
                        <div className="text-sm text-gray-500">{step.description}</div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`h-1 w-24 ${
                        step.number < currentStep ? 'bg-green-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Request for Quote</h2>
        <p className="text-sm text-gray-500 mb-6">Fill out these details to send the RFQ</p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">RFQ No</label>
            <input
              type="text"
              value="RFQ-10234"
              disabled
              className="w-full p-2 border rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value="Request for Equipments"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <div className="relative">
              <select className="w-full p-2 border rounded-md appearance-none">
                <option>Maternity</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected delivery date</label>
            <input
              type="date"
              value="2024-12-02"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Add Items</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-2">Items</th>
                  <th className="pb-2">Variant</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Expected delivery date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2">
                      <select className="w-full p-2 border rounded-md">
                        <option>{item.item}</option>
                      </select>
                    </td>
                    <td className="py-2">
                      <select className="w-full p-2 border rounded-md">
                        <option>{item.variant}</option>
                      </select>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={item.quantity}
                          className="w-20 p-2 border rounded-md"
                        />
                        <span className="text-gray-600">{item.unit}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center space-x-1">
                        <span>$</span>
                        <input
                          type="number"
                          value={item.price}
                          className="w-24 p-2 border rounded-md"
                        />
                      </div>
                    </td>
                    <td className="py-2">
                      <input
                        type="date"
                        value={item.delivery}
                        className="w-full p-2 border rounded-md"
                      />
                    </td>
                    <td className="py-2">
                      <div className="flex items-center space-x-1">
                        <span>$</span>
                        <span>{item.amount.toFixed(2)}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
          <textarea
            className="w-full p-2 border rounded-md h-24"
            placeholder="Enter note here"
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Cancel
          </button>
          <button className="px-4 py-2 text-blue-600 hover:text-blue-800">
            Save as draft
          </button>
          <Link
            to="/quote-response"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Response1;