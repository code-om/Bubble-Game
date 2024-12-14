function makebubble(){
let clutter = "";

for(let i=1; i<=152; i++){
    let random = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random}</div>`;

}

document.querySelector(".tail").innerHTML = clutter;
}


let score=0;
function scoreIncreaser(){
    document.querySelector(".scorevalue").innerHTML = score;
    score+=10;
}

let timer = 60;
function runtimer(){
    let timerinterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timervalue").textContent = timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector(".tail").innerHTML = `<h1>Game Over:)</h1>` + `\n<h2>Your Score:${score-10}</h2>`;
            // document.querySelector(".tail").textContent =   ;
        }

    },1000)
}

let randomHit = 0
function getNewHit(){
    randomHit = Math.floor(Math.random()*10);
    document.querySelector(".hitvalue").innerHTML = randomHit;
}



document.querySelector(".tail").addEventListener("click", function(details){
    let fetcheddata = Number(details.target.textContent);

    if(fetcheddata===randomHit){
        scoreIncreaser();
        getNewHit();
        makebubble();

    }
})

scoreIncreaser();
getNewHit();
runtimer();
makebubble();