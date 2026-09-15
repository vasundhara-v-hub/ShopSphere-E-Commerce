
export function router() {
    const path = window.location.hash || "#/";
    const app = document.getElementById("app");

    if (!app) {
        return;
    }

    if (path === "#/" || path === "#") {
        showHome(app);
    }
    else if (path === "#/products") {
        showProducts(app);
    }
    else if (path.startsWith("#/products/")) {
        const category = decodeURIComponent(path.split("/")[2]);
        showProducts(app, category);
    }
    else if (path === "#/about") {
        showAbout(app);
    }
    else if (path.startsWith("#/product/")) {
        const productId = path.split("/")[2];
        showProduct(app, productId);
    }
    else {
        show404(app);
    }
}


function showHome(app) {
    app.innerHTML = `
        <section class="hero">
            <div class="container hero-content">

                <div>
                    <p class="product-category">
                        Modern E-Commerce
                    </p>

                    <h1>
                        Discover Products
                        <span>You’ll Love</span>
                    </h1>

                    <p>
                        Find everyday essentials, smart technology
                        and lifestyle products — all in one place.
                    </p>

                    <a href="#/products" class="btn">
                        Shop Now
                    </a>
                </div>

                <div>
                    <img
                        src="assets/images/shop-hero.jpg"
                        alt="Modern collection of products"
                        class="hero-image"
                    >
                </div>

            </div>
        </section>


        <section>
            <div class="container">

                <div class="section-title">
                    <h2>Featured Products</h2>

                    <p>
                        Discover some of our popular picks.
                    </p>
                </div>

                <div
                    id="featured-products"
                    class="product-grid"
                ></div>

            </div>
        </section>


        <section>
            <div class="container">

                <div class="section-title">
                    <h2>Shop by Category</h2>

                    <p>
                        Find what you need quickly.
                    </p>
                </div>


                <div class="product-grid">

                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Technology
                            </span>

                            <h3>Electronics</h3>

                            <p class="product-description">
                                Discover smart devices and useful
                                technology for everyday life.
                            </p>

                            <a
                                href="#/products/Electronics"
                                class="btn"
                            >
                                Shop Electronics
                            </a>

                        </div>
                    </article>


                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Style
                            </span>

                            <h3>Fashion</h3>

                            <p class="product-description">
                                Explore comfortable and stylish
                                everyday essentials.
                            </p>

                            <a
                                href="#/products/Fashion"
                                class="btn"
                            >
                                Shop Fashion
                            </a>

                        </div>
                    </article>


                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Everyday Living
                            </span>

                            <h3>Home</h3>

                            <p class="product-description">
                                Practical products for your home,
                                study and workspace.
                            </p>

                            <a
                                href="#/products/Home"
                                class="btn"
                            >
                                Shop Home
                            </a>

                        </div>
                    </article>


                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Lifestyle
                            </span>

                            <h3>Lifestyle</h3>

                            <p class="product-description">
                                Everyday essentials designed for
                                your active lifestyle.
                            </p>

                            <a
                                href="#/products/Lifestyle"
                                class="btn"
                            >
                                Shop Lifestyle
                            </a>

                        </div>
                    </article>

                </div>

            </div>
        </section>


        <section>
            <div class="container">

                <div class="product-details">

                    <h2>Everything You Need, All in One Place</h2>

                    <p>
                        Browse our collection, discover products
                        that match your needs and find something
                        you'll love.
                    </p>

                    <br>

                    <a href="#/products" class="btn">
                        View All Products
                    </a>

                </div>

            </div>
        </section>
    `;
}


function showProducts(app, selectedCategory = "all") {

    const categoryTitle =
        selectedCategory === "all"
            ? "Our Products"
            : selectedCategory;

    app.innerHTML = `
        <section>
            <div class="container">

                <div class="section-title">

                    <h2>${categoryTitle}</h2>

                    <p>
                        Find the perfect product for you.
                    </p>

                </div>


                <div class="controls">

                    <div class="search-box">

                        <input
                            type="search"
                            id="searchInput"
                            placeholder="Search products..."
                            aria-label="Search products"
                        >

                    </div>


                    <div class="category-filter">

                        <select
                            id="categoryFilter"
                            aria-label="Filter products by category"
                        >

                            <option value="all">
                                All Categories
                            </option>

                            <option value="Electronics">
                                Electronics
                            </option>

                            <option value="Fashion">
                                Fashion
                            </option>

                            <option value="Home">
                                Home
                            </option>

                            <option value="Lifestyle">
                                Lifestyle
                            </option>

                        </select>

                    </div>

                </div>


                <div
                    id="product-list"
                    class="product-grid"
                ></div>

            </div>
        </section>
    `;

    window.selectedCategory = selectedCategory;
}


function showAbout(app) {
    app.innerHTML = `
        <section>
            <div class="container">

                <div class="section-title">

                    <p class="product-category">
                        Welcome to ShopSphere
                    </p>

                    <h2>About Us</h2>

                    <p>
                        Making everyday shopping simple,
                        convenient and enjoyable.
                    </p>

                </div>


                <div class="product-details about-intro">

                    <h2>Who We Are</h2>

                    <p>
                        ShopSphere is your simple destination for
                        discovering products for everyday life.
                        From useful technology to fashion and home
                        essentials, we bring a variety of products
                        together in one convenient place.
                    </p>

                    <p>
                        We believe shopping should be easy.
                        That's why ShopSphere is designed around
                        simple navigation, clear product information
                        and a smooth browsing experience.
                    </p>

                </div>


               <div class="product-grid about-grid">

                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Quality
                            </span>

                            <h3>Products You'll Love</h3>

                            <p class="product-description">
                                Explore a carefully selected range
                                of products for everyday needs.
                            </p>

                        </div>
                    </article>


                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Convenience
                            </span>

                            <h3>Simple Shopping</h3>

                            <p class="product-description">
                                Find products quickly with easy
                                navigation and helpful categories.
                            </p>

                        </div>
                    </article>


                    <article class="product-card">
                        <div class="product-info">

                            <span class="product-category">
                                Experience
                            </span>

                            <h3>Made for Everyone</h3>

                            <p class="product-description">
                                Enjoy a clean and responsive shopping
                                experience on any device.
                            </p>

                        </div>
                    </article>

                </div>


                <div class="product-details why-shopsphere">
    

                    <h2>Why ShopSphere?</h2>

                    <p>
                        Whether you're looking for the latest
                        gadgets, everyday fashion or useful home
                        products, ShopSphere makes discovering
                        something new simple.
                    </p>

                    <br>

                    <a href="#/products" class="btn">
                        Start Shopping
                    </a>

                </div>

            </div>
        </section>
    `;
}


function showProduct(app, productId) {
    app.innerHTML = `
        <section>
            <div class="container">

                <div
                    id="product-details"
                    class="product-details"
                >

                    <p class="loading">
                        Loading product...
                    </p>

                </div>

            </div>
        </section>
    `;
}


function show404(app) {
    app.innerHTML = `
        <section>
            <div class="container">

                <div class="empty-state">

                    <h2>404 - Page Not Found</h2>

                    <p>
                        The page you're looking for
                        doesn't exist.
                    </p>

                    <br>

                    <a href="#/" class="btn">
                        Back to Home
                    </a>

                </div>

            </div>
        </section>
    `;
}

