var db = require('../accessDb/ingredientADB')
    , util = require('util');

///////////////// appUser
exports.getIngredientsByAppUser = function (req, res) {
    console.log('*** GetIngredientsByAppUser API');
    db.getIngredientsByAppUser(req.params.email, function(err, ingredients) {
        if (err) {
            console.log('*** GetIngredientsByAppUser API Err');
            res.json({
                ingredients: ingredients
            });
        } else {
            console.log('*** GetIngredientsByAppUser API OK');
            res.json(ingredients);
        }
    });
};

exports.deleteIngredientsByAppUser = function (req, res) {
    console.log('*** DeleteIngredientsByAppUser API');
    db.deleteIngredientsByAppUser(req.params.email, function(err) {
        if (err) {
            console.log('*** DeleteIngredientsByAppUser API Err');
            res.json({'status': false});
        } else {
            console.log('*** DeleteIngredientsByAppUser API OK');
            res.json({'status': true});
        }
    });
};

exports.createIngredient = function (req, res) {
    console.log('*** CreateIngredient API');
    db.createIngredient(req.body, function(err){
        if (err) {
            console.log('*** CreateIngredient API Err');
            res.json(false);
        } else {
            console.log('*** CreateIngredient API OK');
            res.json(req.body);
        }
    });
};

exports.editIngredient = function (req, res) {
    console.log('*** EditIngredient API');
    db.editIngredient(req.body, function(err) {
        if (err) {
            // console.log('*** editAppUser err' + util.inspect(err));
            console.log('*** EditIngredient API Err');
            res.json({'status': false});
        } else {
            console.log('*** EditIngredient API OK');

            res.json({'status': true});
        }
    });
};

exports.deleteIngredient = function (req, res) {
    console.log('*** DeleteIngredient API');
    db.deleteIngredient(req.params.id, function(err) {
        if (err) {
            console.log('*** DeleteIngredient API Err');
            res.json({'status': false});
        } else {
            console.log('*** DeleteIngredient API OK');
            res.json({'status': true});
        }
    });
};
