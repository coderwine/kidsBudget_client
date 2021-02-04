import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Components
import UserBar from './components/UserBar/UserBar.component';
import HomePage from './pages/Home/Home.component';
import SharingPage from './pages/Sharing/Sharing.component';
import SavingsPage from './pages/Savings/Savings.component';
import SpendingPage from './pages/Spending/Spending.component';
import BottomNav from './components/Navbar/Navbar.component';
import Calculator from './components/Calculator/Calculator.component';

function App() {
  return (
    <div className="App">
      <Router>

        <UserBar />
      
        <Switch className="displayRoutes">
          <Route exact path="/" component={HomePage}/>
          <Route path="/sharing" component={SharingPage}/>
          <Route path="/saving" component={SavingsPage}/>
          <Route path="/spending" component={SpendingPage}/>
          <Route path="/calculator" component={Calculator}/>
        </Switch>
      
      <BottomNav />
      
      </Router>
    </div>
  );
}

export default App;
