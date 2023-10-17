import React, { useState } from 'react';
import './InicioSesion.css';

function InicioSesion({ setHaIniciadoSesion }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const history = useHistory();

  const handleIniciarSesion = () => {
    if (usuario === 'axciel' && contrasena === '12345') {
      setHaIniciadoSesion(true);
      history.push('/pagina-principal');
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            type={mostrarContrasena ? 'text' : 'password'}
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button
            className="mostrar-contrasena"
            onClick={() => setMostrarContrasena(!mostrarContrasena)}
          >
            {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <button className="button" onClick={handleIniciarSesion}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}

export default InicioSesion;
