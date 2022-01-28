import './PageContent3.css';
import React, { useState } from 'react';
import Line3 from './imgs/Line3.png';
import Book2 from './imgs/book2.png';
import html5 from './imgs/html5.png';
import css3 from './imgs/css3.png';
import js from './imgs/js.png';
import nodejs from './imgs/nodejs.png';
import figma from './imgs/figma.png';
import line3Straight from './imgs/Line3-straight.png';
import Book2Big from './imgs/book2Big.png'
export default function PageContent2() {
    const [isChanged, setImg] = useState(false);
    const rotateImg = () => {
        if (window.innerWidth >= 950) {
            setImg(true);
            return true;
        } else {
            setImg(false);
            return false;
        }

    }

    const isRotate = () => {
        if (window.innerWidth >= 950) {
            return true;
        } else {
            return false;
        }
    }
    window.addEventListener('resize', rotateImg);

    return (
        <div className="page-content3" id="technologies">
            <div className="title3">
                <div className="title-content3">
                    <div>
                        <img className="line2" alt="line2" src={Line3} />
                        <img className="line2-straight"  alt="line2-straight" src={line3Straight} />
                    </div>
                    <h3>Technologies</h3>
                </div>
                <img alt="book" className="section-icon" src={Book2Big} />
            </div>
            <div className="section3">
                <img  alt="book2" className="section-icon" src={Book2} />
                <div className="info3">
                    <div className="tech-contents">
                        <h4>Front-end</h4>
                        <div className="img-tech">
                            <div className="img-top">
                                <img  alt="html5" src={html5} />
                                <img  alt="css3" src={css3} />
                            </div>
                            <img alt="js" className="js-icon" src={js} />
                        </div>
                        <h5>HTML, CSS, JS</h5>
                    </div>
                    <div className="tech-contents tech2">
                        <h4>Back-end</h4>
                        <div className="img-tech">
                            <img alt="node" className="big-icon" src={nodejs} />
                        </div>
                        <h5>NODE.JS</h5>
                    </div>
                    <div className="tech-contents">
                        <h4>Design</h4>
                        <div className="img-tech">
                            <img alt="figma" className="big-icon" src={figma} />
                        </div>
                        <h5>FIGMA</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}