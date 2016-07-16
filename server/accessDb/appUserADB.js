// Module dependencies
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , AppUser = require('./../models/appUser')
  , Recipe = require('./../models/recipe').schema
  , Ingredient = require('./../models/ingredient').schema

// connect to database
module.exports = {
  // get all the customers
  getAppUsers: function(callback) {
    console.log('*** GetAppUsers AccessDB');
    AppUser.find({}, function(err, customers) {//{'_id': 0, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'orders': 1, 'orderCount': 1, 'gender': 1, 'id': 1}, function(err, customers) {
      callback(null, customers);
    });
  },
  getAllAppUsersRecipes: function(callback) {
    console.log('*** GetAllAppUsersRecipes AccessDB');
    AppUser.aggregate([
            { $lookup: { from: "recipes", localField: "email", foreignField: "user", as: "recipes" } },
            { $project: { email: 1, recipes: { $size: "$recipes" } } },
            { $sort: { "recipes": -1 } }
        ], function(err, customers) {
      callback(null, customers);
    });
  },
  // get a  customer
  getAppUser: function(email, callback) {
    console.log('*** GetAppUser AccessDB');
    AppUser.find({'email': email}, {}, function(err, user) {
      callback(null, user[0]);
    });
  },

  // insert a  appUser
  createAppUser: function(req_body, callback) {
    console.log('*** CreateAppUser AccessDB');

    var appUser = new AppUser();
  //  var s = {'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name}


    appUser.userName = req_body.userName;
    appUser.password = req_body.password;
    appUser.email = req_body.email;
    appUser.isAdmin = req_body.isAdmin;
    appUser.gender = req_body.gender;
    // appUser.recipes = [];
    // appUser.ingredients = [];

  //  appUser.id = 1; // The id is calculated by the Mongoose pre 'save'.

    //appUser.save(function(err, user) {
    appUser.save(function(err) {
      if (err) {console.log('*** new appUser save err: ' + err); return callback(err); }

      callback(null, appUser.email);
    });
  },

  editAppUser: function(req_body, callback) {
    console.log('*** EditAppUser AccessDB');

    AppUser.findOne({'email': req_body.email}, {}, function(err, appUser) {
      if (err) { return callback(err); }
      
      appUser.userName = req_body.userName || appUser.userName;
      appUser.password = req_body.password;
      appUser.isAdmin = req_body.isAdmin || appUser.isAdmin;
      appUser.gender = req_body.gender || appUser.gender;
      // appUser.recipes = req_body.recipes ;
      // appUser.ingredients = req_body.ingredients || appUser.ingredients;

      appUser.save(function(err) {
        if (err) { console.log('*** accessDB.editCustomer err: ' + err); return callback(err); }

        callback(null);
      });

    });
  },
  
  deleteAppUser: function(email, callback) {
    console.log('*** DeleteAppUser AccessDB');
    AppUser.remove({'email': email}, function(err) {
      if (err) { callback(err); }
      else{callback(null)}
    });
  }

  // // get a  customer's email
  // getCustomerEmail: function(email, callback) {
  //   console.log('*** accessDB.getCustomerEmail');
  //   Customer.find({'email': email}, {'_id': 1}, function(err, customer) {
  //     callback(null, customer[0]);
  //   });
  // }

// // get all the states
//   getStates: function(callback) {
//     console.log('*** accessDB.getStates');
//     State.find({}, {}, function(err, states) {
//       callback(null, states);
//     });
//   },
//
// // get a state
//   getState: function(stateId, callback) {
//     console.log('*** accessDB.getState');
//     State.find({'id': stateId}, {}, function(err, state) {
//       callback(null, state);
//     });
//   }


}
