import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class ShowCandidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Name",
          field: "name",
          minWidth: 180,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
        },
        {
          headerName: "Email",
          field: "email",
          minWidth: 200,
        },
        {
          headerName: "Street",
          field: "address.street",
        },

        {
          headerName: "Suite",
          field: "address.suite",
        },

        {
          headerName: "City",
          field: "address.city",
        },
        {
          headerName: "Zipcode",
          field: "address.zipcode",
        },
        {
          headerName: "Lat",
          field: "address.geo.lat",
        },
        {
          headerName: "Lng",
          field: "address.geo.lng",
        },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true,
      },
      rowSelection: "single",
      rowData: [],
    };
  }

  componentDidMount() {
    this.setState({ rowData: this.props.rowData });
    if (this.props.columnDefs)
      this.setState({ columnDefs: this.props.columnDefs });
    if (this.props.rowSelection)
      this.setState({ rowSelection: this.props.rowSelection });
  }

  onQuickFilterChanged = () => {
    this.gridApi.setQuickFilter(document.getElementById("quickFilter").value);
  };

  render() {
    return (
      <div className="container">
        <div className="ag-theme-alpine" style={{ height: "350px" }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            suppressRowClickSelection={true}
            rowSelection={this.state.rowSelection}
            onGridReady={this.props.onGridReady}
            onSelectionChanged={this.props.onSelectionChanged}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}
export default ShowCandidates;
