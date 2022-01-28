import React from 'react';
import { Button } from '../Button';
import './Intro.css';
import face from './imgs/face.png';
import Mail from './imgs/Mail.png'
import Linkein from './imgs/lin.png';
import Resume from './imgs/resume.png';

export default function Intro() {
    return (
        <div className="intro-section" id="about">
            <div className="img-word-button">
                <h1>Minh Nguyen</h1>
                <h3>I am currently a student at OCC.</h3>
                <div className="intro-btns">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQnpmlgmNSSSzwqFLcPwZrZCMWcxtCcnvLhcRpMQTcnBnnLrBMvLpnTsQpLzntdDtfKWpn">

                        <Button
                            className="btn"
                            buttonSize="btn--medium"
                            buttonStyle="btn--outline"
                        >
                            <div><img alt="mail" src={Mail} /> <span>Email</span></div>
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/minh-nguyen-264021230/">
                        <Button
                            className="btn"
                            buttonSize="btn--medium"
                            buttonStyle="btn--primary"
                        >
                            <div><img alt="Linkein" src={Linkein} /> <span>Linkein</span></div>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="line"></div>
            <div className="img-word-button">
                <img alt="face" src={face} className="face-img" />
                <a href="https://docs.google.com/document/d/1iw5hwXJuyxAd6AgXka8RlN-eS7stzYJF/edit?usp=sharing&ouid=115602482760169643790&rtpof=true&sd=true">
                    <Button
                        className="btn"
                        buttonSize="btn--medium"
                        buttonStyle="btn--primary"
                    >
                        <div><img  alt="resume" src={Resume} /> <span>Resume</span></div>
                    </Button>
                </a>
            </div>
        </div>
    )
}