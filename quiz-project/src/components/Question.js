import { nanoid } from "nanoid";
import React from "react";

export default function Question(props) {

    //Bucle to create all buttons with the posible answers **Returns as radio input types
    const [anseredQuestons, setAnsweredQuestions] = React.useState([]) 



    function clickAnswer(e) {
        e.preventDefault()

        const button = e.target

        let sibilings = button.parentNode.childNodes

        for (let i = 0; i < sibilings.length; i++) {
            const sibiling = sibilings[i];
            if(sibiling.value != button.value)
            {
                sibiling.style.background = '#ffffff00'

            }else{
                button.style.background = '#D6DBF5'
                
                setAnsweredQuestions(prevQuestions =>{

                    let arrayQuestions = []
                    for (let i = 0; i < props.question.length; i++) {
                        arrayQuestions.push({question: props.question, givenAnswer: button.value})
                    }

                  
                })
            }
        }

        let answer = button.value


        console.log(answer)

    }

    let buttons = props.answers.map(answer =>{
        return <button key={nanoid()} value={answer} onClick={(e) => clickAnswer(e)}>{answer}</button>
    })

    return(
        <div className="questions">
            <h2>{props.question}</h2>
            <div className="buttons-container">
                {buttons}
            </div>
            <hr className="line"/>
        </div>
    )
    
}