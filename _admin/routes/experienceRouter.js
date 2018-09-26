var express = require('express');
var Experience = require('../models/Experience');

var experienceRouter = express.Router();

experienceRouter
    .route('/')
    .post(function (req, res) { // Create New experience
        var experience = new Experience(req.body);
        console.log(experience);
        experience.save();
        res.status(201).send(experience);
    })
    .get(function (req, res) { // Get experiences
        Experience.find(function (err, experiences) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(experiences);
        });
    });
experienceRouter
    .route('/:experienceId')
    .get(function (req, res) { // Get One experience item
        var experienceId = req.params.experienceId;

        Experience.findOne({ id: experienceId }, function (err, experience) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(experience);
        });
    })
    .put(function (req, res) { // Update one experience item
        var experienceId = req.params.experienceId;

        Experience.findOne({ id: experienceId }, function (err, experience) {
            if (err) {
                res.status(500).send(err);
            }

            if (experience) {
                experience.name = req.body.name;
                experience.linkUrl = req.body.linkUrl;

                experience.save();

                res.json(experience);
                return;
            }

            res.status(404).json({
                message: 'experience not found'
            });
        });
    })
    .patch(function (req, res) {
        var experienceId = req.params.experienceId;

        Experience.findOne({ id: experienceId }, function (err, experience) {
            if (err) {
                res.status(500).send(err);
            }

            if (experience) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof experience[property] !== 'undefined') {
                            experience[property] = req.body[property];
                        }
                    }
                }
            }
            
            experience.save();

            res.json(experience);
            return;
        });
    })
    .delete(function (req, res) {
        var experienceId = req.params.experienceId;

        Experience.findOne({ id: experienceId }, function (err, experience) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (experience) {
                experience.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'experience is deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'Item was not found'
                });
            }
            
        });
    })

module.exports = experienceRouter;
