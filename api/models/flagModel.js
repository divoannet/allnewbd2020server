'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlagSchema = new Schema({
    id: {
        type: Number,
        required: '',
        default: 0
    },
    name: {
        type: String,
        required: '',
        default: 'Flag'
    },
    topicId: {
        type: Number,
        required: '',
        default: 0
    },
    imageURL: {
        type: String,
        default: ''
    },
    tipText: {
        type: String,
        default: ''
    },
    nextFlagId: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Flags', FlagSchema);
