let diceBtn = document.querySelector(".roll-btn");
let diceNumber = document.querySelector(".dice-number");
let dice = document.querySelector(".dice");
let roll = 0;
let numUsers;

window.onload = () => {
    let numUsers = prompt("How many plaers are playing? (2 - 4)", "2");
    if(parseInt(numUsers) < 2 || parseInt(numUsers) > 4) {
        window.location.reload();
    }
    numUsers = parseInt(numUsers);
};

/* EVENT HANDLER */
diceBtn.addEventListener("click", rollDice);

/* DICE ROLL */
function rollDice() {
    diceNumber.innerText = "";
    dice.classList.add("spin");

    roll = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
        dice.classList.remove("spin");
        diceNumber.innerText = roll;
    }, 2000);

    diceBtn.removeEventListener('click', () => { });
}