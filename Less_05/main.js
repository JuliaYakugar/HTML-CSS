function createItem(data) {
    const itemEl = document.querySelector('.items__cards');
    data.forEach((item) => {
        itemEl.insertAdjacentHTML('beforeend', getCard(item.title, item.description, item.price, item.picture));
    })
}

function getCard(title, description, price, picture) {
    return `
        <div class="items__card">
            <div class="items__picture">
                <a href="product.html">
                    <img src="img/products/${picture}" alt="${picture}">
                </a>
            </div>
            <div class="items__info">
                <div class="items__name">
                    <h3>${title}</h3>
                </div>
                <div class="items__description">
                    ${description}
                </div>
                <div class="items__price">
                    ${price}
                </div>
            </div>
        </div>
    `
}

createItem(JSON.parse(feturedItems));