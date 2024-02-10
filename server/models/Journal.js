const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    date: {
        type: String, //might need to change to date
        required: true,
    },
    title: {
        type: String,
        required: true,
    },


    }
);

module.exports = Journal = mongoose.model('journal', JournalSchema);
