import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Anime.module.css';
import { fetchAnime, selectAnime } from './features/anime/animeSlice';
import { useDispatch, useSelector } from 'react-redux';

function Anime({ match }) {
  const dispatch = useDispatch();
  const animeInfo = useSelector(selectAnime);
  
  useEffect(() => {
    if (animeInfo === null) {
      dispatch(fetchAnime(match.params.id));
    }
    console.log(animeInfo);
  }, [dispatch, match, animeInfo]);

  return (
    <div>
      <h1>{animeInfo?.title}</h1>
    </div>
  );
}

export default Anime;
