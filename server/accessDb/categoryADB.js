// Module dependencies
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , CategoryModel = require('./../models/category')
    , Recipe = require('./../models/recipe')

Category = CategoryModel.schema;
module.exports = {
    getAllCategories: function(callback) {
        console.log('*** GetAllCategories AccessDB');
        Category.find({}, function(err, categories) {//{'_id': 0, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'orders': 1, 'orderCount': 1, 'gender': 1, 'id': 1}, function(err, customers) {
            callback(null, categories);
        });
    },
    getAllCategoriesRecipes: function(callback) {
        console.log('*** GetAllCategoriesRecipes AccessDB');
        Category.aggregate([
            { $lookup: { from: "recipes", localField: "id", foreignField: "categories", as: "recipes" } },
            { $project: { id: 1, name: 1, recipes: { $size: "$recipes" } } },
            { $sort: { "recipes": -1 } }
        ], function(err, categories) {
            callback(null, categories);
        });
    },
    getCategory: function(name, callback) {
        console.log('*** GetCategory AccessDB');
        Category.find({'name': name}, function(err, category) {//{'_id': 0, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'orders': 1, 'orderCount': 1, 'gender': 1, 'id': 1}, function(err, customers) {
            callback(null, category);
        });
    },
    createCategory: function(req_body, callback) {
        console.log('*** CreateCategory AccessDB');

        var category = new Category();
        //  var s = {'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name}

        category.name = req_body.name;
        category.image = req_body.image;

        //  appUser.id = message = "req_body is not defined"1; // The id is calculated by the Mongoose pre 'save'.
        var counter =  CategoryModel.counter;
        counter(function(err,count) {
            if (err) {
                console.log('*** CreateCategory AccessDB Err on Incrasing Index: ' + err);
            }
            else
            {
                category.id = count;
                category.save(function (err) {
                    if (err) {
                        console.log('*** CreateCategory AccessDB Err On saving: ' + err);
                        callback(err);
                    }
                    else {
                        CategoryModel.updateCounter();
                        callback(null);
                    }
                });
            }
        });
    },
    editCategory: function(req_body, callback) {
        console.log('*** EditCategory AccessDB');

        Category.findOne({'id': req_body.id}, {}, function(err, category) {
            if (err) { return callback(err); }

            category.image = req_body.image;
            category.name = req_body.name || category.name;
            category.save(function(err) {
                if (err) {
                    console.log('*** EditCategory AccessDB Err: ' + err); return callback(err); }
            });

        });
    },
    deleteCategory: function(id, callback) {
        console.log('*** DeleteCategory AccessDB');
        Category.remove({'id': id}, function(err) {
            callback(null);
        });
    }
}
