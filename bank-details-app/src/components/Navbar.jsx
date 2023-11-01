import React from 'react';
import './Navbar.css';
import Magnifying from '../assets/MagnifyingGlass.svg'
import BellRinging from '../assets/BellRinging.svg'
import UserCircle from '../assets/UserCircle.svg'


const Navbar = () => {
    return (
        <div className="bg-white flex flex-col justify-end  gap-1 h-16 px-4 pt-4 border border-t-0 border-x-0 ">
            <div className="flex justify-between flex-row items-start px-2 hidesmall">
                <div className="text-xl w-48  font-bold text-[#262626] mt-1">
                    Logo
                </div>
                <div className=" middle_part  lg:gap-20">
                    <div className="text-xl l-0 px-2 font-bold text-[#262626] mt-1 w-fit border-b-4  border-[#3aa078]">
                        Home
                    </div>
                    <div className="middle_part_content">
                        Services
                    </div>
                    <div className="middle_part_content">
                        Blog
                    </div>
                    <div className="middle_part_content">
                        Offers
                    </div>
    
                    <div className="middle_part_content">
                            About Us
                        </div>
        


                </div>

                <div className=" right_part flex flex-row justify-between items-start lg:gap-6">
                    <img 
                    src={Magnifying}
                        id="MagnifyingGlass"
                        className="w-8"
                        alt="some"
                    />
                    <img
                        src={BellRinging}
                        id="BellRinging"
                        className="w-8"
                        alt="some"
                    />
                    <img
                        src={UserCircle}
                        id="UserCircle"
                        className="w-8"
                        alt="some"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
