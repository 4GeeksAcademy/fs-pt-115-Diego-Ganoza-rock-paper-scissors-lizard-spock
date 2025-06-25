//write your code here
console.log("Hello Rigo from the console!");

let gameSelections = ["rock","paper", "scissors", "lizard", "spock"]

let gameOptions = {
    rock : ["scissors", "lizard"],
    paper : ["rock", "spock"],
    scissors : ["paper", "lizard"],
    lizard :["paper", "spock"],
    spock : ["scissors", "rock"]
};

const RandomSelection = () => {
    return gameSelections[Math.floor(Math.random() * gameSelections.length)]
}

function Play (YourChoise){
    YourChoise.toLowerCase();
    const computerChoise = RandomSelection();
    console.log(`Seleccion de la IA: ${computerChoise}`);
    console.log(`Seleecion del jugador: ${YourChoise}`);
    
    if(YourChoise === computerChoise) console.log("Empate");

    else if(gameOptions[YourChoise].includes(computerChoise)) console.log("Tu ganas");

    else console.log("Tu pierdes");
}

Play("rock");




