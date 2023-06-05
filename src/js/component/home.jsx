import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Main from "../../pages/Main.jsx";
import About from "../../pages/About.jsx";
import Contact from "../../pages/Contact.jsx"
import Pricing from "../../pages/Pricing.jsx"
import NotFound from "../../pages/NotFound.jsx"
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Home;
