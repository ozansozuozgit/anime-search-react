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
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }));
  }, []);

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  };

  return (
    <div className={styles.animeStats}>
      <motion.div
        className={styles.stats_container}
        initial={{ scale: 2 }}
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
      <div className={styles.genres}>
        {genres.map((genre, index) => (
          <motion.h3 custom={index} animate={controls} key={index}>
            {genre.name}
          </motion.h3>
        ))}
      </div>
      <div className={styles.synopsis_container}>
        <h1>Synopsis</h1>
        <p>{synopsis}</p>
      </div>
    </div>
  );
}

export default AnimeStats;
