import React from "react";

const Nav = ({ servicesRef, Pricingref, contactref }) => {
	return (
		<div className="flex justify-center items-center p-2">
			<div
				className="border rounded-2xl w-[clamp(500px,80vw,1000px)];
       border-transparent bg-black hover:border-emerald-600 duration-300 transition-all p-2 font-bold justify-between items-center flex gap-6"
			>
				NORTHPEAK
				<div className="flex gap-1 md:gap-4 font-semibold">
					<button
						onClick={() =>
							servicesRef.current.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						Services
					</button>
					
					<button
						onClick={() =>
							Pricingref.current.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						Pricing
					</button>
					<button
						className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(9px,2vw,12px)]"
						onClick={() =>
							contactref.current.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Nav;
