import React, {useState} from 'react';
import './generalStats.styles.css';

import {Doughnut} from '@reactchartjs/react-chart.js';

export default function GenStats(props) {
    const [sharings, setSharing] = useState(15);
    const [savings, setSavings] = useState(45);
    const [spendings, setSpendings] = useState(40);

    const data = {
        labels: ['Sharing', 'Saving', 'Spending',],
        datasets: [
          {
            label: 'Accoutn Balances',
            // data: [45, 20, 35,],
            data: [sharings, savings, spendings],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

    return(
        <div className="displayRoutes">
            <h1>Overall Stats</h1> <br/>
                <Doughnut data={data} />
        </div>
                        
            )
}