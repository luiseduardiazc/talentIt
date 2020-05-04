import React from "react";
import ShowCandidates from "../components/ShowCandidates";
import ScheduleInterviewModal from "../components/ScheduleInterviewModal";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import config from "../utilities/config";

class ScheduleCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      createdOk: null,
      canditates: [],
      canditateSelected: [],
      show: false,
      startTime: null,
      startDate: null,
      interviewType: null,
    };
  }
  componentDidMount() {
    const { selectedCandidates } = this.props.location.state.params;
    this.setState({ canditates: selectedCandidates });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onSelectionChanged = (params) => {
    const candidate = params.api.getSelectedRows();
    this.setState({ canditateSelected: candidate });
  };

  handleShow = () => {
    this.clearErrorMessage();
    this.setState({ show: true });
    this.setState({ startTime: null });
    this.setState({ startDate: null });
    this.setState({ interviewType: null });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  validateFields = () => {
    if (
      this.state.startDate &&
      this.state.startTime &&
      this.state.interviewType
    ) {
      return true;
    } else {
      this.setState({ errorMessage: "Todos los campos son requeridos" });
    }
    return false;
  };

  clearErrorMessage() {
    this.setState({ errorMessage: null });
  }

  handleSave = async () => {
    try {
      if (this.validateFields()) {
        const data = {
          candidate: this.state.canditateSelected[0],
          date: this.state.startDate.toString(),
          hour: this.state.startTime.toString(),
          typeInterview: this.state.interviewType.value,
        };
        await axios.post(config.URL_LOCAL_API, data);
        this.handleCreatedOk();
      }
    } catch (error) {
      const message = JSON.stringify(error.response.data.errorMessage.message);
      this.setState({ errorMessage: message });
    }
  };

  handleCreatedOk = () => {
    let canditates = this.state.canditates;
    const canditateSelected = this.state.canditateSelected;
    const filterCandidates = (candidate) => {
      return candidate.id !== canditateSelected[0].id;
    };
    let updateCanditates = ["null"];
    if (canditates.length > 1) {
      updateCanditates = canditates.filter(filterCandidates);
    }
    this.setState({ canditates: updateCanditates });

    this.setState({ createdOk: "Entrevista Agendada con Exito" });
    this.setState({ canditateSelected: [] });
    this.handleClose();
    this.hideCreatedOk();
  };

  hideCreatedOk() {
    setTimeout(() => {
      this.setState({ createdOk: null });
    }, 5 * 1000);
  }
  handleTime = (time) => {
    this.setState({ startTime: time });
    this.clearErrorMessage();
  };

  handleDate = (date) => {
    this.setState({ startDate: date });
    this.clearErrorMessage();
  };

  handleinterviewType = (option) => {
    this.setState({ interviewType: option });
    this.clearErrorMessage();
  };

  render() {
    return (
      <div>
        {this.state.createdOk && (
          <Alert className="container" variant="success">
            {this.state.createdOk}
          </Alert>
        )}
        {this.state.canditates.length > 0 && (
          <ShowCandidates
            rowData={this.state.canditates}
            onGridReady={this.onGridReady}
            rowSelection="single"
            onSelectionChanged={this.onSelectionChanged}
          />
        )}
        {this.state.canditateSelected.length > 0 && (
          <div className="container">
            <ScheduleInterviewModal
              errorMessage={this.state.errorMessage}
              show={this.state.show}
              handleShow={this.handleShow}
              handleClose={this.handleClose}
              handleSave={this.handleSave}
              startTime={this.state.startTime}
              handleTime={this.handleTime}
              startDate={this.state.startDate}
              handleDate={this.handleDate}
              optionsInterview={config.optionsInterview}
              handleinterviewType={this.handleinterviewType}
              interviewType={this.state.interviewType}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ScheduleCandidates;
