console.log("ShopSphere app.js is running");
import products from "./products.js";
import { createProductCard } from "./components/productCard.js";
import { createNavbar } from "./components/navbar.js";
import { createFooter } from "./components/footer.js";
import { router } from "./router.js";

function setupNavbar() {
    const existingHeader = document.querySelector("header");

    if (existingHeader) {
        existingHeader.remove();
    }

    const navbar = createNavbar();
    document.body.prepend(navbar);
}

function setupFooter() {
    const existingFooter = document.querySelector("footer");

    if (existingFooter) {
        existingFooter.remove();
    }

    const footer = createFooter();
    document.body.appendChild(footer);
}

function renderProducts(productList, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (productList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Try a different search or category.</p>
            </div>
        `;
        return;
    }

    productList.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

function renderFeaturedProducts() {
    renderProducts(products.slice(0, 4), "featured-products");
}

function renderAllProducts() {
    const container = document.getElementById("product-list");

    if (!container) {
        return;
    }

    const selectedCategory = window.selectedCategory || "all";

    let productsToDisplay = products;

    if (selectedCategory !== "all") {
        productsToDisplay = products.filter(
            product => product.category === selectedCategory
        );
    }

    renderProducts(productsToDisplay, "product-list");

    setupProductFilters();
}

function setupProductFilters() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!searchInput || !categoryFilter) {
        return;
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        const filteredProducts = products.filter(product => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm);

            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        renderProducts(filteredProducts, "product-list");
    }

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
}

function renderProductDetails(productId) {
    const container = document.getElementById("product-details");

    if (!container) {
        return;
    }

    const product = products.find(
        item => item.id === Number(productId)
    );

    if (!product) {
        container.innerHTML = `
            <div class="empty-state">
                <h2>Product Not Found</h2>
                <p>The product you're looking for does not exist.</p>
                <a href="#/products" class="btn">
                    Back to Products
                </a>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <div class="product-details-content">

            <div>
                <img
                    src="${product.image}"
                    alt="${product.name}"
                >
            </div>

            <div>
                <span class="product-category">
                    ${product.category}
                </span>

                <h1>${product.name}</h1>

                <p>
                    ${product.description}
                </p>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <button
                    class="btn"
                    type="button"
                    id="addToCartBtn"
                >
                    Add to Cart
                </button>

                <a
                    href="#/products"
                    class="btn"
                >
                    Back to Products
                </a>
            </div>

        </div>
    `;

    const cartButton = document.getElementById("addToCartBtn");

    if (cartButton) {
        cartButton.addEventListener("click", () => {
            cartButton.textContent = "Added ✓";
            cartButton.disabled = true;
        });
    }
}

function updateActiveNavigation() {
    const currentPath = window.location.hash || "#/";

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        link.classList.toggle(
            "active",
            linkPath === currentPath
        );
    });
}

function renderCurrentPage() {
    router();

    updateActiveNavigation();

    const currentPath = window.location.hash || "#/";

    if (currentPath === "#/" || currentPath === "#") {
        renderFeaturedProducts();
    }

    if (
        currentPath === "#/products" ||
        currentPath.startsWith("#/products/")
    ) {
        renderAllProducts();
    }

    if (currentPath.startsWith("#/product/")) {
        const productId = currentPath.split("/")[2];
        renderProductDetails(productId);
    }
}

function initializeApp() {
    setupNavbar();
    setupFooter();
    renderCurrentPage();
}

window.addEventListener("hashchange", renderCurrentPage);

document.addEventListener("DOMContentLoaded", initializeApp);
