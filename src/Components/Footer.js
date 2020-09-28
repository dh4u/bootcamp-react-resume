import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    const d = new Date;
    const copyrightYear = d.getFullYear();

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright {copyrightYear} Scott Harvey</li>
              <li></li>
              <li style={{fontSize: 'smaller'}}>This resume is a fork of Tim Baker's ReactJs template - <a href="https://github.com/tbakerx/react-resume-template" target="_blank">https://github.com/tbakerx/react-resume-template</a>&nbsp;&nbsp;Design by <a title="Styleshout" href="http://www.styleshout.com/" target="_blank">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
