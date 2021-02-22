import React, { useState, useEffect } from "react";

//Header Component
const Header = ({ quesviewscreen }) => {
  const [timeLeft, setTimeLeft] = useState(200); //state related to the timer

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    quesviewscreen(timeLeft);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  const tick = () => {
    if (timeLeft > 0) {
      setTimeLeft((prevCount) => prevCount - 1);
    }
  };

  //On pressing End Test button
  const endTest = () => {
    setTimeLeft(0);
  };

  return (
    <>
      <nav className="navbar d-flex flex-wrap-reverse navbar-expand-lg navbar-dark bg-danger mb-3 py-3 text-light">
        <div className="col-5"> Quiz assignment </div>
        {timeLeft > 0 && (
          <>
            {" "}
            <div className="col-3">Timer : {timeLeft} seconds</div>{" "}
            <button className="btn btn-light col-4" onClick={endTest}>
              End Test
            </button>{" "}
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
