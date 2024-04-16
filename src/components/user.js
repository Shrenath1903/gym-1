// import React, { useState } from "react";
import styled from "styled-components";

import React, { useState, useEffect } from "react";
// import 'flowbite/dist/datepicker';

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const UserInformationForm = styled.form`
  max-width: 30rem;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

// const Input = styled.input`
//   margin-bottom: 1rem;
//   padding: 0.625rem;
// `;

const Select = styled.select``;

const UserInformation = () => {
  const [fullName, setFullName] = useState("");
 
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true); // State to manage email validation

  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };



  const handleMobileNumberChange = (event) => {
    const input = event.target.value;
  
    // Validate input: allow only numeric characters
    const validatedInput = input.replace(/\D/g, '');
    setMobileNumber(validatedInput);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Check if the email is valid
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setValidEmail(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", {
      fullName,
      mobileNumber,
      email,
      dob,
      address,
    });
  };

  return (
    <UserInformationForm className="" onSubmit={handleSubmit}>
<Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          
          {/* Name */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="Full name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

      {/* Mobile Number */}
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Mobile Number
      </Typography>
      <Input
        size="lg"
        type="tel" // Use "tel" type for mobile numbers
        placeholder="Mobile number"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
      />

{/* Email */}

      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Your Email
      </Typography>
      <Input
        size="lg"
        type="email"
        placeholder="name@mail.com"
        className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
          validEmail ? '' : 'border-red-500' // Apply red border if email is invalid
        }`}
        value={email}
        onChange={handleEmailChange}
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
      />
      {!validEmail && (
        <Typography color="red" className="text-sm mt-1">
          Please enter a valid email address.
        </Typography>
      )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

{/* DOB */}

<Typography variant="h6" color="blue-gray" className="-mb-3 mt-6">
        Date of Birth
      </Typography>
      <Input
        size="lg"
        type="date" // Use "date" type for date of birth
        placeholder="Date of Birth"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        value={dob}
        onChange={handleDobChange}
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
      />
{/* Address Box */}
<Typography variant="h6" color="blue-gray" className="-mb-3 ">
        Address
      </Typography>
      <Input
        // size="3xl"
        
        placeholder="Enter your address"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-32"
        value={address}
        onChange={handleAddressChange}
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
      />
        </div>
      </form>
    </Card>
    </UserInformationForm>
  );
    
};

export default UserInformation;
