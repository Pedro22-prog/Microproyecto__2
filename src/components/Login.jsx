import { useState } from 'react';
import { app, auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = (props) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const createUser = async (email, password) => {
    try {
      const firebaseUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario creado:", firebaseUser);
      props.setUser(firebaseUser);
    } catch (error) {
      setError(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const firebaseUser = await signInWithEmailAndPassword(auth, email, password);
      console.log("Sesión iniciada con:", firebaseUser.user);
      props.setUser(firebaseUser);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      createUser(email, password);
    } else {
      login(email, password);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <h1>{isRegister ? "Regístrate" : "Inicia sesión"}</h1>
        <label htmlFor="emailField">Email</label>
        <input
          type="email"
          id="emailField"
          name="emailField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="passwordField">Contraseña</label>
        <input
          type="password"
          id="passwordField"
          name="passwordField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {isRegister ? "Regístrate" : "Inicia sesión"}
        </button>
        <button className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Iniciar sesión" : "Registrarse"}
        </button>
        <button onClick={logOut}>Cerrar sesión</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;