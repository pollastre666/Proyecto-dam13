import React from 'react';
import '../estils/Cabecera.css';

const Cabecera = ({ usuario }) => {
    return (
        <header className="cabecera">
            <div className="logo-container">
                <h1>CPU Finder</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/quienes-somos">Quiénes somos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
            <div className="auth">
                {usuario ? (
                    <p style={{ margin: 0 }}>Hola, {usuario.email}</p> 
                ) : (
                    <>
                        <a href="/registrar"><button>Registrarse</button></a>
                        <a href="/entrar"><button>Entrar</button></a>
                    </>
                )}
            </div>
        </header>
    );
};

export default Cabecera;
