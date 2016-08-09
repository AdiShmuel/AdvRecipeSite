// Module dependencies
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , Recipe = require('./../models/recipe')
    , Category = require('./../models/category')
    , RecipeModel = require('./../models/recipe')

Recipe = RecipeModel.scehma;

// connect to database
var local = module.exports = {
    getAllRecipes: function (callback) {
        console.log('*** getAllRecipes AccessDB');
        Recipe.find({}, function (err, recipes) {//{'_id': 0, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'orders': 1, 'orderCount': 1, 'gender': 1, 'id': 1}, function(err, customers) {
            callback(null, recipes);
        });
    },
    getRecipeById: function (id, callback) {
        console.log('*** GetRecipeById AccessDB');
        Recipe.findOne({'id': id}, {}, function (err, recipe) {
            callback(null, recipe);
        });
    },
    getRecipesByAppUser: function (email, callback) {
        console.log('*** GetRecipesByAppUser AccessDB');
        Recipe.find({'user': email}, {}, function (err, recipes) {
            callback(null, recipes);
        });
    },
    getRecipesByCategory: function (id, callback) {
        console.log('*** GetRecipesByCategory AccessDB');
        Recipe.find({ 'categories': { $in: [ id ] } }, {}, function (err, recipes) { //find object that have in the categories array specific categopry
            callback(null, recipes);
        });
    },
    createRecipe: function (req_body, callback) {
        console.log('*** CreateRecipe AccessDB');
        var recipe = new Recipe();
        recipe.title = req_body.title;
        recipe.content = req_body.content;
        if (req_body.image) {
            var b64 = req_body.image.replace(/^data:image\/.+;base64,/, "");
            var binaryData  =   new Buffer(b64, 'base64');
            recipe.image = binaryData;
            recipe.imageType = req_body.imageType;
        }
        recipe.likeAmount = req_body.likeAmount;
        recipe.categories = req_body.categories;
        recipe.user = req_body.user;

        var counter = RecipeModel.counter;
        counter(function (err, count) {
            if (err) {
                console.log('*** CreateRecipe AccessDB Err on Incrasing Index: ' + err);
                RecipeModel.updateCounter(); //for problem that id not move
            }
            else {
                recipe.id = count;
                recipe.save(function (err) {
                    if (err) {
                        console.log('*** CreateRecipe AccessDB Err On saving: ' + err);
                        callback(err);
                    }
                    else {
                        RecipeModel.updateCounter();
                        callback(null, recipe.id);
                    }
                });
            }
        });
    },
    editRecipe: function (req_body, callback) {
        console.log('*** EditRecipe AccessDB');

        Recipe.findOne({'id': req_body.id}, {}, function (err, recipe) {
            if (err) {
                return callback(err);
            }

            recipe.title = req_body.title || recipe.title;
            recipe.content = req_body.content || recipe.content;
            recipe.image = req_body.image;
            recipe.likeAmount = req_body.likeAmount || recipe.likeAmount;
            recipe.categories = req_body.categories;
            recipe.user = req_body.user || recipe.user;
            recipe.save(function (err) {
                if (err) {
                    console.log('*** accessDB.editRecipe err: ' + err);
                    return callback(err);
                }
                callback(null);
            });
        })
    },
    likeRecipe: function (req_body, callback) {
        console.log('*** LikeRecipe AccessDB');

        Recipe.findOne({'id': req_body.id}, {}, function (err, recipe) {
            if (err) {
                return callback(err);
            }

            recipe.likeAmount++;
            recipe.save(function (err) {
                if (err) {
                    console.log('*** accessDB.likeRecipe err: ' + err);
                    return callback(err);
                }
                callback(null);
            });
        })
    },
    unlikeRecipe: function (req_body, callback) {
        console.log('*** UnlikeRecipe AccessDB');

        Recipe.findOne({'id': req_body.id}, {}, function (err, recipe) {
            if (err) {
                return callback(err);
            }

            recipe.likeAmount--;
            recipe.save(function (err) {
                if (err) {
                    console.log('*** accessDB.unlikeRecipe err: ' + err);
                    return callback(err);
                }
                callback(null);
            });
        })
    },
    deleteRecipesByAppUser: function (email, callback) {
        console.log('*** DeleteRecipesByAppUser AccessDB');
        Recipe.remove({'user': email}, function (err) {
            callback(err);
        });
    },
    deleteRecipeById: function (id, callback) {
        console.log('*** DeleteRecipeById AccessDB');
        Recipe.remove({'id': id}, function (err) {
            callback(err);
        });
    },
    //delete the category in the recipe
    deleteRecipesCategory: function (categoryId, callback) {
        console.log('*** DeleteRecipesCategory AccessDB');
        local.getRecipesByCategory(categoryId, function (err, recipes) {
            recipes.forEach(function (recipe) {
                recipe.categories.remove(categoryId);
                local.editRecipe(recipe, function (err) {
                });
            });
        });
    },
    deleteRecipe: function (id, callback) {
        console.log('*** DeleteIngredient AccessDB');
        Recipe.remove({'id': id}, function (err) {
            callback(null);
        });
    }
}