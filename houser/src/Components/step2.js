import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class step2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img: ''
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
            <label>Image URL:</label>
                <input placeholder='image-url' type='text' name='image' onChange={this.handleChange}></input>
                <Link to='/wizard/step1'>
                <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                <button> Next Step</button>
                </Link>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
            </form>
            </div>

        )
    }
}

export default step2;