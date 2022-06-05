import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/category-screen";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<CategoryPage />} />
      </Routes>
    );
  }
}

export default App;
