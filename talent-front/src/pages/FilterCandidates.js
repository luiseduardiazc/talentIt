import React from "react";
import config from "../utilities/config";
import ShowCandidates from "../components/ShowCandidates";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const evenUsers = (users) => users.id % 2 === 0;
const oddUsers = (users) => users.id % 2 !== 0;

class FilterCanditates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
      canditates: [],
      selectedCandidates: [],
      error: false,
    };
  }

  async componentDidMount() {
    const { numTecnologies } = this.props.location.state.params;
    let usersFiltered = [];
    try {
      let users = await this.getUser();
      this.setState({ showSpinner: false });
      if (numTecnologies.length % 2 === 0) {
        usersFiltered = users.filter(evenUsers);
      } else {
        usersFiltered = users.filter(oddUsers);
      }
      this.setState({ canditates: usersFiltered });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  getUser() {
    return new Promise((resolve, reject) => {
      fetch(config.URL_EXTERNAL_API)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  onSelectionChanged = (params) => {
    const candidates = params.api.getSelectedRows();
    this.setState({ selectedCandidates: candidates });
  };

  render() {
    return (
      <div className="container">
        {this.state.showSpinner && <Spinner animation="grow" />}
        {this.state.canditates.length > 0 && (
          <ShowCandidates
            rowData={this.state.canditates}
            rowSelection="multiple"
            onSelectionChanged={this.onSelectionChanged}
          />
        )}
        <div className="container">
          {this.state.selectedCandidates.length > 0 && (
            <Link
              className="btn btn-secondary"
              to={{
                pathname: "/schedule-candidates",
                state: {
                  params: {
                    selectedCandidates: this.state.selectedCandidates,
                  },
                },
              }}
            >
              Agendar Candidatos
            </Link>
          )}
        </div>
      </div>
    );
  }
}
export default FilterCanditates;
