import './App.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import Home from './components/Home';
import Notfound from './components/Notfound';
import ProductDetails from './components/ProductDetails';
import Nav from './components/Nav';
import Products from './components/Products';
import Course from './components/Course';
import Enquiry from './components/Enquiry';

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <section className="container">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Products} />
              <Route path="/course" exact component={Course} />
              <Route path="/enquiry" exact component={Enquiry} />
              <Route path="/productsdetails/:id" component={ProductDetails} />
              <Route path="/enquiry" component={Enquiry} />
              <Route component={Notfound}/>
          </Switch>
          </section>
      </Router>
    </>
  );
}

export default App;
