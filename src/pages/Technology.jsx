import React from "react";
import { useEffect } from "react";
import techData from "../../public/assets/tech/techData";
import { useState } from "react";
const TechDescription = (props) => {
	return (
		<div
			id="techdesc"
			className="mt-6"
		>
			<h6>THE TERMINOLOGY</h6>
			<h3 className="mt-3">{props.data.title}</h3>
			<p className="max-w-xl">{props.data.text}</p>
		</div>
	);
};
export default function Technology(props) {
	//   Hooks
	const [index, setIndex] = useState(0);
	const { setPath } = props.pathState;
	const windowSize = props.window;
	useEffect(() => {
		setPath("/technology");
	});
	console.log(windowSize);
	return (
		<div id="technology">
			<div className="container mx-auto p-4 mt-8 lg:mt-4 md:p-8">
				<h2>
					<span className="mr-4">01</span>SPACE LAUNCH 101
				</h2>
				<div className="mt-8 lg:mt-4 flex flex-col items-center lg:flex-row-reverse lg:justify-around lg:items-start xl:items-center">
					<img
						src={`${
							windowSize === "s"
								? techData[index].pathLandscape
								: techData[index].pathPortrait
						}`}
						alt={techData[index].title}
						className="rounded-sm opacity-100 transition-opacity duration-150 md:w-[50%] lg:max-w-md md:h-auto md:object-cover"
					/>
					<div className="lg:px-8 xl:px-0 lg:flex lg:gap-10  xl:h-80">
						<nav className="w-full mt-12 lg:mt-7 lg:w-fit xl:mt-4">
							<ul className="flex w-[75%] max-w-sm justify-evenly mx-auto  lg:flex-col lg:w-fit lg:h-full lg:justify-between">
								{techData.map((el, i) => {
									return (
										<li>
											<button
												onClick={() => {
													setIndex(i);
												}}
												className="text-white font-bellefair text-2xl border-2 border-white w-11 h-11 xl:w-16 xl:h-16 lg:h-14 lg:w-14 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
											>
												{i + 1}
											</button>
										</li>
									);
								})}
							</ul>
						</nav>
						<TechDescription data={techData[index]} />
					</div>
				</div>
			</div>
		</div>
	);
}
