import React from "react";
import SelectTecnologies from "../components/SelectTecnologies";
import config from "../utilities/config";

class ScheduleInterviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTecnologies: null,
      valuesItemTecnologies: null,
      optionsItemsTecnologies: [],
      showSelect: true,
    };

    this.handleChangeTecnology = this.handleChangeTecnology.bind(this);
    this.handleChangeItemsTecnologies = this.handleChangeItemsTecnologies.bind(
      this
    );
    this.handleButtonSelect = this.handleButtonSelect.bind(this);
  }

  handleChangeTecnology = (selectedOption) => {
    this.setState({ valueTecnologies: selectedOption });
    if (selectedOption.value === config.Options.Microsoft) {
      this.setState({
        optionsItemsTecnologies: config.microsofItems,
        valuesItemTecnologies: null,
      });
    } else if (selectedOption.value === config.Options.Oracle) {
      this.setState({
        optionsItemsTecnologies: config.oracleItems,
        valuesItemTecnologies: null,
      });
    }
  };

  handleChangeItemsTecnologies = (selectedOption) => {
    this.setState({ valuesItemTecnologies: selectedOption });
  };

  handleButtonSelect = (even) => {
    even.preventDefault();
    console.log(this.state.valuesItemTecnologies.length);
  };
  render() {
    return (
      <div>
        <SelectTecnologies
          valueTecnologies={this.state.valueTecnologies}
          handleChangeTecnology={this.handleChangeTecnology}
          optionsTecnologies={config.optionsTecnologies}
          valuesItemTecnologies={this.state.valuesItemTecnologies}
          handleChangeItemsTecnologies={this.handleChangeItemsTecnologies}
          optionsItemsTecnologies={this.state.optionsItemsTecnologies}
          handleButtonSelect={this.handleButtonSelect}
        />
      </div>
    );
  }
}

export default ScheduleInterviews;
