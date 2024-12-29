import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  DollarSign,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  LogOut,
  Banknote,
  MessageCircleMore 
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Images/Logo.png';
import ImageOut from '../Images/ImageOut.png';

const Navbar = () => {
  const location = useLocation();

  // State to manage which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  const navItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, name: 'Dashboard' },
    { path: '/inventory', icon: <Package size={20} />, name: 'Inventory' },
    {
      path: '/procurement',
      icon: <ShoppingCart size={20} />,
      name: 'Procurement',
      subMenu: ['Quotes', 'Orders']
    },
    { path: '/finance', icon: <Banknote size={20} />, name: 'Finance' },
    { path: '/communication', icon: <MessageCircleMore  size={20} />, name: 'Communication', notification: 10 },
    { path: '/calendar', icon: <Calendar size={20} />, name: 'Calendar', notification: 10 },
    { path: '/contracts', icon: <FileText size={20} />, name: 'Contracts' }
  ];

  const bottomNavItems = [
    { path: '/support', icon: <HelpCircle size={20} />, name: 'Support' },
    { path: '/settings', icon: <Settings size={20} />, name: 'Settings' }
  ];

  const toggleSubMenu = (path) => {
    setOpenMenu(openMenu === path ? null : path); // Toggle submenu open/close
  };

  return (
    <div className="w-[350px] h-screen bg-gray-100 flex flex-col border-r fixed px-6">
      {/* Logo Section */}
      <div className="p-6 px-7">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.path}>
            <div
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer 
                ${location.pathname.includes(item.path) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => (item.subMenu ? toggleSubMenu(item.path) : null)}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {item.subMenu && (
                <div>
                  {openMenu === item.path ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              )}
              {item.notification && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.notification}
                </span>
              )}
            </div>
            {/* Submenu */}
            {item.subMenu && openMenu === item.path && (
              <div className="ml-11 space-y-1">
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem}
                    to={`${item.path}/${subItem.toLowerCase()}`}
                    className={`block p-2 text-sm rounded-lg 
                      ${location.pathname.includes(subItem.toLowerCase())
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {subItem}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 space-y-1">
        {bottomNavItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <img src={ImageOut} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium">Mark Benson</div>
              <div className="text-xs text-gray-500">markbenson@core...</div>
            </div>
          </div>
          <LogOut size={18} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
