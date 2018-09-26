var express = require('express');
var SamplePageData = require('../models/SamplePageData');

var samplepageDataRouter = express.Router();

samplepageDataRouter
    .route('/')
    .post(function (req, res) { // Create New Banner
        var samplepageData = new SamplePageData(req.body);
        samplepageData.save();
        res.status(201).send(samplepageData);
    })
    .get(function (req, res) { // Get samplepageDataes
        SamplePageData.find(function (err, samplepageDatas) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(samplepageDatas);
        });
    });
samplepageDataRouter
    .route('/:samplepageDataId')
    .get(function (req, res) { // Get One banner item
        var samplepageDataId = req.params.samplepageDataId;

        SamplePageData.findOne({ id: samplepageDataId }, function (err, samplepageData) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(samplepageData);
        });
    })
    .put(function (req, res) { // Update one banner item
        var samplepageDataId = req.params.samplepageDataId;

        SamplePageData.findOne({ id: samplepageDataId }, function (err, samplepageData) {
            if (err) {
                res.status(500).send(err);
            }

            if (samplepageData) {
                samplepageData.page = req.body.page;
                samplepageData.image = req.body.image;
                samplepageData.text = req.body.text;

                samplepageData.save();

                res.json(samplepageData);
                return;
            }

            res.status(404).json({
                message: 'samplepageData was not found'
            });
        });
    })
    .patch(function (req, res) {
        var samplepageDataId = req.params.samplepageDataId;

        SamplePageData.findOne({ id: samplepageDataId }, function (err, samplepageData) {
            if (err) {
                res.status(500).send(err);
            }

            if (samplepageData) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof samplepageData[property] !== 'undefined') {
                            samplepageData[property] = req.body[property];
                        }
                    }
                }
            }
            
            samplepageData.save();

            res.json(samplepageData);
            return;
        });
    })
    .delete(function (req, res) {
        var samplepageDataId = req.params.samplepageDataId;

        SamplePageData.findOne({ id: samplepageDataId }, function (err, samplepageData) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (samplepageData) {
                samplepageData.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'samplepageData is Deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'samplepageData was not found'
                });
            }
            
        });
    })

module.exports = samplepageDataRouter;
