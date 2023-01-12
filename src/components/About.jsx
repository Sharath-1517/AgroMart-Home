import React from "react";

function About() {
    
    return (
        <section className="about" id="about">
            <h2 className="service-question">WHAT WE DO</h2>
            <h4>WE PROVIDE CONSUMERS THE FACILITY TO BUY PRODUCTS DIRECTLY FROM FARMERS</h4>
            <div className="about-services">
                <div className="about-farmers">
                    <img src="images/agronomy.webp" alt="farmer-paddy" className="about-icons"/>
                    <h2>FARMER'S BENEFITTED</h2>
                    <p className="about-para">
                        WE PROVIDE VARIOUS OFFERS AND OPTIONS FOR FARMER'S FOR THEIR MAXIMUM PROFIT AND LEAST LOSS.
                    </p>
                </div>
                <div className="about-consumers">
                    <img src="images/consumer.webp" alt="farmer-paddy" className="about-icons"/>
                    <h2>CONSUMER'S SATISFACTION</h2>
                    <p className="about-para">
                    LIKE A FARMER'S BENEFIT, A CONSUMER'S SATISFACTION IS ALSO IMPORTANT TO US.
                    </p>
                </div>
                <div className="about-users">
                    <img src="images/add-friend.webp" alt="farmer-paddy" className="user" id="user"/>
                    <h2>USER FRIENDLY</h2>
                    <p className="about-para">
                    THE UI AND FEATURES ARE USER FRIENDLY FOR THE USER'S WHO HAS LANGUAGE AS A BARRIER.
                    </p>
                </div>
            </div>
        </section>
    );

}


export default About;