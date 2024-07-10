import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between h-16 font-bold text-white bg-black py-4 h-10">
        <div>
          XXXRESIDENT EVIL SERIES
        </div>

        <div>
          <img className='absolute right-[98%] h-10' src="./y.jpg" alt="image" />
        </div>
        
        <div>
          <img className='absolute right-[80%] h-10' src="./OIP.jpeg" alt="image" />
        </div>

        <div className='relative'>
          {/* Replace <a> with <Link> */}
          <Link to="/" className='px-6' onClick={closeDropdown}>HOME</Link>
          <Link to="/gaming" className='px-6' onClick={closeDropdown}>PLAYDATA</Link>
          <Link to="/about" className='px-6' onClick={closeDropdown}>ABOUT</Link>
          <Link to="watch" className='px-6' onClick={closeDropdown}>WATCH</Link>
         

          <div className='inline-block relative'>
            <a className='px-6 cursor-pointer' onClick={toggleDropdown}>STORE</a>
            {isOpen && (
              <div className='absolute text-white bg-black mt-1 rounded'>
                {/* Replace <a> with <Link> */}
                <Link to="/wishlist" className='block px-3 py-2' onClick={closeDropdown}>WISHLIST</Link>
                <Link to="/discovery-queue" className='block px-3 py-2' onClick={closeDropdown}>DISCOVERY QUEUE</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
