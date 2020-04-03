import React from "react";
import "./App.css";
import HomePage from "./containers/homePage/home-page.container";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from './containers/shopPage/shop-page.container'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/:pathParam1?/:pathParam2" component={ShopPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
