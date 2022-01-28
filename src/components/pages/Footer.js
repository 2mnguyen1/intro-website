import React from 'react';
import './Footer.css'
import Facebook from './imgs/facebook.png';
import Github from './imgs/GitHub.png';
import Instagram from './imgs/instagram.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="icon">
                <a href="https://www.facebook.com/minh.ne.11/"><img alt="facebook" src={Facebook} /></a>
            </div>
            <div className="icon">
                <a href="https://github.com/2mnguyen1"><img alt="github" src={Github} /></a>
            </div>
            <div className="icon">
                <a href="https://www.instagram.com/minh1n1/"><img alt="insta" src={Instagram}/></a>
            </div>
        </div>
    )
}