// dice skapa ett tärnings spel
// stegen

let bigDice = document.getElementById("dice") as HTMLLIElement
let dice: HTMLCollectionOf<Element> = document.getElementsByClassName("faded");

let diceGoal: number = 1;
let randomNum: number;
let diceCount: number = 0;

let button = document.querySelector("button") as HTMLButtonElement

button.addEventListener("click", () => {   
    bigDice.classList.remove(`dots-${randomNum}`)

    randomNum = Math.floor(Math.random() * 6) + 1

    bigDice.classList.add(`dots-${randomNum}`)

    button.innerText = `Kast: ${diceCount+1}`

    if(randomNum == diceGoal){
        console.log(`Match! Du slog en ${diceGoal}!`);
        for (let i = 0; i < dice.length; i++) {
            if(dice[i].classList.contains(`dots-${diceGoal}`)) {
                (dice[i] as HTMLElement).style.opacity = "1"; 
            }
        }
        
        diceGoal++;
        diceCount++;
    } 
    else {
        console.log(`Ingen match. Du slog en ${randomNum}, men behövde en ${diceGoal}.`);
        diceCount++;
    }

    if(diceGoal > 6) {
        console.log(`Stege på ${diceCount} kast!`);
        for (let i = 0; i < dice.length; i++) {
            (dice[i] as HTMLElement).style.opacity = "0.3";
        }
        
        button.innerText = "0"
        diceGoal = 1;
        diceCount = 0;
    }
})