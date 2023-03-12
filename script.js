var rollDiceButton = document.querySelector('#roll-button');
var resetButton = document.querySelector('#reset')
var diceImageDiv = document.querySelector('#dice-container');
var diceDropDown = document.querySelector('#dice-quantity');
var diceQuantity = document.querySelector('#dice-quantity').value
var randomNumber = null;

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
    rollDiceButton.disabled = true
})

resetButton.addEventListener('click', () => {
        for (let i = 0; i < diceQuantity; i++) {
        document.querySelector(`#dice-display${i}`).remove()
        rollDiceButton.disabled = false
    }
})

