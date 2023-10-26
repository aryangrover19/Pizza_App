import  productOperations  from "../services/product-operation.js";
 async function loadPizzas(){  
 const pizzas = await productOperations.loadProducts();
 console.log('Pizza are ', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();
/*
<div class ="col-4">
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
*/
function AddToCart(){
    //this -keyword(current calling object)
    console.log('add to cart called..',this);
    const currentButton = this;
    const pizzaId = currentButton.getAttribute('product-id');
    console.log('pizza id is ', pizzaId);
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket(){
    const cartproducts =  productOperations.getProductIncart();
    const basket = document.querySelector('#basket');
    basket.innerHTML = '';
    for (let product of cartproducts){
         const li = document.createElement('li');
        li.innerText = ` Pizza Name : ${product.name} Price : ${product.price}`;
        basket.appendChild(li);

    }
     const totalAmount = productOperations.calculateTotal();
    const totalLi = document.createElement('li');
    totalLi.innerText = `Total Amount: ${totalAmount}`;
    basket.appendChild(totalLi);
} 

function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    colDiv.appendChild(cardDiv);
    cardDiv.style = "width: 18rem;";
    const img = document.createElement('img');
    img.src =pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = 'card-title';
    pTag.innerText = pizza.desc;
    const button = document.createElement('button');
    button.setAttribute('product-id',pizza.id);
    button.addEventListener('click', AddToCart)
    button.innerText ='Add To Cart';
    button.className = 'btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);


}