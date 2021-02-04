import React, {useState} from 'react';
import './Calculator.styles.css';
import { FormControl, Input, InputLabel, FormGroup, IconButton, TableSortLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { SignalCellularNull } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        padding: '.15em',
      },
    },
  }));

export default function Calculator(props) {
    const classes = useStyles();

    const [ deposit, setDeposit ] = useState(null);
    const [ sharingVal, setSharingVal ] = useState(null);
    const [ savingVal, setSavingVal ] = useState(null);
    const [ spendingVal, setSpendingVal ] = useState(null);
    const [ actSharing, setActSharing ] = useState(null);
    const [ actSaving, setActSaving ] = useState(null);
    const [ actSpending, setActSpending ] = useState(null);

    

    function handleSubmit(e) {
        e.preventDefault()
        // console.log('handle:', e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value)
        // console.log('DEPOSIT: ', deposit)

        let sharing = e.target[1].value / 100;
        let saving = e.target[2].value / 100;
        let spending = e.target[3].value / 100;

        let calcSharing = deposit * sharing;
        let calcSaving = deposit * saving;
        let calcSpending = deposit * spending;

        setActSharing(calcSharing.toFixed(2));
        setActSaving(calcSaving.toFixed(2));
        setActSpending(calcSpending.toFixed(2));
        
        
    }

    // <form onSubmit={e => handleSubmit(e)}>
    return(
    
    <div clasName={classes.root}>   
        <h1>By Percentage: </h1>
        <form onSubmit={handleSubmit}>
        <FormGroup>

            <FormControl className="controlFormCalc">
                <InputLabel className="calcLabel" name="Deposit">Total Deposit Amount:</InputLabel>
                <Input className="inputField" name="Deposit" type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} placeholder="$100"/> <br/>
            </FormControl>
            <FormControl className="controlFormCalc">
                <InputLabel className="calcLabel" name="sharing">Sharing:</InputLabel>
                <Input className="inputField" name="sharing" type="number" value={sharingVal} onChange={(e) => setSharingVal(e.target.value)} placeholder="10%"/> <br/>
            </FormControl>
            
            <FormControl className="controlFormCalc">
                <InputLabel className="calcLabel" name="saving">Saving:</InputLabel>
                <Input className="inputField" name="saving" type="number" value={savingVal} onChange={(e) => setSavingVal(e.target.value)} placeholder="30%"/> <br/>
            </FormControl>
            <FormControl className="controlFormCalc">
                <InputLabel className="calcLabel" name="spending">Spending:</InputLabel>
                <Input className="inputField" name="spending" type="number" value={spendingVal} onChange={(e) => setSpendingVal(e.target.value)} placeholder="60%"/> <br/>
            </FormControl>
            
            <IconButton 
                type='submit'
                size="medium">
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
                </IconButton>
            
        </FormGroup>
        </form>

        <div className="resultsDisplay">
            <div className="singleResult" id="shareResults">
                <h3 className="envTitle" >Sharing: {actSharing === null ? `$0` : `$${actSharing}`}</h3>
            </div>
            <div className="singleResult" id="saveResults">
                <h3 className="envTitle">Saving: {actSaving === null ? `$0` : `$${actSaving}`}</h3>
            </div>
            <div className="singleResult" id="spendResults">
                <h3 className="envTitle">Spending: {actSpending === null ? `$0` : `$${actSpending}`}</h3>
            </div>
        </div>
    </div>
    )
}
