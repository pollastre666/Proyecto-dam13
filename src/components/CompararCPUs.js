import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../estils/CompararCPUs.css';

const CompararCPUs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const seleccionadas = location.state?.seleccionadas || [];

    if (seleccionadas.length !== 2) {
        return (
            <div style={{ textAlign: 'center', color: 'white' }}>
                <p>Por favor, selecciona exactamente 2 CPUs para comparar.</p>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        padding: '10px',
                        backgroundColor: '#00796b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Volver a la lista
                </button>
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundColor: 'white',
                color: '#333',
                padding: '20px',
                margin: '20px auto',
                width: '80%',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Comparación de CPUs</h1>
            <table
                border="1"
                style={{
                    margin: '0 auto',
                    width: '100%',
                    textAlign: 'center',
                    borderCollapse: 'collapse',
                    backgroundColor: 'white',
                }}
            >
                <thead style={{ backgroundColor: '#00796b', color: 'white' }}>
                    <tr>
                        <th>Propiedad</th>
                        <th>{seleccionadas[0].CPU_Name}</th>
                        <th>{seleccionadas[1].CPU_Name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px' }}>Puntuación</td>
                        <td style={{ padding: '10px' }}>{seleccionadas[0].CPU_Mark}</td>
                        <td style={{ padding: '10px' }}>{seleccionadas[1].CPU_Mark}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}>Relación Calidad-Precio</td>
                        <td style={{ padding: '10px' }}>
                            {seleccionadas[0].CPU_Value !== 'NA' ? `$${seleccionadas[0].CPU_Value}` : 'No disponible'}
                        </td>
                        <td style={{ padding: '10px' }}>
                            {seleccionadas[1].CPU_Value !== 'NA' ? `$${seleccionadas[1].CPU_Value}` : 'No disponible'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CompararCPUs;
