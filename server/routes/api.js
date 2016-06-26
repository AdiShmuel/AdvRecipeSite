var db = require('../accessDB')
  , util = require('util');

// GET
exports.appUsers = function (req, res) {
  console.log('*** appUsers');

  db.getAppUsers(function(err, appUsers) {
    if (err) {
      console.log('*** appUsers err');
      res.json({
        appUsers: appUsers
      });
    } else {
      console.log('*** appUsers ok');

      res.json(appUsers);
    }
  });
};

exports.appUser = function (req, res) {
  console.log('*** appUser');

  db.getAppUser(req.params.id, function(err, appUser) {
    if (err) {
      console.log('*** appUser err');
      res.json({
        appUser: appUser
      });
    } else {
      console.log('*** appUser ok');

      res.json(appUser);
    }
  });
};

exports.addAppUser = function (req, res) {
  console.log('*** addAppUser' + req.body);
  // db.getState(req.body.stateId, function(err, state) {
  //   if (err) {
  //     console.log('*** getState err');
  //     res.json({'status': false});
  //   } else {
      db.insertAppUser(req.body, function(err){
        if (err) {
          console.log('*** addAppUser err');
          res.json(false);
        } else {
          console.log('*** addAppUser ok');

          res.json(req.body);
        }
      });
   // }
  // });
};

 exports.editAppUser = function (req, res) {
  console.log('*** editAppUser');

  //db.getState(req.body.stateId, function(err, state) {
    // if (err) {
    //   console.log('*** getState err');
    //   res.json({'status': false});
    // } else {
      db.editAppUser(req.params.id, req.body, function(err) {
        if (err) {
          console.log('*** editAppUser err' + util.inspect(err));
          res.json({'status': false});
        } else {
          console.log('*** editAppUser ok');

          res.json({'status': true});
        }
      });
    //}
 // });
};

exports.deleteAppUser = function (req, res) {
  console.log('*** deleteAppUser');

  db.deleteAppUser(req.params.id, function(err) {
    if (err) {
      console.log('*** deleteAppUser err');
      res.json({'status': false});
    } else {
      console.log('*** deleteAppUser ok');
      res.json({'status': true});
    }
  });
};

// // GET
// exports.states = function (req, res) {
//   console.log('*** states');
//   db.getStates(function(err, states) {
//
//     if (err) {
//       console.log('*** states err');
//       res.json({
//         states: states
//       });
//     } else {
//       console.log('*** states ok');
//       res.json(states);
//     }
//   });
// };

// exports.customersSummary = function (req, res) {
//   console.log('*** customersSummary');
//   db.getCustomersSummary(function(err, customersSummary) {
//     if (err) {
//       console.log('*** customersSummary err');
//       res.json({
//         data: customersSummary
//       });
//     } else {
//       console.log('*** customersSummary ok');
//       res.json(customersSummary);
//     }
//   });
// };

// exports.checkEmail = function (req, res) {
//   console.log('*** checkEmail');
//
//   db.getCustomerEmail(req.query.value, function(err, customer) {
//     if (err) {
//       console.log('*** getUserEmail err');
//       res.json({
//         customer: customer
//       });
//     } else {
//       console.log('*** getCustomerEmail ok');
//       res.json({'status': (customer === undefined)});
//     }
//   });
// };





