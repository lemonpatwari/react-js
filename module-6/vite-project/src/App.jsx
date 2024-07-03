import React, {Component, Fragment} from 'react';

class App extends Component {
    render() {
        // let a = 70;
        let a = ['a', 'b', 'c', 'd', 'e',];
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

            <Fragment>

                <ol>
                    {
                        a.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ol>


            </Fragment>
        );
    }
}

export default App;