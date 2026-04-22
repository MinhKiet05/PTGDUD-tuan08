import React, { useState } from 'react';
import styles from './HomePage.module.css';
import ModalHomePage from '../../components/modalHomePage/ModalHomePage';
import ModalLogin from '../../components/modalLogin/ModalLogin';
import Header from '../../components/header/Header'; // <-- Import Header
import FeaturedSection from '../../components/featuredSection/FeaturedSection';
const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.homeContainer}>
            {/* Truyền hàm mở Login Modal vào */}
            <Header onLoginClick={() => setIsLoginOpen(true)} />

            <main className={styles.heroSection}>
                <div className={styles.recipeCard}>
                    <h3>Salad Caprese</h3>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <button className={styles.viewRecipeBtn}>View recipe</button>
                </div>
            </main>
            <FeaturedSection title="This Summer Recipes" des ="We have all your Independence Day sweets covered."/>
            <FeaturedSection title="Recipes With Videos" des ="Cooking Up Culinary Creations with Step-by-Step Videos"/>
            <ModalHomePage isOpen={isModalOpen} onClose={handleCloseModal} />
            <ModalLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default HomePage;