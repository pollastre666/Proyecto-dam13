import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estils/ListaResultados.css';

const ListaResultados = ({ resultados }) => {
    const [seleccionadas, setSeleccionadas] = useState([]);
    const navigate = useNavigate();

    const handleAñadir = (cpu) => {
        if (seleccionadas.length < 2) {
            if (!seleccionadas.find((item) => item.CPU_Name === cpu.CPU_Name)) {
                setSeleccionadas([...seleccionadas, cpu]);
            } else {
                alert('Esta CPU ya está seleccionada.');
            }
        } else {
            alert('Solo puedes seleccionar un máximo de 2 CPUs para comparar.');
        }
    };

    const handleEliminar = (cpu) => {
        setSeleccionadas(seleccionadas.filter((item) => item.CPU_Name !== cpu.CPU_Name));
    };

    const handleComparar = () => {
        if (seleccionadas.length === 2) {
            navigate('/comparar', { state: { seleccionadas } });
        } else {
            alert('Selecciona exactamente 2 CPUs para comparar.');
        }
    };

    return (
        <div className="lista-resultados">
            <h2>Lista de CPUs:</h2>
            {resultados.length > 0 ? (
                <ul>
                    {resultados.map((cpu, index) => (
                        <li key={index}>
                            <strong>{cpu.CPU_Name}</strong> - 
                            {cpu.CPU_Mark} puntos - 
                            {cpu.CPU_Value !== 'NA' ? `$${cpu.CPU_Value}` : 'Precio no disponible'}
                            <button onClick={() => handleAñadir(cpu)}>Añadir</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron CPUs disponibles.</p>
            )}
            <div style={{ marginTop: '20px' }}>
                <h3>CPUs Seleccionadas:</h3>
                {seleccionadas.length > 0 ? (
                    <ul>
                        {seleccionadas.map((cpu, index) => (
                            <li key={index}>
                                <strong>{cpu.CPU_Name}</strong> - 
                                {cpu.CPU_Mark} puntos - 
                                {cpu.CPU_Value !== 'NA' ? `$${cpu.CPU_Value}` : 'Precio no disponible'}
                                <button onClick={() => handleEliminar(cpu)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No has seleccionado ninguna CPU.</p>
                )}
            </div>
            {seleccionadas.length === 2 && (
                <button
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#00796b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={handleComparar}
                >
                    Comparar
                </button>
            )}
        </div>
    );
};

export default ListaResultados;
