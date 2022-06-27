import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import Feed from "./Feed";
import Contact from "./Contact";
import About from "./About";
import data from "../data/data.json";
import "./App.css";

const App = () => {
    const [appData] = useState({
        feeds: data,
        name: "Tedane Blake",
        jumbotronTitle: "Jumbotron?",
    });

    return (
        <Router>
            <div className="container">
                <Navigation />
                <Jumbotron title={appData.jumbotronTitle} />
                <Routes>
                    <Route path="/" element={<Feed feeds={appData.feeds} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <div className="footer">
                    <p>&copy; {appData.name} Inc.</p>
                </div>
            </div>
        </Router>
    );
};

export default App;
