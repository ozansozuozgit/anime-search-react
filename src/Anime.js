import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Anime.module.css';
import { fetchAnime, selectAnime } from './features/anime/animeSlice';
import { useDispatch, useSelector } from 'react-redux';
import AnimeStats from './AnimeStats';
import { motion } from 'framer-motion';

function Anime({ match }) {
  const dispatch = useDispatch();
  const animeInfo = useSelector(selectAnime);

  useEffect(() => {
    dispatch(fetchAnime(match.params.id));
    console.log(animeInfo);
  }, [dispatch, match]);

  return (
    <div className={styles.anime}>
      <Link to="/" className={styles.back_btn}>
        Back To Search
      </Link>
      <div className={styles.info_container}>
        <div className={styles.left_container}>
          <h1>{animeInfo?.title}</h1>
          <img src={animeInfo?.image_url} alt="" />
          <p>{animeInfo?.aired.string}</p>
        </div>

        {animeInfo ? <AnimeStats stats={animeInfo} /> : <h1>Loading</h1>}
      </div>
      <motion.iframe
        src={animeInfo?.trailer_url}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
        title="video"
        autoplay="0"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{
          delay: 1,
          ease: 'easeIn',
          type: 'spring',
          stiffness: 120,
        }}
      />
    </div>
  );
}

export default Anime;
