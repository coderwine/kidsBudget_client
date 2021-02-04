import React from 'react';
import './Savings.styles.css';

import { Doughnut } from '@reactchartjs/react-chart.js';

// const data = {
//     labels: ['Sharing', 'Saving', 'Spending',],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [45, 20, 35,],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//         ],
//         borderColor: [
//         //   'rgba(255, 99, 132, 1)',
//         //   'rgba(54, 162, 235, 1)',
//         //   'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 2,
//       },
//     ],
//   }
  

class SavingsPage extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            accountTotal: 100,
            savings: 0, 
        }
    }

    render() {
        return(
        <div className="displayRoutes">
            <div className="savings-container">
            
            <h1>Savings Stats</h1>
            
            </div>
        </div>
        )
    }

}

export default SavingsPage;
