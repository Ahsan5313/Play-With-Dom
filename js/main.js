// Digital clock

const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');
const progress = document.getElementById('progress');

function showCurrentTime(){

    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

    progress.style.width = (sec/ 60) * 100 + '%';

}

setInterval(showCurrentTime, 1000)

// Digital Count Down Clock;

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const starts = document.getElementById('start');
const resets = document.getElementById('reset');
const pauses = document.getElementById('pause');



let min;
let sec = 0;
let timer = null;
let watchTime = false;

function start(){

   if(!watchTime){
       watchTime = true
    timer =  setInterval(function(){

        sec++;
       let {min, second} = getTime(sec)
       minutes.textContent = min < 10 ? ('0' + min) : min;
       seconds.textContent = second < 10 ? ('0' + second) : second;
      },1000)
   }
}

function reset(){

    watchTime = false
    clearInterval(timer);
     min = 0;
     sec = 0;
     minutes.textContent = '00';
     seconds.textContent = '00';

   
}

function pause(){

    watchTime = false
    clearInterval(timer);
    
}

function getTime(sec){

    min = parseInt(sec / 60)
    let second = parseInt(sec % 60)

    return {

        min,
        second
    }
}

starts.addEventListener('click',start);
resets.addEventListener('click',reset);
pauses.addEventListener('click',pause);