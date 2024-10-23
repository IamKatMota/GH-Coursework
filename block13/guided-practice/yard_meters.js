let inputYards = prompt("Enter a yard amount to convert")

function convertToMeters(yards){
    return yards * 0.9144;
}
let convertedMeters = convertToMeters(inputYards);

function createMessage(yards, meters){
    let message = ""
    const numYards = yards * 1;
    if(numYards === 1760){
        message = "That is as long as a mile";
    } else if(numYards === 100){
        message = "That is as long as a football field";
    }else if(numYards === 26)
        message = "That is as long as a tennis court";
    console.log(message);
}
createMessage(inputYards, convertedMeters);