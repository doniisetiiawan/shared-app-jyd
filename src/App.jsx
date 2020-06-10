import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Layout from './shared/views/layout';
import About from './shared/views/about';
import Index from './shared/views/app';
import Error from './shared/views/error';
import Calculator from './shared/views/calculator';
import News from './shared/views/news';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Layout name="Shared App">
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/calculator" exact>
            <Calculator />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
