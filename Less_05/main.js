function createItem(data) {
    const itemEl = document.querySelector('.items__cards');
    data.forEach((item) => {
        itemEl.insertAdjacentHTML('beforeend', getCard(item.title, item.description, item.price, item.picture));
    })

    itemEl.addEventListener('click', function(e) {
        if (e.target.classList.contains('items__picture')) {
            e.preventDefault();

            const title = e.target.closest('.items__card').querySelector('h3').textContent;
            const price = e.target.closest('.items__card').querySelector('.items__price').textContent;
            const picture = e.target.querySelector('img').alt;

            if (document.querySelector('.cart__wrap-items') === null) createCartItems();
            document.querySelector('.cart__wrap-items').insertAdjacentHTML('beforeend', getCardForCart(title, price, picture));
        }
    });
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

function createCartItems() {
    const infoBox = document.querySelector('.infoBox');
    infoBox.insertAdjacentHTML('afterend', `
        <section class="cart">
            <h2 class='container' style='margin-top: 90px; text-align: center;'>Cart Items</h2>
            <div class="container cart__wrap">
                <div class="cart__wrap-items">
                </div>
            </div>
        </section>
    `);

    const deleteFromCart = document.querySelector('.cart__wrap-items');
    deleteFromCart.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.closest('.cart__wrap-items-block').remove();
        if (document.querySelector('.cart__wrap-items-block') == null) {
            document.querySelector('.cart').remove();
        }
    }
});
}

function getCardForCart(title, price, picture) {
    return `
        <div class="cart__wrap-items-block">
            <img src="img/products/${picture}" alt="${picture}">
            <div class="cart__wrap-items-info">
                <p>${title}</p>
                <p>Price: <span class="price">${price}</span></p>
                <p>Color: Red</p>
                <p>Size: Xl </p>
                <p>Quantity: <input type="number" class="quantity" value="1"></p>
                <svg class="delete" style="background: rgba(255, 255, 255, 1);" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18" fill="none">
                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                    </svg>
            </div>
        </div>
    `
}
