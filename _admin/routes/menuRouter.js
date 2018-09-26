var express = require('express');
var Menu = require('../models/Menu');

var menuRouter = express.Router();

menuRouter
    .route('/')
    .post(function (req, res) { // Create New Menu
        var menu = new Menu(req.body);
        console.log(menu);
        menu.save();
        res.status(201).send(menu);
    })
    .get(function (req, res) { // Get Menus
        Menu.find(function (err, menus) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(menus);
        });
    });
menuRouter
    .route('/:menuId')
    .get(function (req, res) { // Get One menu item
        var menuId = req.params.menuId;

        Menu.findOne({ id: menuId }, function (err, menu) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(menu);
        });
    })
    .put(function (req, res) { // Update one menu item
        var menuId = req.params.menuId;

        Menu.findOne({ id: menuId }, function (err, menu) {
            if (err) {
                res.status(500).send(err);
            }

            if (menu) {
                menu.name = req.body.name;
                menu.linkUrl = req.body.linkUrl;

                menu.save();

                res.json(menu);
                return;
            }

            res.status(404).json({
                message: 'Menu not found'
            });
        });
    })
    .patch(function (req, res) {
        var menuId = req.params.menuId;

        Menu.findOne({ id: menuId }, function (err, menu) {
            if (err) {
                res.status(500).send(err);
            }

            if (menu) {
                for (var property in req.body) {
                    if (req.body.hasOwnProperty(property)) {
                        if (typeof menu[property] !== 'undefined') {
                            menu[property] = req.body[property];
                        }
                    }
                }
            }
            
            menu.save();

            res.json(menu);
            return;
        });
    })
    .delete(function (req, res) {
        var menuId = req.params.menuId;

        Menu.findOne({ id: menuId }, function (err, menu) {
            
            if(err) {
                res.status(500).send(err);
                return;
            }

            if (menu) {
                menu.remove(function (err) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'Menu is deleted'
                    });
                });
            } else {
                res.status(404).json({
                    'message': 'Item was not found'
                });
            }
            
        });
    })

module.exports = menuRouter;
