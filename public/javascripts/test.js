/**
 * Created by user9 on 6/25/2016.
 */
//
// // create new user - if try to change all columns excpet email it will throw an error
// var path = "/api/dataservice/PostAppUser";
// var c = {'userName': "Gal Cohen"// nameGenderHost[0]
//     , 'password': "1234"// nameGenderHost[1]
//     , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
//     , 'isAdmin': true// addresses[i]
//     , 'gender': "M"//cityState[0]
//
// };
//
// $.ajax({
//     type: "POST",
//     url: path,
//     data: c,
//     success: function () {
//         alert("success");
//     },
//     fail: function () {
//         alert("fail");
//     },
//     dataType: "json"
// });


// // get specific user
// var c = {'userName': "Gal Cohen"// nameGenderHost[0]
//     , 'password': "1234"// nameGenderHost[1]
//     , 'email': "galcohen92@gmail.com1"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
//     , 'isAdmin': true// addresses[i]
//     , 'gender': "M"//cityState[0]
//
// };
// var path = "/api/dataservice/AppUser/" + c.email;
// $.ajax({
//     type: "GET",
//     url: path,
//     success: function (data) {
//         alert(data);
//     },
//     fail: function () {
//         alert("fail");
//     },
//     dataType: "json"
// });

// // get all users
// var path = "/api/dataservice/AppUsers";
// $.ajax({
//     type: "GET",
//     url: path,
//     success: function (data) {
//         alert(data);
//     },
//     fail: function () {
//         alert("fail");
//     },
//     dataType: "json"
// });
//

// // edit specific user
// var c = {'userName': "Gal Cohen"// nameGenderHost[0]
//     , 'password': "12345"// nameGenderHost[1]
//     , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
//     , 'isAdmin': true// addresses[i]
//     , 'gender': "M"//cityState[0]
//
// };
// var path = "/api/dataservice/EditAppUser/" + c.email;
// $.ajax({
//     type: "PUT",
//     url: path,
//     data: c,
//     success: function () {
//         alert("success");
//     },
//     fail: function () {
//         alert("fail");
//     },
//     dataType: "json"
// });
//
// // delete specific user
// var c = {'userName': "Gal Cohen"// nameGenderHost[0]
//     , 'password': "1234"// nameGenderHost[1]
//     , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
//     , 'isAdmin': true// addresses[i]
//     , 'gender': "M"//cityState[0]
//
// };
// var path = "/api/dataservice/DeleteAppUser/" + c.email;
// $.ajax({
//     type: "DELETE",
//     url: path,
//     success: function () {
//         alert("success");
//     },
//     fail: function () {
//         alert("fail");
//     },
//     dataType: "json"
// });
