import React from 'react';
import CropSelection from './CropSelection.component.jsx';
import FooterIcons from '../Common/FooterIcons.component.jsx';
import Header from '../Common/Header.component.jsx';

class FirstPage extends React.Component {

    render(){
        return (
            <>
                <Header headerName="My App Name" />
                <CropSelection history={this.props.history} />
                <FooterIcons history={this.props.history} />
            </>
        )
    }

}

export default FirstPage;