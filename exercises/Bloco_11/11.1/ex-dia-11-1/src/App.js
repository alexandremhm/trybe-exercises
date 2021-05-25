import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}


function App() {
  const commitments = ['Aprender Front', 'Aprender React', 'Aprender Back-end', 'Ralar no Summer-Job']

  return (<div>
    { commitments.map((commitment) => Task(commitment)) }
    </div>);
}

export default App;
