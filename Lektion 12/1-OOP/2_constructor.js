// const newProduct = (name, price, desc) => {
//   const product = {
//     productName: name,
//     price,
//     description: desc
//   }

//   return product
// }

// const p1 = newProduct('Product 1', 100, 'this is a product')


// console.log(p1)


function Product(name, price, desc) {
  this.productName = name
  this.price = price
  this.description = desc

  this.summary = function() {
    return `The product ${this.productName} costs ${this.price} kr.`
  }
}

// Instans av ett objekt
const product1 = new Product('Product 1', 100, 'this is a product description')
const product2 = new Product('Product 2', 200, 'this is a product description')

console.log(product1)
