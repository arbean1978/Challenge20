import React from "react";
import Navigation from "../Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div className="p-3 mb-2 bg-black bg-gradient text-white fs-1 fw-bold">
				 <a href="/About">Aaron's React Portfolio</a>
			</div>
     
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;