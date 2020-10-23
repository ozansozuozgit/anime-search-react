import React from 'react';
import styles from './AnimeList.module.css';
import { useSelector } from 'react-redux';
import { selectAnimeList } from './features/anime/animeSlice';
import AnimeItem from './AnimeItem';
import Search from './Search';

function AnimeList() {
  const animeList = useSelector(selectAnimeList);
  
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.animeList_container}>
        {animeList.map((anime, index) => (
          <AnimeItem key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default AnimeList;
