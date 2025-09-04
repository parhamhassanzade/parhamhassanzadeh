import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import behLogo from "../../assets/images/behland.png"
import kian from "../../assets/images/kian.png"

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={behLogo}
								alt="Behland"
								className="work-image"
							/>
							<div className="work-title">Behland</div>
							<div className="work-subtitle">
								Software developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						<div className="work">
							<img
								src={kian}
								alt="kianpol sepahan"
								className="work-image"
							/>
							<div className="work-title">KaianPol Sepahan </div>
							<div className="work-subtitle">
								Software developer
							</div>
							<div className="work-duration">2019 - 2025</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
