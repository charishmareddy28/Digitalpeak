import React from "react";
import bg from "/public/bg.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";

const Home = () => {
	return (
		<div className="flex items-start flex-col w-1/2 gap-y-6 p-4">
			<p className="border px-2 border-emerald-600 rounded-2xl text-emerald-800 bg-emerald-300 font-semibold">
				Performance-Driven digital experience
			</p>
			<h1 className="text-emerald-100 font-bold text-xl">Scale your digital peak</h1>
			<p>We combine cutting-edge technology with battle Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque explicabo odio cupiditate incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
			<p className="flex gap-4">
				<button className="flex items-center justify-between gap-1 rounded-2xl bg-emerald-800 text-emerald-300 font-semibold p-2">Launch your Growth<span><FaArrowTrendUp /></span></button>
				<button className=" text-emerald-950 bg-emerald-400 border rounded-2xl p-2 font-semibold border-transparent">View case Studies</button>
			</p>

		</div>
	);
};

export default Home;
