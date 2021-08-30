const colors = ["yellows", "greens", "blues", "reds"];

const diceBtn = document.querySelector(".roll-btn");
const diceNumber = document.querySelector(".dice-number");
const dice = document.querySelector(".dice");
const boxes = document.querySelectorAll(".box");

let numUsers;
let currentPawn = colors[0];
let roll = 0;
let turn = 1;

window.onload = () => {
    numUsers = prompt("How many plaers are playing? (2 - 4)", "2");
    if (parseInt(numUsers) < 2 || parseInt(numUsers) > 4) {
        window.location.reload();
    }
    numUsers = parseInt(numUsers);
    document.getElementById(colors[0]).classList.add("selected");
};

/* EVENT HANDLER */
diceBtn.addEventListener("click", rollDice);

/* DICE ROLL */
function rollDice() {
    runPawn();

    diceNumber.innerText = "";
    dice.classList.add("spin");

    roll = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
        dice.classList.remove("spin");
        diceNumber.innerText = roll;

        let pawn = `${currentPawn}-pawn`;
        let all = document.querySelectorAll(`.${pawn}`);
        let flag = false;
        for (let i = 0; i < all.length; i++) {
            if (all[i].classList.contains("small")) {
                flag = true;
            }
        }
        if (!flag && roll != 6) {
            nextTurnSetup();
        }
    }, 1000);

    diceBtn.removeEventListener('click', () => { });
}

function runPawn() {
    let pawn = `${currentPawn}-pawn`;
    document.querySelectorAll(`.${pawn}`).forEach(cp => {
        cp.addEventListener("click", () => movePawn(cp));
    });
}

function movePawn(pawn) {
    pawn.classList.add("small");
    if (pawn.parentNode.parentNode.parentNode.id == currentPawn) {
        if (roll == 6) {
            document.getElementById(`${currentPawn}-start`).innerHTML = outerHTML(pawn);
        }
    }
    nextTurnSetup();
}

function nextTurnSetup() {
    // boxes.forEach(box => {
    //     if (box.id !== currentPawn) {
    //         box.classList.add("noPointer");
    //     } else {
    //         box.classList.remove("noPointer");
    //     }
    // });
    document.getElementById(currentPawn).classList.remove("selected");
    setTimeout(() => {
        if (numUsers == 2) {
            if (currentPawn === colors[0]) {
                currentPawn = colors[1];
            }
            else {
                currentPawn = colors[0];
            }
        }
        else if (numUsers == 3) {
            if (currentPawn === colors[0] || currentPawn === colors[1])
                turn++;
            else {
                currentPawn = colors[0];
            }
        }
        else if (numUsers == 4) {
            if (turn === 4) turn = 0;
            turn++;
        }

        document.getElementById(currentPawn).classList.add("selected");
    }, 300);
}