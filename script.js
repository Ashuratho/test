var time = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function GetNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
  var cluter = "";
  for (var i = 1; i <= 70; i++) {
    var rn = Math.floor(Math.random() * 10);
    cluter += `<div id="buble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = cluter;
}
function runTime() {
  var timer = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timerval").textContent = time;
    } else {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    GetNewhit();
  }
});

runTime();
makeBubble();
GetNewhit();
