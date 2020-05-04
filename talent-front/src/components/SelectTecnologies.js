import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

function SelectTecnologies(props) {
  return (
    <div className="container">
      <h4>Consultar Tecnologias</h4>
      <div className="selectTecnologies">
        <div className="form-group">
          <Select
            placeholder={<div>Seleccione una Tecnologia</div>}
            key="tecnologies"
            value={props.valueTecnologies}
            onChange={props.handleChangeTecnology}
            options={props.optionsTecnologies}
          />
        </div>
        <div className="form-group">
          <Select
            placeholder={<div>Seleccione Items</div>}
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
