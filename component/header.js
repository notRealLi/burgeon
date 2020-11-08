import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a>Burgeon.</a>
      </div>
      <div className="nav-menu">
        <div className="nav-item">
          <a>
            <h2>Moneypedia</h2>
          </a>
        </div>
        <div className="nav-item">
          <a>
            <h2>Tools</h2>
          </a>
        </div>
        <div className="nav-item">
          <a>
            <h2>Forum</h2>
          </a>
        </div>
        <div className="nav-item">
          <a>
            <h2>Partners</h2>
          </a>
        </div>
        <div className="nav-item">
          <a>
            <h2>About us</h2>
          </a>
        </div>
      </div>
      <div className="account-profile">
        <a>
          {/* <img src="/user.svg" alt="" /> */}
          <div className="portrait"></div>
        </a>
        <h2>Jane Doe</h2>
      </div>
    </header>
  );
};

export default Header;
