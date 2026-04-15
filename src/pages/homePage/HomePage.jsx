import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import ModalHomePage from '../../components/modalHomePage/ModalHomePage';
import ModalLogin from '../../components/modalLogin/ModalLogin';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    
    // Thêm state để quản lý ô tìm kiếm
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Hàm xử lý khi nhấn Enter
    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            // Chuyển hướng và truyền từ khóa lên URL
            navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className={styles.homeContainer}>
            {/* Navigation Bar */}
            <nav className={styles.navbar}>
                <div className={styles.logoGroup}>
                    <span className={styles.logoIcon}>Chefify</span>
                </div>

                <div className={styles.searchBar}>
                    <input 
                        type="text" 
                        placeholder="What would you like to cook?" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                    />
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