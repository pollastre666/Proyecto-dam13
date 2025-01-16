import React from 'react';

const ListaResultados = ({ resultados }) => {
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
                            <button>Añadir</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron CPUs disponibles.</p>
            )}
        </div>
    );
};

export default ListaResultados;
