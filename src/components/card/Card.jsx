import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, time }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={styles.cardContainer}>
      {/* Phần Hình Ảnh */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>

      {/* Phần Nội Dung */}
      <div className={styles.cardContent}>
        <div className={styles.titleRow}>
          <h2 className={styles.cardTitle}>{title}</h2>
          
          {/* Nút Bookmark */}
          <button 
            className={`${styles.bookmarkBtn} ${isBookmarked ? styles.active : ''}`}
            onClick={toggleBookmark}
            aria-label="Save recipe"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill={isBookmarked ? "currentColor" : "none"} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.bookmarkIcon}
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>

        {/* Tag Thời Gian */}
        <div className={styles.timeTag}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default Card;