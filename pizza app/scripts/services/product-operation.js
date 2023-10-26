// crud operation to be performed
import makeNetworkCall from './api_client.js'; 
import URL from '../utils/config.js';

import Product from '../models/product-model.js';


const productOperations = { 
  products:[],
  search(pizzaId){
     const product = this.products.
     find(currentProduct =>currentProduct.id==pizzaId);
     console.log('Product found',product);
     product.isAddedInCart = true;
     console.log('array',this.products);
  },
  getProductIncart(){
     const productInbasket = this.products.filter(product=>product.isAddedInCart);
     return productInbasket;
  },

  async  loadProducts(){
    //api client (object(pizza))
    const pizzas = await makeNetworkCall();
   const pizzaArray= pizzas['Vegetarian'];
    const productArray = pizzaArray.map(pizza=>{
    const currentPizza = new Product(pizza.id,pizza.name,pizza.price,pizza.menu_description,pizza.assets.product_details_page[0].url);
      return currentPizza;
   })
   console.log('product array ', productArray);
   this.products = productArray;
   return productArray;
    //data map to model(conversion)
    //return model  
  },
  calculateTotal() {
    const cartProducts = this.getProductIncart();
    let TotalAmount = 0;

    for (let product of cartProducts) {
      product.price=Number.parseFloat(product.price);

      TotalAmount += product.price;
    }

    return TotalAmount;
  },
  sortProducts(){

  },
  searchProducts(){

  }
}
export default productOperations;
