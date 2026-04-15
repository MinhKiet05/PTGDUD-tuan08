import React from 'react';
import styles from './modalHomePage.module.css';
import img from '../../../public/visily-image-93.png'
const ModalHomePage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Nút Close */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Nội dung Modal */}
        <h2 className={styles.modalTitle}>Discover Chefify</h2>
        <p className={styles.modalSubtitle}>
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        {/* Khu vực chứa ảnh minh họa (Grid/Collage) */}
        <div className={styles.imageGallery}>
           <img 
              src={img}
              alt="Food Gallery" 
              className={styles.galleryImg} 
           />
        </div>

        {/* Dots điều hướng */}
        <div className={styles.paginationDots}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

        {/* Cụm nút hành động */}
        <div className={styles.actionButtons}>
          <button className={styles.nextBtn}>Next</button>
          <button className={styles.skipBtn} onClick={onClose}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default ModalHomePage;