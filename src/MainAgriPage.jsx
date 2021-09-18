import React from "react";
//import styled from "styled-components";
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import * as mainAgriActions from './actions/MainPage/MainAgriPage.actions.js';

//const marketNameList = [{id:1, name: 'Bangalore'}, {id:2, name:'Mysore'}, {id:3, name:'Kolar'}];

const marketNameList1 = ['','Bangalore', 'Mysore', 'Kolar'];

const cropsList = ['','paddy', 'wheat', 'ragi'];

class MainAgriPage extends React.Component {

constructor(props){
    super(props);
    this.state = {
        marketName: '',
        cropName: '',
        isCropField: true,
    };
}

onMarketPrice =()=> {
const payload = {marketName: this.state.marketName, cropName: this.state.cropName};
this.props.getMarketPrice(payload);
this.props.history.push('/cropPrice');
}

handleChange = (event) => {
    const name = event.target.name;

    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
    if(name === "marketName" && event.target.value !== ""){
            this.setState({isCropField: false});
    } else if(name === "marketName" && event.target.value === ""){
            this.setState({isCropField: true, cropName: ''});
    }
}

isMarketPriceButton = ()=> {
    let isButton = true;
    if(this.state.marketName && this.state.marketName !== "" && this.state.cropName && this.state.cropName !== ""){
        isButton = false;
    }
    return isButton;
}

render() {
//const classes = this.useStyles();
return (
    <>
      {/* <div>
        <Button onClick={this.onMarketView}>Today's Market Value</Button>
      </div> */}
      <div className='row' >
          <FormControl className='dropdown-marketName'>
              <InputLabel htmlFor="age-native-simple">Market Name</InputLabel>
              <Select
                native
                value={this.state.marketName}
                onChange={this.handleChange}
                inputProps={{
                  name: 'marketName',
                  id: 'age-native-simple',
                }}
              >
              {marketNameList1.map((element) => (
                          <option value={element}>{element}</option>
                        ))}

              </Select>
          </FormControl>
          <FormControl className='dropdown-marketName' disabled={this.state.isCropField}>
                <InputLabel htmlFor="age-native-simple">Crop Name</InputLabel>
                <Select
                  native
                  value={this.state.cropName}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'cropName',
                    id: 'age-native-simple',
                  }}
                >
                {cropsList.map((element) => (
                            <option value={element}>{element}</option>
                          ))}

                </Select>
          </FormControl>
      </div>
      <div className='row'>
        <Button
            variant="contained"
            color="primary"
            onClick={this.onMarketPrice}
            disabled={this.isMarketPriceButton()}
        >
            Today's Market Price
        </Button>
      </div>

    </>
  );
}

}

export const mapStateToProps = (state) => {
    return {
        cropsList: state.mainAgriPageReducer && state.mainAgriPageReducer.cropsList,
    }
}

export const mapDispatch = dispatch => {

    return {
        getMarketPrice: (params) => {
            mainAgriActions.getMarketPrice(params)(dispatch);
        }
    }

}


export default connect(mapStateToProps, mapDispatch)(MainAgriPage);