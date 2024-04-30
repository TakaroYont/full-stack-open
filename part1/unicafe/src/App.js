import { useState } from 'react';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;
const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;
  return (
    <>
      <h1>statistics</h1>
      {all > 0 ? (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive}</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
