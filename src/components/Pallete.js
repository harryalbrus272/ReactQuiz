import React, { useState, useEffect } from "react";
import { questions } from "../utils/common";

const Pallete = ({ questionChanged, quesnum }) => {
  const requestQuestion = (id) => {
    questionChanged(Number(id));
    setHighlighted(Number(id));
  };

  useEffect(() => {
    setHighlighted(quesnum);
  }, [quesnum]);
  const [highlighted, setHighlighted] = useState(1);

  return (
    <div className="question-pallete">
      <ul>
        {questions.map((_, index) => (
          <li key={index}>
            <button
              className={
                highlighted === index + 1
                  ? "highlighted-circular-button"
                  : "circular-buttons"
              }
              onClick={(e) => requestQuestion(e.target.id)}
              id={index + 1}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pallete;
