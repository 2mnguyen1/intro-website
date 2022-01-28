import './PageContent2.css';
import React, { useState } from 'react';
import Line2 from './imgs/Line2.png';
import Project from './imgs/project-img.png';
import Project2 from './imgs/project-2.png';
import line7Straight from './imgs/Line7-straight.png';

export default function PageContent2() {
    const [hover, setHover] = useState(false);

    const showDescription = () => {
        setHover(true);
    }
    const hideDescription = () => {
        setHover(false);
    }

    const [isChanged, setImg] = useState(false);
    const rotateImg = () => {
        if (window.innerWidth >= 950) {
            setImg(true);
        } else {
            setImg(false);
        }
    
    }

    window.addEventListener('resize', rotateImg)

    return (
        <div className="page-content2" id="projects">
            <div className="title2">
                <div className="title-content2">
                    <div>
                        <img className="line2" alt="line2" src={Line2} />
                        <img className="line2-straight"  alt="line2-straight" src={line7Straight} />
                    </div>
                    <h3>Projects</h3>
                </div>
            </div>
            <div className="section2"
                onMouseEnter={showDescription}
                onMouseLeave={hideDescription}
            >
                <img alt="project" src={isChanged ? Project2 : Project} />
                <div className="info2">
                    <div>
                        <h3>Camping Grounds</h3>
                        <p>Learning Projects from Udemy</p>
                    </div>
                    <div className={`display-img ${hover ? 'darking' : 'darking'}`}>
                        <ul className={hover ? 'show' : 'hide'}>
                            <li>Created a website which stores all camping locations</li>
                            <li>Implemented the system using CRUD operations</li>
                            <li>Tested CRUB API endpoints using Postman and stored data on database with Mongoose</li>
                            <li>Used CSS and CSS frameworks to styles the webpage</li>
                            <li>Used: HTML, CSS, Bootstrap, JS, NodeJS, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}