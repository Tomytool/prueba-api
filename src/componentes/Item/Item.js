import React from 'react';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';
import './Item.css';

const Item = ({ titulo, url, stock }) => {
  const [count, setCount] = React.useState(0);
  let subtractCounter = () => {
    setCount(count - 1);
  };
  let addCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="item">
      <h3>{titulo}</h3>
      <img src={url} alt="160 x 160" /> <p>descripcion</p>
      <p className='itemStock'>
          {count < 0
            ? setCount(0)
            : count > stock
            ? setCount(stock)
            : count}
        </p>
      <div className='itemCompra'>
        <TiChevronLeft onClick={subtractCounter} />
        <button>Agregar</button>
        <TiChevronRight onClick={addCounter}/>
      </div>
    </div>
  );
};

export default Item;
