import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

    const handleClick = () => {
    const newValue = count + 1;
    setCount(newValue);
  };
    const handleAdd = () => {
        const newNumber = number + 2;
        setNumber(newNumber);
    };
  return (
      <>
          <div>
              Count: {count}
              <div>
                  <button onClick={handleClick}>Add 1</button>
              </div>
          </div>
          <div>
              Count: {number}
              <div>
                  <button onClick={handleAdd}>Add 2</button>
              </div>
          </div>
      </>
  );
}

export default App;
