import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Filtros from './components/Filtros';
import ListaResultados from './components/ListaResultados';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import Registrar from './components/Registrar';
import Entrar from './components/Entrar';
import './estils/App.css';
import CompararCPUs from './components/CompararCPUs';

const App = () => {
    const [resultados, setResultados] = useState([]);

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
