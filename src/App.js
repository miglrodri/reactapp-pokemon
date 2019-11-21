import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
  
import Layout from './shared/components/Layout';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';

import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/pokemons">
                            <Pokemons />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
