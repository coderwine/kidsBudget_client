import React, {useState} from 'react';
import './Home.styles.css';
import {Switch, Route} from 'react-router-dom';
import {Doughnut} from '@reactchartjs/react-chart.js';
import Calculator from '../../components/Calculator/Calculator.component';

export default function HomePage() {
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
        // <div className="homeDisplay">
        <div className="displayRoutes">
            <h1>Overall Stats</h1> <br/>
                <Doughnut data={data} />

    {          
            // <Switch>
            // <Route path="/calculator" component={Calculator}/>
            // </Switch>    
    }
        </div>
                        
            )
          }

          // <Route path="/profile" component={}/>
          //   <Route path="/wishlist" component={}/>
          //   <Route path="/support" component={}/>