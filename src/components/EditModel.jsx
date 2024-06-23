import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditModel = ({ data, handleUpdate }) => {
  const { user_id } = useParams();
  const [editData, setEditData] = useState({
    user_id: "",
    user_name: "",
    user_age: "",
    user_email: "",
    user_gender: "",
    user_role: "",
  });

  useEffect(() => {
    const fetchData = () => {
      const filterData = data.filter((item) => item.user_id === user_id);
      if (filterData.length > 0) {
        setEditData(filterData[0]);
      }
    };
    fetchData();
  }, [user_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(user_id, editData);
  };
  return (
    <div className="model-container">
      <div className="model">
        <form action="">
          <div className="from-group">
            <label htmlFor="user_id">ID</label>
            <input type="text" name="user_id" defaultValue={editData.user_id} />
          </div>
          <div className="from-group">
            <label htmlFor="user_name">NAME</label>
            <input
              type="text"
              name="user_name"
              value={editData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="from-group">
            <label htmlFor="user_age">AGE</label>
            <input
              type="text"
              name="user_age"
              value={editData.user_age}
              onChange={handleChange}
            />
          </div>
          <div className="from-group">
            <label htmlFor="user_email">EMAIL</label>
            <input
              type="email"
              name="user_email"
              value={editData.user_email}
              onChange={handleChange}
            />
          </div>
          <div className="from-group">
            <label htmlFor="user_gender">GENDER</label>
            <select
              name="user_gender"
              value={editData.user_gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="from-group">
            <label htmlFor="use_role">ROLE</label>
            <select
              name="user_role"
              value={editData.user_role}
              onChange={handleChange}
            >
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModel;
