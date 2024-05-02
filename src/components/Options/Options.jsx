export default function Options({updateFeedback}) {
  return (
    <>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </>
  );
}
