import React from 'react';
import styles from './AnimeStats.module.css';

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

  return (
    <div className={styles.animeStats}>
      {/* <div className="aired"></div> */}
      <div className={styles.stats_container}>
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
      </div>
      <div className={styles.genres}>
        {genres.map((genre, index) => (
          <h3 key={index}>{genre.name}</h3>
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
