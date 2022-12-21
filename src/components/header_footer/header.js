import React from "react";
import { AppBar, Toolbar, Button } from '@mui/material';

import { Link } from 'react-router-dom';

import {LionCsk} from '../utils/tools.js';


const Header=()=>{
    return(
        <AppBar
            position="fixed"
            style={{
                backgroundColor:'#ebd834',
                boxShadow:'none',
                padding:'10px 0px',
                borderBottom: '2px solid #eb7d34'
            }}
        >
            <Toolbar style={{ display:'flex' }}>
                <div style={{ flexGrow: 1 }}>
                    <div className="header_logo">
                        <LionCsk
                            link={true}
                            linkTo={'/'}
                            width="80px"
                            height="80px"
                        />
                    </div>
                </div>

                <Link to="/the_team">
                    <Button color="inherit">The team</Button>
                </Link>
                <Link to="/the_matches">
                    <Button color="inherit">Matches</Button>
                </Link>

                <Link to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                </Link>

            </Toolbar>
        </AppBar>
    )
}
export default Header;