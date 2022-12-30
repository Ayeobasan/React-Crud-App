import React, { useState } from "react";
import Select from "react-select";
import data from "./Doc/data";

const ContactForm = (props) => {
  const [fullName, setfullName] = useState("");
  const [selected, setSelected] = useState("");
  const [agree, setArgree] = useState(false);
  const [Err, setErr] = useState(false);

  const initialFieldValues = {
    fullName,
    selected,
    agree,
  };

  const Push = (e) => {
    e.preventDefault();

    // all field requied before pushing to firebase


    if (fullName !== "" && selected !== "" && agree !== "") {
      props.addOrEdit(initialFieldValues);
    } else {
      alert("successfully not save all field are required");
    }
    if (fullName && selected && agree) {
      alert("successfully save");
    }

    // all field requied or send err

    if (fullName === 0) {
      setErr("");
    }
    if (!selected.length) {
      setErr(true);
    }
    if (!agree) {
      setErr(true);
    }
    return Err;
  };

  //Fullname Input handles

  const handleInputChange = (e) => {
    setfullName({ fullName: e.target.value });
    setErr({ fullName: e.target.value });
  };

  //Select your sectores handles

  const handleChangeSelect = (selected) => {
    setSelected(selected);
    setErr(selected);
  };

  //Agreement checkbox handles

  const handleChangeAgreement = (e) => {
    setArgree({ agree: e.target.checked });
    setErr({ agree: e.target.checked });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          onChange={handleInputChange}
        />
      </div>
      {Err && fullName.length === 0 ? (
        <p className="err"> fullName required</p>
      ) : (
        ""
      )}
      <div className="form-row">
        <div className="col">
          <label>Please Select your Sectors:</label>
          <Select isMulti onChange={handleChangeSelect} options={data} />
          {Err && !selected.length ? (
            <p className="err"> Select required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form-group">
        <input type="checkbox" onChange={handleChangeAgreement} /> i agree with
        the terms and condition
        {Err && !agree ? <p className="err"> Agrement required</p> : ""}
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId === "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
          onClick={Push}
        />
      </div>
    </form>
  );
};

export default ContactForm;
