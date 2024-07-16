function fun(){
    var x=new Date();
    document.getElementsByClassName('hours')[0].innerHTML=x.getHours();
    document.getElementsByClassName('minutes')[0].innerHTML=x.getMinutes();
    document.getElementsByClassName('seconds')[0].innerHTML=x.getSeconds();
    if(x.getSeconds()==0){
        clearInterval(address);
    }
}
var address=setInterval(fun,1000);