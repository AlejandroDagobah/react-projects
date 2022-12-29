import React from "react";
export default function Content() {

    const [allMemes, setAllMemes] = React.useState([])

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => setAllMemes(res.data.memes))
    }, [])

    function getMeme(){

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const memeUrl = allMemes[randomNumber].url

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