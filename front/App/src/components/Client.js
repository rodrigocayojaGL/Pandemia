import React, {Component} from 'react';

class Client extends Component {

    render() {
        return (
            this.props.client.map(i => 
            <h3 key={i.id}>
                {i.name}--{i.lastName}--{i.edad}
            <input type="checkbox"/>
            <button>
                x
            </button>
            </h3>)
        )
    }
}

export default Client