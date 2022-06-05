import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemDetail.css';

// https://jsonplaceholder.typicode.com/albums/1/photos

const ItemDetail = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="contenedor">
      {item.map((dato) => (
        <Item key={dato.id} titulo={dato.title} url={dato.url} stock={5} />
      ))}
    </div>
  );
};

export default ItemDetail;
