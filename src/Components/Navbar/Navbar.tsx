import React from 'react';
import './Navbar_module.sass'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__up">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_4483)">
              <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill="#A1A1AA" />
            </g>
            <defs>
              <clipPath id="clip0_3_4483">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" fill="#A1A1AA" />
          </svg>
          <h2>Просмотр</h2>
          <h2>Управление</h2>
        </div>
        <hr />
        <div className="nav__down">
          <div className="left">
            <div className="text">
              <p className='p1'>Название проекта</p>
              <p className='p2'>Аббревиатура</p>
            </div>
            <svg className='check' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="white" />
            </svg>
          </div>
          <hr />
          <div className="stm">Строительно-монтажные работы</div>
          <hr />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;