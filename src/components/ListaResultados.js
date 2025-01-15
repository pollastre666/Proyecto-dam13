import React from 'react';
import '../estils/ListaResultados.css';

const ListaResultados = ({ resultados }) => {
    return (
        <div className="lista-resultados">
            <h2>Lista de CPUs encontradas:</h2>
            {resultados && resultados.length > 0 ? (
                <ul>
                    {resultados.map((cpu, index) => (
                        <li key={index}>
                            {cpu.nombre} - Puntuación: {cpu.puntuacion}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </div>
    );
};

export default ListaResultados;
