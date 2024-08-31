import { NavbarMenu } from "../../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState, useEffect } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
// import React from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);


  // the main reason for  using useEffect   here is when screen is small and when i tap the menu open button it opens and meanwhile when i make the screen large then the opened menu opeb button is still open then i just used this hook to control over this problem 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the breakpoint for md
        setOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 ">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary  font-bold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-4 ">
            <button className="text-2xl  hover:bg-primary hover:text-white rounded-full p-2 duration-200 ">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 ">
              <PiShoppingCartThin />
            </button>
            <button className="hidden md:block hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
              Login
            </button>
          </div>
          <div className="md:hidden" onClick={()=>{
            setOpen(!open)
          }}> <MdMenu  className="text-4xl"/></div>
        </div>
      </nav>
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
