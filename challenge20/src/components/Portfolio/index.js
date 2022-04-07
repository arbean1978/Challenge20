import React from 'react';
import Project from '../Project/index'


function Portfolio() {
	const projects = [
		{
			name: 'Run-Buddy',
			image: 'Rb.png',
			technologies: [
				'HTML/CSS',
				'Github',
			],
			github: 'https://github.com/arbean1978/run-buddy',
			deployed: 'https://arbean1978.github.io/run-buddy/',
		},
		{
			name: 'TheDreamTeam',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & Github',
			],
			github: 'https://github.com/arbean1978/TheDreamTeam',
			deployed: 'n/a',
		},
		{
			name: 'zookeepr',
			image: '',
			technologies: [
				'HTML/CSS',
			 	'JavaScript', 
				 'jQuery', 
				 'Node.js'],
			github: 'https://github.com/arbean1978/zookeepr',
			deployed: 'https://arbean1978.github.io/zookeepr',
		},
		{
			name: 'Challenge11',
			image: '',
			technologies: [
				'JavaScript',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/arbean1978/Challenge11',
			deployed: 'https://arbean1978.github.io/Challenge11',
		},
		{
			name: 'Portfolio Generator',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/arbean1978/portfolio-generator',
			deployed: 'https://arbean1978.github.io/portfolio-generator/',
		},
		{
			name: 'Password Generator',
			image: 'Pw.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/arbean1978/Challenge3',
			deployed: 'https://arbean1978.github.io/Challenge3/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;