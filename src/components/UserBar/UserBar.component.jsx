import React from 'react';
import './UserBar.styles.css';

import { BrowserRouter as Router } from 'react-router-dom';
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
import { LocalDiningOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  iconBtn: {
    position: 'fixed',
    right: 8,
  }
});


export default function UserBar(props) {
  console.log('user bar: ', props)

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  // const logoutUser = () => {
  //   localStorage.clear();
    
  // }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ right: open });
  };

  const list = (anchor) => (
    
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.auth ?
          ['Profile', 'Calculator','Wish List','The Developer', 'Logout'].map((text, index) => (
          <Link to={`/${text.toLowerCase().replace(' ', '-')}`}>
          <ListItem button key={index}>
          
              <ListItemIcon>{
                  index === 0 ? <AccountCircleRoundedIcon /> : 
                  index === 1 ? <ExposureTwoToneIcon /> :
                  index === 2 ? <ListAltTwoToneIcon/> : 
                  index === 3 ? <ContactSupportTwoToneIcon /> :
                  index === 4 ? <ExitToAppTwoToneIcon onClick={props.logout}/> : null
                  }</ListItemIcon>

                  <ListItemText primary={text} />
                  
            </ListItem>
          </Link>
        )) :
          ['Login', 'The Developer'].map((text, index) => (
          <Link to={`/${text.toLowerCase().replace(' ', '-')}`}>
          <ListItem button key={index}>
          
              <ListItemIcon>{
                  index === 0 ? <AccountCircleRoundedIcon /> :
                  index === 1 ? <ContactSupportTwoToneIcon /> :
                  null
                  }</ListItemIcon>
              
              <ListItemText primary={text} />
                  
            </ListItem>
          </Link>
        )) 
      }
      </List>
      
    </div>
  );

  return (
    
      <div className={classes.iconBtn}>
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
