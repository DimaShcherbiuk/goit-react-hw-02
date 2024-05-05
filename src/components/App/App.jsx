import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const initeState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbackPoint, setfeedbackPoint] = useState(() => {
    const storedFeedbackPoint = localStorage.getItem("feedback");
    return JSON.parse(storedFeedbackPoint) ?? initeState;
  });

  const updateFeedback = (feedbackType) => {
    setfeedbackPoint((prevFeedbackPoint) => ({
      ...prevFeedbackPoint,
      [feedbackType]: prevFeedbackPoint[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedbackPoint).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const positiveFeedback = Math.round(
    ((feedbackPoint.good + feedbackPoint.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setfeedbackPoint(initeState);
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackPoint));
  }, [feedbackPoint]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          {...feedbackPoint}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
