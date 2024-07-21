// let message: string = "Hello tsc tut";
// // console.log(message);

let heading = document.createElement("h2");
// heading.textContent = message;
// document.body.appendChild(heading);
// console.log(document.body.appendChild(heading));

// let box;
// console.log(typeof box); // undefined

// box = "Hello";
// console.log(typeof box); // string

// box = 100;
// console.log(typeof box); // number

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `${id} beautiful cars`,
    price: 2999.99,
  };
}

function showProduct(name: string, price: number) {
  console.log(`${name} have price: $${price}`);
}
const product = getProduct(5);
showProduct(product.name, product.price);
