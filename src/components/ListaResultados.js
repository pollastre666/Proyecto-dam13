import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ListaResultados = ({ resultados }) => {
    const [seleccionadas, setSeleccionadas] = useState([]);
    const navigate = useNavigate(); 

    const handleSeleccionar = (cpu) => {
        if (seleccionadas.length < 2) {
            setSeleccionadas([...seleccionadas, cpu]);
        } else {
            alert('Solo puedes seleccionar un máximo de 2 CPUs para comparar.');
        }
    };

    const handleEliminarSeleccion = (cpu) => {
        setSeleccionadas(seleccionadas.filter((item) => item.CPU_Name !== cpu.CPU_Name));
    };

    const handleComparar = () => {
        if (seleccionadas.length === 2) {
            console.log('Navegando a comparar con:', seleccionadas); 
            navigate('/comparar', { state: { seleccionadas } }); 
        } else {
            alert('Selecciona exactamente 2 CPUs para comparar.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
                Mostrando {resultados.length} CPUs
            </p>
            {resultados.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {resultados.map((cpu, index) => (
                        <li key={index} style={{ marginBottom: '15px' }}>
                            <strong>{cpu.CPU_Name}</strong> - {cpu.CPU_Mark} puntos - ${cpu.CPU_Value !== 'NA' ? cpu.CPU_Value : 'Precio no disponible'}
                            <button
                                onClick={() => handleSeleccionar(cpu)}
                                style={{
                                    marginLeft: '10px',
                                    padding: '5px 10px',
                                    backgroundColor: '#00796b',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                Añadir a Comparar
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron CPUs.</p>
            )}
            {seleccionadas.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>CPUs Seleccionadas:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {seleccionadas.map((cpu, index) => (
                            <li key={index}>
                                <strong>{cpu.CPU_Name}</strong>
                                <button
                                    onClick={() => handleEliminarSeleccion(cpu)}
                                    style={{
                                        marginLeft: '10px',
                                        padding: '5px 10px',
                                        backgroundColor: '#d32f2f',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    {seleccionadas.length === 2 && (
                        <button
                            onClick={handleComparar}
                            style={{
                                padding: '10px',
                                marginTop: '10px',
                                backgroundColor: '#00796b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Comparar
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ListaResultados;
