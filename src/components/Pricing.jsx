import React from "react";

const Pricing = ({Pricingref}) => {
	return (
		<div className="flex items-center justify-center flex-col bg-emerald-950" ref={Pricingref}>
			<h1 className="font-bold text-2xl">Strategic Investment</h1>
			<p className="max-w-2xl text-center mt-4 text-lg text-emerald-100">
				Transparent,performance-focused tiers built to scale with your ambition.
			</p>
			<div className="flex justify-center items-center px-4 py-10 gap-12">
				<div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 hover:border-emerald-500 transition-all duration-300">
					<p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
						Starter
					</p>

					<h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
						$2,500
						<span className="ml-1 text-lg font-medium text-gray-400">/mo</span>
					</h2>
					<ul className="mt-8 space-y-4 text-gray-300">
						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							Responsive Design
						</li>

						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							Unlimited Projects
						</li>

						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							24/7 Support
						</li>
					</ul>
					<button className="mt-8 w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400 transition">
						Get Started
					</button>
				</div>
				<div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 hover:border-emerald-500 transition-all duration-300">
					<p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
						Proffesional
					</p>

					<h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
						$3,500
						<span className="ml-1 text-lg font-medium text-gray-400">/mo</span>
					</h2>

					<ul className="mt-8 space-y-4 text-gray-300">
						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							Responsive Design
						</li>

						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							Unlimited Projects
						</li>

						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							24/7 Support
						</li>
					</ul>
					<button className="mt-8 w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400 transition">
						Get Started
					</button>
				</div>

				<div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 hover:border-emerald-500 transition-all duration-300">
					<p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
						Enterprise
					</p>

					<h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
						Custom
					</h2>

					<ul className="mt-8 space-y-4 text-gray-300">
						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							Responsive Design
						</li>

						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							Unlimited Projects
						</li>

						<li className="flex items-center gap-3">
							<span className="text-emerald-400">✓</span>
							24/7 Support
						</li>
					</ul>
					<button className="mt-8 w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400 transition">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
