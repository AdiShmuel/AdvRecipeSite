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
    getRecipesByAppUser: function (email, callback) {
        console.log('*** GetRecipesByAppUser AccessDB');
        Recipe.findOne({'user': email}, {}, function (err, recipe) {
            callback(null, recipe);
        });
    },
    getRecipesByCategory: function (id, callback) {
        console.log('*** GetRecipesByCategory AccessDB');
        Recipe.find({'categories': {"$in": [id]}}, {}, function (err, recipes) { //find object that have in the categories array specific categopry
            callback(null, recipes);
        });
    },
    searchRecipes: function (req_body, callback) {
        console.log('*** searchRecipes AccessDB');

        var query = [];

        for (var fieldName in req_body)
        {
            if(req_body.hasOwnProperty(fieldName))  //no inherited properties
            {
                if(req_body[fieldName])  //get rid of empty fields
                {
                    query[fieldName] = req_body[fieldName];
                    // query.where(fieldName).equals(req_body[fieldName]);
                }
            }
        }

        Recipe.find({$and: [query]}, function (err, recipes) {
            console.log(Console);
        });

        //
        // query.exec(function(err,recipes)
        // {
        //     callback(null, recipes);
        // });

        //
        // Recipe.find(
        //     {'categories': {"$in": [req_body.category]},
        //         'title' : {$regex : ".*" + req_body.title + ".*"},
        //             'user' : {$regex : ".*" + req_body.author + ".*"}}, {},
        //     function (err, recipes) {
        //     callback(null, recipes);
        // });
    },
    createRecipe: function (req_body, callback) {
        console.log('*** CreateRecipe AccessDB');
        var recipe = new Recipe();
        recipe.title = req_body.title;
        recipe.content = req_body.content;
        recipe.image = req_body.image;
        recipe.likeAmount = req_body.likeAmount;
        recipe.categories = req_body.categories;
        recipe.user = req_body.user;

        var counter = RecipeModel.counter;
        counter(function (err, count) {
            if (err) {
                console.log('*** CreateRecipe AccessDB Err on Incrasing Index: ' + err);
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
                        callback(null);
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