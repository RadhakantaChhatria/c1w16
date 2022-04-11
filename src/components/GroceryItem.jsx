// reusable card component
import React from 'react';

const GroceryItem = (props) => {

  console.log(props)
  const {id,title,imgURL,discount,sellingPrice,mrp}=props
  return <div id="main">
    <img src={imgURL} alt=""/>
    <p>{title}</p>
    <p>{discount}</p>
    <p>{sellingPrice}</p>
    <p>{mrp}</p>
  </div>;
};
export default GroceryItem;
