var db = require('../accessDb/recipeADB')


////////// Recipe
exports.getAllRecipes = function (req, res) {
    console.log('*** GetAllRecipes API');

    db.getAllRecipes(function(err, recipes) {
        if (err) {
            console.log('*** GetAllRecipes API Err');
            res.json({
                recipes: recipes
            });
        } else {
            console.log('*** GetAllRecipes API OK');

            res.json(recipes);
        }
    });
};

exports.getRecipesByAppUser = function (req, res) {
    console.log('*** GetRecipesByAppUser API');
    db.getRecipesByAppUser(req.params.email, function(err, recipes) {
        if (err) {
            console.log('*** GetRecipesByAppUser API Err');
            res.json({
                recipes: recipes
            });
        } else {
            console.log('*** GetRecipesByAppUser API OK');
            res.json(recipes);
        }
    });
};


exports.getRecipesByCategory = function (req, res) {
    console.log('*** GetRecipesByCategory API');
    db.getRecipesByCategory(req.params.id, function(err, recipes) {
        if (err) {
            console.log('*** GetRecipesByCategory API Err');
            res.json({
                recipes: recipes
            });
        } else {
            console.log('*** GetRecipesByCategory API OK');
            res.json(recipes);
        }
    });
};

exports.deleteRecipesByAppUser = function (req, res) {
    console.log('*** DeleteRecipesByAppUser API');
    db.deleteRecipesByAppUser(req.params.email, function(err) {
        if (err) {
            console.log('*** DeleteRecipesByAppUser API Err');
            res.json({'status': false});
        } else {
            console.log('*** DeleteRecipesByAppUser API OK');
            res.json({'status': true});
        }
    });
};

exports.createRecipe = function (req, res) {
    console.log('*** CreateRecipe API');
    db.createRecipe(req.body, function(err){
        if (err) {
            console.log('*** CreateRecipe API Err');
            res.json(false);
        } else {
            console.log('*** CreateRecipe API OK');
            res.json(req.body);
        }
    });
};

exports.editRecipe = function (req, res) {
    console.log('*** EditRecipe API');
    db.editRecipe(req.body, function(err) {
        if (err) {
            // console.log('*** editAppUser err' + util.inspect(err));
            console.log('*** EditRecipe API Err');
            res.json({'status': false});
        } else {
            console.log('*** EditRecipe API OK');

            res.json({'status': true});
        }
    });
};





