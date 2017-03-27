/*----------
ALERT
----------*/

var alertD = document.getElementsByClassName("alert")[0]

alertD.addEventListener("click",function() {
    alert("This is an alert message!!!");
});


/*--------------
TEXT CHANGING
--------------*/

var words = document.getElementsByClassName("fonting")[0];
var szChange = document.getElementById("szChange");
var newSize = document.getElementById("newSize");
var txChange = document.getElementById("txChange");
var newText = document.getElementById("newText");


var changeSize = function() {
    words.style.fontSize = newSize.value + "px";
};
szChange.addEventListener("click",changeSize);


var changeText = function() {
    console.log(newText.value);
    words.innerHTML = newText.value;
};
txChange.addEventListener("click",changeText);


/*---------
DAYS
----------*/

var dayRes = document.getElementById("dayRes");
var day = document.getElementById("day");

var checkDay = function() {
    console.log(dayRes.innerHTML);
    var thinkDay = day.value;
    if (day.value == new Date().getDay()) {
	dayRes.innerHTML = "You are correct!";
	console.log("corr");
    }
    else {
	dayRes.innerHTML = "You are wrong!"
    }
}

day.addEventListener("change",checkDay);
