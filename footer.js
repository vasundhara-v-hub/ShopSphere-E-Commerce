export function createFooter() {
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <div class="container">

            <p>
                &copy; 2026 ShopSphere.
                All rights reserved.
            </p>

            <p>
                Built as a Full-Stack Web Development
                Capstone Project.
            </p>

        </div>
    `;

    return footer;
}