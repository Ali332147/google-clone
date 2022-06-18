import React from 'react';
import User from './User';

const Header = () => {
  return (
    <header className='flex p-4 justify-between text-sm text-gray-700'>
      <div className='flex space-x-4 items-center'>
      <p className='link'>About</p>
      <p className='link'>Store</p>
      </div>
      <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <User></User>
      </div>
      </header>
  );
};

export default Header;