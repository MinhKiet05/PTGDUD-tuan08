import React from 'react';
import styles from './modalLogin.module.css';
import bgImage from '../../../public/visily-image-72.png';
const ModalLogin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      {/* Container với kích thước cứng theo yêu cầu */}
      <div className={styles.modalContainer}>
        
        {/* Nút Close góc trên bên phải của Modal */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        {/* Nửa bên trái - Hình ảnh và Text */}
        <div className={styles.leftPanel} style={{ backgroundImage: `url(${bgImage})` }}>
          <h2 className={styles.quoteText}>
            "Embrace the art of cooking, where flavors come alive!"
          </h2>
        </div>

        {/* Nửa bên phải - Form Login */}
        <div className={styles.rightPanel}>
          <h1 className={styles.formTitle}>Login</h1>
          <p className={styles.formSubtitle}>Enter your email to log in.</p>

          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.emailInput} 
            />
          </div>

          <button className={styles.continueBtn}>Continue</button>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <p className={styles.termsText}>
            By continuing, you agree to the updated <strong>Terms of Sale</strong>, <strong>Terms of Service</strong>, and <strong>Privacy Policy</strong>.
          </p>

          <div className={styles.socialGroup}>
            <button className={styles.socialBtn}>
              <span className={styles.socialIconGoogle}>G</span> Continue with Google
            </button>
            <button className={styles.socialBtn}>
              <span className={styles.socialIconFb}>f</span> Continue with Facebook
            </button>
            <button className={styles.socialBtn}>
              <span className={styles.socialIconApple}></span> Continue with Apple
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModalLogin;