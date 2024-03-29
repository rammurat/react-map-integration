import React from 'react';

const Header = () => (
  <header className="app-header">
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal"><a className="navbar-brand" href="/">LOGO</a></h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="/about">About us</a>
      </nav>
    </div>
  </header>
)

export default Header
