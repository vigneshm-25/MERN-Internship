import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const api = "https://jsonplaceholder.typicode.com/users";

  const [apidata, setApiData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // GET METHOD
  const getusers = async () => {
    const response = await axios.get(api);
    setApiData(response.data);
  };

  useEffect(() => {
    getusers();
  }, []);

  // POST AND PUT METHOD
  const submit = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email
    };

    if (editId === null) {
      // POST - ADD USER
      const response = await axios.post(api, userData);

      setApiData([...apidata, response.data]);
      alert("User added successfully");
    } else {
      // PUT - UPDATE USER
      const response = await axios.put(`${api}/${editId}`, userData);

      setApiData(
        apidata.map((user) =>
          user.id === editId ? response.data : user
        )
      );

      alert("User updated successfully");
    }

    setName("");
    setEmail("");
    setEditId(null);
  };

  // DELETE METHOD
  const deleteUser = async (id) => {
    await axios.delete(`${api}/${id}`);

    setApiData(apidata.filter((user) => user.id !== id));
    alert("User deleted successfully");
  };

  // EDIT USER
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div>
      <h1>CRUD Operations using Axios</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId === null ? "Add User" : "Update User"}
        </button>
      </form>

      <hr />

      <h2>User List</h2>

      {apidata.map((user) => (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong> - {user.email}
          </p>

          <button onClick={() => editUser(user)}>
            Edit
          </button>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;