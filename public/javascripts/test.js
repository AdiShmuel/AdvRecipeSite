/**
 * Created by user9 on 6/25/2016.
 */
var c = {'userName': "Gal Cohen"// nameGenderHost[0]
    , 'password': "1234"// nameGenderHost[1]
    , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
    , 'isAdmin': true// addresses[i]
    , 'gender': "M"//cityState[0]

};

var path = "/api/dataservice/AddAppUser";
$.ajax({
    type: "POST",
    url: path,
    data: c,
    success: function () {
        alert("success");
    },
    fail: function () {
        alert("fail");
    },
    dataType: "json"
});
//     window.screenMessages = data;
//     if (data.length > 0){
//         findFirstMessage(0);
//     } else{
//         $("#messagesView").text("There are no messages");
//     }
// });