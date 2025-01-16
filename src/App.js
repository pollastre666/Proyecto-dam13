import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Filtros from './components/Filtros';
import ListaResultados from './components/ListaResultados';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import Registrar from './components/Registrar';
import Entrar from './components/Entrar';
import CompararCPUs from './components/CompararCPUs';
import './estils/App.css';

const App = () => {
    // Datos simulados de CPUs
    const [resultados, setResultados] = useState([
        {
            nombre: 'Intel Core i9-12900K',
            precio: '$599',
            puntuacion: 19000,
            frecuencia: '3.2 GHz',
        },
        {
            nombre: 'AMD Ryzen 9 5950X',
            precio: '$549',
            puntuacion: 18000,
            frecuencia: '3.4 GHz',
        },
        {
            nombre: 'Intel Core i7-12700K',
            precio: '$419',
            puntuacion: 15000,
            frecuencia: '3.6 GHz',
        },
        {
            nombre: 'AMD Ryzen 7 5800X',
            precio: '$449',
            puntuacion: 14000,
            frecuencia: '3.8 GHz',
        },
    ]);

    return (
        <Router>
            <div className="App">
                <Cabecera />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Filtros />
                                <ListaResultados resultados={resultados} />
                            </main>
                        }
                    />
                    <Route path="/quienes-somos" element={<QuienesSomos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/registrar" element={<Registrar />} />
                    <Route path="/entrar" element={<Entrar />} />
                    <Route path="/comparar" element={<CompararCPUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
