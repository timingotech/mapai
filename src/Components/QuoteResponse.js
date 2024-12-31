import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, Upload, MessageSquare, ChevronDown, DownloadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image1 from '../Images/Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faComments, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Download from '../Images/Download.png'
import Search from '../Images/SearchIcon.png'
import Bell from '../Images/Bell.png'
import Message from '../Images/TopRightChat.png'

const QuoteResponse = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState({
    paymentTerms: 'Net 30',
    deliverySchedule: 'Immediate delivery',
    shippingMethod: 'Courier Services',
    leadTime: '10',
    attachments: []
  });

  const steps = [
    { number: 1, title: 'Request Information', description: 'Provide details about the RFQ' },
    { number: 2, title: 'Terms and Attachments', description: 'Payment and delivery terms' },
    { number: 3, title: 'Review', description: 'Confirm all information provided' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleContinue = () => {
    setCurrentStep(prev => prev + 2);
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
                              ? 'bg-[#175CFF] text-white font-bold'
                              : step.number < currentStep
                              ? 'bg-[#E7F6EC] text-[#0F973D] font-bold'
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

      {/* Form Content */}
      <div className=" border rounded-lg p-4 mx-6">
        <div className="bg-white ">
          <h2 className="text-xl font-semibold mb-6">Terms and Attachments</h2>
          <p className="text-gray-500 mb-8">Provide detailed information on payment and delivery terms</p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-4">Payment Terms</h3>
              <select
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Net 30">Net 30</option>
                <option value="Net 60">Net 60</option>
                <option value="Net 90">Net 90</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium mb-4">Delivery Schedule</h3>
              <select
                name="deliverySchedule"
                value={formData.deliverySchedule}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-[#101928]"
              >
                <option value="Immediate delivery">Immediate delivery</option>
                <option value="Next day">Next day</option>
                <option value="2-3 days">2-3 days</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-[#101928]">Shipping Method</h3>
              <select
                name="shippingMethod"
                value={formData.shippingMethod}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-[#101928]"
              >
                <option value="Courier Services">Courier Services</option>
                <option value="Standard Shipping">Standard Shipping</option>
                <option value="Express Shipping">Express Shipping</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium mb-4">Lead time</h3>
              <div className="flex border rounded-md items-center bg-white">
          <input
            type="number"
            className="w-full p-2 text-gray-500 bg-white border-none focus:outline-none"
            defaultValue="10"
          />
          <select className=" text-[#667185] bg-[#F7F9FC] border-none focus:outline-none p-[-2] mr-2 rounded-md">
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </div>
            </div>
          </div>
<hr className='mt-7'/>
          {/* Attachments Section */}
          <div className="mt-8">
            <h3 className="font-medium mb-4">Attachments</h3>
            <p className="text-sm text-gray-500 mb-4">Attach all necessary files or documents</p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-[50%] ">
              <div className="text-center">
                <img src={Download} className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <button className="text-[#175CFF] text-md ">Click to upload</button>
                  <span className="text-gray-500"> or drag and drop</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                <div className="flex items-center w-[50%] mx-auto my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>
                <button className=" px-8 py-3 text-[#175CFF] border-[#175CFF] border-2 rounded-md font-bold">
                    Browse Files
                  </button>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-7'/>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-3 py-4">
                  <button className="px-4 py-3 text-gray-600 border border-gray-300 rounded-md font-bold">
                    Cancel
                  </button>
                  <button className="px-8 py-3 text-[#175CFF] border-[#175CFF] border-2 rounded-md font-bold">
                    Save as draft
                  </button>
                  <Link
                    to="/response-final"
                    className="px-8 py-3 bg-[#175CFF] text-white rounded-md font-bold"
                  >
                    Continue
                  </Link>
                </div>
      </div>
    </div>
  );
};

export default QuoteResponse;