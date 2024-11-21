class Sentence{
    data;
    constructor(data){
        this.data = data;
    }
    getWordCount(){
        if (this.data){
            let wordsArray = this.data.split(' ');
            return wordsArray.length
        }
            return 0;
        
    }
    hasLetter(letter){
        return this.data.includes(letter)
    }
    getLetterCount(letter){
        if(!this.hasLetter(letter)){
            return 0;
        }
    }
}

let givenData = prompt("Enter sentence")
const mySentence = new Sentence(this.data);
console.log(mySentence.getWordCount())
console.log(mySentence.hasLetter("z"))
console.log(mySentence.getLetterCount)