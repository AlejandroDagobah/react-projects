import { nanoid } from "nanoid";
import React from "react";

export default function Question(props) {

    const [answerButtons, setAnswerButtons] = React.useState(props.answers.map(answer=>({answer:answer})))

    function clickAnswer(e) {
        e.preventDefault()

        const button = e.target

        setAnswerButtons(prevAnswer => {
            
            return prevAnswer.map(answer=>{

                return answer.answer == button.value ? {answer:button.value, isClicked: true} : {answer:answer.answer, isClicked: false} 

            })
        })

        props.addAnswer(props.id, button.value)
    }


    let buttons = answerButtons.map(answer =>{
        let styles = {backgroundColor:"#ffffff00"}

        if(props.isFinalized == false){
            styles.backgroundColor = answer.isClicked && '#D6DBF5'
            
        }else if(answer.isClicked && props.isFinalized == true){
            styles.backgroundColor = props.correct_answer === answer.answer ? '#94D7A2' : "#F8BCBC"

        }else if(props.isFinalized == true){
            styles.backgroundColor = answer.isClicked == false && props.correct_answer === answer.answer ? '#94D7A2' : "#ffffff00"
        }
        return <button className="button-answer" key={nanoid()} style={styles} value={answer.answer} onClick={(e) => clickAnswer(e)}>{answer.answer}</button>
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