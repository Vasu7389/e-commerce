import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { HomeBanner } from "./components/HomeBanner/HomeBanner";
import HomePage from "./components/HomePage/HomePage";
import ProductList from "./components/ProductList/ProductList";
import ProductPage from "./components/ProductPage/ProductPage";
import SectionHeader from "./components/SectionHeader/SectionHeader";

function App() {
  return (
    <Router>
      <div
        style={{
          padding: "10px 10px",
        }}
      >
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:id" component={ProductPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
