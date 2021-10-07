import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FooterIcons from '../Common/FooterIcons.component.jsx';
import Header from '../Common/Header.component.jsx';
import Paper from '@mui/material/Paper';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

class MyAccountsPage extends React.Component {

handleAboutUs = () => {
this.props.history.push("/myAccounts/aboutUs");
}

render(){
    return (
    <>
        <Header headerName="My Account" />
        <Paper elevation={3} >
        <List sx={style} component="nav" aria-label="mailbox folders">
                      <ListItem button>
                        <ListItemText primary="Refer & Earn" />
                      </ListItem>
                      <Divider />
                      <ListItem button divider>
                        <ListItemText primary="Help" />
                      </ListItem>
                      <ListItem button onClick={this.handleAboutUs} >
                        <ListItemText primary="About Us" />
                      </ListItem>
                      <Divider />
                      <ListItem button>
                        <ListItemText primary="Settings" />
                      </ListItem>
                    </List>
                    </Paper>

            <FooterIcons history={this.props.history} />
            </>
    )
}

}

export default MyAccountsPage;