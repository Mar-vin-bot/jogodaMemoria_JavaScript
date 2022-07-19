const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;


    this.classList.add('flip'); /* adc classe apenas uma vez*/
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disabledCards();
        return;
    }
    unflipCards();
}

function disabledCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBord();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBord();
    }, 1500)
}

function resetBord() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(
    function shuffle() {
        cards.forEach((card) => {
            let ramdomPosition = Math.floor(Math.random() * 12)
            card.style.order = ramdomPosition;
        })
    }
)();



cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

array.length

