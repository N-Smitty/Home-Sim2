import React, {Component} from 'react';
import axios from 'axios';

class House extends Component {
    constructor(props) {
        super(props)

        // this.state {

        // }
    }

    deleteHouse = () => {
        console.log(this.props.house.id)
        axios.delete(`/api/house/${this.props.house.id}`)

    }

    render() {
        console.log(this.props)
        return (

            <div>
                <span> Property Name:{this.props.house.name} </span>
                <span>Address:{this.props.house.address}</span>
                <span>City:{this.props.house.city}</span>
                <span>State:{this.props.house.state}</span>
                <span>Zip:{this.props.house.zip}</span>
                <button onClick={this.deleteHouse}>Delete</button>
            </div>
        )
    }
}

export default House;

//no state, no methods
