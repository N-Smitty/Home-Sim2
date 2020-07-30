import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import step1 from '../step1';
import step2 from '../step2';
import step3 from '../step3';
class Wizard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                    <Route path='/wizard/step1' component={step1}/>
                    <Route path='/wizard/step2' component={step2}/>
                    <Route path='/wizard/step3' component={step3}/>
            </div>

        )
    }
}
export default Wizard;

// methods: handle input change, post new house to database
//Set up the input boxes to update the correct piece of state on change.
