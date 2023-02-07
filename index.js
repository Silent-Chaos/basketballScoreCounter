let scoreH=document.getElementById("hScore")
let scoreG=document.getElementById("gScore")
let scoreOn=0
let onScore=0
let gf=0
let gfoulel=document.getElementById("gfoul")
let hfoulel=document.getElementById("hfoul")
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
function GFoul(){
gfoulel.textContent=gf+1
}
function GFoul(){
    
}