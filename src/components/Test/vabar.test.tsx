import React from 'react';
import './app.css';
import { Navlink } from '../styles/LINK';
import { mockData } from './mockData';  

const Navbar: React.FC = () => {
  return (
    <div style={{ paddingTop: "90px" }}>
      <div className="App">
        <nav>
          <ul>
            <li className="dropdown">
              <Navlink to="#">Sofas</Navlink>
              <ul className="dropdown-content">
                {Object.keys(mockData.sofas).map((subcategory) => (
                  <li key={subcategory}>
                    <Navlink to={`/product/sofas/${subcategory}`}>{subcategory}</Navlink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <Navlink to="#">Chairs</Navlink>
              <ul className="dropdown-content">
                {Object.keys(mockData.chairs).map((subcategory) => (
                  <li key={subcategory}>
                    <Navlink to={`/product/chairs/${subcategory}`}>{subcategory}</Navlink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <Navlink to="#">Beds</Navlink>
              <ul className="dropdown-content">
                {Object.keys(mockData.beds).map((subcategory) => (
                  <li key={subcategory}>
                    <Navlink to={`/product/beds/${subcategory}`}>{subcategory}</Navlink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <Navlink to="#">Kitchen</Navlink>
              <ul className="dropdown-content">
                {Object.keys(mockData.kitchen).map((subcategory) => (
                  <li key={subcategory}>
                    <Navlink to={`/product/kitchen/${subcategory}`}>{subcategory}</Navlink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <Navlink to="#">Lighting</Navlink>
              <ul className="dropdown-content">
                {Object.keys(mockData.lighting).map((subcategory) => (
                  <li key={subcategory}>
                    <Navlink to={`/product/lighting/${subcategory}`}>{subcategory}</Navlink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <Navlink to="#">Storage</Navlink>
              <ul className="dropdown-content">
                {Object.keys(mockData.storage).map((subcategory) => (
                  <li key={subcategory}>
                    <Navlink to={`/product/storage/${subcategory}`}>{subcategory}</Navlink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;


