import React, { useState } from 'react';

const Entrar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'test@example.com' && password === '1234') {
            setMessage('Inicio de sesión exitoso (simulación).');
        } else {
            setMessage('Credenciales inválidas.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit" style={{ padding: '10px 20px' }}>Entrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Entrar;
