// Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo_white from '../../Assets/logo-white.png'
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hasClass, setHasClass] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasClass(true);
      } else {
        setHasClass(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={hasClass? 'bg-[#000] fixed w-full px-12 flex gap-4 md:gap-12 justify-between items-center h-16 text-white duration-200' : 'bg-[#0000] fixed w-full px-12 flex gap-4 md:gap-12 justify-between items-center h-24 text-white duration-200'}>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#fff]'>
        <img width='100%' height='100%' className={hasClass? 'w-[60px] md:w-[110px] duration-200' : 'w-[100px] md:w-[140px] duration-200'} src={logo_white} alt="" />
      </h1>

      {/* Desktop Navigation */}
      {/* <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#f6891f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul> */}

      <button className='block flex items-center justify-center '>
        <span class="material-symbols-outlined md:text-[36px]">
call
</span>
      </button>

      <button className=' md:text-[28px] -translate-y-1'>
        <p>عربي</p>
      </button>

      {/* Mobile Navigation Icon */}
      <button onClick={handleNav} className='block flex items-center justify-center'>
        {nav? <span class="material-symbols-outlined md:text-[36px]">
close
</span> : <span class="material-symbols-outlined md:text-[36px]">
menu
</span>}
      </button>
      

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
           ? 'fixed  left-0 top-[0] w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 '
            : 'ease-in-out w-[100%] h-full duration-500 fixed top-[-200%]  left-[0]'
        }
      >
      {/* Mobile Navigation Icon */}
      <button onClick={handleNav} className='p-10 float-right block flex items-center justify-center'>
        {nav? <span class="material-symbols-outlined">
close
</span> : <span class="material-symbols-outlined">
menu
</span>}
      </button>

        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#f6891f] m-4'>
          <img width='100%' height='100%' className='w-[100px] md:w-[140px]' src={logo_white} alt="logo" />
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#f6891f] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;