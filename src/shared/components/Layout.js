import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            r-POKE
                        </Typography>

                        <Button className="navbutton">
                            <Link to="/">
                                Home
                            </Link>
                        </Button>
                        <Button className="navbutton">
                            <Link to="/tensquecorrigiristo">
                            Pokemons
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Layout;