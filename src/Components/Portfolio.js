import React, { Component } from 'react';
var linkifyHtml = require('linkifyjs/html');

class Portfolio extends Component {

	render() {

		if (this.props.data) {
			/* var paidProjects = this.props.data.portfolio.paidProjects.map(function (project){
				//console.log(project)
			}) */
			
			var bootcampProjects = this.props.data.portfolio.bootcampProjects.map(function (project, index) {
				var projectImage = project.image
				,projectSolution = linkifyHtml(project.solution)

				return(
					<div key={project.title} className="columns portfolio-item col-4" style={{width: '25%',
						boxSizing: 'border-box'}}>
						<div className="item-wrap">
							<a href={project.url} title={project.title} target="_blank">
								<figure style={{ maxWidth: 'col-3' }}>
									<img alt={project.title} src={process.env.PUBLIC_URL + projectImage} />
								</figure>
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>{project.title}</h5>
										<p dangerouslySetInnerHTML={ {__html: project.overlayText}} />
									</div>
								</div>
							</a>
						</div>
						<div>
							<h5>{project.title}</h5>
							{project.technology !== "" 
								?
								(
									<p><strong>Concepts/Technologies</strong><br />{project.technology}</p>
								)
								:
								("")
							}
							<strong>Assignment</strong><br />
							
							<p><span dangerouslySetInnerHTML={{ __html: project.assignment }} /></p>
							
							<strong>Solution</strong><br />
							{/* the description was not converting the text to clickable hyperlinks */}
							<span dangerouslySetInnerHTML={{ __html: projectSolution }} />
						</div>
					</div>
				)
			})
		}

		return (
		<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">

						<h1>Check Out Some of My Work.</h1>

						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							<h2>The Eye</h2>
							<p><em>Council for Logistics Research (CLR)</em></p>
							<hr />
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							{/* <div className="row">{paidProjects}</div> */}
							<h2>Bootcamp Projects</h2>
							<hr />
							<div style={{display: 'flex', flexWrap: 'wrap'}}>{bootcampProjects}</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
