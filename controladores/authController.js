// authController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../modelos/userModel.js';

// Controlador para registrar un nuevo usuario
async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // Verificar si el usuario o el correo electrónico ya existen en la base de datos
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario o el correo electrónico ya existen' });
    }

    // Crear un nuevo usuario en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    // Generar un token JWT válido
    const token = jwt.sign({ userId: newUser._id }, 'secreto-del-token-jwt');

    // Enviar la respuesta con el token
    res.json({ token });
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
    res.status(500).json({ message: 'Error al registrar al usuario' });
  }
}

// Controlador para iniciar sesión
async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT válido
    const token = jwt.sign({ userId: user._id }, 'secreto-del-token-jwt');

    // Enviar la respuesta con el token
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
}

export { register, login };
