import React from 'react';
import MDlogo from '../images/MDlogo.png';

const About=()=>{
return(
    <div className='container aboutbox'>
    <h4>A movie app created using React as a project during winter break of 2019.</h4>
    <h4>The programmers are BCIT students in Software System Developer program.</h4>
    
    <h5 className="announcement">This product uses the TMDb API but is not endorsed or certified by TMDb.</h5>
    <img src={MDlogo} width='90'/>

    </div>
);
}

export default About;