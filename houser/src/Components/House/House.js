import React, {Component} from 'react';
import axios from 'axios';

class House extends Component {
    constructor(props) {
        super(props)
    }

    deleteHouse = () => {
        console.log(this.props.house.id)
        axios.delete(`/api/house/${this.props.house.id}`)

    }

    render() {
        console.log(this.props)
        return (

            <div className='houses'>
                {/* <img>Image Placeholder{this.props.house.img}</img> */}
                <span> Property Name:{this.props.house.name} </span>
                <span>Address:{this.props.house.address}</span>
                <span>City:{this.props.house.city}</span>
                <span>State:{this.props.house.state}</span>
                <span>Zip:{this.props.house.zip}</span>
                <span>Monthly Mortgage:{this.props.house.mortgage}</span>
                <span>Desired Rent:{this.props.house.rent}</span>
                <div>
                <button ClassName='delete-btn' onClick={this.deleteHouse}>X</button>
                </div>
            </div>
        )
    }
}

export default House;

//no state, no methods
