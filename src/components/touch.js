import React, {Component} from 'react';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedIn from '../assets/linkedin.png';
import doc from '../assets/document.png'


class Touch extends Component {

    render(){
        return(
    <div className = "block">
        <div className = "touch">
        <div> I am looking for postgrad jobs starting June 2021 and would love to chat!
        </div>
        <br/>
        <div>
                <a href = "http://tiny.cc/80w7iz" target = "_blank" rel = "noopener noreferrer" ><img src = {doc} alt = "doc icon"/></a>
                <a href = "https://github.com/erafkin/" target = "_blank" rel = "noopener noreferrer" ><img src = {github} alt = "github icon"/></a>
                <a href = "https://www.linkedin.com/in/emma-rafkin-2966406b/" target = "_blank" rel = "noopener noreferrer" ><img src = {linkedIn} alt = "linkedIn icon"/></a> 
                <a href = "mailto:emma.p.rafkin.21@dartmouth.edu"><img src = {email} alt = "email icon"/></a>
        </div>

   
        </div>
       </div>
      );
};

}export default Touch;