import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class step3 extends Component {
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

    addHouse = () => {
        const {id} = this.setState
        const {name, address, city, state, zip} = this.state
        const body = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
        }
        axios.post('/api/house', body)
        .then(req => {
            this.props.history.push('/')
        } )
        
    } 

    render() {
        return (

            <div>
                <h2>Add New Listing</h2>
            <form>
                <label>Monthly Mortgage Amount:</label>
                <input placeholder='0' type='text' name='mortgage' onChange={this.handleChange}></input>
                <label>Desired Monthly Rent:</label>
                <input placeholder='0' type='text' name='rent' onChange={this.handleChange}></input>  
                <button onClick={() => this.addHouse()}>Complete</button>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
                <Link to='/wizard/step1'>
                <button>Previous Step</button>
                </Link>
            </form>
            </div>

        )
    }
}

export default step3;