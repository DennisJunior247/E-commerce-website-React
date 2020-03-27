import React from 'react';
import "./App.css"
import Hompage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components"
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hompage}/>
        <Route  path="/shop" component={ShopPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App;
