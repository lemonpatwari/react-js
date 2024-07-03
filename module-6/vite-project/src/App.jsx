import React, {Component, Fragment} from 'react';
import Clock from "./components/Clock.jsx";


class App extends Component {
    render() {
        // let a = 70;
        let a = ['a', 'b', 'c', 'd', 'e',];

        let b = ['a', 'b', 'f', "e"];
        const handleClick = (text) => {
            console.log(text)
        }

        const submitButton = (e, text) => {
            e.preventDefault();
            console.log(text)
        }
        return (
            /*<Fragment>
                {
                    a >= 76 ? 'pass' : 'fail'
                }
                <h1>working......</h1>
                <h1>working......</h1>
                <h1>working......</h1>

                <button className="btn btn-secondary">Submit</button>
            </Fragment>*/

            /*<Fragment>
                {
                    (() => {
                        let a = 10;
                        let b = 20;

                        return <h1>{a-b}</h1>;
                    })()
                }
            </Fragment>*/

            /*<Fragment>

                <ol>
                    {
                        a.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ol>


            </Fragment>*/

            /*<Fragment>
                <h1>{new Date().toLocaleString()}</h1>
            </Fragment>*/

            <Fragment>
                <Clock locale="bn-BD"></Clock>
                <button onClick={() => handleClick('Hello Word')}>Click Me</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <form onSubmit={(e) => submitButton(e, "working...........")}>
                    <button type="submit" className="btn btn-primary">On Submit</button>
                </form>
            </Fragment>
        );
    }
}

export default App;