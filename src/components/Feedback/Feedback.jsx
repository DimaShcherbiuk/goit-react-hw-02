import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li className={css.total}>Total: {total}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
