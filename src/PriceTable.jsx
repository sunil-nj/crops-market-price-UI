import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
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
      <div className="market-name-table">
            <DataGrid
            rowHeight={25}
            rows={rows}
            columns={columns}
            autoPageSize={false}
            pageSize={30}
             />
          </div>
    )
  }
}

export default PriceTable;




