var express = require('express');
var Banner = require('../models/Banner');

var bannerRouter = express.Router();

bannerRouter
    .route('/')
    .post(function (req, res) { // Create New Banner
        var banner = new Banner(req.body);
        banner.save();
        res.status(201).send(banner);
    })
    .get(function (req, res) { // Get Banners
        Banner.find(function (err, banners) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(banners);
        });
    });
bannerRouter
    .route('/:bannerId')
    .get(function (req, res) { // Get One banner item
        var bannerId = req.params.bannerId;

        Banner.findOne({ id: bannerId }, function (err, banner) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(banner);
        });
    })
    .put(function (req, res) { // Update one banner item
        var bannerId = req.params.bannerId;

        Banner.findOne({ id: bannerId }, function (err, banner) {
            if (err) {
                res.status(500).send(err);
            }

            if (banner) {
                banner.title = req.body.title;
                banner.description = req.body.description;

                banner.save();

                res.json(banner);
                return;
            }

            res.status(404).json({
                message: 'Banner was not found'
            });
        });
    })
    .patch(function (req, res) {
        var bannerId = req.params.bannerId;

        Banner.findOne({ id: bannerId }, function (err, banner) {
            if (err) {
                res.status(500).send(err);
            }

            if (banner) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof banner[property] !== 'undefined') {
                            banner[property] = req.body[property];
                        }
                    }
                }
            }
            
            banner.save();

            res.json(banner);
            return;
        });
    })
    .delete(function (req, res) {
        var bannerId = req.params.bannerId;

        Banner.findOne({ id: bannerId }, function (err, banner) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (banner) {
                banner.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'Banner is Deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'Banner was not found'
                });
            }
            
        });
    })

module.exports = bannerRouter;
