import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import info from "./components/info";
import home from "./components/home";
import news from "./components/news";

class App extends React.Component {
   render() {
    const name = 'nazwa';
    return (
      <>
        <Router>
          <div>
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/news'>News</Link>
                  </li>
                  <li>
                    <Link to='/info'>Info</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <section>
              <Route path='/' exact component={home(this.props)} />
              <Route path='/news' exact component={news} />
              <Route path='/info' exact component={info} />
            </section>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
