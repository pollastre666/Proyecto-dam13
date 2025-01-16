import React, { useState } from 'react';

const Filtros = ({ onFiltrar, onFiltrarIntel, onFiltrarRyzen }) => {
    const [presupuesto, setPresupuesto] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setPresupuesto(value);
        onFiltrar(value);
    };

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Filtrar CPUs</h2>
            <input
                type="number"
                placeholder="Introduce tu presupuesto"
                value={presupuesto}
                onChange={handleInputChange}
                style={{
                    padding: '5px',
                    fontSize: '16px',
                    margin: '10px 0',
                    width: '200px',
                }}
            />
            <div>
                <button onClick={onFiltrarIntel} style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#00796b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Mostrar Intel
                </button>
                <button onClick={onFiltrarRyzen} style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Mostrar Ryzen
                </button>
            </div>
        </div>
    );
};

export default Filtros;
