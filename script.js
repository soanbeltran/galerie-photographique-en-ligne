let cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onclick="removeFromCart(${index})">❌</button>`;
    cartList.appendChild(li);
  });

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

function openPayment() {
  document.getElementById("payment-modal").style.display = "flex";
}

function closePayment() {
  document.getElementById("payment-modal").style.display = "none";
}

function processPayment(event) {
  event.preventDefault();
  closePayment();

  const panierSection = document.getElementById("panier");
  panierSection.innerHTML = `
    <h2>✅ Paiement réussi !</h2>
    <p>Merci pour votre achat. Vos photos numériques seront envoyées à votre adresse mail.</p>
    <button onclick="fakeDownload()">📁 Télécharger mes photos</button>
  `;

  cart = [];
}

function fakeDownload() {
  alert("📦 Cette fonctionnalité sera disponible bientôt !");
}
