// Module dependencies
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , AppUser = require('./models/appUser')
//  , State = require('./models/state')
  , util = require('util');

// connect to database
module.exports = {
  // Define class variable
  myEventID: null,

  // initialize DB
  startup: function(dbToUse) {
    mongoose.connect(dbToUse);
    // Check connection to mongoDB
    mongoose.connection.on('open', function() {
      console.log('We have connected to mongodb');
    });

  },

  // disconnect from database
  closeDB: function() {
    mongoose.disconnect();
  },

  // get all the customers
  getAppUsers: function(callback) {
    console.log('*** accessDB.getAppUsers');
    AppUser.find({}, function(err, customers) {//{'_id': 0, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'orders': 1, 'orderCount': 1, 'gender': 1, 'id': 1}, function(err, customers) {
      callback(null, customers);
    });
  },

  // get the customer summary
  // getCustomersSummary: function(callback) {
  //   console.log('*** accessDB.getCustomersSummary');
  //   AppUser.find({}, {'_id': 0, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'orders': 1, 'orderCount': 1, 'gender': 1, 'id': 1}, function(err, customersSummary) {
  //     callback(null, customersSummary);
  //   });
  // },

  // get a  customer
  getAppUser: function(email, callback) {
    console.log('*** accessDB.getAppUser');
    AppUser.find({'email': email}, {}, function(err, user) {
      callback(null, user[0]);
    });
  },

  // insert a  appUser
  insertAppUser: function(req_body, callback) {
    console.log('*** accessDB.insertAppUser');

    var appUser = new AppUser();
  //  var s = {'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name}


    appUser.userName = req_body.userName;
    appUser.password = req_body.password;
    appUser.email = req_body.email;
    appUser.isAdmin = req_body.isAdmin;
    appUser.gender = req_body.gender;

  //  appUser.id = 1; // The id is calculated by the Mongoose pre 'save'.

    appUser.save(function(err, user) {
      if (err) {console.log('*** new appUser save err: ' + err); return callback(err); }

      callback(null, appUser.email);
    });
  },

  editAppUser: function(email, req_body, callback) {
    console.log('*** accessDB.editCustomer');

    AppUser.findOne({'email': email}, {}, function(err, appUser) {
      if (err) { return callback(err); }

      appUser.email = req_body.email || appUser.email;
      appUser.userName = req_body.userName || appUser.userName;
      appUser.password = req_body.password || appUser.password;
      appUser.isAdmin = req_body.isAdmin || appUser.isAdmin;
      appUser.gender = req_body.gender || appUser.gender;

      appUser.save(function(err) {
        if (err) { console.log('*** accessDB.editCustomer err: ' + err); return callback(err); }

        callback(null);
      });

    });
  },

  // delete a customer
  deleteAppUser: function(email, callback) {
    console.log('*** accessDB.deleteAppUser');
    AppUser.remove({'email': email}, function(err, user) {
      callback(null);
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
