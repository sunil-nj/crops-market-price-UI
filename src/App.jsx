import './App.css';
import  MainAgriPage from './MainAgriPage.jsx';
//import MarketNames from './MarketNames.jsx';
import PriceTable from './PriceTable.jsx';
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* {<MainFarmersPage />} */}
        {/* {<MarketNames />} */}
        <div className="container">
            <Switch>
                <Route exact path="/" component={MainAgriPage} />
                <Route exact path="/cropPrice" component={PriceTable} />

            </Switch>
        </div>
        {/* {<MarketNamesTable />} */}
      </header>
    </div>
  );
}

export default withRouter(App);
