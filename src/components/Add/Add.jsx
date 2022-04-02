import React, { useState } from 'react';
import './Add.css';
import { categories } from 'data/data';
import { useAppContext } from 'AppContext';

const Add = () => {
  const {
    history,
    categories,
    addElementToHistory,
    removeElementFromHistory,
    nextID,
  } = useAppContext();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0].name);
  const [price, setPrice] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addElementToHistory({ id: nextID, title, category, price });
    setTitle('');
    setCategory(categories[0].name);
    setPrice('');
  };

  return (
    <section className='add__container'>
      <form className='add__form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='title'
          placeholder='title...'
          className='add__input'
          value={title}
          onChange={handleTitleChange}
          required
          maxLength='20'
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          id='category'
          className='add__input'
          required>
          {categories.map((category, index) => {
            const { name } = category;
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <input
          required
          type='number'
          id='price'
          placeholder='price...'
          className='add__input'
          value={price}
          onChange={handlePriceChange}
          max='10000'
        />
        <button type='submit' className='add__button'>
          Add
        </button>
      </form>
    </section>
  );
};

export default Add;
