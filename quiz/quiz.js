function Card(front, back) {
    this.front = front;
    this.back = back;

    this.initCard = () => {
        return `<div class="card-container">
                    <div class="card">
                        <div class="front"><p>${this.front}</p></div>
                        <div class="back"><p>${this.back}</p></div>
                    </div>
                </div>`
    }
}

const capitals = [
    new Card('Poland','Warsaw'),
    new Card('Latvia', 'Riga'),
    new Card('China', 'Beijing'),
    new Card('Georgia', 'Tbilisi'),
    new Card('Lithuania', 'Vilnius'),
    new Card('France', 'Paris'),
    new Card('Vietnam', 'Hanoia'),
    new Card('Jamaica', 'Kingston'),
    new Card('Albania', 'Tirana')];

function showFront(card, element) {
    element.textContent = card.front;
}

function showBack(card, element) {
    element.textContent = card.back;
}

function handleCardClick(card, element) {
    if (element.textContent === card.front) {
        showBack(card, element);
    } else {
        showFront(card, element);
    }
}

const quizArea = document.getElementById('quiz-area');

capitals.forEach((card, index) => {
    quizArea.innerHTML += card.initCard();
});