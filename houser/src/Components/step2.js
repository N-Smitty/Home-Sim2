import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addImgInfo} from '../Ducks/actionCreators';


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
        const {img} = this.state
        return (

            <div className='step2'>
                <form>
                <div className='step2-header'>
                <h2>Add New Listing</h2>
                <Link to='/'>
                <button className='cancel-btn'>Cancel</button>
                </Link>
                </div>
                <div className='imageHolder'>
                {!img? <img src='https://tc-itservices.com/wp-content/uploads/2018/07/lenovo-camera1-300x225.png' />
                : <img  className='addImg' src={img} />}
                </div>
            <label>Image URL:</label>
                <input placeholder='image-url' type='text' name='img' onChange={this.handleChange}></input>
            <div className='step2-btns'>
                <Link to='/wizard/step1'>
                <button className='prev-btn'>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                <button onClick={()=> this.props.addImgInfo(img)}  className='next-btn'> Next Step</button>
                </Link>
            </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = {
    addImgInfo
}

export default connect(null, mapDispatchToProps)(step2);




