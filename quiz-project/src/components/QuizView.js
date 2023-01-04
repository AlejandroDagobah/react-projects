import React from "react";
import Question from "./Question";
import {nanoid} from "nanoid"
export default function QuizView(props){
    const [givenQuestions, setGivenQuestions] = React.useState([])

    let questions = props.questions.map(questionObj =>{
        
        const encodedStr = questionObj.question

        const parser = new DOMParser;
        const dom = parser.parseFromString(
            '<!doctype html><body>' + encodedStr,
            'text/html');
        var decodedString = dom.body.textContent;
        
        let posibleAnswers = questionObj.incorrect_answers

        posibleAnswers.push(questionObj.correct_answer)
        
        console.log(questionObj)
        return <Question key={nanoid()} question={decodedString} answers={posibleAnswers} questionSubmitted={setGivenQuestions}/>
    })

    function submitAnswers() {
        //check if all selected answers 
    }

    return (
        <div>
            <form>
            {questions}
            <button className="submit-btn" type="">Check answers</button>
            </form>
        </div>
    )

}