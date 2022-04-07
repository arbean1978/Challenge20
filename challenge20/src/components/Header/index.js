import React from "react";
import Navigation from "../Navigation";


function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<div className=" flex justify-center">
			<div className="p-3 mb-2 h-25 bg-black bg-gradient-to-r from-black to-gray-600 text-white text-9xl font-bold">
				 <a href="/About">Aaron's React Portfolio</a>
			</div>
     
			<div className="flex justify-center items-center">
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</div>
	);
}

export default Header;