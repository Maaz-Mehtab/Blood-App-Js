var database = firebase.database().ref('/');
var onuser = localStorage.getItem('user');
var on = JSON.parse(onuser);
var a = on.name;
var b = on.lname;
var fullname = a + " " + b;
console.log(fullname);
var body = document.getElementById("body");
var userID = localStorage.getItem('uid');
database.child('alldonate').on("child_added", function(snapshot) {

    var demo = snapshot.val();
    var demoid = snapshot.key;
    var commentid = demoid;


    var divvv = document.createElement("div");
    divvv.setAttribute('class', 'container row col-xs-4 p-3 text-dark bg-light mb-3 rounded card');
    divvv.setAttribute('style', 'box-shadow: 0 0 10px 5px #E0E0E0');
    divvv.setAttribute('id', 'divvv');
    var h3 = document.createElement("h3");
    h3.setAttribute('class', 'text-center font-weight-bold text-success text-capitalize')
    var h3text = document.createTextNode(demo.uname);
    h3.appendChild(h3text);
    divvv.appendChild(h3);
    console.log(demo.name);
    var table = document.createElement("table");
    table.setAttribute('class', 'table')
    var tbody = document.createElement("tbody");

    var tr1 = document.createElement("tr");
    var th1 = document.createElement("th");
    var td1 = document.createElement("td");
    td1.setAttribute('class', 'text-danger font-weight-bold text-capitalize')
    var th1text = document.createTextNode("Blood Group");
    var td1text = document.createTextNode(demo.blood);
    th1.appendChild(th1text);
    td1.appendChild(td1text);
    tr1.appendChild(th1);
    tr1.appendChild(td1);


    var tr2 = document.createElement("tr");
    var th2 = document.createElement("th");
    var td2 = document.createElement("td");
    var th2text = document.createTextNode("Requirement");
    var td2text = document.createTextNode(demo.requi);
    th2.appendChild(th2text);
    td2.appendChild(td2text);
    tr2.appendChild(th2);
    tr2.appendChild(td2);


    var tr3 = document.createElement("tr");
    var th3 = document.createElement("th");
    var td3 = document.createElement("td");
    var th3text = document.createTextNode("Urgently");
    var td3text = document.createTextNode(demo.urgent);
    th3.appendChild(th3text);
    td3.appendChild(td3text);
    tr3.appendChild(th3);
    tr3.appendChild(td3);


    var tr4 = document.createElement("tr");
    var th4 = document.createElement("th");
    var td4 = document.createElement("td");
    var th4text = document.createTextNode("Country");
    var td4text = document.createTextNode(demo.country);
    th4.appendChild(th4text);
    td4.appendChild(td4text);
    tr4.appendChild(th4);
    tr4.appendChild(td4);


    var tr5 = document.createElement("tr");
    var th5 = document.createElement("th");
    var td5 = document.createElement("td");
    var th5text = document.createTextNode("City");
    var td5text = document.createTextNode(demo.city);
    th5.appendChild(th5text);
    td5.appendChild(td5text);
    tr5.appendChild(th5);
    tr5.appendChild(td5);


    var tr6 = document.createElement("tr");
    var th6 = document.createElement("th");
    var td6 = document.createElement("td");
    var th6text = document.createTextNode("Hospital");
    var td6text = document.createTextNode(demo.hospital);
    th6.appendChild(th6text);
    td6.appendChild(td6text);
    tr6.appendChild(th6);
    tr6.appendChild(td6);

    var tr7 = document.createElement("tr");
    var th7 = document.createElement("th");
    var td7 = document.createElement("td");
    var th7text = document.createTextNode("Relation with Patient");
    var td7text = document.createTextNode(demo.rel);
    th7.appendChild(th7text);
    td7.appendChild(td7text);
    tr7.appendChild(th7);
    tr7.appendChild(td7);

    var tr8 = document.createElement("tr");
    var th8 = document.createElement("th");
    var td8 = document.createElement("td");
    var th8text = document.createTextNode("Contact Number");
    var td8text = document.createTextNode(demo.number);
    th8.appendChild(th8text);
    td8.appendChild(td8text);
    tr8.appendChild(th8);
    tr8.appendChild(td8);


    var tr9 = document.createElement("tr");
    var th9 = document.createElement("th");
    var td9 = document.createElement("td");
    var th9text = document.createTextNode("Additional Information");
    var td9text = document.createTextNode(demo.info);
    th9.appendChild(th9text);
    td9.appendChild(td9text);
    tr9.appendChild(th9);
    tr9.appendChild(td9);

    var div = document.createElement("div");
    div.setAttribute('class', 'container');
    div.setAttribute('id', 'commentbox');

    var like = document.createElement("button")
    var liketxt = document.createTextNode("Like");
    like.setAttribute("class", 'col-sm-1 btn btn-outline-danger');
    like.setAttribute("id", 'like');
    like.appendChild(liketxt);

    var text = document.createElement("input");
    text.setAttribute('class', 'btn  col-sm-8 ');
    text.setAttribute('style', 'border :1px solid black');
    text.setAttribute('placeholder', 'Write a Comment');
    text.setAttribute('id', 'comment');
    // var textt = document.createTextNode("Comment");
    // text.appendChild(textt);

    var com = document.createElement("button");
    com.setAttribute('class', ' col-sm-2 btn btn-danger ');
    com.setAttribute('id', 'com');
    var comm = document.createTextNode("Comment");
    com.appendChild(comm);
    com.onclick = show;


    function show() {
        if (text.value == "") {
            alert("Enter Comment");
        } else {
            var comobj = {
                commment: text.value,
                name: fullname
            }



            text.value = "";

            console.log(userID);
            database.child('alldonate/' + commentid + '/comment').push(comobj);

        }
    }

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);
    tbody.appendChild(tr6);
    tbody.appendChild(tr7);
    tbody.appendChild(tr8);
    tbody.appendChild(tr9);
    table.appendChild(tbody)

    div.appendChild(like);
    div.appendChild(text);
    div.appendChild(com);


    divvv.appendChild(table);
    divvv.appendChild(div);
    body.appendChild(divvv);

    database.child('alldonate/' + commentid + '/comment').on("child_added", function(snapshot) {

        var con = snapshot.val();
        var conid = snapshot.key
        console.log(con);
        display();





        function display() {
            var di = document.createElement("div");
            di.setAttribute('class', 'mt-3 container');

            di.setAttribute('id', 'di');
            var na = document.createElement("h3");
            na.setAttribute('class', "text-success ");
            na.setAttribute('id', 'nam');
            var natxt = document.createTextNode(con.name + " :");
            na.appendChild(natxt);
            var p = document.createElement("h5");
            p.setAttribute('class', " ");
            p.setAttribute('id', 'p');
            // p.setAttribute('style','border:2px solid black');
            var ptext = document.createTextNode(con.commment);
            p.appendChild(ptext);
            di.appendChild(na);
            di.appendChild(p);
            divvv.appendChild(di);

        }

    });








})