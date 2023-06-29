import React from 'react';
import { Photo } from './components/Photo'
class App extends React.Component {
    constructor() {
        super();
        this.state = { quote: '' };
    }

    componentDidMount() {
        fetch('https://api.kanye.rest')
            .then( (res) => res.json() )
            .then( (data) => {
                console.log(data.quote);
                this.setState( { quote: data.quote } )
            })
    }

    render() {
        return(
            <div>
                quote here: { this.state.quote }
                <Photo imgUrl="https://picsum.photos/200/300" />
            </div>
        )
    }
}

export { App };
