import React from 'react';
import '../estils/Cabecera.css';
import { Link } from 'react-router-dom';

const Cabecera = () => {
    return (
        <header className="cabecera">
            <h1>CPU Finder</h1>
            <nav>
                <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/quienes-somos">Quiénes somos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <div className="auth">
                <button>Registrarse</button>
                <button>Entrar</button>
            </div>
        </header>
    );
};

export default Cabecera;
