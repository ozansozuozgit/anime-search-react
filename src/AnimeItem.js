import React from 'react';
import styles from './AnimeItem.module.css';

function AnimeItem({ anime }) {
  const {
    rank,
    title,
    image_url,
    episodes,
    start_date,
    end_date,
    members,
    score,
    mal_id,
  } = anime;

  let formatMembers = String(members).replace(/(.)(?=(\d{3})+$)/g, '$1,');
  
  return (
    <div className={styles.card}>
      <div
        className={styles.card_image}
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      ></div>
      <div className={styles.card_text}>
        <span className={styles.date}>{`${start_date} - ${end_date}`}</span>
        <h2>{title}</h2>
        {/* <p>some shit</p> */}
      </div>
      <div className={styles.card_stats}>
        <div className={styles.stat}>
          <div className={styles.value}>{rank}</div>
          <div className={styles.type}>Rank</div>
        </div>
        <div className={`${styles.stat} ${styles.border}`}>
          <div className={styles.value}>{score}</div>
          <div className={styles.type}>Score</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>{formatMembers}</div>
          <div className={styles.type}>Members</div>
        </div>
      </div>
    </div>
  );
}

export default AnimeItem;
