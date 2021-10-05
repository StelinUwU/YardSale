import { useEffect, useState } from "react";
import axios from "axios";
const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const resp = await axios(API);
    setProducts(resp.data);
  }, []);
  return products;
};

export default useGetProducts;
