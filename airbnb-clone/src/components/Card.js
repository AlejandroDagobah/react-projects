import React from "react";

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === 'Online'){
        badgeText = "ONLINE"
        
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../img/${props.coverImg}`} className="card-img"/>

            <div className="card-stats">
                <img src='../img/Star.png' className="card-rating-img"/>
                <span className="card-rating">{props.stats.rating}</span>
                <span className="card-place">({props.stats.reviewCount})&middot; </span>
                <span className="card-place">{props.location}</span>
            </div>
            <p className="card-description">{props.title}</p>
            <p className="card-price"><b>From {props.price}</b> / person</p>
        </div>
    )

    
}