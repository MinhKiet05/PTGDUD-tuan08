import React from 'react';
import styles from './Subscribe.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Subscribe = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Tái sử dụng Header */}
            <Header />

            <main className={styles.mainContent}>
                {/* Phần Hero: Giới thiệu gói đăng ký */}
                <section className={styles.heroSection}>


                    <div className={styles.subscribeDetails}>
                        <h1 className={styles.mainTitle}>This recipe is exclusively available to subscribers</h1>
                        <p className={styles.subtitle}>Join now to access effortless, hassle-free recipes</p>

                        <ul className={styles.featureList}>
                            <li><span className={styles.checkIcon}>✓</span> 20,000+ recipes to suit all tastes and skill levels</li>
                            <li><span className={styles.checkIcon}>✓</span> Filter for diets, cook times and more</li>
                            <li><span className={styles.checkIcon}>✓</span> Personal Recipe Box for favorites</li>
                            <li><span className={styles.checkIcon}>✓</span> Gain exclusive access to our subscriber-only mobile app</li>
                        </ul>

                        <div className={styles.pricingCardPrimary}>
                            <div className={styles.priceHighlight}>0.25USD/Week</div>
                            <div className={styles.priceSubtext}>Billed as $1 every 4 weeks for the first year</div>
                            <button className={styles.subscribeBtn}>SUBSCRIBE NOW</button>
                            <div className={styles.cancelText}>Cancel or Pause anytime</div>
                        </div>
                    </div>

                    <div className={styles.imageCol}>
                        {/* Sử dụng ảnh món ăn từ mockup */}
                        <img
                            src="https://vanhoarestaurant.com/wp-content/uploads/2024/04/hinh-anh-nha-hang-van-van-hoa-restaurant-1.jpg"
                            alt="Delicious food"
                            className={styles.heroImage}
                        />
                    </div>

                </section>

                {/* Phần: An All Access subscription includes */}
                <section className={styles.allAccessSection}>
                    <h2 className={styles.sectionTitle}>An All Access subscription includes</h2>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceItem}>
                            <h3 className={styles.serviceName}>Cooking</h3>
                            <p>Enjoy recipes, advice and inspiration for any occasion.</p>
                        </div>
                        <div className={styles.serviceItem}>
                            <h3 className={styles.serviceName}>Wirecutter</h3>
                            <p>Explore independent reviews for thousands of products.</p>
                        </div>
                        <div className={styles.serviceItem}>
                            <h3 className={styles.serviceName}>Games</h3>
                            <p>Unwind with Spelling Bee, Wordle, The Crossword</p>
                        </div>
                        <div className={styles.serviceItem}>
                            <h3 className={styles.serviceName}>The Athletic</h3>
                            <p>Discover in-depth, personalized sports journalism.</p>
                        </div>
                    </div>
                </section>

                {/* Phần: Subscribe to Chefify Cooking only */}
                <section className={styles.cookingOnlySection}>
                    <img src="\visily-group-24.webp" alt="" />
                    <h2 className={styles.sectionTitle}>Subscribe to Chefify Cooking only</h2>
                    <p className={styles.cookingOnlyDesc}>
                        Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
                    </p>

                    <div className={styles.cookingPricingGrid}>
                        <div className={styles.pricingOption}>
                            <div className={styles.optionPrice}>$2/month</div>
                            <div className={styles.optionSub}>(Billed every 4 weeks)</div>
                            <button className={styles.outlineBtn}>Subscribe Now</button>
                        </div>
                        <div className={styles.pricingOption}>
                            <div className={styles.optionPrice}>$20/year</div>
                            <div className={styles.optionSub}>(Billed one annually)</div>
                            <button className={styles.outlineBtn}>Subscribe Now</button>
                        </div>
                    </div>
                    <div className={styles.cancelTextDark}>Cancel or Pause anytime</div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Subscribe;