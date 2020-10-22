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
  } = anime;

  return (
    <div className={styles.card}>
      <div
        className={styles.card_image}
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      ></div>
      <div className={styles.card_text}>
        <span className={styles.date}>4days ago</span>
        <h2>Post One</h2>
        <p>some shit</p>
      </div>
      <div className={styles.card_stats}>
        <div className={styles.stat}>
          <div className={styles.value}>4m</div>
          <div className={styles.type}>read</div>
        </div>
        <div className={`${styles.stat} ${styles.border}`}>
          <div className={styles.value}>5123</div>
          <div className={styles.type}>views</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>5123</div>
          <div className={styles.type}>read</div>
        </div>
      </div>
    </div>
  );
}

export default AnimeItem;
