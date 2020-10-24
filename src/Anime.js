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

  const videoVariants = {
    hidden: {
      x: '100vw',
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        ease: 'easeIn',
        type: 'spring',
        mass: 1.5,
        stiffness: 120,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.anime}
    >
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
        variants={videoVariants}
        src={animeInfo?.trailer_url}
        frameBorder="0"
        allowFullScreen
        title="video"
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  );
}

export default Anime;
