var express = require('express');
var SocialLink = require('../models/SocialLink');

var sociallinkRouter = express.Router();

sociallinkRouter
    .route('/')
    .post(function (req, res) { // Create New sociallink
        var sociallink = new SocialLink(req.body);
        console.log(sociallink);
        sociallink.save();
        res.status(201).send(sociallink);
    })
    .get(function (req, res) { // Get sociallinks
        SocialLink.find(function (err, sociallinks) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(sociallinks);
        });
    });
sociallinkRouter
    .route('/:sociallinkId')
    .get(function (req, res) { // Get One sociallink item
        var sociallinkId = req.params.sociallinkId;

        SocialLink.findOne({ id: sociallinkId }, function (err, sociallink) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(sociallink);
        });
    })
    .put(function (req, res) { // Update one sociallink item
        var sociallinkId = req.params.sociallinkId;

        SocialLink.findOne({ id: sociallinkId }, function (err, sociallink) {
            if (err) {
                res.status(500).send(err);
            }

            if (sociallink) {
                sociallink.name = req.body.name;
                sociallink.icon = req.body.icon;
                sociallink.linkUrl = req.body.linkUrl;

                sociallink.save();

                res.json(sociallink);
                return;
            }

            res.status(404).json({
                message: 'Social Link not found'
            });
        });
    })
    .patch(function (req, res) {
        var sociallinkId = req.params.sociallinkId;

        SocialLink.findOne({ id: sociallinkId }, function (err, sociallink) {
            if (err) {
                res.status(500).send(err);
            }

            if (sociallink) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof sociallink[property] !== 'undefined') {
                            sociallink[property] = req.body[property];
                        }
                    }
                }
            }
            
            sociallink.save();

            res.json(sociallink);
            return;
        });
    })
    .delete(function (req, res) {
        var sociallinkId = req.params.sociallinkId;

        SocialLink.findOne({ id: sociallinkId }, function (err, sociallink) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (sociallink) {
                sociallink.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'Social Link is deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'Item was not found'
                });
            }
            
        });
    })

module.exports = sociallinkRouter;
