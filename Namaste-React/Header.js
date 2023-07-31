import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="user-icon">
        <img src="/path/to/user-icon.png" alt="User" />
      </div>
    </div>
  );
};

export default Header;
