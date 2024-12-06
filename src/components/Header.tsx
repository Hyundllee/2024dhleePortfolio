// import React from 'react';
import '../assets/scss/components/header.scss';
const Header = () => {
  return (
    <div className="Header">
      <div className='Header_inner'>
        <h1 className='Header_logo'><a href="/">Donghyun’s Web portfolio</a></h1>
        <span className='Resume'><span className='dot'></span>Available Now</span>
      </div>
    </div>
  );
};

export default Header;
