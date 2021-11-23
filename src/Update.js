import { useState } from 'react';


function Update() {
    const [info, setInfo] = useState({
        name: 'Le Trung Kien',
        age: 20,
        hobby: 'football, Chelsea'
    })

    const Increase = () => {
        setInfo({
            bio: 'Yeu Kante'
        })
    }
    return (
        <div className="App">
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={Increase}>Tăng</button>
        </div>
    );
}

export default App;
