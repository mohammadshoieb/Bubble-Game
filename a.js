function GameON(){

var hitrn = 0;
var score =0;

function bubbles (){
   var clutter ="" ;
   for (var i = 1; i <=221; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble"> ${rn}  </div>`;
   }
   document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    var timer = 60;
var timerint = setInterval(function() {
   if(timer>0) {timer--;
    document.querySelector("#timerval") .textContent = timer;
   }
   else{
    clearInterval(timerint)
    document.querySelector("#pbtm").innerHTML=`<h1>Game over </h1>`
   }
}, 1000);
}

function hit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn
}

function inscore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function logic(){  
document.querySelector("#pbtm")
.addEventListener("click", function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum===hitrn){
    inscore();
    bubbles();
    hit();
}
})
}

function call(){
bubbles();
logic();
hit();
runtimer();
values();
}

call(); 
}
GameON();



