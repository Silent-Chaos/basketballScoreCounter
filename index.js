let scoreH=document.getElementById("hScore")
let scoreG=document.getElementById("gScore")
let scoreOn=0
let onScore=0
let gf=0
let hf=0
let homeFoul=document.getElementById("HGo")
let guestFoul=document.getElementById("GFo")
let seconds=00
let tens=00
let OutputSeconds=document.getElementById("sec")
let OutputTens=document.getElementById("tens")
let BTNstart=document.getElementById("start")
let BTNstop=document.getElementById("stop")

let BTNreset=document.getElementById("reset")
let Interval;

function hone(){
scoreH.textContent=onScore+=1
}

function htwo(){
    scoreH.textContent=onScore+=2
    }
    
function hthree(){
    scoreH.textContent=onScore+=3
    }

    
function gone(){
    scoreG.textContent=scoreOn+=1
    }
    
function gtwo(){
    scoreG.textContent=scoreOn+=2
    }
    
function gthree(){
    scoreG.textContent=scoreOn+=3
    }
function Hfoul()
{
    homeFoul.textContent=gf=gf+=1
}
function Gfoul()
{
    guestFoul.textContent=hf=hf+=1
}
BTNstart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval=setInterval(startTime,10)

});
BTNstop.addEventListener('click',()=>{
    clearInterval(Interval);

});
BTNreset.addEventListener('click',()=>{
    clearInterval(Interval);
    tens="00";
    sec="00";
    OutputSeconds.innerHTML=sec;
    OutputTens.innerHTML=":"+tens;

});
function startTime(){
    tens++;
    if(tens<=9){
    OutputTens.innerHTML=":" +"0"+tens;
}
if(tens>10){
    OutputTens.innerHTML=":" +tens;

}
if(tens>99){
    seconds++;
    OutputSeconds.innerHTML="0"+seconds;
    tens=0;
    OutputTens.innerHTML=":" +"0"+tens;

}
if(seconds>9){
    OutputSeconds.innerHTML=seconds;

}
}  
