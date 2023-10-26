//data modelling 
class Product{
    constructor (id, name ,price,desc,url){
        //this - keyword
        // hold the current calling object reference
        this.id = id;
        this.name= name;
        this.price = price;
        this.desc = desc;
        this.url = url;
        this.isAddedInCart = false;

    }
}
export default Product;