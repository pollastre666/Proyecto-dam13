import React, { useState } from 'react';

const Filtros = ({ onFiltrarPorPresupuesto, onFiltrarPorPuntuacion }) => {
    const [presupuesto, setPresupuesto] = useState('');
    const [puntuacion, setPuntuacion] = useState('');

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

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Filtrar CPUs</h2>
            <input
                type="number"
                placeholder="Introduce tu presupuesto máximo"
                value={presupuesto}
                onChange={handlePresupuestoChange}
                style={{
                    padding: '5px',
                    fontSize: '16px',
                    margin: '10px 0',
                    width: '200px',
                }}
            />
            <br />
            <input
                type="number"
                placeholder="Introduce la puntuación mínima"
                value={puntuacion}
                onChange={handlePuntuacionChange}
                style={{
                    padding: '5px',
                    fontSize: '16px',
                    margin: '10px 0',
                    width: '200px',
                }}
            />
        </div>
    );
};

export default Filtros;
