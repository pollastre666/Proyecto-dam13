import React from 'react';
import '../estils/Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto">
            <h1>Contacta amb mi</h1>
            <p>
                Si tens alguna pregunta o vols obtenir més informació sobre el projecte, no dubtis a posar-te en contacte amb mi.
            </p>
            <div className="info-contacto">
                <p><strong>Email:</strong> alainsingla8@gmail.com</p>
                <p><strong>Telèfon:</strong> +34 600 000 000</p>
            </div>
            <form className="formulario-contacto">
                <h2>Deixa'm un missatge</h2>
                <div>
                    <label>Nom</label>
                    <input type="text" placeholder="Escriu el teu nom" />
                </div>
                <div>
                    <label>Missatge</label>
                    <textarea placeholder="Escriu el teu missatge"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
