let result = document.getElementById("result")
let btn = document.querySelectorAll('.btn')
btn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        display(btn.value)
    })
})


// This function clear all the values
function clearScreen() {
    result.value = "";
}


// This function display values
function display(value) {
    if (value=='+' ||value=='-' || value=='*'||value=='/'){
        if (result.value[result.value.length-1] == '+' ||
            result.value[result.value.length-1] == '-' ||
            result.value[result.value.length-1] == '*' ||
            result.value[result.value.length-1] == '/' ){

        } else {result.value += value;}
    } else {

        result.value += value;

    }
}

// This function evaluates the expression and return result
function calculate() {
    var p = result.value;
    var q = eval(p);
    result.value = q;
}
