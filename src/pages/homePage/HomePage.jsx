import React, { useState } from 'react';
import styles from './HomePage.module.css';
import ModalHomePage from '../../components/modalHomePage/ModalHomePage';
import ModalLogin from '../../components/modalLogin/ModalLogin';
const HomePage = () => {
    // Mặc định bật modal khi mới vào trang (giống ảnh)
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.homeContainer}>
            {/* Navigation Bar */}
            <nav className={styles.navbar}>
                <div className={styles.logoGroup}>
                    <span className={styles.logoIcon}>Chefify</span>
                </div>

                <div className={styles.searchBar}>
                    <input type="text" placeholder="What would you like to cook?" />
                </div>

                <ul className={styles.navLinks}>
                    <li>What to cook</li>
                    <li>Recipes</li>
                    <li>Ingredients</li>
                    <li>Occasions</li>
                    <li>About Us</li>
                </ul>

                <div className={styles.authButtons}>
                    <button
                        className={styles.loginBtn}
                        onClick={() => setIsLoginOpen(true)}
                    >
                        Login
                    </button>
                    <button className={styles.subscribeBtn}>Subscribe</button>
                </div>
            </nav>

            {/* Hero Section (Background) */}
            <main className={styles.heroSection}>
                {/* Nội dung dummy của trang chủ ở phía sau */}
                <div className={styles.recipeCard}>
                    <h3>Salad Caprese</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum voluptates sequi magnam illum placeat tempora voluptas maxime non odit, saepe ex eligendi consequuntur? Enim ullam eligendi placeat sed porro?</p>
                    <button className={styles.viewRecipeBtn}>View recipe</button>
                </div>
            </main>

            {/* Gọi Modal */}
            <ModalHomePage isOpen={isModalOpen} onClose={handleCloseModal} />
            <ModalLogin
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </div>
    );
};

export default HomePage;