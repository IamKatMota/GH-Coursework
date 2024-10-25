let inputYards = prompt("Enter a yard amount to convert")
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log(output);

function convertToMeters(yards){
    return yards * 0.9144;
}

function createMessage(yards, meters){
    let message = ""
    const numYards = yards * 1;
    if(numYards === 1760){
        message = "That is as long as a mile";
    } else if(numYards === 100){
        message = "That is as long as a football field";
    }else if(numYards === 26){
        message = "That is as long as a tennis court";
    }
    return(`${yards} yards is ${meters} meters. ${message}`);
}

function rand(limit){
    return Math.round(Math.random()*limit)
}
let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

