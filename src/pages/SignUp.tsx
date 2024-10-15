import React, { useState } from "react";
import axios from 'axios';
import BackBtn from "../assets/backBtn.png";
import SignupBtn from "../../src/assets/signupBtn.png"

const SignUp = () => {
  
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameExists, setUsernameExists] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e: any) => {
    setNumber(e.target.value);
  };
  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };
  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };
  const handleChange = (event: any) => {
    setSelectedUser(event.target.value); // Update the selected value
  };

  const handleChangeDivision = (event: any) => {
    setSelectedDivision(event.target.value); // Update the selected value
  };


  
  // Function to handle API call
  async function AddUser() {
    try {

      validate();
        
      let response;

      // Prepare data to send to the backend
      const userData = {
        userType: selectedUser,
        name: name,
        address : address,
        phoneNumber : number,
        city : city,
        divisionName : selectedDivision,
        passWord : password,
        userName : username,
      };
  
      // Clear any errors
      setError('');
      
      response = await axios.post('http://localhost:8080/farmer/add-farmer', userData );

      
      

    } catch (err) {
      // Handle error
      console.error('Error adding user:', err);
      setError('Failed to add user');
    }
  }

  async function validate() {
    try {
      // Make the GET request to check if the user exists
      const response = await axios.get(`http://localhost:8080/farmer/is-exist-user/${username}`);
      
      // Assuming the API returns a boolean value indicating username existence
      setUsernameExists(response.data);

      // If usernameExists is true, show a message to the user
      if (response.data === true) {
        alert('Username already exists');
      } else {
        alert('Error');
      }

      if(password === confirmPassword ){
        
        if(password.length < 8){
          alert("Pasword must be atleast 8 Characters");
        }else{
          
        }
        
      }else{
        alert("Password Should Be Same")
      }

    } catch (err) {
      // Handle error
      console.error('Error checking username:', err);
      setError('Failed to check username');
    }
  }


  

  return (
    <form className="grid grid-cols-2 bg-gradient-to-b from-[#2AF35F] via-[#49A343] to-[#ADDA3C] h-screen">
      <div className="flex flex-col px-[15%]">
        <button>
          <img
            src={BackBtn}
            alt=""
            className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
          />
        </button>

        <div className="flex flex-col items-start ml-[5%] mt-[5%]">
          {/* Dropdown Selector */}
          <label htmlFor="userType" className="mb-2 text-[25px] font-semibold">
            Select User Type:
          </label>
          <select
            id="userType"
            className="border border-gray-300 rounded-md px-[20px] py-[5px] text-[25px] rounded-r-xl rounded-l-xl"
            value={selectedUser}
            onChange={handleChange}
            required
          >
            <option value="" className="text-[15px]" disabled>
              Select an option
            </option>
            <option value="farmer" className="text-[15px]">
              Farmer
            </option>
            <option value="middleman" className="text-[15px]">
              Middle Man
            </option>
            <option value="miller" className="text-[15px]">
              Miller
            </option>
          </select>
        </div>
        <div className="flex flex-col w-[100%] ml-[5%] mt-[10%] gap-7 mb-[2%]">
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Mobile Number"
            value={number}
            onChange={handleNumberChange}
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Address"
            value={address}
            onChange={handleAddressChange}
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" City"
            value={city}
            onChange={handleCityChange}
            required
          />
          <div className="flex flex-col items-start ml-[1%] mt-[1%]">
            {/* Dropdown Selector */}
            <label
              htmlFor="userType"
              className="mb-2 text-[25px] font-semibold"
            >
              Select Division:
            </label>
            <select
              id="userType"
              className="border border-gray-300 rounded-md px-[20px] py-[5px] text-[25px] rounded-r-xl rounded-l-xl"
              value={selectedDivision}
              onChange={handleChangeDivision}
              required
            >
              <option value="" className="text-[15px]" disabled>
                Select an option
              </option>
              <option value="Mahaweli D" className="text-[15px]">
                Mahaweli D
              </option>
              <option value="Mahaweli F" className="text-[15px]">
                Mahaweli F
              </option>
              <option value="Mahaweli E" className="text-[15px]">
                Mahaweli E
              </option>
              <option value="Mahaweli B" className="text-[15px]">
                Mahaweli B
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-[30%] gap-4 px-[15%]">
        <p>User Name</p>
        <input
          type="text"
          name="userName"
          id="name"
          value={username}
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="User Name"
          onChange={handleUsernameChange}
        />
        <p>Create New Password</p>
        <input
          type="text"
          name="name"
          id="name"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="Password"
          value={password}
            onChange={handlePasswordChange}
        />
        
        <p>Confirm your Password</p>
        <input
          type="text"
          name="name"
          id="name"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="Confirm Password"
          value={confirmPassword}
            onChange={handleConfirmPasswordChange}
        />

        <button type="submit" className="flex flex-row items-center mt-[14%] bg-white p-3 w-[140px] rounded-r-xl rounded-l-xl bg-[#E0D72E]" onClick={AddUser}>Sign Up <img src={SignupBtn} alt="" className="w-6 ml-5 h-65"/></button>
      </div>
    </form>
  );
};

export default SignUp;
