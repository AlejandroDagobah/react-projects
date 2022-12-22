import react from "react"


export default function Entry(props){
    
    return(
        <div className="entry">
            <img src={props.img} className="entry--img"/>
            <div className="entry--info">
                <i className="fa-solid fa-location-dot icon-location"></i><p className="entry--location">{props.location}</p><a href={props.locationLink} className="entry--url">View on Google Maps</a>
                <h2 className="entry--title">{props.title}</h2>
                <b className="entry--dates">{props.startDate} - {props.endDate}</b>
                <p className="entry--description">{props.description}</p>
            </div>
        </div>
    )


}