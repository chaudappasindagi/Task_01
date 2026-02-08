import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>My First MERN App</h1>
      {products.map((p) => (
        <Card key={p._id} {...p} />
      ))}
    </div>
  );
}

export default App;