var express = require('express');
var Client = require('../models/Client');

var clientRouter = express.Router();

clientRouter
    .route('/')
    .post(function (req, res) { // Create New client
        var client = new Client(req.body);
        client.save();
        res.status(201).send(client);
    })
    .get(function (req, res) { // Get clients
        Client.find(function (err, clients) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(clients);
        });
    });
clientRouter
    .route('/:clientId')
    .get(function (req, res) { // Get One menu item
        var clientId = req.params.clientId;

        Client.findOne({ id: clientId }, function (err, client) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(client);
        });
    })
    .put(function (req, res) { // Update one menu item
        var clientId = req.params.clientId;

        Client.findOne({ id: clientId }, function (err, client) {
            if (err) {
                res.status(500).send(err);
            }

            if (client) {
                client.name  = req.body.name;
                client.icon_img = req.body.icon_img;
                client.alt_text = req.body.alt_text;

                client.save();

                res.json(client);
                return;
            }

            res.status(404).json({
                message: 'client not found'
            });
        });
    })
    .patch(function (req, res) {
        var clientId = req.params.clientId;

        Client.findOne({ id: clientId }, function (err, client) {
            if (err) {
                res.status(500).send(err);
            }

            if (client) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof client[property] !== 'undefined') {
                            client[property] = req.body[property];
                        }
                    }
                }
            }
            
            client.save();

            res.json(client);
            return;
        });
    })
    .delete(function (req, res) {
        var clientId = req.params.clientId;

        Client.findOne({ id: clientId }, function (err, client) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (client) {
                client.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'client is deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'client was not found'
                });
            }
        });
    })

module.exports = clientRouter;
