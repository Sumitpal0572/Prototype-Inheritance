// CreateProduct: Define a factory function called CreateProduct, which takes the following parameters:

// product_name (string): The name of the product.
// brand (string): The brand of the product.
// reviews (number): The review rating for the product.
// price (number): The price of the product.
// rating (number): The rating of the product. The function returns an object containing the product's details as properties and attaches methods getPrice, increasePrice, decreasePrice, and isExpensive to the prototype object.
// getPrice(): Returns the current price of the product.
// increasePrice(amount): Increases the product's price by the specified amount and returns the increased price.
// decreasePrice(amount): Decreases the product's price by the specified amount and returns the decreased price.
// isExpensive(): Returns a Boolean value indicating whether the product's price is greater than or equal to 1000.
// Electronics: Define a factory function called electronics, which inherits from CreateProduct and takes the following additional parameters:

// warranty (number): The warranty period in years for the electronics product. The function returns an object containing the product's details as properties and attaches methods bill and details to the prototype object.
// bill(): Returns the price after applying a discount of 10% from the original price.
// details(): Returns a string with the product's details including the name, brand, warranty period, price after discount, and discount percentage.
// Crockery: Define a factory function called crockery, which inherits from CreateProduct and takes the following additional parameters:

// material (string): The material of the crockery product. The function returns an object containing the product's details as properties and attaches methods bill and details to the prototype object.
// bill(): Returns the price after applying a discount of 15% from the original price.
// details(): Returns a string with the product's details including the name, brand, material, price after discount, and discount percentage.

function CreateProduct(product_name, brand, reviews, price, rating) {
    let products = {
        product_name: product_name,
        brand: brand,
        reviews: reviews,
        price: price,
        rating: rating
    }
    products.getPrice = function () {
        return this.price;
    }


    products.increasePrice = function (amount) {
        this.price += amount;
        return this.price;
    };

    products.decreasePrice = function (amount) {
        this.price -= amount;
        return this.price;
    };

    products.isExpensive = function () {
        return this.price >= 1000;
    };

    return products;
};

function Electronics(product_name, brand, reviews, price, rating, warranty) {
    let eleproducts = CreateProduct(product_name, brand, reviews, price, rating);
    eleproducts.warranty = warranty;

    eleproducts.bill = function () {
        return this.price * 0.9
    };

    eleproducts.details = function () {
        return `Name: ${this.product_name}, Brand: ${this.brand}, Warranty: ${this.warranty} years, Price after discount: ${this.bill()}, Discount: 10%`;

    };

    return eleproducts;
};

function crockery(product_name, brand, reviews, price, rating, material) {
    let crockeryProduct = CreateProduct(product_name, brand, reviews, price, rating);
    crockeryProduct.material = material;

    crockeryProduct.bill = function () {
        return this.price * 0.85;
    };

    crockeryProduct.details = function () {
        return `Name: ${this.product_name}, Brand: ${this.brand}, Material: ${this.material}, Price after discount: ${this.bill()}, Discount: 15%`;
    };

    return crockeryProduct;
}


let laptop = Electronics('Laptop', 'TechBrand', 150, 1200, 4.5, 2);
console.log(laptop.details());
console.log(laptop.getPrice());
console.log(laptop.increasePrice(100));
console.log(laptop.isExpensive());

let plate = crockery('Plate', 'HomeBrand', 200, 20, 4.8, 'Porcelain');
console.log(plate.details());
console.log(plate.getPrice());
console.log(plate.decreasePrice(5));
console.log(plate.isExpensive());