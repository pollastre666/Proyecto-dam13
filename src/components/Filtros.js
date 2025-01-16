import React from 'react';
import '../estils/Filtros.css';

const Filtros = ({ filtrar }) => {
    return (
       <div className="filtros">
         <div className="campo">
           <label>Presupuesto Máximo:</label>
            <input
      type="number"
placeholder="Escribir aquí..."
onChange={(e) => filtrar(e.target.value, '')}
            />
         </div>
       <div className="tipos">
<label>Tipos de CPU:</label>
    <div>
        <button onClick={() => filtrar('', 'AMD')}>AMD</button>
 <button onClick={() => filtrar('', 'Intel')}>Intel</button>
     </div>
   </div>
  </div>
    );
};

export default Filtros;
