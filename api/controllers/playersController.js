'use strict';

var mongoose = require('mongoose');
var Player = mongoose.model('Players');
var Flags = mongoose.model('Flags');

exports.list = function(req, res) {
    Player.find({}, function(err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

exports.create = function(req, res) {
    var new_player = new Player(req.body);
    new_player.save(function(err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

exports.get_player = function(req, res) {
    Player.findById(req.params.playerId, function(err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

exports.update_player = function(req, res) {
    Player.findOneAndUpdate({_id: req.params.playerId}, req.body, {new: true}, function(err, player) {
        if (err)
            res.send(err);
        res.json(player);
    });
};

exports.remove_player = function(req, res) {
    Player.remove({
        _id: req.params.playerId
    }, function(err, player) {
        if (err)
            res.send(err);
        res.json({ message: 'Player successfully removed' });
    });
};

exports.step = function (req, res) {
    Flags.findOne({
        _id: req.body.flagId
    }, function (err, flag) {
        Player.findOne({_id: req.body.playerId}, function(err, player) {
            player.findingCount += 1;
            player.lastFoundId = req.body.flagId;
            player.nextFindId = flag.nextFlagId;
            player.save(err => {
                res.send(err);
            })

            if (err)
                res.send(err);
            res.json(player);
        });
    })
}
