import React from "react";
import Login from "./components/Login";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
    return (
        <main className="content">
            <Login />
            <About />
            <Services />
            <Contact />
        </main>
    );
}


export default App;