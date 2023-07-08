// HACKER TEXT

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z']
  return alphabet[rand(0, alphabet.length - 1)]
}

function getRandomWord(word) {
  var text = word.innerHTML

  var finalWord = ''
  for (var i = 0; i < text.length; i++) {
    finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
  }

  return finalWord
}

var word = document.querySelector('p')
var interv = 'undefined'
var canChange = false
var globalCount = 0
var count = 0
var INITIAL_WORD = word.innerHTML;
var isGoing = false

function init() {
  if (isGoing) return;

  isGoing = true
  var randomWord = getRandomWord(word)
  word.innerHTML = randomWord

  interv = setInterval(function () {
    var finalWord = ''
    for (var x = 0; x < INITIAL_WORD.length; x++) {
      if (x <= count && canChange) {
        finalWord += INITIAL_WORD[x]
      } else {
        finalWord += getRandomLetter()
      }
    }
    word.innerHTML = finalWord
    if (canChange) {
      count++
    }
    if (globalCount >= 20) {
      canChange = true
    }
    if (count >= INITIAL_WORD.length) {
      clearInterval(interv)
      count = 0
      canChange = false
      globalCount = 0
      isGoing = false
    }
    globalCount += 1 / 1.5
  }, 30)

}

// DICE GAME

word.addEventListener('mouseenter', init)

var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", "images/dice" + (randomNumber1 + 1) + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + (randomNumber2 + 1) + ".png");
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// FOLLOW CURSOR

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const {
    clientX,
    clientY
  } = event;
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {
    duration: 1000,
    fill: 'forwards'
  });

  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;
}