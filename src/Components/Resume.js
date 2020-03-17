import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p></div>
      })
      var freelance = ""
      this.props.data.freelance.forEach( (gig, index) => {
        freelance += `<div key=${gig.company}><h3>${gig.company}</h3>` 
        gig.tenure ?
            gig.tenure.forEach((time, index) =>{
              freelance += `<div><p class="info">${time.title}<span>&bull;</span> <em class="date">${time.years}</em></p>
              <p>${time.technologies}<br />${time.description}</p></div>`
            })
        : 
          freelance += `<div><p class="info">${gig.title}<span>&bull;</span> <em class="date">${gig.years}</em></p>
          <p>${gig.technologies}<br />${gig.description}</p></div>`
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <div dangerouslySetInnerHTML={{__html: work.technologies + work.description}} />
            <br />
        </div>
	  })
	  var skills = ""
      this.props.data.skills.skillGroup.forEach(function(skillGroup){
			skills += `<h3>${skillGroup.name.toString()}</h3><hr style="padding-bottom: 20px" /><ul className="skills">`
			skillGroup.skill.forEach(function(skill){
				var className = `bar-expand ${skill.name.toLowerCase()}`
				skills += `<li key="${skill.name}"><span style="width:${skill.level}" class="${className}"></span><em>${skill.name}</em></li>`
			})
			skills += `</ul>`
		})
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row freelance">

         <div className="three columns header-col">
            <h1><span>Freelance</span></h1>
         </div>

         <div className="nine columns main-col" dangerouslySetInnerHTML={{ __html: freelance}} />
    </div>


    <div className="row work">

      <div className="three columns header-col">
          <h1><span>Full-time Work</span></h1>
      </div>

      <div className="nine columns main-col">
        {work}
      </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}</p>
            <div  dangerouslySetInnerHTML={{ __html: skills}} className="bars" />
				</div>
			</div>
   </section>
    );
  }
}

export default Resume;
