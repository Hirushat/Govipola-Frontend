import React, { useState } from "react";
import BackBtn from "../assets/backBtn.png";
import SignupBtn from "../../src/assets/signupBtn.png"

const SignUp = () => {
  // State to hold the selected value
  const [selectedUser, setSelectedUser] = useState("");

  // State to hold the selected value
  const [selectedDivision, setSelectedDivision] = useState("");

  // Function to handle the change event of the select dropdown
  const handleChange = (event: any) => {
    setSelectedUser(event.target.value); // Update the selected value
  };

  // Function to handle the change event of the select dropdown
  const handleChangeDivision = (event: any) => {
    setSelectedDivision(event.target.value); // Update the selected value
  };

  return (
    <div className="grid grid-cols-2 bg-gradient-to-b from-[#2AF35F] via-[#49A343] to-[#ADDA3C] h-screen">
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
          >
            <option value="" className="text-[15px]" disabled>
              Select an option
            </option>
            <option value="Farmer" className="text-[15px]">
              Farmer
            </option>
            <option value="Middle Man" className="text-[15px]">
              Middle Man
            </option>
            <option value="Miller" className="text-[15px]">
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
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Mobile Number"
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Address"
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" City"
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

      <div className="flex flex-col  mt-[29%] gap-4 px-[15%]">
        <p>User Name</p>
        <input
          type="text"
          name="userName"
          id="name"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="User Name"
        />
        <p>Create New Password</p>
        <input
          type="text"
          name="name"
          id="name"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="Password"
        />
        <p>Confirm your Password</p>
        <input
          type="text"
          name="name"
          id="name"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="Confirm Password"
        />

        <button className="flex flex-row items-center mt-[14%] bg-white p-3 w-[140px] rounded-r-xl rounded-l-xl bg-yellow-400">Sign Up <img src={SignupBtn} alt="" className="w-6 ml-5 h-65"/></button>
      </div>
    </div>
  );
};

export default SignUp;
