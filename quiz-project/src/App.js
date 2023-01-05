import React from "react";
import IntroView from "./components/IntroView";
import QuizView from "./components/QuizView" 

export default function App() {
  const [mainView, setMainView] = React.useState(true)
  const [questions, setQuestions] = React.useState([])
  const [quizState, setQuizState] = React.useState(0)

  React.useEffect(function(){

      fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
      .then(response => response.json())
      .then((data) => {      
        setQuestions(data.results)
      })
  
    }, [quizState])

  return (
    
    <div className="App">
      <div className="container">
        {mainView === true ? <IntroView onClickTrigger={() => setMainView(false)}/> : <QuizView questions={questions}/>}
      </div>
    </div>
  );
}

