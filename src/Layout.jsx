import React, { useRef } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Getstarted from "./components/Getstarted";

const Layout = () => {
	const servicesRef = useRef(null);
	const Pricingref = useRef(null);
	const contactref = useRef(null);
	return (
		<div className="bg-black text-white h-screen overflow-auto">
			<div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
				<Nav servicesRef={servicesRef} Pricingref={Pricingref} contactref= {contactref} />
				<Home />
				<Services servicesRef={servicesRef} />
			</div>

			<div>
				<Pricing Pricingref={Pricingref} />
				<Getstarted contactref={contactref} />
			</div>
		</div>
	);
};

export default Layout;
