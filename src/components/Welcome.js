import React, { useState } from "react";
import QuestionMover from "./QuestionMover";
import EndScreen from "./EndScreen";
import Header from "./Header";
import Footer from "./Footer";
import { questions } from "../utils/common";

//Welcome Screen for the Test
const Welcome = () => {
  const [appStart, setAppStart] = useState(false);
  const [showQuestionMover, setShowQuestionMover] = useState(true);
  //This is the JSON object that will be sent.
  let Arr = {};
  const QuestionViewerScreen = (time) => {
    if (time <= 0) {
      setShowQuestionMover(false);

      //This is the final JSON object
      console.log(Arr);
    }
  };

  const testStart = () => {
    setAppStart(true);
  };

  const resultantArray = (arr) => {
    Arr.answers = JSON.stringify(arr);
  };

  return (
    <div>
      {appStart ? (
        <>
          <Header quesviewscreen={QuestionViewerScreen} />
          {showQuestionMover && (
            <QuestionMover
              questions={questions}
              resultantArray={resultantArray}
            />
          )}
          {!showQuestionMover && <EndScreen showJSON={Arr} />}
          <Footer />
        </>
      ) : (
        <div className="start-container">
          <button
            type="button"
            className="btn btn-danger col-1"
            onClick={testStart}
          >
            Start
          </button>
          <p style={{ marginTop: "2rem" }}>
            This is quick assignment for data structures in 200 seconds. These
            question are related to the basics, so just be quick.
          </p>
        </div>
      )}
    </div>
  );
};

export default Welcome;
