import { useAppContext } from 'AppContext';
import React from 'react';
import './History.css';
import { FaTimes } from 'react-icons/fa';

const History = () => {
  const { history, categories } = useAppContext();
  const context = useAppContext();

  const historyElements = history.map((item) => {
    const { title, category, price, id } = item;
    const color = categories.find((item) => item.name === category).color;

    return (
      <div key={id} className='history__element'>
        <h1>{title}</h1>
        <h1 style={{ backgroundColor: color }}>{category}</h1>
        <h1>{price}</h1>
        <button
          onClick={() => context.removeElementFromHistory(id)}
          className='history__remove-button'>
          <FaTimes />
        </button>
      </div>
    );
  });

  return (
    <>
      {history.length > 0 ? (
        <section className='history__container'>{historyElements}</section>
      ) : (
        <p style={{ fontSize: '1.5rem', marginTop: '3rem' }}>
          Historia jest pusta
        </p>
      )}
    </>
  );
};

export default History;
