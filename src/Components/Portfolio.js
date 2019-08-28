import React, { Component } from 'react';
var linkify = require('linkifyjs');
var linkifyHtml = require('linkifyjs/html');

class Portfolio extends Component {
  linkify = this.linkify
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
      var projectImage = projects.image
      var projectDescription = linkifyHtml(projects.description)

        return <div key={projects.title} className="columns portfolio-item">
           <div className="row">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank">
              <img alt={projects.title} src={process.env.PUBLIC_URL + projectImage} />
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
          {<p dangerouslySetInnerHTML={ {__html: projectDescription} } />}
          { projects.technology != "" ?
            (
              <p><strong><i>Concepts / technologies included:</i></strong><br/>{projects.technology}</p>
            )
          :
            ("")
          
          }
          </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
