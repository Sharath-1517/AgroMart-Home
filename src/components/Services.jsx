import React from "react";


function Services() {
    
    return (
        <section className="services">
            <h1 id="services">Services</h1>
            <h3>Some of the services that we provide</h3>
            <div className="services-container">
                <div className="services-farmers">
                    <img src="images/farmer-features.webp" alt="farmers benefits" />
                    <h1>Feature's For Farmers</h1>
                    <ul>
                        <li>Posting products online</li>
                        <li>Farmer's Leaderboard</li>
                        <li>Stock Notifications</li>
                        <li>Chat Bot</li>
                        <li>NEWS and Resources</li>
                        <li>Order Tracking etc.,</li>
                    </ul>
                </div>
                <div className="services-consumers">
                    <img src="images/consumer-features.webp" alt="consumer benefits" />
                    <h1>Feature's For Consumers</h1>
                    <ul>
                        <li>Buy goods directly from farmer's</li>
                        <li>Purchase Filters</li>
                        <li>Stock Notifications</li>
                        <li>Chat Bot</li>
                        <li>Search engine</li>
                        <li>Order options(Online/Offline)</li>
                        <li>Seasonal products</li>
                        <li>Order Tracking etc.,</li>
                    </ul>
                </div>
            </div>
        </section>
    );

}


export default Services;