import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronLeft,  Edit2, Trash2, ChevronUp, FileText, ChevronDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faPenToSquare, faPipe } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../Images/Image.png'
import Misc from '../Images/Misc icon.png'
import Search from '../Images/SearchIcon.png'
import Bell from '../Images/Bell.png'
import Message from '../Images/TopRightChat.png'
import Building from '../Images/Building-5.png'
import Signdoc from '../Images/Sign-doc.png'
import DeleteIcon from '../Images/DeleteIcon.png'
import Line from '../Images/Vector53.png'
const TermsAndAttachments = ({ isOpen, onToggle }) => {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Header section */}
        <button 
          onClick={onToggle}
          className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <img src={Signdoc} className="text-gray-600" size={20} />
            <div className='block'>
              <div className="font-bold text-[#1D2739] text-left text-xl">Terms and Attachments</div>
              <p className='font-normal text-[#475367] text-left text-sm'>Review payment and delivery terms</p>
            </div>
          </div>
          <ChevronUp className={`transition-transform duration-200 text-[#98A2B3] ${!isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Expandable content */}
        {isOpen && (
          <div className="p-6 border-t border-gray-200">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Payment & Delivery</h3>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 ">
                  <FontAwesomeIcon icon={faPenToSquare} className='text-lg text-[#98A2B3]' />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <img src={DeleteIcon} size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center  mb-6 space-x-[150px]">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Payment Term</div>
                  <div className="font-medium">Net 30</div>
                </div>
                <div className='border-l-2 pl-4'>
                  <div className="text-sm text-gray-500 mb-1">Delivery Schedule</div>
                  <div className="font-medium">Immediate Delivery</div>
                </div>

                <div className='border-l-2 pl-4'>
                  <div className="text-sm text-gray-500 mb-1 ">Shipping method</div>
                  <div className="font-medium">Ground Shipping</div>
                </div>

                <div className='border-l-2 pl-4 '>
                  <div className="text-sm text-gray-500 mb-1">Lead time</div>
                  <div className="font-medium">30 days</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

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
        name: "Oxygen concentra...",
        variant: "Blue",
        quantity: "100 pieces",
        price: "$200.00",
        amount: "$2,000.0",
        deliveryDate: "2024-08-07"
      },
      {
        id: "28373",
        name: "Mechanical ventila...",
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
        name: "Mechanical ventila...",
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

  const [isTermsOpen, setIsTermsOpen] = useState(false);

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

      {/* Content */}
      <div className="">
        <div className="flex justify-between items-center mb-6 mx-6">
            <div>
            <h1 className="text-xl font-semibold">Quote details</h1>
            <div className="text-sm text-gray-500">Created on {quoteData.created}</div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
            <Link to='/procurement/quotes/quote-response1'>
            <button className="px-6 py-2 bg-[#175CFF] text-white rounded-lg">
                Respond
            </button>
            </Link>
            <button className="px-6 py-2 border border-red-500 text-white rounded-lg bg-red-500 ">
            <FontAwesomeIcon icon={faTimes } className='text-white text-lg mr-1 mt-1'/> Reject
            </button>
            
          </div>
          
        </div>
        {/* Quote Information */}
        <div className="bg-white rounded-lg  p-6">
          <div className="flex justify-between mb-8  p-6 rounded-lg border ">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Quote Information</h2>
              <div className=" space-y-4">
                <div className='flex space-x-[250px]'>
                  <div className="text-sm text-[#555E68] font-medium">Title</div>
                  <div>{quoteData.title}</div>
                </div>
                <div className='flex space-x-[230px]'>
                  <div className="text-sm text-[#555E68] font-medium">RFQ No</div>
                  <div>{quoteData.rfqNo}</div>
                </div>
                <div className='flex space-x-[215px]'>
                  <div className="text-sm text-[#555E68] font-medium">Requestor</div>
                  <div className="flex items-center">
                    <span className="bg-[#FFECE5] text-[#101928] font-bold rounded-full px-2 py-1 text-sm mr-2">
                      {quoteData.requester.initials}  
                    </span>
                    {quoteData.requester.name} 
                    <span className='text-[#98A2B3] font-medium ml-1'>• {quoteData.requester.role} </span>
                  </div>
                </div>
                <div className='flex space-x-[240px]'>
                  <div className="text-sm text-[#555E68] font-medium">Status</div>
                  <div className="bg-[#FFECE5] text-orange-500 rounded px-2 py-1 text-sm mr-2">{quoteData.status}</div>
                </div>
                <div className='flex space-x-[205px]'>
                  <div className="text-sm text-[#555E68] font-medium">Department</div>
                  <div>{quoteData.department}</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-[#344054] font-medium mb-2">Expected delivery date: {quoteData.expectedDelivery}</div>
              <div></div>
              <div className="mt-4 border rounded-lg px-5 text-left pr-52 py-3">
              <div className="text-sm text-gray-500 mb-2 flex"><img src={Building} /> Client</div>
                <div className='flex'>
                    <div>
                    <span className="bg-[#FFECE5] text-[#101928] font-semibold rounded-full px-2 py-1 text-[10px] mr-2">
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
          <div className='mb-8 p-6  rounded-lg border '>
            <h3 className="font-semibold mb-4">Item(s)</h3>
            <table className="w-full p-1  rounded-lg border  ">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-8 p-3">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left p-3 font-normal text-[#344054] ">Items</th>
                  <th className="text-left p-3 font-normal text-[#344054]">Variants</th>
                  <th className="text-left p-3 font-normal text-[#344054]">Quantity</th>
                  <th className="text-left p-3 font-normal text-[#344054]">Price</th>
                  <th className="text-left p-3 font-normal text-[#344054]">Amount</th>
                  <th className="text-left p-3 font-normal text-[#344054]">Expected Delivery Date</th>
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
                          <div className='text-[#101928] font-medium'>{item.name}</div>
                          <div className="text-sm font-normal text-[#475367]">#{item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-[#344054] font-normal">{item.variant}</td>
                    <td className="p-3 text-[#344054] font-normal">{item.quantity}</td>
                    <td className="p-3 text-[#344054] font-normal">{item.price}</td>
                    <td className="p-3 text-[#344054] font-normal">{item.amount}</td>
                    <td className="p-3 text-[#344054] font-normal">{item.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-6 space-x-[70px] mr-[168px]">
              <div className=' ml-[-200px]'>
                <div className="text-md text-[#475367] font-normal ">Sub Total</div>
                <div className="text-md text-[#475367] font-normal">Total</div>
              </div>
              <div>
                <div className="text-md text-[#475367] font-normal ">$8,000.00</div>
                <div className="text-md text-[#475367] font-bold">$8,750.00</div>
              </div>
            </div>
          </div>

           {/* Terms and Attachments */}
           <TermsAndAttachments 
                isOpen={isTermsOpen}
                onToggle={() => setIsTermsOpen(!isTermsOpen)}
                />          
        </div>
      </div>
    </div>
  );
};

export default QuoteDetails;