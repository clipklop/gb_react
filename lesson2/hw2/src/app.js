import React from 'react';
import ReactDOM from 'react-dom';
import DevName from './module';


class App extends React.Component {
    render() {
        return <div>
                    <p>Hello world!</p>
                    <p>by {DevName}</p>
                </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));