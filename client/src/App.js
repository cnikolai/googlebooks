import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import Detail from "./pages/Detail";
import SavedBooksDetail from "./pages/SavedBooksDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books/:searchkeyword" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:searchkeyword/:id" component={Detail} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route exact path="/saved/:id" component={SavedBooksDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
