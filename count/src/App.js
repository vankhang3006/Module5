import React, { useState } from 'react';

function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + addAmount);
    }

    return [count, increase];
}

function Counter({ addAmount }) {
    const [count, increase] = useIncrement(addAmount);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>Add {addAmount}</button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Counter addAmount={1} />
            <Counter addAmount={2} />
        </div>
    );
}

export default App;
