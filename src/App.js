import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import Filtros from './components/Filtros';
import ListaResultados from './components/ListaResultados';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import Registrar from './components/Registrar';
import Entrar from './components/Entrar';
import CompararCPUs from './components/CompararCPUs';
import getCPUs from './cpuDataService';
import './estils/App.css';

const App = () => {
    const [resultados, setResultados] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cpus = await getCPUs();
                setResultados(cpus); // Actualiza el estado con los datos obtenidos.
            } catch (error) {
                console.error('Error al cargar las CPUs:', error);
            } finally {
                setCargando(false); // Detiene la carga después de completar la solicitud.
            }
        };

        fetchData();
    }, []);

    return (
        <Router>
            <div className="App">
                <Cabecera />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                {cargando ? (
                                    <p>Cargando CPUs...</p>
                                ) : (
                                    <ListaResultados resultados={resultados} />
                                )}
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
