import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FooterIcons from '../Common/FooterIcons.component.jsx';
import Header from '../Common/Header.component.jsx';
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'cropName',
    headerName: 'Crop Name',
    width: 130,
    editable: false,
    sortable: true,
  },
  {
    field: 'cropPrice',
    headerName: 'Price Per Kg',
    width: 130,
    editable: false,
    sortable: true,
  }
];

const rows = [
  { id: 1, cropName: 'Paddy', cropPrice: 20 },
  { id: 2, cropName: 'Wheat', cropPrice: 30 },
];



class PriceTable extends React.Component {

  render() {
    return (
        <>
            <Header headerName="Market Price" />
            {/* <div className="market-name-table">
                <DataGrid
                    rowHeight={25}
                    rows={rows}
                    columns={columns}
                    autoPageSize={false}
                    pageSize={30}
                 />
            </div> */}
            <FooterIcons history={this.props.history} />
        </>
    )
  }
}

export default PriceTable;




