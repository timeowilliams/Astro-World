import React, { useMemo, useEffect, useState } from 'react';
import '@astrouxds/ag-grid-theme/dist/main.css';

//import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
//import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { AgGridReact} from 'ag-grid-react';
//import 'ag-grid-community/dist/styles/ag-grid.css';
//import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default function GridExample() {

  // never changes, so we can use useMemo
  const modules = useMemo( ()=> [ClientSideRowModelModule], []);

  // never changes, so we can use useMemo
  const columnDefs = useMemo( ()=> [
      { field: 'athlete' },
      { field: 'age'},
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' }
  ], []);

  // never changes, so we can use useMemo
  const defaultColDef = useMemo( ()=> ({
      resizable: true,
      sortable: true,
      filter: true
  }), []);

  // changes, needs to be state
  const [rowData, setRowData] = useState();
  
  // gets called once, no dependencies, loads the grid data
  useEffect( ()=> {
      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
          .then( resp => resp.json())
          .then( data => setRowData(data));
  }, []);

   return (
       <div className="ag-theme-astro" style={{height: 400, width: 800, paddingLeft: 150}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                className="ag-theme-alpine"
                 animateRows="true"
                 modules={modules}
                 //suppressReactUi="true"
                >
           </AgGridReact>
       </div>
   );
};
