var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var SettingsSchema = new Schema({
    collectionName : {
        type : String, required: true, trim: true, default: 'appUsers'
    },
    nextSeqNumber: {
        type: Number, default: 1
    }
});

var AppUserSchema = new Schema({
    userName : {
        type : String, required: true, trim: true
    },
    password : {
        type : String, required: true, trim: true
    },
    email : {
        type : String, required: true, trim: true, unique: true
    },
    isAdmin: {
        type : Boolean, required: true
    },
    gender : {
        type: String, required: true, trim: true
    }
    // id : {
    //     type : Number, required: true, unique: true
    // }
});

AppUserSchema.index({ email: 1, type: 1 }); // schema level

// I make sure this is the last pre-save middleware (just in case)
//var Settings = mongoose.model('settings', SettingsSchema);

// AppUserSchema.pre('save', function(next) {
//     var doc = this;
//     // Calculate the next id on new Customers only.
//     if (this.isNew) {
//         Settings.findOneAndUpdate( {"collectionName": "appUsers"}, { $inc: { nextSeqNumber: 1 } }, function (err, settings) {
//             if (err) next(err);
//             doc.id = settings.nextSeqNumber - 1; // substract 1 because I need the 'current' sequence number, not the next
//             next();
//         });
//     } else {
//         next();
//     }
// });

exports.AppUserSchema = AppUserSchema;
module.exports = mongoose.model('AppUser', AppUserSchema);
