import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const initeState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbackPoint, setfeedbackPoint] = useState(() => {
    const storedFeedbackData = localStorage.getItem("feedback");
    return JSON.parse(storedFeedbackData) ?? initeState;
  });

  // const updateFeedback = feedbackType => {
  //   setfeedbackPoint(feedbackPoint + 1);
  // }
  const updateFeedback = (feedbackType) => {
    setfeedbackPoint((prevFeedbackData) => ({
      ...prevFeedbackData,
      [feedbackType]: prevFeedbackData[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedbackPoint).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const resetFeedback = () => {
    setfeedbackPoint(initeState);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      <Feedback
        {...feedbackPoint}
          total={totalFeedback}
      />
      <Notification />
    </>
  );
}

export default App;
