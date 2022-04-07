import React, { useState } from "react";
import {Link} from 'react-router-dom'


function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
		<div className="w-72 max-w-sm rounded overflow-hidden shadow-lg">
			<img
				variant="top"
				//src={require(`../../images/${image}`)}
				alt='project'
				className="card-image w-full"
			/>
			<div className="center px-6 py-4">
				<div>
					<div className="card-title">{name}</div>
					<div className="card-subtitle font-bold text-xl mb-2 ">Techs Used</div>
					<div className="card-techs text-gray-700 text-base ">{getTechs(techs)}</div>
					<Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Link>
					<br></br>
					<Link href={gitLink} target="_blank" className="card-link">
						{name} Github
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Project;