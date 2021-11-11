import Home from "./pages/Home";
import Tab from "./pages/Tab";
import Footer from "./pages/Footer";
import { Route, Switch } from "react-router";
import Navigation from "./pages/Navigation";
import '../src/App.css'
import { Dashboards, Exchanges, Portfolios, Relations, Resources, Accounts } from "./pages";
import Productexchanges from "./pages/exchanges/Productexchanges";

function App() {

  return (
    <div >
      <Switch>
        <Route path='/' exact>
        <Home/> 
        <Tab/>
        <Footer/> 
        {/* <Splash/> */}
        </Route>
        <Route path='/Navigation'>
          <Navigation/>
        </Route>
        <Route path='/Dashboards'>
          <Navigation/>
          <Dashboards/>
        </Route>
        <Route path='/Exchanges'>
          <Navigation/>
          <Exchanges/>
        </Route>
        <Route path='/Portfolios'>
          <Navigation/>
          <Portfolios/>
        </Route>
        <Route path='/Relations'>
          <Navigation/>
          <Relations/>
        </Route>
        <Route path='/Resources'>
          <Navigation/>
          <Resources/>
        </Route>
        <Route path='/Accounts'>
          <Navigation/>
          <Accounts/>
        </Route>
        <Route path='/Productexchanges'>
          <Navigation/>
          <Exchanges/>
          <Productexchanges/>
        </Route>
      </Switch>
      

     </div>
  );
}

export default App;


