
const products = [
    { id: 1, name: "Prodect 1", price: 100, image: "assets/images/prodect1.jpg" },
    { id: 2, name: "Prodect 2", price: 200, image: "assets/images/prodect2.jpg" },
    { id: 3, name: "Prodect 3", price: 300, image: "assets/images/prodect3.jpg" },
];


const productContainer = document.getElementById("product-list");

if (productContainer) {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}


function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}
