var database = firebase.database().ref('/');
var blood = document.getElementById("blood");
var requi = document.getElementById("requi");
var country = document.getElementById("country");
var city = document.getElementById("city");
var hospital = document.getElementById("hospital");
var rel = document.getElementById("rel");
var info = document.getElementById("info");
var urgent = document.getElementById("urgent");
var number = document.getElementById("number");

var user = JSON.parse(localStorage.getItem('user'));

var uname = user.name + ' ' + user.lname;

console.log(uname);

function submit() {

    let obj = {
        blood: blood.value,
        requi: requi.value,
        urgent: urgent.value,
        country: country.value,
        city: city.value,
        hospital: hospital.value,
        rel: rel.value,
        number: number.value,
        info: info.value,
        uname: uname

    }
    let userID = localStorage.getItem('uid');

    database.child('users/' + userID + '/donate').push(obj)
    database.child('alldonate').push(obj);




    blood.value = "";
    requi.value = "";
    urgent.value = "";
    country.value = "";
    city.value = "";
    hospital.value = "";
    rel.value = "";
    number.value = "";
    info.value = "";
    location = "home.html";


}