import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div>
                 Gello
                <Button variant="contained" color="primary">
                Hello World
                </Button>
            </div>
        );
    }
}

export default Home;