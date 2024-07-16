var sec = 0;
var min=0;
var hr=0;

function start(){
    myTimer = setInterval(myClock, 1000);
        function myClock() {
            if(sec<10){
                document.getElementsByClassName("seconds")[0].innerHTML = "0"+ sec++;
            }
            else{
                document.getElementsByClassName("seconds")[0].innerHTML = sec++;
            }
               if (sec == 61) {
                   sec=0;
                   if(min<9){
                    document.getElementsByClassName("minutes")[0].innerHTML="0"+ ++min;
                   }
                   else{
                    document.getElementsByClassName("minutes")[0].innerHTML=++min;
                   }
                   if(min==60){
                        min=0;
                        if(hr<9){
                            document.getElementsByClassName("hours")[0].innerHTML="0"+ ++hr;
                        }
                        else{
                            document.getElementsByClassName("hours")[0].innerHTML=++hr;
                        }
                   }
        }
    }
}
function stop(){
    clearInterval(myTimer);
}
function reset(){
    clearInterval(myTimer);
    document.getElementsByClassName("seconds")[0].innerHTML = "00";
    document.getElementsByClassName("minutes")[0].innerHTML = "00";
    document.getElementsByClassName("hours")[0].innerHTML = "00";
    sec=0;
    min=0;
    hr=0;
}