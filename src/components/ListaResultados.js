import React, { useState } from 'react';

const Filtros = ({ onFiltrarPorPresupuesto, onFiltrarPorPuntuacion, onFiltrarPorNombre }) => {
    const [presupuesto, setPresupuesto] = useState('');
    const [puntuacion, setPuntuacion] = useState('');
    const [nombre, setNombre] = useState('');

    const handlePresupuestoChange = (e) => {
        const value = e.target.value;
        setPresupuesto(value);
        onFiltrarPorPresupuesto(value);
    };

    const handlePuntuacionChange = (e) => {
        const value = e.target.value;
        setPuntuacion(value);
        onFiltrarPorPuntuacion(value);
    };

    const handleNombreChange = (e) => {
        const value = e.target.value;
        setNombre(value);
        onFiltrarPorNombre(value);
    };

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Filtrar CPUs</h2>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Introduce tu presupuesto máximo:</label>
                <input
                    type="number"
                    placeholder="Ejemplo: 400"
                    value={presupuesto}
                    onChange={handlePresupuestoChange}
                    style={{
                        padding: '5px',
                        fontSize: '16px',
                        width: '200px',
                    }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Introduce la puntuación mínima:</label>
                <input
                    type="number"
                    placeholder="Ejemplo: 5000"
                    value={puntuacion}
                    onChange={handlePuntuacionChange}
                    style={{
                        padding: '5px',
                        fontSize: '16px',
                        width: '200px',
                    }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Buscar por nombre:</label>
                <input
                    type="text"
                    placeholder="Ejemplo: Ryzen"
                    value={nombre}
                    onChange={handleNombreChange}
                    style={{
                        padding: '5px',
                        fontSize: '16px',
                        width: '200px',
                    }}
                />
            </div>
        </div>
    );
};

export default Filtros;
