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


    function handleChange(event){
        const {value, type, name} = event.target

        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    

    return(
        <div className="main-container">
            
            <div action="" className="meme-form">
                <input 
                    type="text" 
                    className="input-up-text"  
                    placeholder="Top text" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                /> 
                <input 
                    type="text" 
                    className="input-dwn-text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />

                <button className="submit-button" onClick={getMeme} >Get a new meme image 🎲</button>

            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </div>
    )
    
}