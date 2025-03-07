import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const NAV = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []); // Ensures navigation happens only once on mount

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='w-full h-20 flex justify-between items-center bg-black px-4 text-white fixed z-50'>
      <div>
        <h1 className='text-4xl font-signature ml-2 cursor-pointer' onClick={handleClick}>Kartik</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li key={id} className='cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NAV;
