let cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onclick="removeFromCart(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.style.display = cartDiv.style.display === "block" ? "none" : "block";
}
