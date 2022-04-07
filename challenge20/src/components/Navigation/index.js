import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="d-inline  mobile-view flex-row bd-highlight justify-content-end px-4 fs-2 fw-bold text-light">
				<li className={currentTab === "About" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("About")}>About Me</span>
				</li>
				<li className={currentTab === "Portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("Portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "Contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("Contact")}>Talk to me..</span>
				</li>
				<li className={currentTab === "Resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("Resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;