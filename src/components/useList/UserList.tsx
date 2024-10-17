import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import backBtn from '../../assets/backBtn.png'
import NavBar from '../NavBar';
import { UserContext } from '../UserContext';

const UserList = (props : any) => {// State to store the millers data
    const [millers, setMillers] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state to show while data is being fetched

    const { logout, user } = useContext(UserContext) || {}; // Access logout function and user from context
  
    // Function to fetch millers
    async function getMillers() {
      try {
        const response = await axios.get(`http://localhost:8080/farmer/get-all-${props.user}`);
        // Store the response data in the millers array
        setMillers(response.data);
      } catch (error) {
        console.error('Error fetching millers:', error);
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    }
  
    // Fetch millers data when the component mounts
    useEffect(() => {
      getMillers(); // Call the function when the component loads
    }, []); // Empty dependency array means it runs only on component mount

    // Determine the navigation path based on user type
  const getUserRoute = () => {
    if (!user) {
      return "/login"; // Redirect to login if no user
    }
    switch (user.userType) {
      case 'farmer':
        return "/farmer/homepage"; // Link for farmer
      case 'middleman':
        return "/middleman/homepage"; // Link for middleman
      case 'miller':
        return "/miller/homepage"; // Link for miller
      default:
        return "/"; // Default link if userType doesn't match
    }
  };
  
    return (
      <div className="flex flex-col w-screen h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${props.bg})` }}>
        <NavBar topic="Buyer" />
        <Link to={getUserRoute()}>
          <button className="mt-12 ml-[10%]">
            <img
              src={backBtn}
              alt="Back Button"
              className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
            />
          </button>
        </Link>
  
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <p className="mt-10 text-xl text-center">Loading millers...</p>
        ) : (
          <div className="grid grid-cols-2 gap-y-12 px-[10%] my-10 place-items-center">
            {millers.length > 0 ? (
              millers.map((miller, index) => {
                // Destructure properties from miller object
                const { name, address, city } = miller;
  
                return (
                  <div key={index} className="p-4 bg-white bg-opacity-60 shadow-lg rounded-3xl w-[250px]">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p>{address}, {city}</p>
                    <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">
                      Contact
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="col-span-2 text-center">No millers found.</p>
            )}
          </div>
        )}
      </div>
    );
  };

export default UserList
