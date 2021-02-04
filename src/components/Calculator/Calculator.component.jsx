import React, {useState} from 'react';
import './Calculator.styles.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    keyDisplay: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
  }));

export default function Calculator(props) {
    const classes = useStyles();
    const [ total, setTotal ] = useState(100)
    const [ addition, setAddition ] = useState(null);

    return(
    
    <div clasName={classes.keyDisplay}>    
        <div className={classes.root}>
      
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button value={1}>1</Button>
                <Button value={2}>2</Button>
                <Button value={3}>3</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button value={4}>4</Button>
                <Button value={5}>5</Button>
                <Button value={6}>6</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button value={7}>7</Button>
                <Button value={8}>8</Button>
                <Button value={9}>9</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button onClick={() => setAddition(false)}>-</Button>
                <Button value={0}>0</Button>
                <Button onClick={() => setAddition(true)}>+</Button>
            </ButtonGroup>
            
        </div>

        <div className={classes.root}>
            <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
            >
                <Button>X</Button>
                <Button>/</Button>
                <Button>=</Button>
            </ButtonGroup>
        </div>
    </div>
    )
}

// <div className="calc-keyPad displayRoutes">

//             <div id="board">
            
//                 <div className="numPad">
//                     <div className="calcRow">
//                         <div className="key">1</div>
//                         <div className="key">2</div>
//                         <div className="key">3</div>
//                     </div>
//                     <div className="calcRow">
//                         <div className="key">4</div>
//                         <div className="key">5</div>
//                         <div className="key">6</div>
//                     </div>
//                     <div className="calcRow">
//                         <div className="key">7</div>
//                         <div className="key">8</div>
//                         <div className="key">9</div>
//                     </div>
//                     <div className="calcRow">
//                         <div className="key">-</div>
//                         <div className="key">0</div>
//                         <div className="key">+</div>
//                     </div>
//                 </div>

//                 <div className="calcTotals">
//                     <div className="key">X</div>
//                     <div className="key">/</div>
//                     <div className="key">=</div>
//                 </div>

//             </div> <br/>

//             <div className="calcResults">{total}</div>
//         </div>
        