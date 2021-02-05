import React, {useState} from 'react';
import './wishList.styles.css';

// Practice Data:
import LIST_DATA from './wishList.data';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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
        const bull = <span className={classes.bullet}>•</span>;
        // const {data} = this.state;
        // const {data} = LIST_DATA;
        // console.log(data);
        console.log(LIST_DATA)
        
        return(
            <div className="displayRoutes">
            {
                LIST_DATA.map(({id, title, value, description, date,url, desiredRating}) => {
                    <Card key={id} className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        ${value}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {description}
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {url}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Rating: {desiredRating}</Button>
                    </CardActions>
                    </Card>
                })
            }
            </div>

        )
    }

export default WishList;
