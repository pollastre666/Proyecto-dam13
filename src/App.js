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

    useEffect(() => {
        const fetchCPUs = async () => {
            try {
                const cpus = await getCPUs(); // Cargar CPUs desde la API.
                setResultados(cpus);
                setFiltrados(cpus); // Inicialmente, los filtrados son iguales a los resultados.
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

    return (
        <Router>
            <div className="App">
                <Cabecera />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Filtros onFiltrarPorPresupuesto={filtrarPorPresupuesto} />
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
                    <Route path="/registrar" element={<Registrar />} />
                    <Route path="/entrar" element={<Entrar />} />
                    <Route path="/comparar" element={<CompararCPUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
