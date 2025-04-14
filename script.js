function updateCartDisplay() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("cart-total");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} - ${item.price.toFixed(2)} €`;

        const removeBtn = document.createElement("span");
        removeBtn.textContent = "❌";
        removeBtn.classList.add("remove-item");
        removeBtn.title = "Supprimer";
        removeBtn.onclick = () => removeFromCart(index);

        li.appendChild(itemText);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}
