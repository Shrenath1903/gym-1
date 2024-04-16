import React, { useState } from "react";
import Sidebar from "./side";
import MainContent from "./MainComponent";
import { Routes, Route } from "react-router-dom";
import UserInformation from "./user";
import Preview from "./Pr"; // Import the Preview component
import '../styles/sty.css';

const DashboardLayout = () => {
  const [user, setUser] = useState({
    fullName: "shre",
    mobileNumber: "31",
    email: "d",
    dob: "1",
    address: "ss",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", user);
  };

  const updateForm = (name, value) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header className=" py-4 px-6">
        <h1 className="text-2xl font-semibold">Titan's Fitness Studio</h1>
      </header>
      <div className="flex">
        {/* Sidebar component */}
        <Sidebar toggleSidebar={toggleSidebar} id="default-sidebar" />
        <div className="flex-1 p-10">
          {/* Pass props to UserInformation */}
          <UserInformation user={user} handleSubmit={handleSubmit} updateForm={updateForm} />
          {/* Use Preview component */}
          <Preview user={user} />
          {/* <MainContent /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
