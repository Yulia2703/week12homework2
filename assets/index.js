const alphabet = document.getElementById("alphabet");
const onlyText = alphabet.innerText;
//console.log(onlyText);

const randomWord = () => {
const randomIndex = Math.floor(Math.random()*onlyText.length);
const randomLetter = onlyText[randomIndex]; 
return randomLetter;
}
console.log(randomWord());