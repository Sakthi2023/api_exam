import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import { Link } from "react-router-dom";

const Table = ({ data, handleDelete }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>ROLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.user_id}</td>
              <td>{item.user_name}</td>
              <td>{item.user_age}</td>
              <td>{item.user_email}</td>
              <td>{item.user_gender}</td>
              <td>{item.user_role}</td>
              <td>
                <span className="action action-delete">
                  <BsFillTrashFill onClick={() => handleDelete(item.user_id)} />
                </span>
              </td>
              <td>
                <Link to={`/editData/${item.user_id}`}>
                  <span className="action action-edit">
                    <BsFillPencilFill />
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
