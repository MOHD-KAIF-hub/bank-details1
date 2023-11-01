
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
                                className="toggle_button  md:hidden"
                            >
                                <img src={some} className="w-8" alt='some' />
                            </button>
                        </>
                    )
                        :
                        <>
                            <button
                                onClick={toggleSidebar}
                                className="toggle_button md:hidden"
                            >
                                <FaBars className="text-gray-700" />
                            </button>
                        </>
                    }
                </>
            }
            
            



        {
                (isSidebarOpen || !isSmallScreen) &&

                <div className={`Sidebar_container  ${!isSmallScreen ? 'border-r' : 'border-0 '} `}>

                    <div className="flex flex-col  items-end mt-3 w-full">
                        <>

                            {!isSmallScreen && <div className="self-start flex flex-row px-5 items-start w-full">
                                <div className="flex flex-row gap-5 w-40 items-start">
                                
                                    <div className="flex flex-col gap-5 w-8 items-start">
                                    <button onClick={toggleSidebar}>
                                        <img src={some} className="w-8" alt='some' />
                                        </button>
                                    </div>
                                </div>
                            </div>}

                            <NavLink to="dashboard" className={` Sidebar_Container_Sub ${!isSmallScreen ? 'border-0' : 'border-0'}`}>
                                <div className={` Sidebar_Container_Sub1  ${isSmallScreen?'border border-x-0  border-t-0':'border-0'}`}>
                                    <div className="Sidebar_Container_Sub2">
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

                            <NavLink to="totm" className="Sidebar_Container_Sub">
                                <div className={`Sidebar_Container_Sub1 ${isSmallScreen?'border border-x-0  border-t-0':'border-0'}`}>
                                    <div className="Sidebar_Container_Sub2">
                                        <img src={totm} className="self-end w-6" alt='some' />
                                        <div className="text-base w-fit">
                                            TOTM NavLinks
                                        </div>
                                    </div>
                                    <img
                                        src={arrow}
                                        className="w-fit"
                                    />
                                </div>
                            </NavLink>

                            <NavLink to="view" className="Sidebar_Container_Sub">
                                <div className={`Sidebar_Container_Sub1 ${isSmallScreen?'border border-x-0  border-t-0':'border-0'}`}>
                                    <div className="Sidebar_Container_Sub2">
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

                            <NavLink to="" className="Sidebar_Container_Sub">
                                <div className={`Sidebar_Container_Sub1 ${isSmallScreen?'border border-x-0  border-t-0':'border-0'}`}>
                                    <div className="Sidebar_Container_Sub2">
                                        <img src={bankdetails} className="self-end w-6" alt='some' />
                                        <div className="text-base w-fit">
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
