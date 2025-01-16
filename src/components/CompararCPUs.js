import React from 'react';
import { useLocation } from 'react-router-dom';
import '../estils/CompararCPUs.css';

const CompararCPUs = () => {
    const location = useLocation();
    const { cpusSeleccionadas } = location.state || { cpusSeleccionadas: [] };

    if (cpusSeleccionadas.length !== 2) {
        return <p>Error: Selecciona exactamente 2 CPUs para comparar.</p>;
    }

    return (
        <div className="comparar-cpus">
            <h1>Comparación de CPUs</h1>
            <table>
                <thead>
                    <tr>
                        <th>Propiedad</th>
                        <th>{cpusSeleccionadas[0].nombre}</th>
                        <th>{cpusSeleccionadas[1].nombre}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Precio</td>
                        <td>{cpusSeleccionadas[0].precio}</td>
                        <td>{cpusSeleccionadas[1].precio}</td>
                    </tr>
                    <tr>
                        <td>Puntuación</td>
                        <td>{cpusSeleccionadas[0].puntuacion}</td>
                        <td>{cpusSeleccionadas[1].puntuacion}</td>
                    </tr>
                    <tr>
                        <td>Frecuencia</td>
                        <td>{cpusSeleccionadas[0].frecuencia}</td>
                        <td>{cpusSeleccionadas[1].frecuencia}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CompararCPUs;
