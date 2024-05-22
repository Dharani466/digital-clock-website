

const hour=document.getElementById("hr")
const mins=document.getElementById("min")
const seconds=document.getElementById("sec")
function timer(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=set(dateTime.getMinutes());
    let sec=set(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12
        document.getElementById("ampm").innerHTML="PM"
    }
    hr=set(hr)
 
     hour.innerHTML=hr
     mins.innerHTML=min
     seconds.innerHTML=sec
  

}

function set(num){
    return num<10?"0"+num:num
}






setInterval(timer,500)