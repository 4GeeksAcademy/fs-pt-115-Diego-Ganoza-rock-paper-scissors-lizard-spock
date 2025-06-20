//write your code here
console.log("Hello Rigo from the console!");

let gameSelections = ["rock","paper", "scissors", "lizard", "spock"]

let gameOptions = {
    rock : ["scissors", "lizard"],
    paper : ["rock", "spock"],
    scissors : ["paper", "lizard"],
    lizard :["paper", "spock"],
    spock : ["scissord", "rock"]
};
function Play (YourChoise)
{
    YourChoise.toLowerCase();
    const ComputerChoise = gameSelections[Math.floor(Math.random() * gameSelections.length)]
    console.log(`Seleccion de la IA: ${ComputerChoise}`);
    console.log(`Seleecion del jugador: ${YourChoise}`);
    
    if(YourChoise === ComputerChoise)
    {
        console.log("Empate");
    }
    else if(gameOptions[YourChoise].includes(ComputerChoise))
    {
        console.log("Tu ganas");
    }
    else
    {
        console.log("Tu pierdes");
    }
}
Play("rock");




