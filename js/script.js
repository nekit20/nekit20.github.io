function timer(){
    var day = document.getElementById('day').innerHTML;
    var hour = document.getElementById('hour').innerHTML;
    var minute = document.getElementById('minute').innerHTML;
    var second = document.getElementById('second').innerHTML;
    var end = false;
     
    if (second > 0)  second--;
    else if (minute > 0) { second = 59; minute--;}
    else if (hour > 0) {
        minute = 59;
        second = 60;
        hour --;
    } else if (day > 0) {
        hour = 23;
        minute = 59;
        second = 59;
        day--;
    }
    else if (hour == 0 && minute == 0 && second ==0 && day == 0) end = true;
 
    if(end){
        clearInterval(intervalID);
        alert("Event!");
    }else{
        document.getElementById('day').innerHTML = day;
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000);