import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Filtros from './components/Filtros';
import ListaResultados from './components/ListaResultados';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import './estils/App.css';

const App = () => {
    const [resultados, setResultados] = useState([]);

    return (
        <Router>
            <div className="App">
                <Cabecera />
                <Routes>
                    <Route path="/" element={
                        <main>
                            <Filtros />
                            <ListaResultados resultados={resultados} />
                        </main>
                    } />
                    <Route path="/quienes-somos" element={<QuienesSomos />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
