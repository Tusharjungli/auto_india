// Sample product data (Can be replaced with real data later)
const products = [
  { id: 1, name: "Brake Pads", price: 25, image: "brake-pads.jpg" },
  { id: 2, name: "Engine Oil", price: 40, image: "engine-oil.jpg" },
  { id: 3, name: "Car Battery", price: 90, image: "car-battery.jpg" }
];

let cart = []; // Shopping cart array

// Function to display products dynamically
function loadProducts() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = ""; // Clear previous content
  
  products.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
          <img src="images/${product.image}" alt="${product.name}" width="100">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button class="buy-btn" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productItem);
  });
}

// Function to add items to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
      cart.push(product);
      updateCart();
  }
}

// Function to display cart items
function updateCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = ""; // Clear cart
  let total = 0;
  
  cart.forEach((item, index) => {
      total += item.price;
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
      cartList.appendChild(cartItem);
  });
  
  cartTotal.innerText = `Total: $${total}`;
}

// Function to remove items from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Run function on page load
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
