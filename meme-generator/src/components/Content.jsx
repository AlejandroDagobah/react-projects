import React from "react";
import memesData from '../memesData';

export default function Content() {

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    


    function getMeme(){

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const memeUrl = memesArray[randomNumber].url

        setMeme(prevMeme => {
            return {...prevMeme, randomImage: memeUrl}
        })
    }

    return(
        <div className="main-container">
            
            <div action="" className="meme-form">
                <input type="text" className="input-up-text"  placeholder="Top text" /> 
                <input type="text" className="input-dwn-text" placeholder="Bottom text"/>
                <button className="submit-button" onClick={getMeme} >Get a new meme image 🎲</button>

            </div>
            <p>{meme.topText}</p>
            <img src={meme.randomImage} alt="" className="meme-img"/>
            <p>{meme.bottomText}</p>
        </div>
    )
    
}