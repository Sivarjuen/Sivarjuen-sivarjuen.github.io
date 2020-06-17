import React from 'react';
import '../index.css';

const NavItem = () => {
  return (
    <div className="Nav_Item">
      Home
    </div>
  );
}

export const NavBar = () => {
  return (
    <div className="Nav_Background">
      <NavItem />
    </div>
  );
}