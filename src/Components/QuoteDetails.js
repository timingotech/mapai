import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Bell, MessageSquare, ChevronLeft } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../Images/Image.png'
import Misc from '../Images/Misc icon.png'


const QuoteDetails = () => 
  
  {
  const quoteData = {
    created: "Wed, 12th June 2022, 08:00am",
    title: "Request for Equipments",
    rfqNo: "RQ #01234",
    requester: {
      initials: "JD",
      name: "Jane Doe",
      role: "Head Nurse, Paediatrics"
    },
    status: "Awaiting",
    department: "Maternity",
    expectedDelivery: "2024-12-02",
    client: {
      name: "Westend Hospital",
      type: "Clear smart"
    },
    items: [
      {
        id: "28373",
        name: "Oxygen concentrator",
        variant: "Blue",
        quantity: "100 pieces",
        price: "$200.00",
        amount: "$2,000.0",
        deliveryDate: "2024-08-07"
      },
      {
        id: "28373",
        name: "Mechanical ventilator",
        variant: "NIL",
        quantity: "45 Kg",
        price: "$350.00",
        amount: "$2,500.00",
        deliveryDate: "2024-08-07"
      },
      {
        id: "28373",
        name: "Patient Monitor",
        variant: "Blue",
        quantity: "30 Units",
        price: "$300.00",
        amount: "$1,500.00",
        deliveryDate: "2024-08-07"
      },
      {
        id: "28373",
        name: "Mechanical ventilator",
        variant: "Blue",
        quantity: "35 Units",
        price: "$200.00",
        amount: "$1,500.00",
        deliveryDate: "2024-08-07"
      }
    ]
  };
    const [currentStep, setCurrentStep] = useState(1);    

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

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
            <div>
            <h1 className="text-xl font-semibold">Quote details</h1>
            <div className="text-sm text-gray-500">Created on {quoteData.created}</div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
            <Link to='/quote-response1'>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Respond
            </button>
            </Link>
            <button className="px-6 py-2 border border-red-500 text-white rounded-lg bg-red-500 ">
            <FontAwesomeIcon icon={faTimes } className='text-white text-lg mr-1 mt-1'/> Reject
            </button>
            
          </div>
          
        </div>

        <div className="bg-white rounded-lg  p-6">
          <div className="flex justify-between mb-8 shadow p-6 rounded-lg">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Quote Information</h2>
              <div className=" space-y-4">
                <div className='flex space-x-[250px]'>
                  <div className="text-sm text-gray-500">Title</div>
                  <div>{quoteData.title}</div>
                </div>
                <div className='flex space-x-[230px]'>
                  <div className="text-sm text-gray-500">RFQ No</div>
                  <div>{quoteData.rfqNo}</div>
                </div>
                <div className='flex space-x-[215px]'>
                  <div className="text-sm text-gray-500">Requestor</div>
                  <div className="flex items-center">
                    <span className="bg-[#FFECE5] text-black-500 rounded-full px-2 py-1 text-sm mr-2">
                      {quoteData.requester.initials}
                    </span>
                    {quoteData.requester.name} 
                    <span className='text-gray-400 ml-1'>• {quoteData.requester.role} </span>
                  </div>
                </div>
                <div className='flex space-x-[240px]'>
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="bg-[#FFECE5] text-orange-500 rounded px-2 py-1 text-sm mr-2">{quoteData.status}</div>
                </div>
                <div className='flex space-x-[205px]'>
                  <div className="text-sm text-gray-500">Department</div>
                  <div>{quoteData.department}</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-2">Expected delivery date: {quoteData.expectedDelivery}</div>
              <div></div>
              <div className="mt-4 border rounded-lg px-5 text-left pr-52 py-3">
              <div className="text-sm text-gray-500 mb-2"><FontAwesomeIcon icon={faBuilding} /> Client</div>
                <div className='flex'>
                    <div>
                    <span className="bg-[#FFECE5] text-black-500 rounded-full px-2 py-1 text-sm mr-2">
                    W                    </span>
                    </div>
                
                        <div>
                <div className="font-semibold">{quoteData.client.name}</div>
                <div className="text-sm text-gray-500">{quoteData.client.type}</div>
                </div>
                </div>
                
                
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className='mb-8 shadow p-6 rounded-lg'>
            <h3 className="font-semibold mb-4">Item(s)</h3>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-8 p-3">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left p-3">Items</th>
                  <th className="text-left p-3">Variants</th>
                  <th className="text-left p-3">Quantity</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Amount</th>
                  <th className="text-left p-3">Expected Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                {quoteData.items.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <img src={Misc} alt={item.name} className="w-10 h-10 rounded mr-2" />
                        <div>
                          <div>{item.name}</div>
                          <div className="text-sm text-gray-500">#{item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{item.variant}</td>
                    <td className="p-3">{item.quantity}</td>
                    <td className="p-3">{item.price}</td>
                    <td className="p-3">{item.amount}</td>
                    <td className="p-3">{item.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-6 space-x-8">
              <div>
                <div className="text-sm text-gray-500">Sub Total</div>
                <div className="font-semibold">$8,000.00</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total</div>
                <div className="font-semibold">$8,750.00</div>
              </div>
            </div>
          </div>

          {/* Terms and Attachments */}
          <div className="mt-8">
            <button className="w-full text-left p-4 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-4">📎</div>
                <div>
                  <div className="font-semibold">Terms and Attachments</div>
                  <div className="text-sm text-gray-500">Review payment and delivery terms</div>
                </div>
              </div>
              <ChevronLeft className="transform rotate-270" />
            </button>
          </div>

          {/* Action Buttons */}
          
        </div>
      </div>
    </div>
  );
};

export default QuoteDetails;