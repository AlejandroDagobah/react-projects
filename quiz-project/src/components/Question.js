import { nanoid } from "nanoid";
import React from "react";

export default function Question(props) {


    const [answerButtons, setAnswerButtons] = React.useState([
        {value: props.answers[0], isCorrect:"", isClicked: false},
        {value: props.answers[1], isCorrect:"", isClicked: false},
        {value: props.answers[2], isCorrect:"", isClicked: false},
        {value: props.answers[3], isCorrect:"", isClicked: false}
    ])


 

    function clickAnswer(e) {
        e.preventDefault()

        const button = e.target

        setAnswerButtons(prevAnswer => {

            let newAnswers = []
               
            for (let i = 0; i < prevAnswer.length; i++) {
                const answer = prevAnswer[i];

                if(answer.value == button.value){
                    newAnswers.push({...answer, isClicked: true})


                }else{
                    newAnswers.push({...answer, isClicked: false})

                }
            }
           
            return newAnswers

        })


        
        props.setAnswersSubmitted(prevAnswersSubmited =>{

            const newAnswers = []


            return [...prevAnswersSubmited]

        })


    }
    
    

    let buttons = answerButtons.map(answer =>{
        return <button key={nanoid()} style={answer.isClicked ? {backgroundColor: '#D6DBF5'} : {backgroundColor: '#ffffff00'}} value={answer.value} onClick={(e) => clickAnswer(e)}>{answer.value}</button>
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