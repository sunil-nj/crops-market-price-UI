import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import { purple, green } from '@mui/material/colors';

//const color1 = green[500];



class Header extends React.Component {

handleBackButton = () => {
    this.props.handleBackButton();
}

    render(){
        return(
            <React.Fragment>
                  <AppBar position="fixed" className="header" sx={{ top: 'auto', top: 0, color: 'success.main', }}>
                  {/* <Toolbar className="headerName" >{this.props.headerName}</Toolbar> */}
                  <Toolbar className="headerName">
                            { this.props.isIconRequired ? <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                              onClick={this.handleBackButton}
                            >
                              <ArrowBackOutlinedIcon />
                            </IconButton> : ''}
                            <Typography variant="h6" component="div" >
                              {this.props.headerName}
                            </Typography>
                          </Toolbar>
                  </AppBar>
                </React.Fragment>
        )
    }

}

export default Header;