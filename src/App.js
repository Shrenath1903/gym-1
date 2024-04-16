// import './styles/App.css';
// import 'tailwindcss/tailwind.css';

import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import DashboardLayout from "./components/Dash";
import UserInformation from "./components/user";
import Preview from "./components/Pr";
import React, { useState } from "react";

// import 'flowbite/datepicker.min.js';
// import '../node_modules/flowbite/dist/datepicker';


function App() {


  return (
    <div className="App">

    <Router className="bg-black">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Pass props to UserInformation */}
          <Route path="/" element={<UserInformation />} />
          <Route path="/user-information" element={<UserInformation />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
