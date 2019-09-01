import React, { Component } from 'react';
var linkify = require('linkifyjs');
var linkifyHtml = require('linkifyjs/html');

class Portfolio extends Component {
	linkify = this.linkify

	createProjectDisplay = (projects) => {
		return projects.map(function (projects) {
			var projectImage = projects.image
			var projectDescription = linkifyHtml(projects.description)

			return <div key={projects.title} className="columns portfolio-item">
				<div className="row">
					<div className="item-wrap">
						<a href={projects.url} title={projects.title} target="_blank">
							<figure style={{ maxWidth: 'col-3' }}>
								<img alt={projects.title} src={process.env.PUBLIC_URL + projectImage} />
							</figure>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{projects.title}</h5>
									{/* <p dangerouslySetInnerHTML={ {__html: projects.category} }/> */}
									<p>{projects.category}</p>
								</div>
							</div>
						</a>
					</div>
					<div>
						<h5>{projects.title}</h5>
						{/* the description was not converting the text to clickable hyperlinks */}
						{/* <p>{projects.description}</p> */}
						{<p dangerouslySetInnerHTML={{ __html: projectDescription }} />}
						{projects.technology != "" ?
							(
								<p><strong><i>Concepts / technologies included:</i></strong><br />{projects.technology}</p>
							)
							:
							("")

						}
					</div>
				</div>
			</div>
		})
	}

	render() {

		if (this.props.data) {
			var paidProjects = this.createProjectDisplay(this.props.data.paidProjects)

			var bootcampProjects = this.createProjectDisplay(this.props.data.bootcampProjects)
		}

		return (
			<section id="portfolio">

				<div className="row">

					<div className="twelve columns collapsed">

						<h1>Check Out Some of My Work.</h1>

						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							<h2>Paid Projects</h2>
							<div className="row">{paidProjects}</div>
							<h2>Bootcamp Projects</h2>
							<div className="row">{bootcampProjects}</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
