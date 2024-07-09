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

  incrementQuantity() {
    this.quantity++
  }

  decrementQuantity() {
    this.quantity--
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
    return this.shop.splice(this.shop.indexOf(item), 1)
  }
}

class CartManager{
  constructor() {
    this.cart = []
  }

  addToCart(item) {
    this.cart.push(item)
  }

  removeFromCart(item) {
    return this.cart.splice(this.cart.indexOf(item), 1)
  }
}

const cartManager = new CartManager();
const shopManager = new ShopManager();
const keyboard = new Item("keyboard", 30, 20);
const mouse = new Item("mouse", 10, 40);
const monitor = new Item("monitor", 350, 10);
const mousepad = new Item("mousepad", 5, 100);

shopManager.addToShop(keyboard)
shopManager.addToShop(mouse)
shopManager.addToShop(monitor)
// console.log(shopManager.shop.indexOf(keyboard))
const a = shopManager.removeFromShop(mouse)
console.log(shopManager.shop)
console.log(a)
