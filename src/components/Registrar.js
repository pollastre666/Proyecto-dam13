import React, { useState } from 'react';

const Registrar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (email && password) {
            setMessage('Registro exitoso (simulación).');
        } else {
            setMessage('Por favor, completa todos los campos.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Registrarse</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px auto', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px auto', padding: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Registrar;
