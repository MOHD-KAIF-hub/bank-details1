
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import some from '../assets/some.svg'
import dashboard from '../assets/dashboard.svg'
import dailysummary from '../assets/dailysummary.svg'
import totm from '../assets/totm.svg'
import bankdetails from '../assets/bankdetails.svg'
import arrow from '../assets/arrow.svg'


const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {


    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
        };

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <>
            {
                isSmallScreen &&
                <>
                    {isSidebarOpen ? (
                        <>

                            <button
                                onClick={toggleSidebar}
                                className="text-xl md:hidden fixed top-0 left-2 m-4"
                            >
                                <img src={some} className="w-8" alt='some' />
                            </button>
                        </>
                    )
                        :
                        <>
                            <button
                                onClick={toggleSidebar}
                                className="text-xl md:hidden fixed top-0 left-2 m-4"
                            >
                                <FaBars className="text-gray-700" />
                            </button>
                        </>
                    }
                </>
            }



            {
                (isSidebarOpen || !isSmallScreen) &&

                <div className={`flex flex-row h-full h-[900px] min-w-fit border border-0  border-[#d3d3d3] ${!isSmallScreen ? 'border-r' : 'border-0 '} ${isSidebarOpen ? 'w-full' : 'w-1/6'}`}>

                    <div className="flex flex-col gap-3 items-end mt-3 w-full">
                        <>

                            {!isSmallScreen && <div className="self-start flex flex-row px-5 items-start w-full">
                                <div className="flex flex-row gap-5 w-40 items-start">
                                    <div className="flex flex-col gap-5 w-8 items-start">
                                        <img src={some} className="w-8" alt='some' />
                                    </div>
                                </div>
                            </div>}

                            <NavLink to="dashboard" className={`flex flex-col hoverEffect w-full ${!isSmallScreen ? 'border-0' : 'border-0'}`}>
                                <div className="flex flex-row justify-between px-10 h-12 items-center  rounded">
                                    <div className="flex flex-row gap-5 items-start mr-20">
                                        <img src={dashboard} className="self-end w-6" alt='some' />
                                        <div className="text-base">
                                            Dashboard
                                        </div>
                                    </div>
                                    <img
                                        src={arrow}
                                        className="w-fit"
                                    />
                                </div>
                            </NavLink>

                            <NavLink to="totm" className="flex flex-col hoverEffect w-full">
                                <div className="flex flex-row justify-between px-10 h-12 items-center  rounded">
                                    <div className="flex flex-row gap-5 items-start mr-20">
                                        <img src={totm} className="self-end w-6" alt='some' />
                                        <div className="text-base">
                                            TOTM NavLinks
                                        </div>
                                    </div>
                                    <img
                                        src={arrow}
                                        className="w-fit"
                                    />
                                </div>
                            </NavLink>

                            <NavLink to="view" className="flex flex-col hoverEffect w-full">
                                <div className="flex flex-row justify-between px-10 h-12 items-center  rounded">
                                    <div className="flex flex-row gap-5  items-start">
                                        <img src={dailysummary} className="self-end w-6" alt='some' />
                                        <div className="text-base w-fit">
                                            Daily Summary
                                        </div>
                                    </div>
                                    <img
                                        src={arrow}
                                        className="w-fit"
                                    />
                                </div>
                            </NavLink>

                            <NavLink to="" className="flex flex-col hoverEffect w-full">
                                <div className="flex flex-row justify-between px-10 h-12 items-center  rounded">
                                    <div className="flex flex-row gap-5 items-start mr-20">
                                        <img src={bankdetails} className="self-end w-6" alt='some' />
                                        <div className="text-base">
                                            Bank Details
                                        </div>
                                    </div>
                                    <img
                                        src={arrow}
                                        className="w-fit"
                                    />
                                </div>
                            </NavLink>
                        </>
                    </div>
                </div>

            }
        </>











    );
};

export default Sidebar;
