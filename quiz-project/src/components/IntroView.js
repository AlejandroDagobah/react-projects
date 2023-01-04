import React from "react";

export default function IntroView(props) {
  return (
      <div className="introView">
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button className='btn-app' onClick={props.onClickTrigger}>Start Quiz</button>
      </div>
  );
}
