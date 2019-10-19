import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic1= "images/"+this.props.data.image1;
      var profilepic2= "images/"+this.props.data.image2;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var mailto = "mailto:"+email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic1} alt={`{name} Profile Pic 1`} />
            <br /><img className="profile-pic"  src={profilepic2} alt={`{name} Profile Pic 2`} />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p dangerouslySetInnerHTML={{ __html: bio}} style={{color: '#fff'}} />
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span style={{'whiteSpace': 'nowrap'}}>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href={mailto}>{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download><i className="fas fa-download"></i>Download Resume</a> 
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
