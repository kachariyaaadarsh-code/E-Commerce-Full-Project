import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // search state
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")

      .then((res) => res.json())

      .then((data) => {

        setProducts(data);
        setLoading(false);

      });

  }, []);

  // filter products
  const filteredProducts = products.filter((product) =>

    product.title.toLowerCase().includes(search.toLowerCase())

  );

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <div>

      <h1>Products</h1>

      {/* Search Input */}

      <input

        type="text"

        placeholder="Search product..."

        value={search}

        onChange={(e) => setSearch(e.target.value)}

        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px"
        }}

      />

      {

        filteredProducts.map((product) => (

          <ProductCard

            key={product.id}

            product={product}

          />

        ))

      }

    </div>

  );

}

export default Home;
