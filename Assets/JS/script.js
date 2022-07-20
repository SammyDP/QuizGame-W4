// -when clicked right answers ding and go to next question
// -wrong answers ding/deduct time and go to next question
// -final score and intials input, creates list to be saved
// -reset btn to clear cache

// ------------
// get elements
// ------------

// buttons
var start = document.getElementById(`start_btn`);
var answer1 = document.getElementById(`answer1`);
var answer2 = document.getElementById(`answer2`);
var answer3 = document.getElementById(`answer3`);
var answer4 = document.getElementById(`answer4`);
var submit = document.getElementById(`submit_btn`);
var back = document.getElementById(`back_btn`);
var clear = document.getElementById(`clear_btn`);
var viewHs = document.getElementById(`view_hs`);

// sounds
var yes = new Audio(`/Assets/SOUNDS/rightanswer.mp3`);
var no = new Audio(`/Assets/SOUNDS/wronganswer.mp3`);
var endSound = new Audio(`/Assets/SOUNDS/jeopardy.mp3`);

// class phases
var quizIntro = document.querySelector(`.quiz-intro`);
var questScrn = document.querySelector(`.question-screen`);
var fnshScrn = document.querySelector(`.finish-screen`);
var hghScrs = document.querySelector(`.highscores-screen`);

// section elements
var timer = document.querySelector(`.timer`);
var timeEl = document.getElementById(`time`);
var quest = document.getElementById(`questions`);
var answer_set1 = document.getElementById(`answer_set1`);
var answer_set2 = document.getElementById(`answer_set2`);
var answer_set3 = document.getElementById(`answer_set3`);
var answer_set4 = document.getElementById(`answer_set4`);
var answer_set5 = document.getElementById(`answer_set5`);
var answer_set6 = document.getElementById(`answer_set6`);
var answer_set7 = document.getElementById(`answer_set7`);
var answer_set8 = document.getElementById(`answer_set8`);
var answer_set9 = document.getElementById(`answer_set9`);
var answer_set10 = document.getElementById(`answer_set10`);
var finalScor = document.getElementById(`final_score`);

var quest1 = document.getElementById(`question1`);
var quest2 = document.getElementById(`question2`);
var quest3 = document.getElementById(`question3`);
var quest4 = document.getElementById(`question4`);
var quest5 = document.getElementById(`question5`);
var quest6 = document.getElementById(`question6`);
var quest7 = document.getElementById(`question7`);
var quest8 = document.getElementById(`question8`);
var quest9 = document.getElementById(`question9`);
var quest10 = document.getElementById(`question10`);

var time = 30;
var correct = document.querySelector(`.correct`);
var wrong = document.querySelectorAll(`.wrong`);
var score = localStorage.getItem(`score`);

// view high scores
viewHs.addEventListener("click", () => {
  quizIntro.style.display = "none";
  timer.style.display = "none";
  viewHs.style.display = "none";
  fnshScrn.style.display = "none";
  hghScrs.style.display = "block";
});

// start quiz
start.addEventListener("click", () => {
  quizIntro.style.display = "none";
  questScrn.style.display = "block";
  quest1.style.display = "block";
  viewHs.style.display = "none";
  var timeOut = setInterval(() => {
    timeEl.textContent = time;
    if (time > 0) {
      time--;
    } else {
      clearInterval(timeOut);
      endSound.play();
      questScrn.style.display = "none";
      fnshScrn.style.display = "block";
    }
  }, 1000);
});

// game begins
answer_set1.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "JavaScript's syntax is loosely based on Java's") {
    yes.play();
    quest1.style.display = "none";
    quest2.style.display = "block";
  } else {
    no.play();
    quest1.style.display = "none";
    quest2.style.display = "block";
  }
});
answer_set2.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "The User's machine running a Web browser") {
    yes.play();
    quest2.style.display = "none";
    quest3.style.display = "block";
  } else {
    no.play();
    quest2.style.display = "none";
    quest3.style.display = "block";
  }
});
answer_set3.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "Navigator") {
    yes.play();
    quest3.style.display = "none";
    quest4.style.display = "block";
  } else {
    no.play();
    quest3.style.display = "none";
    quest4.style.display = "block";
  }
});
answer_set4.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "Storing numbers, dates, or other values") {
    yes.play();
    quest4.style.display = "none";
    quest5.style.display = "block";
  } else {
    no.play();
    quest4.style.display = "none";
    quest5.style.display = "block";
  }
});
answer_set5.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "Client-side") {
    yes.play();
    quest5.style.display = "none";
    quest6.style.display = "block";
  } else {
    no.play();
    quest5.style.display = "none";
    quest6.style.display = "block";
  }
});
answer_set6.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (
    clickButton ===
    "Storing the form's contents to a database file on the server"
  ) {
    yes.play();
    quest6.style.display = "none";
    quest7.style.display = "block";
  } else {
    no.play();
    quest6.style.display = "none";
    quest7.style.display = "block";
  }
});
answer_set7.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "Accept parameters") {
    yes.play();
    quest7.style.display = "none";
    quest8.style.display = "block";
  } else {
    no.play();
    quest7.style.display = "none";
    quest8.style.display = "block";
  }
});
answer_set8.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "2names") {
    yes.play();
    quest8.style.display = "none";
    quest9.style.display = "block";
  } else {
    no.play();
    quest8.style.display = "none";
    quest9.style.display = "block";
  }
});
answer_set9.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "SCRIPT") {
    yes.play();
    quest9.style.display = "none";
    quest10.style.display = "block";
  } else {
    no.play();
    quest9.style.display = "none";
    quest10.style.display = "block";
  }
});
answer_set10.addEventListener("click", function (event) {
  var clickButton = event.target.textContent.trim();
  if (clickButton === "SCRIPT") {
    yes.play();
    quest10.style.display = "none";
    fnshScrn.style.display = "block";
  } else {
    no.play();
    quest10.style.display = "none";
    fnshScrn.style.display = "block";
  }
});
clearInterval(timeOut);
// --use setItem(), getItem() for score

// finish game
submit.addEventListener("click", () => {
  fnshScrn.style.display = "none";
  timer.style.display = "none";
  viewHs.style.display = "none";
  hghScrs.style.display = "block";
  endSound.pause();
});

// highscore/game reset
back.addEventListener("click", () => {
  hghScrs.style.display = "none";
  quizIntro.style.display = "block";
  timer.style.display = "flex";
  viewHs.style.display = "flex";
});

clear.addEventListener("click", () => {});

// localStorage.clear(): Clears the whole localstorage
// localStorage.removeItem('myItem'): To remove individual items
