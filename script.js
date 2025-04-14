function updateCartDisplay() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("cart-total");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price.toFixed(2)} €
            <span class="remove-item" title="Supprimer">❌</span>
        `;
        li.querySelector(".remove-item").onclick = () => removeFromCart(index);
        cartList.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}
