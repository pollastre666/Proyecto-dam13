import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListaResultados = ({ resultados }) => {
    const [cpusSeleccionadas, setCpusSeleccionadas] = useState([]);
    const navigate = useNavigate();

    const handleSeleccionar = (cpu) => {
        if (cpusSeleccionadas.length < 2) {
            setCpusSeleccionadas([...cpusSeleccionadas, cpu]);
        } else {
            alert('Solo puedes seleccionar hasta 2 CPUs para comparar.');
        }
    };

    const handleComparar = () => {
        if (cpusSeleccionadas.length === 2) {
            navigate('/comparar', { state: { cpusSeleccionadas } });
        } else {
            alert('Selecciona exactamente 2 CPUs para comparar.');
        }
    };

    return (
        <div className="lista-resultados">
            <h2>Lista de CPUs encontradas:</h2>
            {resultados && resultados.length > 0 ? (
                <ul>
                    {resultados.map((cpu, index) => (
                        <li key={index}>
                            {cpu.nombre} - Puntuación: {cpu.puntuacion}
                            <button onClick={() => handleSeleccionar(cpu)}>Comparar</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron resultados.</p>
            )}
            {cpusSeleccionadas.length > 0 && (
                <div>
                    <p>Seleccionadas: {cpusSeleccionadas.map((cpu) => cpu.nombre).join(', ')}</p>
                    <button onClick={handleComparar}>Comparar CPUs</button>
                </div>
            )}
        </div>
    );
};

export default ListaResultados;
