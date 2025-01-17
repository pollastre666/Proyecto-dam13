import React from 'react';
import { useLocation } from 'react-router-dom';
import '../estils/CompararCPUs.css';

const CompararCPUs = () => {
    const location = useLocation();
    const seleccionadas = location.state?.seleccionadas || []; // Valor predeterminado como un array vacío.

    if (seleccionadas.length !== 2) {
        return <p>Selecciona exactamente 2 CPUs para comparar.</p>;
    }

    return (
        <div>
            <h1>Comparación de CPUs</h1>
            <table border="1" style={{ margin: '20px auto', width: '80%', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Propiedad</th>
                        <th>{seleccionadas[0].CPU_Name}</th>
                        <th>{seleccionadas[1].CPU_Name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Puntuación</td>
                        <td>{seleccionadas[0].CPU_Mark}</td>
                        <td>{seleccionadas[1].CPU_Mark}</td>
                    </tr>
                    <tr>
                        <td>Relación Calidad-Precio</td>
                        <td>{seleccionadas[0].CPU_Value !== 'NA' ? `$${seleccionadas[0].CPU_Value}` : 'No disponible'}</td>
                        <td>{seleccionadas[1].CPU_Value !== 'NA' ? `$${seleccionadas[1].CPU_Value}` : 'No disponible'}</td>
                    </tr>
                    {/* Agrega más filas según las propiedades que quieras comparar */}
                </tbody>
            </table>
        </div>
    );
};

export default CompararCPUs;
