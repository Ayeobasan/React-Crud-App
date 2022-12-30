import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("Database").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
      else setContactObjects({});
    });
  }, []); // similar to componentDidMount

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("Database").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`Database/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      // debugger;
      firebaseDb.child(`Database/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <p className=" text-center">
            Please enter your name and pick the Sectors you are currently
            involved in:
          </p>
        </div>
        <div className="col">
          <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
        </div>
      </div>
      <div>
        <div className="col">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Sector</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects.id}</td>
                    <td>{contactObjects.fullName}</td>
                    <td>{contactObjects.selected}</td>
                    <td>{contactObjects.agree}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
