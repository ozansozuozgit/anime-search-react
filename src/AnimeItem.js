import React from 'react';
import styles from './AnimeItem.module.css';
import moment from 'moment';

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
  let startDate = moment(start_date).format('MM/DD/YYYY');
  let endDate = moment(end_date).format('MM/DD/YYYY');

  return (
    <div className={styles.card}>
      <div
        className={styles.card_image}
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      ></div>
      <div className={styles.card_text}>
        <span className={styles.date}>{`${
          startDate !== 'Invalid date' ? startDate : start_date
        } - ${endDate !== 'Invalid date' ? endDate : end_date}`}</span>
        <h2>{title}</h2>
      </div>
      <div className={styles.card_stats}>
        <div className={styles.stat}>
          <div className={styles.value}>{score}</div>
          <div className={styles.type}>Score</div>
        </div>
        <div className={`${styles.stat} ${styles.border}`}>
          <div className={styles.value}>{episodes}</div>
          <div className={styles.type}>Episodes</div>
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
