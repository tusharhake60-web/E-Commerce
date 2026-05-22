import React from 'react'
import CommanNavBar from './CommanNavBar'
export default function CHome() {
    return (
        <div>
            <CommanNavBar></CommanNavBar>
            <div className="home-container">

                {/* Hero Section */}
                <section className="hero-section">
                    <h1>Welcome To MyShop</h1>
                    <p>Best Products At Best Prices</p>


                </section>

                {/* Categories */}
                <section className="category-section">

                    <h2>Shop By Categories</h2>

                    <div className="category-container">

                        <div className="category-card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                alt="Electronics"
                            />
                            <h3>Electronics</h3>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
                                alt="Fashion"
                            />
                            <h3>Fashion</h3>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                                alt="Food"
                            />
                            <h3>Food</h3>
                        </div>

                    </div>

                </section>

                {/* Featured Products */}
                <section className="product-section">

                    <h2>Featured Products</h2>

                    <div className="product-container">

                        <div className="product-card">
                            <img
                                src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
                                alt="product"
                            />
                            <h3>Wireless Headphone</h3>
                            <p>₹1999</p>

                        </div>

                        <div className="product-card">
                            <img
                                src="https://m.media-amazon.com/images/I/71Swqqe7XAL._SX679_.jpg"
                                alt="product"
                            />
                            <h3>Smart Watch</h3>
                            <p>₹2999</p>

                        </div>

                        <div className="product-card">
                            <img
                                src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
                                alt="product"
                            />
                            <h3>Running Shoes</h3>
                            <p>₹1499</p>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    )
}
