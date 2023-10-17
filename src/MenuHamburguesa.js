import React from 'react';
import './MenuHamburguesa.css';
import { Link } from 'react-router-dom';


function MenuHamburguesa({ estaAbierto, alternarMenu }) {
  const cerrarMenu = () => {
    alternarMenu(); // Cierra el menú al hacer clic en el botón de cierre
  };

  return (
    <div className={`menu-hamburguesa ${estaAbierto ? 'abierto' : ''}`}>
      <div className="icono-hamburguesa" onClick={alternarMenu}>
        ☰
      </div>
      <div className="elementos-menu">
        <Link to="/inicio">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/configuraciones">Configuraciones</Link>
        <button onClick={cerrarMenu} className="close-button">
          &times;
        </button>
      </div>
    </div>
  );
}

export default MenuHamburguesa;
