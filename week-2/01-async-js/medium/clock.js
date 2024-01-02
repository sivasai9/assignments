function clo(){
    const time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    m=checktime(m);
    s=checktime(s);
    var ampm;
    if(h>=12){
        ampm="PM";
    }
    else{
        ampm="AM"
    }
    console.log(h+":"+m+":"+s+" "+ampm); 
}
setTimeout(clo,500);
function checktime(i){
    if(i<10){
        i="0"+1;
    }
    return i;
}