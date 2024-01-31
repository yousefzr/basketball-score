let scoreHome = 0
let scoreGuest = 0

let score1 = document.getElementById("score-home")
let score2 = document.getElementById("score-guest")

function add1Home() {
    scoreHome += 1
    score1.textContent = scoreHome
}

function add2Home() {
    scoreHome += 2
    score1.textContent = scoreHome
}

function add3Home() {
    scoreHome += 3
    score1.textContent = scoreHome
}

function add1Guest() {
    scoreGuest += 1
    score2.textContent = scoreGuest
}

function add2Guest() {
    scoreGuest += 2
    score2.textContent = scoreGuest
}

function add3Guest() {
    scoreGuest += 3
    score2.textContent = scoreGuest
}

function restart() {
    scoreHome = 0
    scoreGuest = 0
    score1.textContent = scoreHome
    score2.textContent = scoreGuest
}