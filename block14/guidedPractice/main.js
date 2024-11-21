const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

//.table gives us a structured log
console.table(myInstruments);

myInstruments.push("tuba","bassoon");
myInstruments.splice(1,1)
myInstruments.unshift("saxophone")


function getFirstInstrument(instruments){
    return instruments[0];
}

function getLastInstrument(instruments){
    let index = instruments.length - 1
    return instruments[index]
}

console.log(getFirstInstrument(myInstruments));
console.log(getLastInstrument(myInstruments));

function getFirstInstrumentAndLastInstrument(instruments){
    let firstInstrument = getFirstInstrument(instruments);
    let lastInstrument = getLastInstrument(instruments);

    const newArray = [firstInstrument, lastInstrument]
    return newArray;
}
console.table(getFirstInstrumentAndLastInstrument(myInstruments))


function getFirstThreeInstruments(instruments){
    return instruments.slice(0,3)
}

function getTInstruments(instruments){
    const tInstruments = []
    for (let index = 0; index < instruments.length; index++) {
        let currentInstrument = instruments[index]
        if(currentInstrument.charAt(0) === "t"){
            tInstruments.push(currentInstrument)
        }
        
    }
    return tInstruments
}
console.table(getTInstruments(myInstruments))