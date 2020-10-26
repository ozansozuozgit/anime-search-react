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
    if (input !== '' && (e.key === 'Enter' || e.type === 'click')) {
      dispatch(fetchSearchList(input));
      setInput('');
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
      <input type="button" value="Search" onClick={submitInput} />
    </div>
  );
}

export default Search;
