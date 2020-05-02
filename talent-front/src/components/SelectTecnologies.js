import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
function SelectTecnologies(props) {
  return (
    <div className="container">
      <h2>Agendar Entrevistas</h2>
      <div className="selectTecnologies">
        <div>
          <Select
            key="tecnologies"
            value={props.valueTecnologies}
            onChange={props.handleChangeTecnology}
            options={props.optionsTecnologies}
          />
        </div>
        <div>
          <Select
            key="itemsTecnologies"
            value={props.valuesItemTecnologies}
            onChange={props.handleChangeItemsTecnologies}
            options={props.optionsItemsTecnologies}
            isClearable={false}
            isMulti
          />
        </div>
        {props.valuesItemTecnologies && (
          <Link
            className="btn btn-secondary"
            to={{
              pathname: "/filter-candidates",
              state: {
                params: {
                  numTecnologies: props.valuesItemTecnologies,
                },
              },
            }}
          >
            Buscar Candidatos
          </Link>
        )}
      </div>
    </div>
  );
}
export default SelectTecnologies;
