'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    id: {
        type: Number,
        required: '',
        default: 0
    },
    name: {
        type: String,
        required: '',
        default: 'Guest'
    },
    findingCount: {
        type: Number,
        default: 0
    },
    lastFoundId: {
        type: Number,
        default: 0
    },
    nextFindId: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Players', PlayerSchema);
