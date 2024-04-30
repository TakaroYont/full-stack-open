import { useState } from 'react';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;
const Statistic = ({ text, value }) => (
  <div>
    <p>
      {text} {value}
    </p>
  </div>
);

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
      <h1>statistics</h1>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={good + neutral + bad} />
      <Statistic text='average' value={(good - bad) / (good + neutral + bad)} />
      <Statistic text='positive' value={good / (good + neutral + bad) + '%'} />
    </div>
  );
};

export default App;
