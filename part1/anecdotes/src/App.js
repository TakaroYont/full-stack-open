import { useState } from 'react';

const Button = ({ text, handleClick }) => <button onClick={handleClick}> {text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const setRandom = () => () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const [votes, setVotes] = useState({});
  const addVote = (id) => () => setVotes({ ...votes, [id]: votes[id] + 1 || 1 });
  const mostVoted = () => Object.keys(votes).sort((a, b) => votes[b] - votes[a])[0] ?? 0;

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected] ?? 0} votes</div>
      <Button text='vote' handleClick={addVote(selected)} />
      <Button text='next anecdote' handleClick={setRandom()} />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostVoted()]}</div>
      <div>has {votes[mostVoted()] ?? 0} votes</div>
    </>
  );
};

export default App;
