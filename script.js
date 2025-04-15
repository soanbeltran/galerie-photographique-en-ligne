// Tableau contenant les articles du panier
let cart = [];

// Fonction pour ajouter un article
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// Mettre à jour l'affichage du panier
function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <span class="remove-btn" onclick="removeItem(${index})">✖</span>
    `;
    cartList.appendChild(li);
    total += 1;
  });

  totalSpan.textContent = total;
}

// Supprimer un article du panier
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Vider tout le panier
function clearCart() {
  cart = [];
  updateCart();
}

// Ouvrir le modal de paiement
function openPayment() {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }
  document.getElementById("payment-modal").style.display = "flex";
}

// Fermer le modal de paiement
function closePayment() {
  document.getElementById("payment-modal").style.display = "none";
}

// Simuler un paiement fictif
function processPayment(event) {
  event.preventDefault();

  // Simule un traitement de paiement (juste une pause ici)
  setTimeout(() => {
    alert("💳 Paiement fictif réussi ! Merci pour votre achat 😊");
    clearCart();
    closePayment();
  }, 300);
}
