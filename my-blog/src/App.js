import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import ArticleListPage from "./pages/ArticleListPage"
import Article from "./pages/Article"
import NotFound from "./pages/NotFound"
import NavBar from "./NavBar"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={About} />
            <Route path="/article-list" component={ArticleListPage} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
