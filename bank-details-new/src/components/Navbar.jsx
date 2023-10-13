import React from 'react';
import './Navbar.css';
import Magnifying from '../assets/MagnifyingGlass.svg'
import BellRinging from '../assets/BellRinging.svg'
import UserCircle from '../assets/UserCircle.svg'


const Navbar = () => {
    return (
        <div className="bg-white flex flex-col justify-end gap-2 h-16 navbar px-4 pt-4 border border-t-0 border-x-0 ">
            <div className="flex justify-between flex-row items-start px-2 hidden md:flex">
                <div className="text-xl w-48 font-bold text-[#262626] mt-1">
                    Logo
                </div>
                <div className="flex flex-row ml-[-50px] gap-20 justify-between items-start">
                    <div className="text-xl l-0 px-2 font-bold text-[#262626] mt-1 w-fit border-b-4  border-[#3aa078]">
                        Home
                    </div>
                    <div className="text-xl px-5 font-bold text-[#262626] mt-1 w-fit">
                        Services
                    </div>
                    <div className="text-xl px-5 font-bold text-[#262626] mt-1 w-fit">
                        Blog
                    </div>
                    <div className="text-xl px-5 font-bold text-[#262626] mt-1 w-fit">
                        Offers
                    </div>
                    <div className="flex flex-row gap-20 items-start">
                        <div className="text-xl px-5 font-bold text-[#262626] mt-1 w-fit">
                            About Us
                        </div>
                    </div>


                </div>

                <div className="flex flex-row gap-6 justify-between items-start">
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
