import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Anime.module.css';
import { fetchAnime } from './features/anime/animeSlice';
import { useDispatch,useSelector } from 'react-redux';

function Anime({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(match);
    dispatch(fetchAnime(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <h1>Body</h1>
    </div>
  );
}

export default Anime;
