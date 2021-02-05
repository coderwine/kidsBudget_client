import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Link} from 'react-router-dom';

//Icons
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import LoyaltyTwoToneIcon from '@material-ui/icons/LoyaltyTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >

      <Link to='/home'><BottomNavigationAction label="Home" icon={<HomeTwoToneIcon />} /></Link>
      <Link to='/sharing'><BottomNavigationAction label="Share" icon={<LoyaltyTwoToneIcon />} /></Link>
      <Link to='/saving'><BottomNavigationAction label="Save" icon={<AccountBalanceTwoToneIcon />} /></Link>
      <Link to='/spending'><BottomNavigationAction label="Spend" icon={<AttachMoneyTwoToneIcon />} /></Link>

    </BottomNavigation>
    
  );
}
