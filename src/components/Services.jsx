import React from "react";

const Services = ({servicesRef}) => {
	return (
		<div className="flex items-center justify-center flex-col pt-3" ref={servicesRef}>
			<h1 className="font-bold text-2xl">Percision Services</h1>
			<p className="max-w-2xl text-center mt-4 text-lg text-emerald-100">
				end-to-end solutions designed for high-growth enterprises who demand
				measurable impact.
			</p>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 px-25 pt-2">
				<div className="">
					<p className="text-center text-emerald-100 text-lg font-semibold">
						Strategic Consulting
					</p>
					<p className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(16px,1vw,30px)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						veniam, amet corporis debitis illum id asperiores nihil aut quaerat
						ullam veritatis ipsam modi totam voluptates placeat excepturi nulla
						ipsum dolore.
					</p>
				</div>
				<div>
					<p className="text-center text-lg font-semibold text-emerald-100">SEO Mastery</p>
					<p className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(16px,1vw,30px)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						veniam, amet corporis debitis illum id asperiores nihil aut quaerat
						ullam veritatis ipsam modi totam voluptates placeat excepturi nulla
						ipsum dolore.
					</p>
				</div>
				<div>
					<p className="text-center text-lg font-semibold text-emerald-100">Performance PPC</p>
					<p className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(16px,1vw,30px)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						veniam, amet corporis debitis illum id asperiores nihil aut quaerat
						ullam veritatis ipsam modi totam voluptates placeat excepturi nulla
						ipsum dolore.
					</p>
				</div>
				<div >
					<p className="text-center text-lg font-semibold text-emerald-100">UX/UI Design</p>

					<p className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(16px,1vw,30px)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						veniam, amet corporis debitis illum id asperiores nihil aut quaerat
						ullam veritatis ipsam modi totam voluptates placeat excepturi nulla
						ipsum dolore.
					</p>
				</div>
				<div>
					<p className="text-center text-lg font-semibold text-emerald-100">Full-Stack Dev</p>
					<p className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(16px,1vw,30px)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						veniam, amet corporis debitis illum id asperiores nihil aut quaerat
						ullam veritatis ipsam modi totam voluptates placeat excepturi nulla
						ipsum dolore.
					</p>
				</div>
				<div>
					<p className="text-center text-lg font-semibold text-emerald-100">Content Strategy</p>

					<p className="bg-emerald-600 text-black border rounded-md px-1.5 text-[clamp(16px,1vw,30px)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						veniam, amet corporis debitis illum id asperiores nihil aut quaerat
						ullam veritatis ipsam modi totam voluptates placeat excepturi nulla
						ipsum dolore.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
