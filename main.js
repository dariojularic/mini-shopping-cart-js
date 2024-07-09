import './style.css'

// const itemName = document.querySelector(".item-name");
// const itemPrice = document.querySelector(".item-price");
// const itemQuantity = document.querySelector(".item-quantity");
// const itemStock = document.querySelector(".item-stock");
// const addToCartBtns = document.querySelector(".add-to-cart-btns")

const shopOfferList = document.querySelector(".shop-offer-list");
const cartList = document.querySelector(".cart-list");

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

  renderOffer() {
    this.shop.forEach(item => {
      const html = `<li>
                      <p class="name">${item.name}</p>
                      <p class="price">${item.price}€</p>
                      <p class="quantity">0</p>
                      <p class="in-stock">${item.quantity}</p>
                      <button class="add-to-cart-btn">Add To Cart</button>
                    </li>`
      shopOfferList.insertAdjacentHTML("afterbegin", html)
    })
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

  renderCart() {
    this.cart.forEach(item => {
      const html = `<li>
                      <p class="name-cart">${item.name}</p>
                      <p class="in-stock-cart">${item.quantity}</p>
                      <p class="price-cart">${item.price}€</p>
                      <button class="remove-from-cart-btn">Remove</button>
                    </li>`
      cartList.insertAdjacentHTML("afterbegin", html)
    })
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
console.log(shopManager.shop)
shopManager.renderOffer()
