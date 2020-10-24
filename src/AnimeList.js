import React from 'react';
import styles from './AnimeList.module.css';
import { useSelector } from 'react-redux';
import { selectAnimeList } from './features/anime/animeSlice';
import AnimeItem from './AnimeItem';
import Search from './Search';
import { motion } from 'framer-motion';

function AnimeList() {
  const animeList = useSelector(selectAnimeList);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
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
      className={styles.container}
    >
      <Search />
      <div className={styles.animeList_container}>
        {animeList.map((anime) => (
          <AnimeItem key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </motion.div>
  );
}

export default AnimeList;
