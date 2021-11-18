import { useState } from 'react';


const orders = [10, 20, 30]
function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total)
    return total;
  })

  const Increase = () => {
    setCounter(prevState => prevState + 1)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={Increase}>Tăng</button>
    </div>
  );
}

export default App;
