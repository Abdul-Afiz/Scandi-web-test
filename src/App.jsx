import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CategoryPage from "./pages/category-page";
import PDP from "./pages/product-description-page";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={CategoryPage} />
        <Route path="/product/:id" component={PDP} />
      </Switch>
    );
  }
}

export default App;
