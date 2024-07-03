import React, {Component, Fragment} from 'react';
import Clock from "./components/Clock.jsx";

class App extends Component {
    render() {
        const clickMe = (e) => {
            console.log(e)
        }

        const onSubmit = (e) => {
            e.preventDefault();
            console.log('working.........')
        }

        return (
            <Fragment>
                <Clock locate='bn-BD'></Clock>

                <button onClick={(e) => clickMe(e, "Click ME")} className='btn btn-primary'>Click Me</button>
                <br/>
                <br/>

                <form onClick={(e) => onSubmit(e)}>
                    <button type={"submit"} className="btn btn-secondary">Submit</button>
                </form>

                {
                    (()=>{
                        let a = 20;
                        let b = 30;

                        return <h2>{a+b}</h2>
                    })()
                }
            </Fragment>
        );
    }
}

export default App;