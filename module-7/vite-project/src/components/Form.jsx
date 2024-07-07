import {useState} from "react";

export default function Form() {
    const [name, setName] = useState();
    const changeName = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <form action="">
                <p>Input value: {name}</p>
                <input value={name} onChange={(e) => changeName(e)} type="text" className='form-control' placeholder='Enter name'/>

                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}