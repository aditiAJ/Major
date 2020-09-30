import React from 'react';
import Base from './Base';
import log from './log.jpg';
const About = () => {
    return (<>
    <Base>
    <h1 style={{"marginLeft":"550px", "alignSelf":"center"}}><strong>KNOW ABOUT US</strong></h1>

<div id="content">
  <div className="line">
    <p className="s-12 m-12 l-8 center">
        
        <img src={log} alt="" style={{"width":"1000px"}}/>
        
      
    </p>
    <h2 style={{"marginTop":"80px"}}>ABOUT US</h2>
    <p className="s-12 m-12 l-8 center">Connect2Start is driven by the idea that the business of building startups grows bigger and better when work as a community. We have started the journey in year 2019 and continuing towards building a stronger community of experienced people. 
    </p>
    <h2 style={{"marginTop":"100px"}}>OUR PURPOSE</h2>
    <p className="s-12 m-12 l-8 center">The purpose is to serve an interactive platform for startups prevailing at grass-root level. India has started a journey towards #AtmanirbharBharat by building a community where investors, startups, explorers may meet and discuss their journey. The aim is to target those amzing startups which are less popular but are providing best services to the end customers.
    </p>
  </div>
</div>
{/* ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
<div id="content" className="left-align contact-page" >
  <div className="line"style={{"marginLeft":"350px"}}>
    <div className="margin">
      <div className="s-12 l-6 ">
        <h2>CONNECT2START</h2>
        <address>
          <p><i className="icon-home icon" /> Arya College, Kukas</p>
          <p><i className="icon-globe_black icon" /> https://connect2start.co</p>
          <p><i className="icon-mail icon" /> connect2start@gmail.com</p>
        </address>
        <br />
        
      </div>
      <div className="s-12 l-6" >
      <h2>Social</h2>
        <p><i className="icon-facebook icon" /> <a href="https://www.facebook.com/pages/Vision-Design-graphic-ZOO/154664684553091">CONNECT2START</a></p>
        <p><i className="icon-facebook icon" /> <a href="https://www.facebook.com/myresponsee">CONNECT2START</a></p>
        <p className="margin-bottom"><i className="icon-twitter icon" /> <a href="https://twitter.com/MyResponsee">CONNECT2START</a></p>
      </div>
    </div>
  </div>
</div>

</Base>
    </>  );
}
 
export default About;