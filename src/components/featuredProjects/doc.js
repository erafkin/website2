import React, {Component} from 'react';
import open from '../../assets/open.png';
import doc from '../../assets/doc.png';
class DOC extends Component {
    render(){
        if(window.innerWidth < 760 ){
            return( 
            <div className = "block">
            <div className = "project">
            <h2 style = {{color: "#8eead1", textAlign: "left"}}>DOC Trips Planner</h2>

                   <div className = "projectDesc">
                    <div className = "projectBlurb">
                        Multi-user platform for organizing outing club day trips. Included Dartmouth Authentication. <br/>
                        <a href = "http://dartmouthoutingclub.surge.sh/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                    </div>
                <ul className = "projectList">
                    <li>React.js</li>
                    <li>Node/Express</li>
                    <li>mongoDB (NoSQL)</li>
                    <li>CAS authentication</li>

                </ul>
                </div>
            </div>
        </div>);
        }else{ 
            return(
            <div className = "block">
                <div className = "project">
                    <h2 style = {{color: "#8eead1", textAlign: "left"}}>DOC Trips Planner</h2>
                    <img src = {doc} className = "projectPic" alt = "doc picture"/>
                    <div className = "projectDesc">
                        <div className = "projectBlurb">
                            Multi-user platform for organizing outing club day trips. Trips planning involves many moving pieces including budgeting, vehical release, and calendar functions. This site included Dartmouth Authentication. <br/>
                            <a href = "http://dartmouthoutingclub.surge.sh/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}}  alt = "open icon"/></a>
                        </div>
                        <ul className = "projectList">
                            <li>React.js</li>
                            <li>Node/Express</li>
                            <li>mongoDB (NoSQL)</li>
                            <li>CAS authentication</li>

                        </ul>
                    </div>
                </div>
            </div>
           
        );}
       
    }
}export default DOC;