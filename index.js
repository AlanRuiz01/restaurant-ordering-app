import {menuArray} from '/data.js'

// Renderizar el menu
const itemsHtml = menuArray.map(food => {
    return `
    <section>
        <div class="foods">
            <p class="icon" id="food-images-${food.name}"> ${food.emoji} </p>
            <i class="fa-solid fa-plus buy-icon" data-pizza="${food.price}"></i>
            <div class="details">
                <p class="food-names">${food.name}</p>
                <p class="food-ingredients">${food.ingredients}</p>
                <p class="price">$${food.price}</p>
            </div>
        </div>
    </section>


    `;
}).join('');

// <section>
// <h2>Your order</h2>
//     <div>
//         <p>Pizza</p>
//         <p></p>
//     </div>
//  <p></p>
// </section>
document.getElementById('container').innerHTML = itemsHtml

//Renderizar la orden

 


// Obtener los items que se quieran agregar
document.addEventListener('click', e => {
    console.log(e.target.dataset.pizza)
})