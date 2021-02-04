import React from 'react';
import './Spending.styles.css';

class SpendingPage extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            sample: '',
        }
    }

    render() {
        return(
            <div className="displayRoutes">
            <h1>Spending Stats</h1>
        </div>
        )
    }

}

export default SpendingPage;