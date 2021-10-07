import './App.css';
//import  MainAgriPage from './MainAgriPage.jsx';
import FirstPage from './components/MainPage/FirstPage.component.jsx';
import PriceTable from './components/MarketPrice/PriceTable.component.jsx';
import MyAccounts from './components/MyAccounts/MyAccountsPage.component.jsx';
import AboutUs from './components/MyAccounts/AboutUs.component.jsx';
//import FooterIcons from './components/MainPage/FooterIcons.component.jsx';
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="container">
            <Switch>
                <Route exact path="/" component={FirstPage} />
                <Route exact path="/commodityPrice" component={PriceTable} />
                <Route exact path="/myAccounts" component={MyAccounts} />
                <Route exact path="/myAccounts/aboutUs" component={AboutUs} />
            </Switch>
        </div>
      {/* <FooterIcons /> */}
    </div>
  );
}

export default withRouter(App);
