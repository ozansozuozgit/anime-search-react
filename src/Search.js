import React, { useState } from 'react';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { fetchSearchList } from './features/anime/animeSlice';

function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const submitInput = (e) => {
    if (e.key === 'Enter') {
      console.log(input);
      dispatch(fetchSearchList(input));
    }
  };


  return (
    <div className={styles.search}>
      <input
        type="text"
        value={input}
        onChange={updateInput}
        onKeyPress={submitInput}
        placeholder="Search for anime"
      />
    </div>
  );
}

export default Search;
