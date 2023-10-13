
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './AppRoutes';
import { useState } from 'react';


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };
  return (


    <div className="bg-white flex flex-col w-full">

      <Navbar />

      <div className="flex flex-row gap-8 items-start w-full">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />


        {!isSidebarOpen && <div className="flex flex-col justify-between mt-10 gap-8 w-full md:w-5/6 max-w-[790px] h-full">


          <AppRoutes />


        </div>}

      </div>
    </div>


  );
}

export default App;
