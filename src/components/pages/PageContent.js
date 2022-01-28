import './PageContent.css';
import React, { useState } from 'react';
import line7 from './imgs/line7.png';
import line7Straight from './imgs/Line7-straight.png';
import hat from './imgs/hat2.png';
export default function PageContent() {

    const [isChanged, setImg] = useState(false);
    const rotateImg = () => {
        if (window.innerWidth >= 950) {
            setImg(true);
        } else {
            setImg(false);
        }

    }

    const isRotate = () => {
        if (window.innerWidth >= 950) {
            return true;
        } else {
            return false;
        }
    }

    window.addEventListener('resize', rotateImg)

    return (
        <div className="page-content">
            <div className="title">
                <div className="title-content">
                    <div>
                        <img className="line2" alt="line2" src={line7} />
                        <img className="line2-straight" alt="line2-straight" src={line7Straight} />
                    </div>
                    <h3>Transfer Student</h3>
                </div>
                <div className="title-content">
                    <div>
                        <img className="line2" alt="line2" src={line7} />
                        <img className="line2-straight" alt="line2-straight" src={line7Straight} />
                    </div>
                    <h3>Web Development</h3>
                </div>
            </div>
            <div className="section">
                <img alt="hat" src={hat} />
                <div className="info border">
                    <h3>Transfer</h3>
                    <p>I am a freshman at Orange Coast College and enrolling in transfer program. I will transfer after my shopmore year, and the school that I want to transfer is University of California, Berkeley.</p>
                </div>
                <div className="info">
                    <h3>Web Developer</h3>
                    <p>I am very interested in web developer both front-end and back-end. I self-taught web developement and love creating web applications.</p>
                </div>
            </div>
        </div>
    )
}

