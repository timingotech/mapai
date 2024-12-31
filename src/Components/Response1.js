// components/RFQForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../Images/Image.png'
import {MessageSquare,ChevronLeft, ChevronDown  } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faComments, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Search from '../Images/SearchIcon.png'
import Bell from '../Images/Bell.png'
import Message from '../Images/TopRightChat.png'
import CalendarIcon from '../Images/CalenderIcon.png'
import DollarIcon from '../Images/DollarIcon.png'
import DeleteIcon from '../Images/DeleteIcon.png'
import XIcon from '../Images/XIcon.png'

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
    },
    {
      item: 'Mechanical Ventilator',
      variant: 'Blue',
      quantity: 100,
      unit: 'Pack',
      price: 12.00,
      delivery: '2023-12-02',
      amount: 1200.00
    },
    {
      item: 'Patient Monitor',
      variant: 'Blue',
      quantity: 100,
      unit: 'Pack',
      price: 12.00,
      delivery: '2023-12-02',
      amount: 1200.00
    },
    {
      item: 'Mechanical Ventilator',
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
              <ChevronLeft className="text-[#667185]" />
              <span className="ml-2 text-[#667185]">Back</span>
            </div>
            <div className="flex items-center">
              <div className='flex items-center border rounded-lg px-2 py-2  mr-4 space-x-1'>
              <img src={Search} className="text-[#667185]" />
              <input
                type="search"
                placeholder="Search here..."
                className=""
              />
              </div>
              
              <img src={Bell} className="text-gray-500 mr-4" />
              <img src={Message} className="text-gray-500 mr-4 text-xl"   />
              <img src={Image1} alt="User" className="w-8 h-8 rounded-full" />
              <ChevronDown className='text-gray-500 mr-4'/>
            </div>
          </div>
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-3  mx-6">
          <Link to="/procurement/quotes" className=' text-blue-600 '>Quotes</Link>
          <span>/</span>
          <span>Quote Response</span>
        </div>
      </div>

      <div className="flex items-center mt-6 space-x-8 mb-6 border rounded-lg p-4 mx-6">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.number === currentStep 
                          ? 'bg-blue-600 text-white bold'
                          : step.number < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-white border-2 border-[#98A2B3] rounded-full text-[#98A2B3] font-bold'
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

      <div className="bg-white border rounded-lg p-4 mx-6">
        <h2 className="text-xl font-semibold mb-4">Request for Quote</h2>
        <p className="text-sm text-[#98A2B3] mb-6">Fill out these details to send the RFQ</p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold text-[#475367] mb-1">RFQ No</label>
            <input
              type="text"
              value="RFQ-10234"
              disabled
              className="w-full p-2 border rounded-md bg-[#F0F2F5] text-[#98A2B3]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#475367] mb-1">Title</label>
            <input
              type="text"
              value="Request for Equipments"
              className="w-full p-2 border rounded-md text-[#98A2B3] bg-[#F0F2F5]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#475367] mb-1">Department</label>
            <div className="relative flex border rounded-md items-center  bg-[#F0F2F5] p-2">
              <select className="w-full   appearance-none text-[#98A2B3] bg-[#F0F2F5]">
                <option className='text-[#98A2B3]'>Maternity</option>
              </select>
              <img src={XIcon} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#475367] mb-1">Expected delivery date</label>
            <div className='flex items-center p-2 border rounded-md bg-[#F0F2F5]'>
            <img src={CalendarIcon} />
            <input
              type=""
              value="2024-12-02"
              className="w-full text-[#98A2B3] ml-2 bg-[#F0F2F5]"
            />
            </div>
            <br/>
            <p className='text-[#667185] text-sm'>Calculated based on lead time and issue date</p>
          </div>
        </div>
<hr></hr>
        <div className="mb-6 mt-3">
          <h3 className="text-lg font-medium mb-4">Add Items</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-md font-medium bg-[#F7F9FC] text-gray-600 px-2 space-x-3">
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
                  <tr key={index} className=''>
                    <td className="py-2 ">
                      <select className="w-full p-2 border rounded-md bg-[#F0F2F5] text-[#98A2B3] ">
                        <option>{item.item}</option>
                      </select>
                    </td>
                    <td className="py-2">
                      <select className="w-full p-2 border rounded-md">
                        <option>{item.variant}</option>
                      </select>
                    </td>
                    <td className="">
                      <div className="flex items-center border rounded-md ">
                        <input
                          type="number"
                          value={item.quantity}
                          className="p-2 rounded-md w-[60px]"
                        />
                        <span className="text-[#667185] bg-[#F7F9FC] justify-end text-center p-1 w-[60px]">{item.unit}</span>
                      </div>
                    </td>
                    <td className="py-2">
                    <div className='flex items-center border rounded-md'>
                    <img src={DollarIcon} />
                        <input
                          type="number"
                          value={item.price}
                          className="w-24 p-2"
                        />
                      </div>
                    </td>
                    <td className="py-2">
                    <div className='flex items-center border rounded-md'>
                    <img src={CalendarIcon} />
                        <input
                        type=""
                        value={item.delivery}
                        className="w-full p-2 "
                      />
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center space-x-1 font-bold ">
                        <span>$</span>
                        <span>{item.amount.toFixed(2)}</span>
                      </div>
                    </td>
                    <td className="py-2">
                        <img src={DeleteIcon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      <hr></hr>
        <div className="mb-6 mt-9">
          <label className="block text-sm font-bold text-[#475367] mb-1">Note</label>
          <textarea
            className="w-[50%] p-2 border rounded-md h-24"
            placeholder="Enter note here"
          ></textarea>
          <p className='text-center ml-[-50px] text-gray-500'>0/200</p>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-4 py-3 text-gray-600 border border-gray-300 rounded-md font-bold">
            Cancel
          </button>
          <button className="px-8 py-3 text-[#175CFF] border-[#175CFF] border-2 rounded-md font-bold">
            Save as draft
          </button>
          <Link
            to="/quote-response"
            className="px-8 py-3 bg-[#175CFF] text-white rounded-md font-bold"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Response1;