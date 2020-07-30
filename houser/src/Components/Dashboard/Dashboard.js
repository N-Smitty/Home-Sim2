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

    componentDidMount = () => {
        this.getHouses();
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.houses)
        if(prevState.houses.length !== this.state.houses.length) {
            this.getHouses()
        }
    };

    getHouses = () => {
        axios.get('/api/houses')
        .then(res => this.setState({houses: res.data}))
        .catch(err => console.log(err))   
    }
    
    


    render() {
        // reference passing props
        // console.log(this.props)
        const mappedHouses = this.state.houses.map((house) => {
            return (
                <House house={house}/>
            )
        })
        return (
            <div className='dashboard'>
                <form>
                <div className='dash-add-btn'>
                <h2>Dashboard</h2>
                <Link to='/wizard/step1' style={{textDecoration: 'none'}}>
                <button className='add-btn'>Add New Property</button>
                </Link>
                </div>
                <h4>Home Listings</h4>
                {mappedHouses}
                </form>
            </div>
        )
    }
}

    export default Dashboard;

