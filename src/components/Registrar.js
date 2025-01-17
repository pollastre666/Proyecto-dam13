import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Registrar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage('Registro exitoso.');
        } catch (error) {
            setMessage(error.message || 'Error al registrar.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
            <h1 style={{ color: 'white' }}>Registrarse</h1>
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
