import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className="app">
      <Router>
           <Header />
           <div className='container'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:imdbID" exact component={MovieDetail} />
              <Route component={Pagenotfound} />


            </Switch>
           </div>
           <Footer />
      </Router>
    </div>
  );
}

export default App;
