import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import store from '../Ducks/store'

class step1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            mortgage: 0,
            rent: 0
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
            <form className='step1'>
                <div className='step1-header-btn'>
                <h2>Add New Listing</h2>
                <Link to='/'>
                <button className='cancel-btn'>Cancel</button>
                </Link>
                </div>
                <label>Property Name:</label>
                <input type='text' name='name' onChange={this.handleChange}></input>
                <label>Address:</label>
                <input type='text' name='address' onChange={this.handleChange}></input>  
                <label>City:</label>
                <input type='text' name='city' onChange={this.handleChange}></input>   
                <label>State:</label>
                <input type='text' name='state' onChange={this.handleChange}></input>   
                <label>Zip:</label>
                <input placeholder='0' type='integer' name='zip' onChange={this.handleChange}></input>
                <Link to='/wizard/step2' style={{textDecoration: 'none'}}>
                <button className='next-btn'>Next Step</button>
                </Link>
            </form>
            </div>

        )
    }
}

export default step1;