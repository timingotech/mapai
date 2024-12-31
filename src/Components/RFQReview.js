import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronLeft, X, Check, FileText, Edit2, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faHome, faBuilding, faSpinner, faComments,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../Images/Image.png'
import Misc from '../Images/Misc icon.png'
import { useNavigate } from 'react-router-dom';
import Search from '../Images/SearchIcon.png'
import Bell from '../Images/Bell.png'
import Message from '../Images/TopRightChat.png'
import Signdoc from '../Images/Sign-doc.png'
import DeleteIcon from '../Images/DeleteIcon.png'
import CheckIcon from '../Images/CheckIcon.png'
import SpinnerBar from '../Images/SpinnerBar.png'

const TermsAndAttachments = ({ isOpen, onToggle }) => {
  return (
    <div className="mt-8 mx-6">
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
            <img 
              src={SpinnerBar} 
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
          <div className="bg-white rounded-lg p-6 w-[600px]">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">Confirmation</h2>
              
            </div>
            <p className="text-[#475367] font-medium text-sm mb-6">
            You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-[#344054] border rounded-md font-bold"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-[#175CFF] text-white rounded  font-bold"
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
              <img src={CheckIcon} className="check-icon" />
            </div>
            <span className="toast-message font-bold text-[#101928]">RFQ ID sent successfully!</span>
          </div>
          <button className="close-button" onClick={handleClose}>
            <X size={16} />
          </button>
        </div>
      </div>
    );
  };

const RFQReview = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);
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
    const [currentStep, setCurrentStep] = useState(3);    
  
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
    navigate('/procurement/quotes');
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
                <span>Request for Quote</span>
              </div>
            </div>
      
            <div className="flex items-center mt-6 space-x-[200px] mb-6 border rounded-lg p-4 mx-6">
                      {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step.number === currentStep 
                                ? 'bg-[#175CFF] text-white font-bold'
                                : step.number < currentStep
                                ? 'bg-[#E7F6EC] text-[#0F973D] font-bold'
                                : 'bg-gray-200 text-gray-500'
                            }`}>
                              {step.number}
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{step.title}</div>
                              <div className="text-sm text-gray-500">{step.description}</div>
                            </div>
                          </div>
                          
                        </React.Fragment>
                      ))}
                    </div>

      {/* Main Content */}
      <div className="bg-white ">
        {/* Request Information Section */}
        <div className="flex justify-between mb-8 border rounded-lg p-4 mx-6">
                   <div className="space-y-6">
                    <div className='flex items-center justify-between'>
                    <h2 className="text-lg font-semibold ">Quote Information</h2> 
                    </div>
                     <div className=" space-y-4 ">
                       <div className='flex space-x-[256px]'>
                       <div className="text-md text-[#555E68] font-medium">Title</div>
                  <div  className='text-md text-[#101928] font-medium '>{quoteData.title}</div>
                </div>
                <div className='flex space-x-[230px]'>
                  <div className="text-md text-[#555E68] font-medium">RFQ No</div>
                  <div  className='text-md text-[#101928] font-medium'>{quoteData.rfqNo}</div>
                </div>
                <div className='flex space-x-[220px]'>
                  <div className="text-sm text-[#555E68] font-medium">Requestor</div>
                  <div className="flex items-center text-[#344054]">
                    <span className="bg-[#FFECE5] text-[#101928] font-bold rounded-full px-2 py-1 text-sm mr-2">
                      {quoteData.requester.initials}  
                    </span>

                    {quoteData.requester.name} 
                    <span className='text-[#98A2B3] font-medium ml-1'>• {quoteData.requester.role} </span>
                  </div>   
                       </div>
                       
                  <div className='flex space-x-[200px]'>
                  <div className="text-md text-[#555E68] font-medium">Department</div>
                  <div className='text-md text-[#101928] font-medium' >{quoteData.department}</div>
                </div>
                       <div className="flex mb-2 space-x-[120px]">
                       <div className='text-md text-[#555E68] font-medium'>Expected delivery date: </div>
                       <div className='text-md text-[#101928] font-medium ml-[-10px]'>{quoteData.expectedDelivery}</div> 
                        </div>
                     </div>
                   </div>
                   <FontAwesomeIcon className='text-gray-500 text-lg cursor-pointer' icon={faPenToSquare} />
                 </div>

        {/* Items Table */}
          <div className='mb-8 p-6  rounded-lg border mx-6'>
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
        
                    <div className="flex justify-end mt-6 space-x-[70px] mr-[180px]">
                      <div>
                        <div className="text-md text-[#475367] font-normal">Sub Total</div>
                        <div className="text-md text-[#475367] font-normal">Total</div>
                      </div>
                      <div>
                        <div className="text-md text-[#475367] font-normal">$8,000.00</div>
                        <div className="text-md text-[#475367] font-bold">$8,750.00</div>
                      </div>
                    </div>
                  </div>
        
                  {/* Terms and Attachments */}
                  <TermsAndAttachments 
                isOpen={isTermsOpen}
                onToggle={() => setIsTermsOpen(!isTermsOpen)}
                />

         {/* Action buttons */}
         
         <div className="flex justify-end space-x-4 my-6 mr-6">
         <button 
          onClick={() => navigate('/procurement/quotes')}
          className="px-4 py-3 text-gray-600 border border-gray-300 rounded-md font-bold"
                  >
          Cancel
        </button>
        <button 
          onClick={() => navigate('/quotes/draft')}
          className="px-8 py-3 text-[#175CFF] border-[#175CFF] border-2 rounded-md font-bold"
        >
          Save as draft
        </button>
        <button 
          onClick={handleSubmitClick}
          className="px-8 py-3 bg-[#175CFF] text-white rounded-md font-bold"
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