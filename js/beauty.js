class Card {
    constructor(photo, name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.photo = photo;
    }

    createHtmlBlock() {
        return '<div class="cards-item"> \
            <img class="img-card" src="' + this.photo + '" alt="cream">\
            <h2 class="cards-item__h2">' + this.name + '</h2> \
            <h4 class="cards-item__h4">' + this.description + '</h4> \
            <span class="cards-item__span">' + this.price + '</span></div>';
    }
}

const cards = [
    new Card('img/suerfood.jpg',
        'YOUTH TO THE PEOPLE SUPERFOOD AIR-WHIP MOISTURE CREAM',
        'Powered by superfoods and perfected by science, Youth To The People is an eco-conscious, philanthropic brand thats committed to harnessing nutrient-dense superfoods that have an impact on your skins health and less of one on the environment',
        '96.05€'),
    new Card('img/versed.jpg',
        'VERSED DEW POINT MOISTURIZING GEL-CREAM 2 FL. OZ.', 'A brand that is built around game-changing skin saviours, Versed boasts a host of results-driven hero ingredients as well as championing a loyal and well-informed beauty regime. A fan favourite, this skin care line is vegan, cruelty-free and',
        '50.25€'),
    new Card('img/glow.jpg',
        'GLOW RECIPE AVOCADO MELT RETINOL EYE SLEEPING MASK 15ML', 'Advocating natural, gentle skin care products, Glow Recipe’s goal is to make South Korea’s latest skin care trends accessible to beauty-forward women across the globe.potent Ophthalmologist Tested and Dermatologist Tested eye sleeping mask',
        '111.05€')
]

function generateCards() {
    let cardsItem = document.querySelector('.main-cards');
    for (let i = 0; i < cards.length; i++) {
        cardsItem.innerHTML += cards[i].createHtmlBlock();
    }
}
generateCards();
