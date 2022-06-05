import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { RiBuilding2Line } from 'react-icons/ri';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li className="logo">
            <RiBuilding2Line />
          </li>
          <li className="menuOpciones">Home</li>
          <li className="menuOpciones">Compra</li>
          <li className="menuOpciones">Quienes Somos?</li>
          <li className="menuOpciones">Contacto</li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
