import React, { useState } from "react";

export function Traffic() {
	const [light, setLight] = useState("");
	function changeLigth(color) {
		setLight(color);
	}
	return (
		<div className="container-traffic">
			<div className="rope"></div>
			<div className="traffic">
				<div>
					<button
						className={
							"red " + (light == "red" ? "selected" : null)
						}
						onClick={() => changeLigth("red")}></button>
				</div>
				<div>
					<button
						className={
							"orange " + (light == "orange" ? "selected" : null)
						}
						onClick={() => changeLigth("orange")}></button>
				</div>
				<div>
					<button
						className={
							"green " + (light == "green" ? "selected" : null)
						}
						onClick={() => changeLigth("green")}></button>
				</div>
			</div>
		</div>
	);
}
