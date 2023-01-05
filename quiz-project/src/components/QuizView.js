import React from "react";
import Question from "./Question";
import {nanoid} from "nanoid"
export default function QuizView(props){
    
    const [answersSubmitted, setAnswersSubmitted] = React.useState([])

    function decodeText(text) {
        const parser = new DOMParser;
        const dom = parser.parseFromString(
            '<!doctype html><body>' + text,
            'text/html');
        return dom.body.textContent;
    }
      
    let questionsElements = props.questions.map((questionObj, index) =>{       
        
        const answersList = []

        for (let i = 0; i < questionObj.incorrect_answers.length; i++) {
            const answer = questionObj.incorrect_answers[i];

            answersList.push(decodeText(answer))    
        }

        answersList.push(decodeText(questionObj.correct_answer))

        /*
        answersList.sort(() =>{
            return Math.random() - 0.5
        })
*/
    
        return <Question key={nanoid()} id={index} question={decodeText(questionObj.question)} answers={answersList} setAnswersSubmitted={setAnswersSubmitted}/>

    })


    function submitAnswers() {
        //check if all selected answers 
    }


    return (
        <div>
            <form>
            {questionsElements}
            <button className="submit-btn" type="">Check answers</button>
            </form>
        </div>
    )

}