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

            <div className='step2'>
                <form>
                <div className='step2-header'>
                <h2>Add New Listing</h2>
                <Link to='/'>
                <button className='cancel-btn'>Cancel</button>
                </Link>
                </div>
            <label>Image URL:</label>
                <input placeholder='image-url' type='text' name='image' onChange={this.handleChange}></input>
            <div className='step2-btns'>
                <Link to='/wizard/step1'>
                <button className='prev-btn'>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                <button className='next-btn'> Next Step</button>
                </Link>
            </div>
                </form>
            </div>

        )
    }
}

export default step2;