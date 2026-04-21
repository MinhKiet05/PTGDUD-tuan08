import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <div><footer className={styles.footer}>
            <div className={styles.footerCol}>
              <h4>About Us</h4>
              <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
              <div className={styles.subscribeBox}>
                <input type="text" placeholder="Enter your email" />
                <button>Send</button>
              </div>
              <div className={styles.footerBranding}>
                <span className={styles.footerLogo}>Chefify</span>
                <span className={styles.copyright}>2023 Chefify Company</span>
                <span className={styles.terms}>Terms of Service | Privacy Policy</span>
              </div>
            </div>
    
            <div className={styles.footerColLinks}>
              <h4>Learn More</h4>
              <ul>
                <li>Our Cooks</li>
                <li>See Our Features</li>
                <li>FAQ</li>
              </ul>
              <h4 className={styles.shopTitle}>Shop</h4>
              <ul>
                <li>Gift Subscription</li>
                <li>Send Us Feedback</li>
              </ul>
            </div>
    
            <div className={styles.footerColLinks}>
              <h4>Recipes</h4>
              <ul>
                <li>What to Cook This Week</li>
                <li>Pasta</li>
                <li>Dinner</li>
                <li>Healthy</li>
                <li>Vegetarian</li>
                <li>Vegan</li>
                <li>Christmas</li>
              </ul>
            </div>
          </footer></div>
  )
}
