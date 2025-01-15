import React from 'react';
import '../estils/Filtros.css';

const Filtros = () => {
    return (
        <div className="filtros">
            <div className="campo">
                <label>Presupuesto Máximo:</label>
                <input type="number" placeholder="Escribir aquí..." />
            </div>
            <div className="tipos">
                <label>Tipos de CPU:</label>
                <div>
                    <button>AMD</button>
                    <button>Intel</button>
                </div>
            </div>
        </div>
    );
};

export default Filtros;
