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
							<p><em>Council for Logistics Research (CLR)</em><br />{/* <span style={{fontSize: 'smaller'}}>Click on an image to reveal more screenshots</span> */}</p>
							<hr />
							<div style={{display: 'flex', flexWrap: 'wrap'}}>
								<div key="CLR - Dashboard" className="portfolio-item column" style={{paddingLeft: '5px', paddingRight: '5px', boxSizing: 'border-box'}}>
									<img src={'/images/portfolio/thumbnails/clr-dashboard.thumbnail.png'} alt="CLR Dashboard" />
								</div>
								<div key="CLR - Timesheet" className="portfolio-item column" style={{paddingLeft: '5px', paddingRight: '5px', boxSizing: 'border-box'}}>
									<img src={'/images/portfolio/thumbnails/clr-timesheet.form.thumbnail.png'} alt="CLR Timesheet" />
								</div>
								{/* <div key="CLR - IntranetCMS - Content Management" className="portfolio-item column" style={{paddingLeft: '5px', paddingRight: '5px', boxSizing: 'border-box'}}>
									<img src={'/images/portfolio/thumbnails/clr-intranetCMS.intranet.form.thumbnail.png'} alt="CLR IntranetCMS - Content Management" />
								</div> */}
								<div key="CLR - IntranetCMS - HR" className="portfolio-item column" style={{paddingLeft: '5px', paddingRight: '5px', boxSizing: 'border-box'}}>
									<img src={'/images/portfolio/thumbnails/clr-intranetCMS.hr.thumbnail.png'} alt="CLR IntranetCMS - HR" />
								</div>
								<div key="CLR - IntranetCMS - Supervisor Resources" className="portfolio-item column" style={{paddingLeft: '5px', paddingRight: '5px', boxSizing: 'border-box'}}>
									<img src={'/images/portfolio/thumbnails/clr-intranetCMS.supervisor.resources.thumbnail.png'} alt="CLR IntranetCMS - HR" />
								</div>
								{/* <div key="CLR - Scheduled Task Manager" className="portfolio-item column" style={{paddingLeft: '5px', paddingRight: '5px', boxSizing: 'border-box'}}>
									<img src={'/images/portfolio/thumbnails/clr-scheduled.task.manager.thumbnail.png'} alt="CLR Scheduled Task Manager" />
								</div> */}
							</div>
							{/* <div className="row">{paidProjects}</div> */}
							<br />
							<h2>Bootcamp Projects</h2>
							Click to view a demo or go to the source at Github
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
