import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import  {connect} from 'react-redux';

class step3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addHouse = () => {
        // const {id} = this.setState
        const {name, address, city, state, zip, img} = this.props
        const {mortgage, rent} = this.state
        const body = {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        }
        axios.post(`/api/house`, body)
        .then(res => {
            console.log(res)
            this.props.history.push('/')
        } )
    } 

    render() {
        return (

            <div className='step3'>
                <form>
            <div className='step3-header'>
                <h2>Add New Listing </h2>
                <Link to='/'>
                <button className='cancel-btn'>Cancel</button>
                </Link>
            </div>
                <label>Recommended Rent: $0</label>
                <label>Monthly Mortgage Amount:</label>
                <input placeholder='0' type='text' name='mortgage' value={this.state.mortgage} onChange={this.handleChange}></input>
                <label>Desired Monthly Rent:</label>
                <input placeholder='0' type='text' name='rent' value={this.state.rent} onChange={this.handleChange}></input>  
            <div className='step3-btns'>
                <Link to='/wizard/step2'>
                <button className='prev-btn'>Previous Step</button>
                </Link>
                <Link to='/'>
                <button className='complete-btn' onClick={() => this.addHouse()}>Complete</button>
                </Link>
            </div>
                </form>
            </div>

        )
    }
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img
    }
}

export default connect(mapStateToProps)(step3);