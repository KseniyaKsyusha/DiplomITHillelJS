import { useEffect, useState } from "react";
import "./style.css";
import { API_URL } from "../../constants";
import HeaderLogo from "../../components/HeaderLogo";
import ProductCard from "../../components/ProductCard";

const Preview = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/products/`);
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  return (
    <div>
      <HeaderLogo />
      <div className="cards_container">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
