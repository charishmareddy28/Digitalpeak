import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const Getstarted = ({contactref}) => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		website: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		setFormData({
			fullName: "",
			email: "",
			website: "",
			message: "",
		});
	};
	return (
		<div className="flex p-2 gap-3" ref={contactref}>
			<div className="w-full max-w-lg space-y-6  text-white">
				<div>
					<h1 className="text-[clamp(2rem,2vw,3.5rem)] font-bold">
						START YOUR ASCENT
					</h1>

					<p className="mt-4 text-gray-300 leading-8 text-[clamp(1rem,2vw,1.15rem)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio
						sed repudiandae ipsa, placeat impedit labore repellat dolores
						commodi culpa vitae aut et! Mollitia dolorum at suscipit, quibusdam
						asperiores temporibus.
					</p>
				</div>

				<div className="space-y-5">
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl">
							<BiSolidMessageSquareDetail />
						</div>

						<div>
							<p className="text-sm text-gray-400">Email</p>
							<p className="font-medium">hello@northpeak.com</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl">
							<FaLocationDot />
						</div>

						<div>
							<p className="text-sm text-gray-400">Location</p>
							<p className="font-medium">Address, City, Country</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-8">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
								Full Name
							</label>

							<input
								type="text"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								placeholder="John Doe"
								className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
								Email Address
							</label>

							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@company.com"
								className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
							/>
						</div>
					</div>

					<div>
						<label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
							Website URL
						</label>

						<input
							type="url"
							name="website"
							value={formData.website}
							onChange={handleChange}
							placeholder="https://example.com"
							className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
							Message
						</label>

						<textarea
							rows={6}
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Tell us about your goals..."
							className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
						/>
					</div>

					<button
						type="submit"
						className="w-full rounded-lg bg-emerald-500 py-4 font-semibold text-black transition hover:bg-emerald-400"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Getstarted;
