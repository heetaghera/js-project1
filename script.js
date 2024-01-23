var totaltime=60;
var score = 0;
var hitno ;
var rn;
newhits();

function makebubble(){
    var clutter = "";
    
    for(var i=1;i<=140;i++){
        rn =Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${rn}</div>`;
    }

    var a = document.querySelector(".pbtm")
    a.innerHTML=clutter;
}

function timer(){
    var timer=setInterval(function(){
        if(totaltime >= 0){
            document.querySelector("#timerval").textContent=totaltime;
            totaltime--;
        }  
        else{
            clearInterval(timer);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over</br>Score: ${score} 🎯</h1>`;
        }
    },1000)
}

function newhits(){
    var prehit = hitno;
    console.log("prehit"+prehit);

    hitno = Math.floor(Math.random()*10);
    document.querySelector("#newhits").textContent = hitno;
    // while loop for "The number that just came should not appear immediately again"
    // mean hit=5 so next hit won't be 5
    while(hitno == prehit){
    newhits();
    }
}

function score_increase(){
    score += 10 ;
    document.querySelector("#scoreval").textContent = score;
}

function calculate(){
    document.querySelector(".pbtm")
    .addEventListener("click",function (dets) {
    var clicked_num = Number(dets.target.textContent)
    console.log(clicked_num)
    if(clicked_num === hitno){
        score_increase();
        makebubble();
        newhits();
    }
})
}


calculate();
timer();
makebubble();