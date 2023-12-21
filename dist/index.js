"use strict";
// dice skapa ett tärnings spel
// stegen
let bigDice = document.getElementById("dice");
let dice = document.getElementsByClassName("dice");
let diceGoal = 1;
let randomNum;
let diceCount = 0;
let button = document.querySelector("button");
button.addEventListener("click", () => {
    //ta bort slaget innan från bigDice
    bigDice.classList.remove(`dots-${randomNum}`);
    randomNum = Math.floor(Math.random() * 6) + 1;
    //lägg till randomly thrown number till bigDice
    bigDice.classList.add(`dots-${randomNum}`);
    //lägg till maindice för att kontrollera vid toggle
    bigDice.classList.add(`mainDice`);
    button.innerText = `Kast: ${diceCount + 1}`;
    //checking
    checkMatching();
});
//check if matching
function checkMatching() {
    if (randomNum == diceGoal) {
        for (let i = 0; i < dice.length; i++) {
            if (dice[i].classList.contains(`dots-${diceGoal}`) && !dice[i].classList.contains(`mainDice`)) {
                //(dice[i] as HTMLElement).style.opacity = "1"; 
                dice[i].classList.toggle("faded");
            }
        }
        diceGoal++;
        diceCount++;
    }
    else {
        console.log(`Ingen match. Du slog en ${randomNum}, men behövde en ${diceGoal}.`);
        diceCount++;
    }
    //kolla om man vunnit
    checkWin();
}
//check if won
function checkWin() {
    if (diceGoal > 6) {
        button.innerText = `Stege på ${diceCount} kast!`;
        bigDice.style.backgroundColor = "rgb(255, 247, 0)";
        diceGoal = 1;
        diceCount = 0;
        button.classList.add('hide');
        //en timeout efter vinst
        setTimeout(() => {
            button.classList.remove('hide');
            for (let i = 0; i < dice.length; i++) {
                dice[i].classList.toggle("faded");
                button.innerText = "Kasta";
                bigDice.classList.remove("faded");
                bigDice.style.backgroundColor = "white";
            }
        }, 3000);
    }
}
