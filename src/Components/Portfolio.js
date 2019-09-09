import React, { Component } from 'react';
var linkifyHtml = require('linkifyjs/html');

class Portfolio extends Component {

	render() {

		if (this.props.data) {
			/* var paidProjects = this.props.data.portfolio.paidProjects.map(function (project){
				//console.log(project)
			}) */
			
			var bootcampProjects = this.props.data.portfolio.bootcampProjects.map(function (project, index) {
				let projectImage = project.image
				,projectSolution = linkifyHtml(project.solution)
				,theURL = ""

				theURL = (project.demo !== ""
				?(theURL = project.demo)
				:(theURL = project.GitHub))	
				return(
					<div key={project.title} className="columns portfolio-item col-4" style={{width: '25%',
						boxSizing: 'border-box'}}>
						<div className="item-wrap">
							<figure style={{ maxWidth: 'col-3' }}>
								<a href={theURL} title={project.title} target="_blank">
									<img alt={project.title} src={process.env.PUBLIC_URL + projectImage} />
								</a>
							</figure>
							<div className="overlay">
							<a href={theURL} title={project.title} target="_blank" style={{marginTop: '-20px'}}>
								<div className="portfolio-item-meta">
									<h5>{project.title}</h5>
									<p dangerouslySetInnerHTML={ {__html: project.overlayText}} />
								</div>
								</a>
							</div>
						</div>
						<div>
							<h5>
								{project.title}<br />
								&nbsp;&nbsp;
								<a href={project.GitHub} alt="GitHub repository" target="_blank">
									<i class="fab fa-github"></i>
								</a>&nbsp;&nbsp;
								{project.demo !== ""
								?(<a href={project.demo} alt="Demo it" target="_blank"><i class="fas fa-external-link-alt"></i></a>)
								:("")
								}
							</h5>
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

							<p>
								
							</p>
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
							<h2><i>The Eye</i> - Council for Logistics Research (CLR)</h2>
							Click on an image to reveal the entire screenshot
							<hr />
							<div style={{display: 'flex', flexWrap: 'wrap'}}>
								<div key="CLR - Dashboard" className="portfolio-item column" style={{padding: '0 20px', boxSizing: 'border-box'}}>
									<a href="/images/portfolio/clr-dashboard.cropped.png" alt="CLR Dashboard" data-lightbox="CLR" data-title="The home page for The Eye" >
										<img src={'/images/portfolio/thumbnails/clr-dashboard.thumbnail.png'} alt="CLR Dashboard"/>
									</a><strong>Dashboard</strong><br />The home page for The Eye<br />
								</div>
								<div key="CLR - Timesheet" className="portfolio-item column" style={{padding: '0 20px', boxSizing: 'border-box'}}>
									<a href="/images/portfolio/clr-timesheet.form.cropped.png" alt="CLR Timesheet" data-lightbox="CLR" data-title="Timesheet entry form">
										<img src={'/images/portfolio/thumbnails/clr-timesheet.form.thumbnail.png'} alt="CLR Timesheet" />
									</a><strong>Timesheets</strong><br />Timesheet entry form
								</div>
								<div key="CLR - IntranetCMS - HR" className="portfolio-item column" style={{padding: '0 20px', boxSizing: 'border-box'}}>
									<a href="/images/portfolio/clr-intranetCMS.hr.cropped.png" alt="CLR IntranetCMS HR" data-lightbox="CLR" data-title="Content Management for HR documents and policies">
										<img src={'/images/portfolio/thumbnails/clr-intranetCMS.hr.thumbnail.png'} alt="CLR IntranetCMS - HR" />
									</a><strong>CMS</strong><br />HR documents and policies
								</div>
								<div key="CLR - IntranetCMS - Supervisor Resources" className="portfolio-item column" style={{padding: '0 20px', boxSizing: 'border-box'}}>
									<a href="/images/portfolio/clr-intranetCMS.supervisor.resources.cropped.png" alt="CLR IntranetCMS Supervisor Resources" data-lightbox="CLR" data-title="Content Management of resources for supervisors">
										<img src={'/images/portfolio/thumbnails/clr-intranetCMS.supervisor.resources.thumbnail.png'} alt="CLR IntranetCMS - Supervisor Resources" />
									</a><strong>CMS</strong><br />Resources for supervisors
								</div>
								<a href="/images/portfolio/clr-scheduled.task.manager.cropped.png" alt="CLR Scheduled Task Manager" data-lightbox="CLR" data-title="Scheduled task manager" style={{display: 'none'}}>
									<img src={'/images/portfolio/thumbnails/clr-scheduled.task.manager.thumbnail.png'} alt="CLR IntranetCMS - Scheduled Task Manager" />
								</a>
								<a href="/images/portfolio/clr-intranetCMS.intranet.form.cropped.png" alt="CLR IntranetCMS Content Management" data-lightbox="CLR" data-title="Content management for intranet content" style={{display: 'none'}}>
									<img src={'/images/portfolio/thumbnails/clr-intranetCMS.intranet.form.thumbnail.png'} alt="CLR IntranetCMS - Content Management" />
								</a>
								<a href="/images/portfolio/clr-expense.reports.home.cropped.png" alt="CLR Expense Reports" data-lightbox="CLR" data-title="Expense reporting" style={{display: 'none'}}>
									<img src={'/images/portfolio/thumbnails/clr-expense.reports.home.thumbnail.png'} alt="CLR Expense Reports" />
								</a>
								<a href="/images/portfolio/clr-employee.data.report.cropped.png" alt="CLR Employee Data Report" data-lightbox="CLR" data-title="A sample employee data report for annual review dates" style={{display: 'none'}}>
									<img src={'/images/portfolio/thumbnails/clr-employee.data.report.thumbnail.png'} alt="CLR Employee Data Report" />
								</a>
								{/* <a href="/images/portfolio/clr-staff.meeting.admin.home.cropped.png" alt="CLR Staff Meeting Admin" data-lightbox="CLR" style={{display: 'none'}}>
									<img src={'/images/portfolio/thumbnails/clr-staff.meeting.admin.home.thumbnail.png'} alt="CLR Staff Meeting Admin" data-title="Content management tool for staff meetings" />
								</a> */}
								<a href="/images/portfolio/clr-org.chart.cropped.png" alt="CLR Org Chart" data-lightbox="CLR" data-title="A dynamic org chart" style={{display: 'none'}}>
									<img src={'/images/portfolio/thumbnails/clr-org.chart.thumbnail.png'} alt="CLR Org Chart" />
								</a>
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
