var express = require('express');
var ContactUs = require('../models/ContactUs');

var contactusRouter = express.Router();

contactusRouter
    .route('/')
    .post(function (req, res) { // Create New Banner
        var contactus = new ContactUs(req.body);
        contactus.save();
        res.status(201).send(contactus);
    })
    .get(function (req, res) { // Get ContactUses
        ContactUs.find(function (err, contactuses) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(contactuses);
        });
    });
contactusRouter
    .route('/:contactusId')
    .get(function (req, res) { // Get One banner item
        var contactusId = req.params.contactusId;

        ContactUs.findOne({ id: contactusId }, function (err, contactus) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(contactus);
        });
    })
    .put(function (req, res) { // Update one banner item
        var contactusId = req.params.contactusId;

        ContactUs.findOne({ id: contactusId }, function (err, contactus) {
            if (err) {
                res.status(500).send(err);
            }

            if (contactus) {
                contactus.title = req.body.title;
                contactus.description = req.body.description;

                contactus.save();

                res.json(contactus);
                return;
            }

            res.status(404).json({
                message: 'ContactUs was not found'
            });
        });
    })
    .patch(function (req, res) {
        var contactusId = req.params.contactusId;

        ContactUs.findOne({ id: contactusId }, function (err, contactus) {
            if (err) {
                res.status(500).send(err);
            }

            if (contactus) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof contactus[property] !== 'undefined') {
                            contactus[property] = req.body[property];
                        }
                    }
                }
            }
            
            contactus.save();

            res.json(contactus);
            return;
        });
    })
    .delete(function (req, res) {
        var contactusId = req.params.contactusId;

        ContactUs.findOne({ id: contactusId }, function (err, contactus) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (contactus) {
                contactus.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'ContactUs is Deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'ContactUs was not found'
                });
            }
            
        });
    })

module.exports = contactusRouter;
