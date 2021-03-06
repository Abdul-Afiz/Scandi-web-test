import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/cart-page";
import CategoryPage from "./pages/category-page";
import PDP from "./pages/product-description-page";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/product/:id" component={PDP} />
        <Route path="/cart-items" component={CartPage} />
        <Route path="/:id" component={CategoryPage} />
        <Route path="/" exact component={CategoryPage} />
      </Switch>
    );
  }
}

export default App;
