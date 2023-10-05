import React, { Component } from 'react';

class MiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: '¡Página de verificación!',
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Mi Aplicación React</h1>
        <p>{this.state.mensaje}</p>
        <button onClick={this.cambiarMensaje} style={styles.button}>
          Verificación
        </button>
      </div>
    );
  }

  cambiarMensaje = () => {
    this.setState({
      mensaje: 'Verificado ✅',
    });
  };
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '20px',
  },
};

export default MiApp;
