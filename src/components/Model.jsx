import React from "react";
import "./Model.css";
import { useState } from "react";

const Model = ({ handlePost }) => {
  const [fromState, setFromState] = useState({
    user_id: "",
    user_name: "",
    user_age: "",
    user_email: "",
    user_gender: "",
    user_role: "",
  });

  const handleChange = (e) => {
    setFromState({
      ...fromState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost(fromState);
  };
  return (
    <div className="model-container">
      <div className="model">
        <form action="">
          <div className="from-group">
            <label htmlFor="user_id">ID</label>
            <input type="text" name="user_id" onChange={handleChange} />
          </div>
          <div className="from-group">
            <label htmlFor="user_name">NAME</label>
            <input type="text" name="user_name" onChange={handleChange} />
          </div>
          <div className="from-group">
            <label htmlFor="user_age">AGE</label>
            <input type="text" name="user_age" onChange={handleChange} />
          </div>
          <div className="from-group">
            <label htmlFor="user_email">EMAIL</label>
            <input type="email" name="user_email" onChange={handleChange} />
          </div>
          <div className="from-group">
            <label htmlFor="user_gender">GENDER</label>
            <select name="user_gender" onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="from-group">
            <label htmlFor="use_role">ROLE</label>
            <select name="user_role" onChange={handleChange}>
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Model;
