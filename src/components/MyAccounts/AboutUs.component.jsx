import React from 'react';
import Header from '../Common/Header.component.jsx';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';


const style = {
  width: '100%',
  bgcolor: 'background.paper',
};



class AboutUs extends React.Component {

handleBackButton = () => {
    this.props.history.push("/myAccounts");
}

    render(){
        return(
            <React.Fragment>
                  <Header headerName="About us" isIconRequired handleBackButton={this.handleBackButton} />

                  {/* App logo */}
                  <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="/static/images/cards/contemplative-reptile.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Our App Name
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            We are AgriAppName - newly in market, online checking the market price of commodity.
                            At appname you can check the current and previous market price of commodity, buy, sell
                            those commodities at your satisfied price with a few clicks of your mouse or few taps
                            on your phone.
                          </Typography>
                        </CardContent>
                        {/* <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions> */}
                      </Card>

                      <List sx={style} component="nav" aria-label="mailbox folders">
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                  <ListItemIcon>
                                                    <InboxIcon />
                                                  </ListItemIcon>
                                                  <ListItemText primary="Version" />
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button divider>
                                              <ListItemText primary="Blog" />
                                            </ListItem>
                                            <ListItem button >
                                              <ListItemText primary="Privacy Policy" />
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                              <ListItemText primary="Terms and Conditions" />
                                            </ListItem>
                                            <Divider />
                                          </List>

                </React.Fragment>
        )
    }

}

export default AboutUs;