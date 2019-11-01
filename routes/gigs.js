const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mongoose = require('mongoose');
// Get gig list
router.get('/', (req, res) =>
    Gig.find()
        .then(gigs => res.render('gigs', {
            gigs
        }))
        .catch(err => console.log(err)));

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
    let {name, vin_code, model, made_in,details, cusov, wheel,picture,type_cusov, door, engine, equipment, country, electric} = req.body;
    let errors = [];

    // Validate Fields
    if (!name) {
        errors.push({text: 'Please add a title'});
    }
    if (!vin_code) {
        errors.push({text: 'Please add some technologies'});
    }
    if (!model) {
        errors.push({text: 'Please add a description'});
    }
    if (!cusov) {
        errors.push({text: 'Please add a cusov'});
    }
    if (!wheel) {
        errors.push({text:'Please add a wheel'});
    }
    if (!country) {
        errors.push({text: 'Please add a country'});
    }
    if (!electric) {
        errors.push({text:'Please add a electric'});
    }

    // Check for errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            name,
            vin_code,
            model,
            made_in,
            details,
            cusov,
            wheel,
            picture,
            type_cusov,
            door,
            engine,
            equipment,
            country,
            electric

        });
    } else {
        if (!model) {
            model = 'Unknown';
        } else {
            model = `$${model}`;
        }

        // Make lowercase and remove space after comma
        vin_code = vin_code.toLowerCase().replace(/, /g, ',');

        // Insert into table
        Gig.create({
            name,
            vin_code,
            model,
            made_in,
            details,
            cusov,
            wheel,
            picture,
            type_cusov,
            door,
            engine,
            equipment,
            country,
            electric
        })
            .then(gig => res.redirect('/gigs'))
            .catch(err => console.log(err));
    }
});

// Search for gigs
router.get('/search', (req, res) => {
    let {term} = req.query;

    // Make lowercase
    term = term.toUpperCase();

    Gig.find({vin_code: term})
        .then(gigs => res.render('gigs', {gigs}))
        .catch(err => console.log(err))
        .catch(err1=> cosnole.log(err1))


});

module.exports = router;