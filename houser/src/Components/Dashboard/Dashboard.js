import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props)

// methods: get all and delete houses from database.

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios
        .get('/api/houses')
        .then(res => {
            console.log(res);
            this.setState({houses: res.data});
        })
    }
    


    render() {
        // reference passing props
        // console.log(this.props)
        // const mappedHouses = this.state.houses.map((house) => {})
        return (
            <div>
                {/* {this.state.houses.map()} */}
                    <h2>Dashboard</h2>
                    <h4>Home Listings</h4>
                {/* <House/>  */}
                <button>
                    <Link to='/wizard'>
                    Add New Property
                    </Link>
                </button>
            </div>
        )
    }
}

export default Dashboard;

