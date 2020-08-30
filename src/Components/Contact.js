import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var occupation = this.props.data.occupation;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="twelve columns" style={{width: '100%', margin: 'auto', textAlign: 'center'}}>

                  <p className="lead" dangerouslySetInnerHTML={{ __html: message}} />

            </div>

         </div>

         <div className="row">
            <aside className="twelve columns footer-widgets" style={{width: '100%', margin: 'auto', textAlign: 'center'}}>
               <div className="widget widget_contact contact_details">

					   <h4>Address, Phone, and Email</h4>
					   <p className="address">
                     {name}<br />
                     {occupation} / Full Stack Developer<br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br />
                     <a href={`mailto:${email}`}>scott.harvey@outlook.com</a>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
