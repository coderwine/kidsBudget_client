import React, {useState} from 'react';
import './wishList.styles.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';

// Practice Data:
import LIST_DATA from './wishList.data';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '.5em',
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// RATING BUILD
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
};

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

// class WishList extends React.Component {
const WishList = (props) => {
    // constructor(props) {
    //     super(props)
        
    //     this.state = {
    //         data: LIST_DATA,
    //     }
    // }    
    
    // render() {
        // const [ testData, setTestData ] = useState(LIST_DATA);

        const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;
        // console.log(LIST_DATA)
        
        return(
            <div className="displayRoutes">


              { // CARD BUILD
                LIST_DATA.map(({id, title, value, description, date, url, desiredRating}) => {
                  const str = date;
                  const d = new Date(str);
                  const m = d.getMonth();
                  const month = [
                    'Jan','Feb','Mar','Api','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
                  ]
                  const day = d.getDate();
                  const year = d.getFullYear();
                  const displayDate = `${month[m]} ${day}, ${year}`;
                  // console.log(displayDate);

                  return(

                  <Card key={id} className={classes.root} variant="outlined">
                      <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          ${value}
                          </Typography>
                          <Typography variant="h5" component="h2">
                          {title}
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                          {description}
                          </Typography>
                          <Typography variant="body2" component="p">
                          <a href={url} target="_blank">{title} Link</a>
                          </Typography>
                          <Typography variant="body2" component="p">
                          { displayDate.toString() }
                          </Typography>
                      </CardContent>
                      {
                      // <CardActions>
                      //     <Button size="small">Rating: {desiredRating}</Button>
                      // </CardActions>
                      }
                      <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Desired:</Typography>
                        <StyledRating
                          name="customized-color"
                          size="large"
                          defaultValue={desiredRating}
                          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                          precision={0.5}
                          icon={<FavoriteIcon fontSize="inherit" />}
                        />
                      </Box>
                    </Card>

                )
                
              })}
          </div>
        );
    }

export default WishList;

/*
NOTE
    - Need to figure out how to separate the rating from each card.
    - Possibly make each card a modal that affects that particular card.
    - Move card build to a separate ListCard component so that cards can be manipulated.
*/
