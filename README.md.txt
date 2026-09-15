# 🛍️ ShopSphere — E-Commerce Product Catalog

ShopSphere is a modern, responsive e-commerce product catalog built as a Full-Stack Web Development Capstone Project. It provides a clean shopping experience with reusable components, client-side routing, product filtering, responsive layouts, and a live production deployment.

## 🌐 Live Demo

**[Visit ShopSphere](https://shop-sphere-e-commerce-ten.vercel.app/)**

## ✨ Features

* 🏠 Modern and responsive home page
* 🛍️ Product catalog with multiple categories
* 🔎 Product search functionality
* 🏷️ Category-based product filtering
* 📦 Individual product detail pages
* 🛒 Add-to-cart interaction
* 🧭 Client-side routing using JavaScript
* 🧩 Modular and reusable JavaScript components
* 📱 Responsive design for mobile, tablet, and desktop
* ⚡ Lazy loading for product images
* ♿ Semantic HTML and accessible navigation
* ❌ Custom 404 page for invalid routes
* 🚀 Live deployment using Vercel

## 🛠️ Technologies Used

* **HTML5** — Semantic page structure
* **CSS3** — Responsive layouts, Grid, Flexbox, CSS variables and modern styling
* **JavaScript (ES6+)** — Application logic, routing, filtering and dynamic rendering
* **Git & GitHub** — Version control and project hosting
* **Vercel** — Production deployment

## 🧩 Project Architecture

The project follows a modular frontend architecture:

```text
ShopSphere-E-Commerce/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── router.js
│   ├── products.js
│   │
│   └── components/
│       ├── navbar.js
│       ├── productCard.js
│       └── footer.js
│
└── assets/
    └── images/
```

## 🧭 Client-Side Routing

ShopSphere uses hash-based client-side routing to navigate between pages without requiring separate HTML files.

Available routes include:

```text
#/
#/products
#/products/Electronics
#/products/Fashion
#/products/Home
#/products/Lifestyle
#/product/:id
#/about
```

An additional 404 route handles invalid paths.

## 📱 Responsive Design

The interface is designed using a mobile-first approach and adapts to:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Desktop screens
* 🖥️ Large displays

CSS Grid and Flexbox are used to create flexible layouts across different screen sizes.

## ⚡ Performance Optimization

The project includes several basic performance optimizations:

* Lazy loading for product images
* Optimized image dimensions
* Reusable JavaScript components
* Modular JavaScript files
* Lightweight HTML, CSS and JavaScript
* Efficient client-side rendering

## 🔍 Product Features

Users can:

1. Browse featured products.
2. Explore the complete product catalog.
3. Search products by name or description.
4. Filter products by category.
5. Open individual product detail pages.
6. Interact with the Add to Cart button.
7. Navigate between pages without full-page reloads.

## 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/vasundhara-v-hub/ShopSphere-E-Commerce.git
```

Open the project in VS Code and run `index.html` using a local development server such as **Live Server**.

Because the project uses JavaScript ES modules, running it through a local server is recommended instead of opening `index.html` directly with `file://`.

## 🚀 Deployment

The project is deployed using **Vercel**.

Live URL:

**https://shop-sphere-e-commerce-ten.vercel.app/**

## 👩‍💻 Author

**Vasundhara V**

Computer Science Engineering and AI/ML Student

### Internship Project

**Full-Stack Web Development Capstone Project**
