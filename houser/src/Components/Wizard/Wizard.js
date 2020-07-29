import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';

class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (

            <div>
                <h2>Add New Listing</h2>
            <form>
                <label>Name:</label>
                <input placeholder='Name' type='text' name='name' onChange={this.handleChange}></input>
                <label>Address:</label>
                <input placeholder='Address' type='text' name='address' onChange={this.handleChange}></input>  
                <label>City:</label>
                <input placeholder='City' type='text' name='city' onChange={this.handleChange}></input>   
                <label>State:</label>
                <input placeholder='State' type='text' name='state' onChange={this.handleChange}></input>   
                <label>Zip:</label>
                <input placeholder='Zip' type='integer' name='zip' onChange={this.handleChange}></input>
                
            <Link to='/'>
                <button>Cancel</button>
            </Link>
                <button>Complete</button>
            </form>
            </div>

        )
    }
}

export default Wizard;

// methods: handle input change, post new house to database
//Set up the input boxes to update the correct piece of state on change.
