import React from "react";
import PropTypes from "prop-types";

//importing InputField to increase readability of code. InputField contains list tags of the form elements
import InputField from "../utils/InputField";

//Viewer which render the view for the question and the options
const Viewer = ({ quesPassed, checkedArray, resultStore }) => {
  const { id, ques, opt1, opt2, opt3, opt4 } = quesPassed;

  //handle chnges to the radio button of the form
  const handleChange = (e) => {
    const { value } = e.target;
    resultStore(id, value);
  };

  return (
    <div>
      <div className="container mt-5 shadow p-3 mb-5 rounded-light">
        <div className="row">
          <div className="col-12">
            <p className="d-flex flex-row">
              <span className="text-danger px-4 m-0 question-symbol">
                Q{id}
              </span>
              <span className="fs-3 question-content">{ques}</span>
            </p>
          </div>
        </div>
        <div className="row option-container">
          <form className="form-check p-3 col-12" id={id}>
            <InputField
              name="Answer"
              id="Option1"
              value="a"
              onChange={handleChange}
              label={opt1}
              checkedValue={checkedArray[id - 1]}
            />
            <InputField
              name="Answer"
              id="Option2"
              value="b"
              onChange={handleChange}
              label={opt2}
              checkedValue={checkedArray[id - 1]}
            />
            <InputField
              name="Answer"
              id="Option3"
              value="c"
              onChange={handleChange}
              label={opt3}
              checkedValue={checkedArray[id - 1]}
            />
            <InputField
              name="Answer"
              id="Option4"
              value="d"
              onChange={handleChange}
              label={opt4}
              checkedValue={checkedArray[id - 1]}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

//using proptypes to check the values so that the code is not broken while in use.
//Only used 1 proptypes checker as a sample
Viewer.propTypes = {
  quesPassed: PropTypes.object.isRequired,
};

export default Viewer;
