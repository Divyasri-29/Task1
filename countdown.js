var n = parseInt(window.prompt("Enter countdown in hours"));
var sec = 0;
var min = 0;
var hr = n;
var mytimer = setInterval(fun, 1000);

function fun() {
    if (sec === 0 && min === 0 && hr === 0) {
        clearInterval(mytimer);
        
    }
    
    if (sec === 0) {
        sec = 59;
        if (min === 0) {
            min = 59;
            if (hr > 0) {
                hr--;
            }
        } else {
            min--;
        }
    } else {
        sec--;
    }

    document.getElementsByClassName("hours")[0].innerHTML = hr;
    document.getElementsByClassName("minutes")[0].innerHTML = min;
    document.getElementsByClassName("seconds")[0].innerHTML = sec;
}