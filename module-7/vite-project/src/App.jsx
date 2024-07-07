import React, {useRef} from 'react';

const App = () => {
    const ref = useRef(0);
    let apiData = useRef(null);
    let myTag = useRef();

    const email = useRef();
    const password = useRef();
    const handleClick = () => {
        alert(`Email is:${email.current.value}, Password is: ${password.current.value}`);
    }

    const callApi = async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const res = await fetch(url);
        apiData.current = await res.json();
    }

    const showData = () => {
        myTag.current.innerHTML = JSON.stringify(apiData);
    }

    return (<div>
        {/*<input type="email" ref={email} className='form-control' placeholder='Enter Email'/>
        <input type="password" ref={password} className='form-control' placeholder='Enter Password'/>

        <button className='btn btn-primary' onClick={() => handleClick()}>Click Me</button>*/}

        <p ref={myTag}></p>

        <button className='btn btn-secondary' onClick={() => callApi()}>Call APi</button>
        <button className='btn btn-info' onClick={() => showData()}>Show Data</button>
    </div>);
}

export default App;
