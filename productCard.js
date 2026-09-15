// ========================================
// Product Card Component
// ========================================

export function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
        >

        <div class="product-info">

            <span class="product-category">
                ${product.category}
            </span>

            <h3>
                ${product.name}
            </h3>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="product-bottom">

                <span class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

                <a
                    href="#/product/${product.id}"
                    class="btn"
                    aria-label="View ${product.name}"
                >
                    View
                </a>

            </div>

        </div>
    `;

    return card;
}