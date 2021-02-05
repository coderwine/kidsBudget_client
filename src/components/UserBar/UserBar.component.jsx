import React from 'react';
import './UserBar.styles.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
//Icons
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExposureTwoToneIcon from '@material-ui/icons/ExposureTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function UserBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ right: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Profile', 'Calculator','Wish List','Support', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
          
            <ListItemIcon>{
                index === 0 ? <AccountCircleRoundedIcon /> : 
                index === 1 ? <Link to="/calculator"><ExposureTwoToneIcon /></Link> :
                index === 2 ? <Link to="/wishlist"><ListAltTwoToneIcon/></Link> : 
                index === 3 ? <ContactSupportTwoToneIcon /> :
                <ExitToAppTwoToneIcon /> 
                }</ListItemIcon>
            <ListItemText primary={text} />

          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <AccountCircleRoundedIcon className="profile-icon" fontSize="large" onClick={toggleDrawer(anchor, true)}/>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

//TODO: Need to build out Link routes to profile/wishlist/help