import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

class MarketNames extends React.Component {

  render() {
  const rowData = [
         {marketNames: "Toyota"},
         {marketNames: "Ford"},
         {marketNames: "Porsche"}
     ];


    return (
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                 <AgGridReact
                     rowData={rowData}>
                     <AgGridColumn field="marketNames"></AgGridColumn>
                 </AgGridReact>
             </div>
    )
  }
}

export default MarketNames;




