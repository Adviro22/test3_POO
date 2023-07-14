import {Schema, model} from "mongoose";

const productSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: String,
        trim: true
    },
    stock: {
        type: String,
        trim: true
    },
    saldo: {
        type: String,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Product', productSchema);