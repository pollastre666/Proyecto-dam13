import React from 'react';
import '../estils/Cabecera.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Cabecera = () => {
    return (
        <header className="cabecera">
            <div className="logo-container">
                <img src={logo} alt="CPU Finder Logo" className="logo" />
                <h1 style={{ color: 'white' }}>CPU Finder</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/quienes-somos">Quiénes somos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <div className="auth">
                <Link to="/registrar">
                    <button>Registrarse</button>
                </Link>
                <Link to="/entrar">
                    <button>Entrar</button>
                </Link>
            </div>
        </header>
    );
};

export default Cabecera;
