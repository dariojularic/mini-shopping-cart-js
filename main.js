import './style.css'

class Item{
  constructor(name, price, quantity) {
    this.id = crypto.randomUUID()
    this.name = name
    this.price = price
    this.quantity = quantity
    this.isInStock = true
  }

  notInStock() {
    this.isInStock = false
  }
}

class ShopManager{
  constructor() {
    this.shop = []
  }

  addToShop(item) {
    this.shop.push(item)
  }

  removeFromShop(item) {
  
  }
}

class CartManager{
  constructor() {
    this.cart = []
  }

  addToCart(item) {
    this.cart.push(item)
  }

  removeFromCart(itemId) {

  }
}
