import "./App.css";
import Model from "./components/Model";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import apiRequest from "./api/apiRequest";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import EditModel from "./components/EditModel";

function App() {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchMethod = () => {};
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.user_id !== id);
    setData(updatedData);
  };

  const handlePost = (newdata) => {
    setData((prev) => [...prev, newdata]);
    navigation("/");
  };

  const handleUpdate = (id, updateData) => {
    const updateDatas = data.map((item) =>
      item.user_id === updateData.user_id ? updateData : item
    );
    setData(updateDatas);
    navigation("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Table data={data} handleDelete={handleDelete} />
              <Link to="/newdata">
                <button className="btn">Add</button>
              </Link>
            </>
          }
        />
        <Route path="/newdata" element={<Model handlePost={handlePost} />} />
        <Route
          path="/editData/:user_id"
          element={<EditModel data={data} handleUpdate={handleUpdate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
