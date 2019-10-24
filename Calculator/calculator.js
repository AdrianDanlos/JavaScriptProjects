var keyEl = document.getElementsByClassName("key");
var inputEl = document.getElementById("input");
var string1;
var string2 = "3";
var int1 = parseInt(string1, 10);
var int2 = parseInt(string2, 10);
var operacion;

function asignarOperador(i) {
    return function() {
        switch (i) {
            case 19:
                operacion = "+";
        }
    }
}
/*function llamarOperacion(operacion) {
    return function() {
        switch (operacion) {
            case "+" = add();
        }
    }
}*/
//
for (i = 0; i < keyEl.length; i++) {
    keyEl[i].addEventListener("mousedown", giveBorder(i));
    keyEl[i].addEventListener("mousedown", saveNumber(i));
    keyEl[i].addEventListener("mousedown", asignarOperador(i));
    keyEl[i].addEventListener("mouseup", removeBorder(i));
    keyEl[i].addEventListener("click", toInput(i));
}
keyEl[18].addEventListener("click", llamarOperacion(operacion));
//a revisar
function saveNumber(i) {
    return function() {
        if (keyEl[i].classList.contains("number")) {
            if (!string1) { //if string is empty
                string1 = inputEl.innerHTML;
            } else {
                string2 = 3;
            }
        }
    }
}

function giveBorder(i) {
    return function() {
        keyEl[i].style.border = "1px solid white";
    }
}

function removeBorder(i) {
    return function() {
        keyEl[i].style.border = "1px solid transparent";
    }
}

function toInput(i) {
    return function() {
        if (i !== 18) { // = 
            if (i == 2 || i == 7 || i == 11 || i == 15 || i == 19) {
                input.innerHTML += " " + keyEl[i].textContent + " ";
            } else {
                input.innerHTML += keyEl[i].textContent;
            }
        }
    }
}
keyEl[3].addEventListener("click", erase);

function erase() {
    inputEl.innerHTML = "";
}
//sumar a revisar
function add(int1, int2) {
    return function() {
        string1 = int1 + int2;
        inputEl.innerHTML = string1;
    }
}
/*keyEl[18].addEventListener("click", equal);

function equal() {
    var int = parseInt(inputEl.innerHTML, 10);
    console.log(int);
    inputEl.innerHTML = ;
}*/