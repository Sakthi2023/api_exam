import "./App.css";
import Model from "./components/Model";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import EditModel from "./components/EditModel";

function App() {
  const url = "http://localhost:3500/data";
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchMethod = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    };
    fetchMethod();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    console.log(`${url}/${id}`);
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      const updatedData = data.filter((item) => item.user_id !== id);
      setData(updatedData);
    } catch (e) {
      e.message;
    }
  };

  const handlePost = async (newdata) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newdata),
      });
      const data = await response.json();
      setData((prev) => [...prev, data]);
      navigation("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleUpdate = async (id, updateData) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });
      const data = response.json();
      const updateDatas = data.map((item) =>
        item.user_id === updateData.user_id ? data : item
      );
      setData(updateDatas);
      navigation("/");
    } catch (e) {
      console.e("Failed to update data");
    }
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
