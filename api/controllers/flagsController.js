'use strict';

var mongoose = require('mongoose');
var Flags = mongoose.model('Flags');

exports.list = function(req, res) {
    Flags.find({}, function(err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

exports.create = function(req, res) {
    var new_flag = new Flags(req.body);
    new_flag.save(function(err, flag) {
        if (err)
            res.send(err);
        res.json(flag);
    });
};

exports.get_flag = function(req, res) {
    Flags.findById(req.params.flagId, function(err, flag) {
        if (err)
            res.send(err);
        res.json(flag);
    });
};


exports.update_flag = function(req, res) {
    Flags.findOneAndUpdate({_id: req.params.flagId}, req.body, {new: true}, function(err, flag) {
        if (err)
            res.send(err);
        res.json(flag);
    });
};


exports.remove_flag = function(req, res) {
    Flags.remove({
        _id: req.params.flag
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Flag successfully removed' });
    });
};
