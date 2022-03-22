const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addvehicleSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,                    
        trim: true,

    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    vehicleImage: {
        type: String,
        required: true,
    },
    price: {
        type: Number,

    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
})

const Addvehicle = mongoose.model("Addvehicle", addvehicleSchema);

module.exports = Addvehicle;                                                       