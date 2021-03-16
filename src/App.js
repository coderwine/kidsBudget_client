import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

//Components
import UserBar from './components/UserBar/UserBar.component';
import BottomNav from './components/Navbar/Navbar.component';
import HomePage from './pages/Home/Home.component';
import GenStats from './components/GenStats/GeneralStats.component';
import SharingPage from './pages/Sharing/Sharing.component';
import SavingsPage from './pages/Savings/Savings.component';
import SpendingPage from './pages/Spending/Spending.component';
import Calculator from './components/Calculator/Calculator.component';
import WishList from './components/WishList/WishList.component';
import About from './components/About/About.component';
import { render } from '@testing-library/react';

function App() {

  const [ auth, setAuth ] = useState(true);

  let landing = () => {
    let comp;
    auth ? comp = GenStats : comp = HomePage;
    // console.log(comp); 
    return comp;
  }

  const useEffect = () => {
    setAuth(false);
    // render();
  }

  return (
    <Router>
    {console.log(auth)}
      <div className="App">
        <UserBar auth={auth} logout={useEffect}/>
        
        <Switch className="displayRoutes">
            
            <Route path="/sharing" component={SharingPage}/>
            <Route path="/saving" component={SavingsPage}/>
            <Route path="/spending" component={SpendingPage}/>
            <Route path="/calculator" component={Calculator} />
            <Route path="/wish-list" component={WishList} /> 
            <Route path="/the-developer" component={About} /> 
            <Route exact path="/" component={landing()}/>

            
        </Switch>
        
        <BottomNav />
      </div>
    </Router>
  );

}
        
export default App;

// <Route path="/general-stats" component={GenStats}/>
// <Route exact path="/" component={HomePage}/>