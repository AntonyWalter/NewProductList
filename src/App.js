import  React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Books from './containers/Books';
import CreateBook from './containers/CreateBook'

import Products from './containers/Products';
import CreateProduct from './containers/CreateProduct';
import ProductImages from './containers/ProductImages';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
constructor(props)
{
  super(props);
  this.state= {
    pathname:'',
  };
  this.notifyPathname = this.notifyPathname.bind(this);
} 

notifyPathname(pathname)
   {
  this.setState({
    pathname: pathname,
                });
   }

 render()
 {
   return(
    /*  <Router> 
        <div className="App">
          <Nav notifyPathname={this.notifyPathname} 
          pathname={this.state.pathname}/>
    <Switch>
      <Route path="/" exact component={() => <Books/> } />
      <Route path="/create" exact component={() => <CreateBook/>} />
      <Route path="/edit/:id" exact component={() => <CreateBook/>} />
    </Switch>
        </div>
    </Router> */

        /*   <Router> 
          <div className="App">
            <Nav notifyPathname={this.notifyPathname} 
            pathname={this.state.pathname}/>
      <Switch>
        <Route path="/" exact component={() => <Products/> } />
         <Route path="/create" exact component={() => <CreateProduct/>} />
        <Route path="/edit/:id" exact product ={this.state.product} component={(props) => <CreateProduct {...props}/>} /> 
      </Switch>
          </div>
      </Router>
     */

<div>
<ProductImages></ProductImages>
</div>

   )
 }

}

export default App;
