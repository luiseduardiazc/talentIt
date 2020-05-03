import React from "react";
import ShowCandidates from "../components/ShowCandidates";
import ScheduleInterviewModal from "../components/ScheduleInterviewModal";
import config from "../utilities/config";

class ScheduleCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  onSelectionChanged = (params) => {
    const candidate = params.api.getSelectedRows();
    this.setState({ canditateSelected: candidate });
  };

  handleShow = () => {
    this.setState({ show: true });
    this.setState({ startTime: null });
    this.setState({ startDate: null });
    this.setState({ interviewType: null });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleSave = () => {
    console.log("Save");
    this.handleClose();
  };

  handleTime = (time) => {
    this.setState({ startTime: time });
  };

  handleDate = (date) => {
    this.setState({ startDate: date });
  };

  handleinterviewType = (option) => {
    this.setState({ interviewType: option });
  };
  render() {
    return (
      <div>
        {this.state.canditates.length > 0 && (
          <ShowCandidates
            rowData={this.state.canditates}
            rowSelection="single"
            onSelectionChanged={this.onSelectionChanged}
          />
        )}
        {this.state.canditateSelected.length > 0 && (
          <div className="container">
            <ScheduleInterviewModal
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
