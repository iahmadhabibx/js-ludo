let diceBtn = document.querySelector(".roll-btn");
let diceNumber = document.querySelector(".dice-number");
let dice = document.querySelector(".dice");

diceBtn.addEventListener("click", rollDice);

/* DICE ROLL */
function rollDice() {
    dice.classList.add("spin");

    let roll = Math.floor(Math.random() * 6) + 1;
    setTimeout(()=>{
        dice.classList.remove("spin");
        diceNumber.innerText = roll;
    }, 2000);

    diceBtn.removeEventListener('click', () => { });
}