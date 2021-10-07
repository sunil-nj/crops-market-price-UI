import React from 'react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
//import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';
import * as commonActions from '../../actions/Common/CommonPage.actions.js';

class FooterIcons extends React.Component {

handleChangeHomeIcon = () => {
    this.props.history.push('/');
    this.props.setPageName("My App Name");
}

handleChangeManageAccount = () => {
    this.props.history.push('/myAccounts');
    this.props.setPageName("My Account");
}

handleChange = (event) => {
    console.log(event + 'hello');
}


  render() {
    return (
      <AppBar position="fixed" color="" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <IconButton color="inherit" aria-label="home" sx={{flexGrow: 1}} >
                <HomeOutlinedIcon style={{color: this.props.pageName == "My App Name" ? 'green': 'grey'}} className="footerIconsColor" name='homeIcon' fontSize="large" onClick={this.handleChangeHomeIcon} />
            </IconButton>
            <IconButton color="inherit" aria-label="open drawer" sx={{flexGrow: 1}} >
                <HomeOutlinedIcon className="footerIconsColor"  name='otherIcon' fontSize="large" onClick={this.handleChange} />
            </IconButton>
            <IconButton color="inherit" aria-label="open drawer" sx={{flexGrow: 1}} >
                <HomeOutlinedIcon className="footerIconsColor" name='other2Icon' fontSize="large" onClick={this.handleChange} />
            </IconButton>
            <IconButton color="inherit" aria-label="manageAccounts" sx={{flexGrow: 1}} >
                <ManageAccountsOutlinedIcon style={{color: this.props.pageName == "My Account" ? 'green': 'grey'}} className="footerIconsColor" name='manageAccountsIcon' fontSize="large" onClick={this.handleChangeManageAccount} />
            </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export const mapStateToProps = (state) => {
    return {
        pageName: state.commonPage && state.commonPage.pageName,
    }
}

export const mapDispatch = dispatch => {
    return {
        setPageName: (data) => {
            commonActions.setPageName(data)(dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatch)(FooterIcons);




