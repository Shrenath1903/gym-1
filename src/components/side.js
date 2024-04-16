import React from "react";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="sidebar bg-white text-black w-64 min-h-screen p-4">
      <ul>
        <li className="hover:text-white py-2 hover:bg-70AB0E-800 hover:rounded-lg">
          <a href="#" className="block flex items-center">
            <i className="fas fa-chevron-right mr-2 text-xs"></i>
            <span> New Customer Registration</span>
          </a>
        </li>

        <li className="hover:text-white py-2 hover:bg-70AB0E-800 hover:rounded-lg">
          <a href="#" className="block flex items-center">
            <i className="fas fa-chevron-right mr-2 text-xs"></i>
            <span> Search Existing Coustomer</span>
          </a>
        </li>

        <li className="hover:text-white py-2 hover:bg-70AB0E-800 hover:rounded-lg">
          <a href="#" className="block flex items-center">
            <i className="fas fa-chevron-right mr-2 text-xs"></i>
            <span> Coustomer Payment </span>
          </a>
        </li>

        <li className="hover:text-white py-2 hover:bg-70AB0E-800 hover:rounded-lg">
          <a href="#" className="block flex items-center">
            <i className="fas fa-chevron-right mr-2 text-xs"></i>
            <span> Gym Attendance</span>
          </a>
        </li>

        <li className="hover:text-white py-2 hover:bg-70AB0E-800 hover:rounded-lg">
          <a href="#" className="block flex items-center">
            <i className="fas fa-chevron-right mr-2 text-xs"></i>
            <span> Coustomer Punch Time</span>
          </a>
        </li>
        {/* Add other sidebar menu items here */}

      </ul>

      {/* Sidebar menu icon for mobile view */}
      <div className="sm:hidden"> {/* Hide on larger screens */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={toggleSidebar}
          id="default-sidebar"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
