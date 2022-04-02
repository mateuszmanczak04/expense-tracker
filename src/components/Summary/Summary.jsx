import { useAppContext } from 'AppContext';
import React, { useState } from 'react';
import './Summary.css';

const Summary = () => {
  const { history, categories } = useAppContext();
  // const [total, setTotal] = useState(0);
  let total = 0;
  history.forEach((item) => {
    total += parseInt(item.price);
  });

  const categoriesElement = categories.map((category, index) => {
    let result = 0;
    history.forEach((item) => {
      if (item.category === category.name) {
        result += parseInt(item.price);
      }
    });
    return (
      <h1 key={index} style={{ background: category.color }}>
        {category.name}: {result}
      </h1>
    );
  });

  return (
    <section className='summary__container'>
      <h1>Total: {total}</h1>
      {categoriesElement}
    </section>
  );
};

export default Summary;
