import React, { useEffect } from 'react';
import styles from './AnimeStats.module.css';
import { motion, useAnimation } from 'framer-motion';

function AnimeStats({
  stats: {
    rank,
    genres,
    members,
    popularity,
    score,
    aired,
    synopsis,
    episodes,
  },
}) {
  let formatMembers = String(members).replace(/(.)(?=(\d{3})+$)/g, '$1,');

  const spring = {
    type: 'spring',
    bounce: 0.8,
    duration: 1.6,
    delay: 0.5,
  };

  const genreContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      delay: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const genreItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={styles.animeStats}>
      <motion.div
        className={styles.stats_container}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={spring}
      >
        <div className={styles.stat}>
          <h1>{score}</h1>
          <p>Score</p>
        </div>
        <div className={styles.stat}>
          <h1>{popularity}</h1>
          <p>Popularity</p>
        </div>
        <div className={styles.stat}>
          <h1>{rank}</h1>
          <p>Rank</p>
        </div>
        <div className={styles.stat}>
          <h1>{episodes}</h1>
          <p>Episodes</p>
        </div>
        <div className={styles.stat}>
          <h1>{formatMembers}</h1>
          <p>Members</p>
        </div>
      </motion.div>
      <motion.div
        className={styles.genres}
        variants={genreContainer}
        initial="hidden"
        animate="show"
      >
        {genres.map((genre) => (
          <motion.h3 variants={genreItem}>{genre.name}</motion.h3>
        ))}
      </motion.div>
      <div className={styles.synopsis_container}>
        <h1>Synopsis</h1>
        <p>{synopsis}</p>
      </div>
    </div>
  );
}

export default AnimeStats;
