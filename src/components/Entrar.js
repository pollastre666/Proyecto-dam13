import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Entrar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Inicio de sesión exitoso.');
        } catch (error) {
            setMessage(error.message || 'Error al iniciar sesión.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
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
