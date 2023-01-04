import React from "react";
import IntroView from "./components/IntroView";
import QuizView from "./components/QuizView" 

export default function App() {
  const [mainView, setMainView] = React.useState(true)
  const [questions, setQuestions] = React.useState([])
  React.useEffect(() =>{

    fetch('https://opentdb.com/api.php?amount=5')
    .then(response => response.json())
    .then((data) => {      
      setQuestions(data.results)
    })

  }, [mainView])


  return (
    
    <div className="App">
      <div className="container">
        {mainView === true ? <IntroView onClickTrigger={() => setMainView(false)}/> : <QuizView questions={questions}/>}
      </div>
    </div>
  );
}

