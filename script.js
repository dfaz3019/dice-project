var rollDiceButton = document.querySelector('#button');
var resetButton = document.querySelector('#reset')
var diceImageDiv = document.querySelector('#dice-container');
var diceDropDown = document.querySelector('#dice-quantity');
var randomNumber = null;
var diceQuantity = document.querySelector('#dice-quantity').value

diceDropDown.addEventListener('input', () => {
    diceQuantity = document.querySelector('#dice-quantity').value
})

function initialiseDiceQuantity () {

    for (let i = 0; i < diceQuantity; i++) {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var imgContainer = document.createElement('img');
        diceImageDiv.append(imgContainer);
        imgContainer.id = `dice-display${i}`;
        imgContainer.classList.add('die-image')
        imgContainer.setAttribute('src', `/images/dice/dice${randomNumber}.svg`)
    }
}

rollDiceButton.addEventListener('click', () => {
    initialiseDiceQuantity()
})

resetButton.addEventListener('click', () => {
        for (let i = 0; i < diceQuantity; i++) {
        diceImageDiv.removeChild(diceImageDiv.firstChild)
    }
})

