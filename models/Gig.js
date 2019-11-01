const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../config/database');

const Gig = new Schema({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    vin_code: {
        type: String,
        required: true,
    },
    made_in: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    cusov: {
        type: String,
        required: true
    },
    wheel: {
        type: String,
        required: true
    },
    picture:{
        type:String,
        required: true
    },
    type_cusov:{
        type:String,
        required: true
    },
    door:{
        type:String,
        required:true
    },
    engine:{
        type:String,
        required:true
    },
    equipment:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    electric:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Vins', Gig);