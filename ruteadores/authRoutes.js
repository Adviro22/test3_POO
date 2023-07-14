// authRouter.js

import express from 'express';
import { register, login } from '../controladores/authController.js';
import {findAllProducts, findOneProduct, createProduct} from '../controladores/products.controllers.js';
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', register);

// Ruta para iniciar sesión
router.post('/login', login);

//Rutas Productos
router.get('/products', findAllProducts);

router.post('/create', createProduct);

router.get('/:id', findOneProduct);

// Rutas para obtener y modificar los datos de los usuarios
/*
router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.patch('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);
*/


export default router;
