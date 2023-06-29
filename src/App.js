import React from 'react';

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
            </div>
        )
    }
}

export { App };
