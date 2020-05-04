import React from "react";
import DatePicker from "react-datepicker";
import ShowCandidates from "../components/ShowCandidates";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import config from "../utilities/config";
import Alert from "react-bootstrap/Alert";

const columnDefs = [
  {
    headerName: "Name",
    field: "candidate.name",
    minWidth: 180,
    headerCheckboxSelection: false,
    headerCheckboxSelectionFilteredOnly: false,
    checkboxSelection: false,
  },
  {
    headerName: "Email",
    field: "candidate.email",
    minWidth: 200,
  },
  {
    headerName: "Date Interview",
    field: "date",
  },

  {
    headerName: "Time",
    field: "hour",
  },

  {
    headerName: "Type",
    field: "typeInterview",
  },
];

class SearchInterviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      rowData: null,
      showSpinner: false,
      showDataPicker: true,
      showCandidates: true,
      errorMessage: null,
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  handleDate = async (date) => {
    this.setState({ startDate: date });
    this.setState({ showSpinner: true });
    this.setState({ showDataPicker: false });
    await this.getInterviewsByDate(date);
  };

  getInterviewsByDate = async (date) => {
    const dataString = date.toString();
    try {
      const result = await axios.get(`${config.URL_LOCAL_API}/${dataString}`);
      this.gridApi.setRowData(result.data);
      this.setState({ rowData: result.data });
      this.setState({ showCandidates: true });
      this.setState({ showDataPicker: true });
      this.setState({ showSpinner: false });
      this.setState({ startDate: new Date() });
    } catch (error) {
      this.handleError();
    }
  };

  handleError = () => {
    this.setState({ errorMessage: "Ups Ocurrion un Error Intenta mas Tarde" });
    this.setState({ showSpinner: false });
    setTimeout(() => {
      this.setState({ errorMessage: null });
      this.setState({ showDataPicker: true });
      this.setState({ showSpinner: false });
      this.setState({ startDate: new Date() });
    }, 5 * 1000);
  };

  render() {
    return (
      <div className="container">
        <h4>Consultar Entrevistas</h4>
        <div className="form-group">
          {this.state.showDataPicker && (
            <DatePicker
              className="form-control"
              placeholderText="Seleccione Fecha"
              key="Date"
              showPopperArrow={false}
              selected={this.state.startDate}
              onChange={this.handleDate}
            />
          )}

          {this.state.errorMessage && (
            <Alert variant="danger">{this.state.errorMessage}</Alert>
          )}
        </div>
        <div className="form-group">
          {this.state.showSpinner && <Spinner animation="grow" />}
        </div>
        <div>
          {this.state.showCandidates && (
            <ShowCandidates
              columnDefs={columnDefs}
              rowData={this.state.rowData}
              onGridReady={this.onGridReady}
            />
          )}
        </div>
      </div>
    );
  }
}
export default SearchInterviews;
