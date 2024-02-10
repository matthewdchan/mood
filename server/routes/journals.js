const express = require('express');
const router = express.Router();
const Journal = require('../models/journal');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// @route POST /arts
router.post('/', bodyParser.json(), (req, res) => {
    const newJournal = {
        text: req.body.text,
        title: req.body.title,
        date: req.body.date,
        //identifier: Math.random().toString(),
    };
    Journal.create(newJournal)
    .then((journal) => res.json({ msg: 'journal added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this journal' }));
});

// @route GET arts
router.get('/', (req, res) => {
    Journal.find()
    .then((journals) => res.json(journals))
    .catch((err) => res.status(404).json({ noitemfound: 'No journals found' }));
});

// @route GET arts/:id
router.get('/:id', (req, res) => {
    const journalId = req.params.id;
    console.log('request for journal with id:', journalId);
    Journal.findById(journalId)
    .then((journal) => res.json(journal))
    .catch((err) => res.status(404).json({ noitemfound: 'No matching journal found' }));
});

// @route PUT arts/:id
router.put('/:id', (req, res) => {
    Journal.findByIdAndUpdate(req.params.id, req.body)
    .then((journal) => res.json({ msg: 'Updated successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update the database' }));
});

// @route DELETE arts/:id
router.delete('/:id', (req, res) => {
    Journal.findByIdAndDelete(req.params.id)
    .then((journal) => res.json({ msg: 'journal deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such journal found' }));
});

module.exports = router;