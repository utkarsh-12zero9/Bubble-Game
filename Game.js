var timer = 10;
var score = 0;
var newHit = 0;

function makeBubbles(){
    var bubbly = "";

    for(var i = 1; i <= 146; i++) {
        var random = Math.floor(Math.random() * 10);
        bubbly += `<div class="bubble">${random}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = bubbly;
}

function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timer').innerHTML = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = "<h1>Game Over ! Your Score is " + score + ".</h1>";
        }
    }, 1000);
}

function hitNum(){
    newHit = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = newHit;
}

function ScoreCalc(){
    score += 10;
    document.querySelector('#score').textContent = score;
}

var gameOver = document.querySelector('#pbtm');
gameOver.addEventListener('click', function(dets){
    if(dets.target.classList.contains('bubble')){
        if(newHit === Number(dets.target.textContent)){
            ScoreCalc();
            hitNum();
            makeBubbles();
        }
    }
});

makeBubbles();
runTimer();
hitNum();