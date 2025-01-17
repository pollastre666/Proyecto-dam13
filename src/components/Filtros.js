import React, { useState } from 'react';
import '../estils/Filtros.css';

const Filtros = ({ onFiltrarPorPresupuesto }) => {
    const [presupuesto, setPresupuesto] = useState('');

    const handlePresupuestoChange = (e) => {
        const value = e.target.value;
        setPresupuesto(value);
        onFiltrarPorPresupuesto(value);
    };

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Filtrar CPUs</h2>
            <input
                type="number"s
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
        </div>
    );
};

export default Filtros;
