import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import PropTypes from 'prop-types';

const table = {
  width: "100%",
  border: "6px solid #948473",
  backgroundColor: "#30c9aa",
  textAlign : "center"
}
const caption = {
  fontFamily: "'Rock Salt' cursive",
  padding: "20px",
  fontStyle: "italic",
  captionSide: "bottom",
  color: "#666",
  textAlign: "right",
  letterSpacing: "1px"
}

export const thTD = {
  padding: "20px",
  letterSpacing: "2px",
  border: "1px solid #948473"
}

const products = [
  {price:200,
    name:"T-shirt",
    category:"Clothes"
  },
  {
    price: 2100,
    name: "Iphone Xmax",
    category : "Electronics"
  },
    {
      price: 50,
      name: "Denim Jean",
      category: "Clothes"
    }
];

ProductTable.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
  }
  ))
}

function App() {
  return (
    <table style = {table}>
    <caption style = {caption}>Our Products</caption>
        <thead>
        <tr>
        <th style = {thTD}>Name</th>
        <th style = {thTD}>Price</th>
        <th style = {thTD}>Category</th>
        </tr>
        </thead>
        <tbody>
          <ProductTable datas = {products} />
        </tbody>
    </table>
  );
}



export default App;
