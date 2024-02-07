import data from './data.js';
console.log(data);


const product_display = document.getElementById('product-display');

data.map((products) => { 
    const card = document.createElement("div");
    card.classList.add('card');

    let sum = 0;
    for (let i = 0; i < products.reviews.length; i++) {
        sum += products.reviews[i].rating;
    }
    const averageRating = sum / products.reviews.length;

    card.innerHTML = `
    <div class="product-img">
        <img src="https://picsum.photos/id/43/327/420">
    </div>
    <div class="product-info">
        <div class="product-text">
            <h1> ${products.name} </h1>
            <div class="product-categories">
                ${
                    products.categories.map((category) => {
                        return `<span class="badge text-bg-primary">${category}</span>`
                    }).join(' ')
                }
            </div>
            <h4> ${ averageRating.toFixed(1) } / 5</h4>
            <p>
                ${products.description}
            </p>
        </div>
        <div class="product-price-btn">
            <p><span>${products.price}</span>$</p>
            <button type="button">buy now</button>
    </div>
    `;
    product_display.appendChild(card);

    // Calculate average rating
});