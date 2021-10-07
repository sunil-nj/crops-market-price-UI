import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { connect } from 'react-redux';
import * as mainAgriActions from '../../actions/MainPage/MainAgriPage.actions.js';

const commoditiesList = [{label: 'Paddy', id: 1}, {label: 'Wheat', id: 2}, {label: 'Ragi', id: 3},
                   {label: 'Jowar', id: 4}, {label: 'Corn', id: 5}, {label: 'Cucumber', id: 6},];

/*This design has to be changed */
class CropSelection extends React.Component {

constructor(props){
    super(props);
    this.state = {
        selectedCommodityList: '',
    };
}

onMarketPrice =()=> {
const payload = { selectedCommodityList: this.state.selectedCommodityList};
this.props.getMarketPrice(payload);
this.props.history.push('/commodityPrice');
}

/* handleChange = (event) => {
    const name = event.target.name;

    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
     *//* if(name === "marketName" && event.target.value !== ""){
            this.setState({isCropField: false});
    } else if(name === "marketName" && event.target.value === ""){
            this.setState({isCropField: true, cropName: ''});
    } *//*
} */

handleChange = (event, selectedValue) => {
    this.setState({selectedCommodityList: selectedValue});
}

isMarketPriceButton = ()=> {
    let isButton = true;
    if(this.state.selectedCommodityList && this.state.selectedCommodityList.length > 0){
        isButton = false;
    }
    return isButton;
}

groupOptions = commoditiesList.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

render() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='row' >
                          <Autocomplete
                            multiple
                            id="grouped-demo"
                            limitTags={2}
                            options={this.groupOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                            groupBy={(option) => option.firstLetter}
                            getOptionLabel={(option) => option.label}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Please Select Commodity..." />}
                            onChange={this.handleChange}
                            className="autocomplete-margin"
                          />
                        </div>
                        <div className='row'>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.onMarketPrice}
                                disabled={this.isMarketPriceButton()}
                            >
                                Check Price
                            </Button>
                        </div>
            </CardContent>
        </Card>

      );
}

}

export const mapStateToProps = (state) => {
    return {
        cropsList: state.mainPage && state.mainPage.cropsList,
    }
}

export const mapDispatch = dispatch => {
    return {
        getMarketPrice: (params) => {
            mainAgriActions.getMarketPrice(params)(dispatch);
        }
    }
}


export default connect(mapStateToProps, mapDispatch)(CropSelection);