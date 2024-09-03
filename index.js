import {menuArray} from '/data.js'

const itemsHtml = menuArray.map(food => {
    return `
    <section>
    <div class="foods">
        <i class="fa-solid fa-plus buy-icon"></i>
        <p class="icon"> ${food.emoji} </p>
            <div class="details">
                <p class="food-names">${food.name}</p>
                <p class="food-ingredients">${food.ingredients}</p>
                <p class="price">$${food.price}</p>
            </div>
    </div>
    </section>
    `;
}).join('')

document.getElementById('container').innerHTML = itemsHtml
