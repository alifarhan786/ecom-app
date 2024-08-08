import axios from "axios";



export  async function productsData() {
  //const products = await axios.get("https://fakestoreapiserver.reactbd.com/products");
  const products = await axios.get("https://alifarhan786.github.io/store-api/products.json");

  
  return products;
}