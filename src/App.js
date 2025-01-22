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
    const [filtrados, setFiltrados] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [usuario, setUsuario] = useState(null); 

    useEffect(() => {
        const fetchCPUs = async () => {
            try {
                const cpus = await getCPUs();
                setResultados(cpus);
                setFiltrados(cpus);
            } catch (error) {
                console.error('Error al cargar CPUs:', error);
            } finally {
                setCargando(false);
            }
        };

        fetchCPUs();
    }, []);

    const filtrarPorPresupuesto = (presupuestoMax) => {
        const presupuestoNum = parseInt(presupuestoMax, 10);
        if (isNaN(presupuestoNum)) {
            setFiltrados(resultados);
        } else {
            const cpusFiltradas = resultados.filter(
                (cpu) => cpu.CPU_Value !== 'NA' && parseFloat(cpu.CPU_Value) <= presupuestoNum
            );
            setFiltrados(cpusFiltradas);
        }
    };

    const filtrarPorPuntuacion = (puntuacionMin) => {
        const puntuacionNum = parseInt(puntuacionMin, 10);
        if (isNaN(puntuacionNum)) {
            setFiltrados(resultados);
        } else {
            const cpusFiltradas = resultados.filter(
                (cpu) => parseInt(cpu.CPU_Mark, 10) >= puntuacionNum
            );
            setFiltrados(cpusFiltradas);
        }
    };

    const filtrarPorNombre = (nombre) => {
        const nombreLower = nombre.toLowerCase();
        if (!nombreLower) {
            setFiltrados(resultados);
        } else {
            const cpusFiltradas = resultados.filter((cpu) =>
                cpu.CPU_Name.toLowerCase().includes(nombreLower)
            );
            setFiltrados(cpusFiltradas);
        }
    };

    return (
        <Router>
            <div className="App">
                <Cabecera usuario={usuario} /> 
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Filtros
                                    onFiltrarPorPresupuesto={filtrarPorPresupuesto}
                                    onFiltrarPorPuntuacion={filtrarPorPuntuacion}
                                    onFiltrarPorNombre={filtrarPorNombre}
                                />
                                <button
                                    onClick={() => setFiltrados(resultados)}
                                    style={{
                                        padding: '10px',
                                        marginTop: '10px',
                                        backgroundColor: '#0056b3',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Restablecer Filtros
                                </button>
                                {cargando ? (
                                    <p>Cargando CPUs...</p>
                                ) : (
                                    <ListaResultados resultados={filtrados} />
                                )}
                            </main>
                        }
                    />
                    <Route path="/quienes-somos" element={<QuienesSomos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route
                        path="/registrar"
                        element={<Registrar setUsuario={setUsuario} />} 
                    />
                    <Route
                        path="/entrar"
                        element={<Entrar setUsuario={setUsuario} />} 
                    />
                    <Route path="/comparar" element={<CompararCPUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
