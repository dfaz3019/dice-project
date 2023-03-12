const button = document.querySelector('#button');
const diceDiv = document.querySelector('#dice-display');
var randomNumber = null;

button.addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

    diceDiv.classList.add(`dice-${randomNumber}`)
})

