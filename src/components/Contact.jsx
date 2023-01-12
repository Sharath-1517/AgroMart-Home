import React from "react";

function Contact() {

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
            <h1>CONTACT US TODAY</h1>
            <h2>PLEASE PROVIDE THE BELOW DETAILS TO CONTACT US</h2>
            <input type="text" placeholder="Enter your name here..." />
            <input type="email" placeholder="Enter your Email-ID here..." />
            <textarea name="message" id="contact-message" cols="90" rows="10" placeholder="Place your message here..."></textarea>
            <button>SEND CARRIER PIGEON</button>
            </div>
            <script src="https://kit.fontawesome.com/e9f52a1e10.js" crossorigin="anonymous"></script>
            <div class="social-icons">
                <a href="#!">
                <i class="fab fa-twitter fa"></i>
                </a>
                <a href="#!">
                <i class="fab fa-facebook fa"></i>
                </a>
                <a href="#!">
                <i class="fab fa-instagram fa"></i>
                </a>
                <a href="#!">
                <i class="fab fa-github fa"></i>
                </a>
            </div>
        </section>
    );

}

export default Contact;