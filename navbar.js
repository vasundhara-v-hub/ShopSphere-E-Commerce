export function createNavbar() {
    const header = document.createElement("header");

    header.innerHTML = `
        <div class="container navbar">

            <a
                href="#/"
                class="logo"
                aria-label="ShopSphere Home"
            >
                ShopSphere
            </a>

            <nav aria-label="Main navigation">

                <ul class="nav-links">

                    <li>
                        <a href="#/" class="active">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#/products">
                            Products
                        </a>
                    </li>

                    <li>
                        <a href="#/about">
                            About
                        </a>
                    </li>

                </ul>

            </nav>

        </div>
    `;

    return header;
}