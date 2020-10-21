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
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <h1>Hello</h1>
        </div>
        <div className={styles.flip_card_back}>
          <h1>Bye</h1>
        </div>
      </div>
    </div>
  );
}

export default AnimeItem;
