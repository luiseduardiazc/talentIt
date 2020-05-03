import React from "react";
import DatePicker from "react-datepicker";
import ShowCandidates from "../components/ShowCandidates";
import Spinner from "react-bootstrap/Spinner";
const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    minWidth: 180,
    headerCheckboxSelection: false,
    headerCheckboxSelectionFilteredOnly: false,
    checkboxSelection: false,
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
];
class SearchInterviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      rowData: null,
      showSpinner: false,
      showCandidates: false,
    };
  }

  handleDate = (date) => {
    this.setState({ startDate: date });
    this.setState({ showSpinner: true });
  };
  render() {
    return (
      <div className="container">
        <h4>Consultar Entrevistas</h4>
        <div className="form-group">
          <DatePicker
            className="form-control"
            placeholderText="Seleccione Fecha"
            key="Date"
            showPopperArrow={false}
            selected={this.state.startDate}
            onChange={this.handleDate}
          />
        </div>
        <div className="form-group">
          {this.state.showSpinner && <Spinner animation="grow" />}
        </div>
        <div>
          {this.state.showCandidates && (
            <ShowCandidates
              columnDefs={columnDefs}
              rowData={this.state.rowData}
            />
          )}
        </div>
      </div>
    );
  }
}
export default SearchInterviews;
