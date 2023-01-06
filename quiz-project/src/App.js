import React from "react"
import IntroView from "./components/IntroView"
import Question from "./components/Question"

import { nanoid } from "nanoid"

export default function App() {
  const [mainView, setMainView] = React.useState(true)
  const [questions, setQuestions] = React.useState([])
  const [quizState, setQuizState] = React.useState(0)
  const [answers, setAnswers] = React.useState([])
  const [score, setScore] = React.useState(0)
  const [finalized, setFinalization] = React.useState(false)
    
  React.useEffect(function(){

    function decodeText(text) {
      const parser = new DOMParser;
      const dom = parser.parseFromString(
          '<!doctype html><body>' + text,
          'text/html');
      return dom.body.textContent;
    }
      fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
      .then(response => response.json())
      .then((data) => {      
        setQuestions(()=>{
          const simplified = data.results.map(question =>{

            let answers = [...question.incorrect_answers, question.correct_answer]

            answers = answers.map(item => decodeText(item))
            

            answers.sort(() =>{
              return Math.random() - 0.5
            })
       

            return {question: decodeText(question.question), answers: answers, correct_answer: decodeText(question.correct_answer), question_id: nanoid()}
          })

          return simplified

        })
      })
  
    }, [quizState])


  function addAnswer(questionId, answeredQ) {
    setAnswers(prevAnswers =>{
      if(prevAnswers.some(answer=>answer.id === questionId)){
        return prevAnswers.map(answer=>{
          return answer.id === questionId ? {...answer, value:answeredQ} : answer 
        })
      }else{
        return [...prevAnswers, {id:questionId, value:answeredQ}]
      }
    })

  }

  function compareAnswers(e) {
    e.preventDefault()

    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const question = questions[i];


        if(answer.id === question.question_id)
        {

          console.log(question)
          if(answer.value === question.correct_answer){
            console.log("respuesta Correcta:", answer.value)
            setScore(prevScore=>prevScore += 1)
  
          }else{
            console.log("respuesta Incorrecta:", question.correct_answer)
  
          }
        }
    }

    setFinalization(true)

  }

  console.log("YOUR FINAL SCORE IS:", score)

  let questionsElements = questions.map(question =>{       
  
    return <Question key={question.question_id} question={question.question} answers={question.answers} addAnswer={addAnswer} id={question.question_id} correct_answer={question.correct_answer} isFinalized={finalized}/>

  })
  
  return (
    
    <div className="App">
      <div className="container">
        {mainView === true ? 
          <IntroView onClickTrigger={() => setMainView(false)}/> : 

          <div>
            <form>
                {questionsElements}

                {finalized && <b className="score">You scored {score}/{questions.length} correct answers</b>}
                <button className="submit-btn" onClick={finalized ? () => setQuizState(0) : (e) => compareAnswers(e)}>{finalized ? 'Play Again' : 'Check answers'}</button>
            </form>
          </div>
        }
        
      </div>
    </div>
  );
}

