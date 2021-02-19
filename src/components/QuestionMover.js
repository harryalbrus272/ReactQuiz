import React from "react";
import { useState } from "react";
import Pallete from "./Pallete";
import Viewer from "./Viewer";

//Component that gives the functionality of moving the questions
const QuestionMover = ({ questions, resultantArray }) => {
  const [questionNumber, setQuestionNumber] = useState(1); //state for current question

  const [isLeftValid, setIsLeftValid] = useState(false); //state for the left button to move to the previous question

  const [isRightValid, setIsRightValid] = useState(true); //state for the right button to move to the next question

  //This array will be converted to JSON format to send it to the server for checking the answers.
  //Check console to view the array during run-time
  const [checkedArray, setCheckedArray] = useState(
    Array(questions.length).fill("")
  );

  //Handling and logic related to Right button click
  const handleRightClick = () => {
    if (questionNumber === questions.length - 1) {
      setIsRightValid(false);
    } else {
      setIsLeftValid(true);
    }
    setQuestionNumber(questionNumber + 1);
  };

  //Handling and logic related to Right button click
  const handleLeftClick = () => {
    if (questionNumber <= 2) {
      setIsLeftValid(false);
    } else {
      setIsRightValid(true);
    }
    setQuestionNumber(questionNumber - 1);
  };

  //Updating current question
  const questionChanged = (id) => {
    if(id>1 && id<questions.length){
      setIsLeftValid(true);
      setIsRightValid(true);
    }
    if (id === 1) {
      setIsLeftValid(false);
      setIsRightValid(true);
    }
    if (id === questions.length) {
      setIsRightValid(false);
      setIsLeftValid(true);
    }
    setQuestionNumber(id);
  };

  //Storing result into the array to be converted into JSON format
  const resultStore = (id, value) => {
    const arr = [...checkedArray];
    arr[id - 1] = value;
    setCheckedArray(arr);
    resultantArray(arr);
  };

  return (
    <div>
      <Pallete questionChanged={questionChanged} quesnum={questionNumber} />
      {isLeftValid && (
        <button
          className="left-button shadow p-3 mb-5 bg-body rounded btn btn-danger"
          onClick={handleLeftClick}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
      {isRightValid && (
        <button
          className="right-button shadow p-3 mb-5 bg-body rounded btn btn-danger"
          onClick={handleRightClick}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      )}
      <Viewer
        quesPassed={questions[questionNumber - 1]}
        resultStore={resultStore}
        checkedArray={checkedArray}
      />
    </div>
  );
};

export default QuestionMover;
