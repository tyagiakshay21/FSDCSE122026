import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [pointer, setPointer] = useState(1000);
  const [product, setProduct] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {
        const data = await fetch('https://dummyjson.com/products');
        const jsonData = await data.json();

        console.log(jsonData);

        setProduct(jsonData);

      } catch (e) {
        console.log("Error is: " + e);
      }
    }

    fetchData();

  }, []);

  return (
    <div>
      <h2 style={{ color: 'red' }}>
        count = {count}
      </h2>

      <h2 style={{ color: 'green' }}>
        pointer = {pointer}
      </h2>

      <button onClick={() => setCount(count + 10)}>
        Counter
      </button>

      <h2>Product List</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {product.products?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}

export default UseEffect;