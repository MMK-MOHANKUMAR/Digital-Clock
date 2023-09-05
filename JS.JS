let hour=document.getElementById("hour")
let minite=document.getElementById("minite")
let secound=document.getElementById("secound")
let ampm=document.getElementById("ampm")



function clock(){

let dateTime=new Date();
let hr=dateTime.getHours()
let min=dateTime.getMinutes()
let sec=dateTime.getSeconds()
if(hr>12){
    hr=hr-12
    ampm.innerHTML="PM"
}

hour.innerHTML=clom(hr)
minite.innerHTML=clom(min)
secound.innerHTML=clom(sec)

}
function clom(num){
    return num<10 ? "0"+num : num
}

setInterval(clock,1000)


var dates=new Date()
let day =document.getElementById("date")
let Month =document.getElementById("Month")
let Year =document.getElementById("Year")
let Day=document.getElementById("Day")
let dayvice=["Sunday","Monday","Tuesday","Wednes Day","Thursday","Friday","Saturday"]

function dating(){
    let dates=new Date();
    let day =dates.getDate();
    let month=dates.getMonth()+1;
    let year=dates.getFullYear()


Day.innerHTML=datess(day)
Month.innerHTML=datess(month)
Year.innerHTML=year


}

function datess(e){
    if(e<10){
        return "0"+e
    }
    else{
        return e
    }
}

dating()

function setDate(){
    let Datee=new Date()
    let today=Datee.getDay()
    let day=dayvice[today]


   let dayy=document.getElementById("dayy")

   dayy.innerHTML=day


}
setDate()


