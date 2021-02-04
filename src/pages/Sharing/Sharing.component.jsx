import React from 'react';
import './Sharing.styles.css';

class SharingPage extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            sample: '',
        }
    }

    render() {
        return(
            <div className="displayRoutes">
            <h1>Sharing Stats</h1>
        </div>
        )
    }

}

export default SharingPage;