import React from 'react';
import Aimg from '../images/A.png';

const Header = () => {
  return (
    <div className="header_wrap">
      <div className="header_cont">
        <figure className="logo_sec">
          <img src={Aimg}></img>
        </figure>
        <button type="button" className="login-btn custom-btn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;