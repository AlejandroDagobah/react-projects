import React from "react";
import portraitPhoto from "../img/ale-small.jpg"

export default function Info() {
    return(
        <div>
            <img src={portraitPhoto} className="portrait-photo"/>
            <h1 className="title-1">Alejandro Cevallos</h1>
            <p className="title-2">Frontend Developer</p>
            <p className="web-subtitle">aledevelops.com</p>
            <div className="buttons-container">
                <button className="btn"><i class="fa-solid fa-envelope"/>Email</button>
                <button className="btn btn-linkedin"><i class="fa-brands fa-linkedin"/>LinkedIn</button>
            </div>
        </div>

    )
}
