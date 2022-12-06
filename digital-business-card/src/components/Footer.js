import React from "react";
import faceLogo from "../img/social-icons/Facebook-Icon.png"
import githubLogo from "../img/social-icons/GitHub-Icon.png"
import instaLogo from "../img/social-icons/Instagram-Icon.png"
import twitterLogo from "../img/social-icons/Twitter-Icon.png"

export default function Footer() {

    return (
        <div className="footer">
            <div className="icons-container">
                <img src={twitterLogo}/>
                <img src={faceLogo}/>
                <img src={instaLogo}/>
                <img src={githubLogo}/>
            </div>
        </div>
    )
    
}