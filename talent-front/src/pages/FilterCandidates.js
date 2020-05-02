import React from "react";
import config from "../utilities/config";
import ShowCandidates from "../components/ShowCandidates";

const evenUsers = (users) => users.id % 2 === 0;
const oddUsers = (users) => users.id % 2 !== 0;

class FilterCanditates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canditates: [],
      error: false,
    };
  }

  async componentDidMount() {
    const { numTecnologies } = this.props.location.state.params;
    let usersFiltered = [];

    try {
      let users = await this.getUser();
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

  render() {
    return <ShowCandidates />;
  }
}
export default FilterCanditates;
