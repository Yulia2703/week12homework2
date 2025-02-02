const alphabet = document.getElementById("alphabet");
const onlyText = alphabet.innerText;
//console.log(onlyText);

const randomWord = () => {
const randomIndex = Math.floor(Math.random() * onlyText.length-1);
const randomLetter = onlyText[randomIndex]; 
return randomLetter;
}
const string = randomWord() + randomWord() + randomWord() + randomWord()
console.log(string)

