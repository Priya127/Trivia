import './App.css';
import Quest from './Components/Questions';
import Welcome from './Components/Welcome'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/' render={() => < Welcome />} />
          <Route path='/quest' render={() => <Quest />} />

        </Switch>
      </div>
    </Router>

  );
}



export default App;
