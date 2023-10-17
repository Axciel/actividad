import React, { useState } from 'react';
import './PaginaPrincipal.css'; // Agregué la importación del archivo CSS
import MenuHamburguesa from './MenuHamburguesa';

function PaginaPrincipal() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
      <MenuHamburguesa estaAbierto={menuAbierto} alternarMenu={alternarMenu} />
      <div className="contenido">
        {/* Coloca aquí el contenido de tu página */}
      </div>
    </div>
  );
}

export default PaginaPrincipal;
