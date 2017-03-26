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
}
szChange.addEventListener("click",changeSize);


var changeText = function() {
    console.log(newText.value);
    words.innerHTML = newText.value;
}
txChange.addEventListener("click",changeText);
