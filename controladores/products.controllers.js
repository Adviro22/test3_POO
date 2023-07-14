import { response } from 'express'
import Product from '../modelos/products.model.js'

export const findAllProducts = async (req, res)=>{
    try {
        const products = await Product.find()
        console.log(products)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Algo salio mal mientras se mostraba los productos'
        })
    }
};

export const createProduct =  async (req, res) =>{
    const newProduct = new Task({descripcion: req.body.descripcion, precio: req.body.precio, stock: req.body.stock, saldo: req.body.saldo});
    const productSaved= await newProduct.save();
    res.json(productSaved)
};

//Modificar
export const findOneProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product)
};

export const deleteUser = async(req, res)=> {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Has sido eliminado satisfactoriamente"
    });
};

export const findAllDoneUser = async (req, res) =>{
    const tasks = await Task.find({name: true});
    res.json(tasks);
};

export const updateUser = async (req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: "Su tarea se ha actualizado con exito"});
};