var express = require('express');
var Image = require('../models/Image');

var imageRouter = express.Router();

imageRouter
    .route('/')
    .post(function (req, res) { // Create New Image
        var image = new Image(req.body);
        image.save();
        res.status(201).send(image);
    })
    .get(function (req, res) { // Get images
        Image.find(function (err, images) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(images);
        });
    });
imageRouter
    .route('/:imageId')
    .get(function (req, res) { // Get One menu item
        var imageId = req.params.imageId;

        Image.findOne({ id: imageId }, function (err, image) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(image);
        });
    })
    .put(function (req, res) { // Update one menu item
        var imageId = req.params.imageId;

        Image.findOne({ id: imageId }, function (err, image) {
            if (err) {
                res.status(500).send(err);
            }

            if (image) {
                image.phone_img  = req.body.phone_img;
                image.desktop_img = req.body.desktop_img;
                image.alt_text = req.body.alt_text;

                image.save();

                res.json(image);
                return;
            }

            res.status(404).json({
                message: 'Image not found'
            });
        });
    })
    .patch(function (req, res) {
        var imageId = req.params.imageId;

        Image.findOne({ id: imageId }, function (err, image) {
            if (err) {
                res.status(500).send(err);
            }

            if (image) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof image[property] !== 'undefined') {
                            image[property] = req.body[property];
                        }
                    }
                }
            }
            
            image.save();

            res.json(image);
            return;
        });
    })
    .delete(function (req, res) {
        var imageId = req.params.imageId;

        Image.findOne({ id: imageId }, function (err, image) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (image) {
                image.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'Image is deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'Image was not found'
                });
            }
            
        });
    })

module.exports = imageRouter;
