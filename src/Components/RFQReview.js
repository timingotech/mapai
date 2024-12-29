import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Bell, MessageSquare, ChevronLeft, X, Check, FileText, Edit2, Trash2, ChevronUp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faHome, faBuilding, faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../Images/Image.png'
import Misc from '../Images/Misc icon.png'
import { useNavigate } from 'react-router-dom';

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
              <FileText className="text-gray-600" size={20} />
              <div>
                <div className="font-medium">Terms and Attachments</div>
              </div>
            </div>
            <ChevronUp className={`transition-transform duration-200 ${!isOpen ? 'rotate-180' : ''}`} />
          </button>
  
          {/* Expandable content */}
          {isOpen && (
            <div className="p-6 border-t border-gray-200">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Payment & Delivery</h3>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
  
                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Payment Term</div>
                    <div className="font-medium">Net 30</div>
                  </div>
  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Delivery Schedule</div>
                    <div className="font-medium">Immediate Delivery</div>
                  </div>
  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Shipping method</div>
                    <div className="font-medium">Ground Shipping</div>
                  </div>
  
                  <div>
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

const LoadingModal = ({ isOpen }) => {
    if (!isOpen) return null;
  
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 flex flex-col items-center">
            <FontAwesomeIcon 
              icon={faSpinner} 
              className="text-blue-600 text-3xl mb-4 animate-spin"
            />
            <p className="text-lg font-medium">Sending Quote...</p>
          </div>
        </div>
      </>
    );
  };
  
  const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;
  
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[480px]">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">Confirmation</h2>
              <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              You are about to submit this quote in response to RFQ #RQ 01234, this will immediately be 
              sent to the client "Westend Clear Hospital". Are you sure you want to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  const ToastNotification = ({ isOpen, onClose }) => {
    const [isExiting, setIsExiting] = useState(false);
  
    useEffect(() => {
      if (!isOpen) {
        setIsExiting(false);
      }
    }, [isOpen]);
  
    const handleClose = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        onClose();
      }, 200);
    };
  
    if (!isOpen && !isExiting) return null;
  
    return (
      <div className={`toast-notification ${isExiting ? 'slide-out' : 'slide-in'}`}>
        <div className="toast-content">
          <div className="toast-left">
            <div className="check-icon-container">
              <Check className="check-icon" />
            </div>
            <span className="toast-message">RFQ ID sent successfully!</span>
          </div>
          <button className="close-button" onClick={handleClose}>
            <X size={16} />
          </button>
        </div>
      </div>
    );
  };

const RFQReview = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(true);
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

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
  const handleSubmitClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmation(false);
    setShowLoading(true);

    try {
      // Simulate API call to submit quote
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowLoading(false);
      setShowSuccess(true);
    } catch (error) {
      setShowLoading(false);
      // Handle error case
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/quotes');
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

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow">
        {/* Request Information Section */}
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
                       
                       <div className='flex space-x-[205px]'>
                         <div className="text-sm text-gray-500">Department</div>
                         <div>{quoteData.department}</div>
                       </div>
                       <div className="flex mb-2 space-x-[135px]">
                       <div className='text-sm text-gray-500'>Expected delivery date: </div>
                       <div>{quoteData.expectedDelivery}</div> 
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
                  <TermsAndAttachments 
                isOpen={isTermsOpen}
                onToggle={() => setIsTermsOpen(!isTermsOpen)}
                />

         {/* Action buttons */}
         
      <div className="px-6 py-4 bg-gray-50 border-t rounded-b-lg flex justify-end space-x-4">
        <button 
          onClick={() => navigate('/procurement/quotes')}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button 
          onClick={() => navigate('/quotes/draft')}
          className="px-4 py-2 text-blue-600 hover:text-blue-800 border border-blue-600 rounded"
        >
          Save as draft
        </button>
        <button 
          onClick={handleSubmitClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
      </div>
      {/* Modals */}
      <ConfirmationModal
        isOpen={showConfirmation}
        onCancel={handleCancelConfirmation}
        onConfirm={handleConfirmSubmit}
      />
      <LoadingModal isOpen={showLoading} />
      <ToastNotification
        isOpen={showSuccess}
        onClose={handleSuccessClose}
      />
    </div>
  );
};

export default RFQReview;