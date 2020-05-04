import React from "react";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Select from "react-select";
function ScheduleInterviewModal(props) {
  return (
    <>
      <Button variant="info" onClick={props.handleShow}>
        Agendar Entrevista
      </Button>

      <Modal show={props.show} onHide={props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar Entrevista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <DatePicker
              key="Date"
              minDate={new Date()}
              dateFormat="dd/MMMM/yyyy"
              className="form-control"
              placeholderText="Seleccione Fecha"
              showPopperArrow={false}
              selected={props.startDate}
              onChange={props.handleDate}
            />
          </div>

          <div className="form-group">
            <DatePicker
              className="form-control"
              key="Hour"
              placeholderText="Seleccione Hora"
              selected={props.startTime}
              onChange={props.handleTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              timeFormat="HH:mm"
              dateFormat="HH:mm"
            />
          </div>
          <div className="form-group">
            <Select
              placeholder={<div>Seleccione Tipo de Entrevista</div>}
              value={props.interviewType}
              onChange={props.handleinterviewType}
              options={props.optionsInterview}
            />
          </div>
          {props.errorMessage && (
            <Alert variant="danger">{props.errorMessage}</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={props.handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScheduleInterviewModal;
