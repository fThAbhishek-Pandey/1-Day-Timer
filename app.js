const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway= document.querySelector('.giveaway');
const timeOver = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(giveaway);
console.log(items);

const date = new Date();
console.log(date);
let tempYear = (date.getFullYear());
let tempMonth= (date.getMonth());
let tempDay = (date.getDate());
console.log("tempYear",tempYear);
console.log("tempMonth",tempMonth);
console.log("tempDay",tempDay);
const deadline =  new Date(tempYear ,tempMonth,tempDay +1 , 23, 59, 59);
console.log("deadline",deadline);
console.log(deadline.getTime());
let ddYear  = (deadline.getFullYear());
let ddMonth = (deadline.getMonth());
let ddDay   = (deadline.getDay());
console.log("ddYear",ddYear);
console.log("ddMonth",ddMonth);
console.log("ddDay",ddDay);
giveaway.innerHTML= `giveaway  ${weekdays[ddDay]} ${months[ddMonth]}  ${ddYear}`;
function getRemaindingTime (){
    let now = new Date().getTime();
    console.log(now);
    let t= deadline.getTime() -now;
      let  remainigDay= Math.floor((t /(1000*60*60*24)));
      let  remainigHour = Math.floor ((t%(1000*60*60*24))/(1000*60*60));
      let  remainigMin = Math.floor ((t%(1000*60*60))/(1000*60));
      let  remainigSec = Math.floor((t%(1000*60))/1000);
      console.log("remainig days : " , remainigDay);
      console.log("remaining Hour : ",remainigHour);
      console.log("remaining min : ", remainigMin);
      console.log("remaining Second : ",remainigSec);
      const values = [remainigDay,remainigHour,remainigMin,remainigSec];
      function format( t){
        if(t<10) return `0${t}`;
        return t;
      }
      items.forEach(function(item,index){
           item.innerHTML = format(values[index]);
      })
      if(t<0) {
        clearInterval(x);
        timeOver.innerHTML= "Expired";
      }
 }

let x = setInterval(getRemaindingTime,1000);
getRemaindingTime ();