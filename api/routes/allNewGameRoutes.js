'use strict';
module.exports = function(app) {
    var players = require('../controllers/playersController');
    var flags = require('../controllers/flagsController');

    app.route('/players')
        .get(players.list)
        .post(players.create);

    app.route('/players/:playerId')
        .get(players.get_player)
        .put(players.update_player)
        .delete(players.remove_player);

    app.route('/step')
        .get(players.step);

    app.route('/flags')
        .get(flags.list)
        .post(flags.create);

    app.route('/flags/:flagId')
        .get(flags.get_flag)
        .post(flags.update_flag)
        .delete(flags.remove_flag);
};
