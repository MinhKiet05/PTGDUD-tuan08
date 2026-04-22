import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onLoginClick }) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('name') || ''; 
    const [searchTerm, setSearchTerm] = useState(query);
    const navigate = useNavigate();

    // Cập nhật lại thanh search nếu URL thay đổi
    useEffect(() => {
        setSearchTerm(query);
    }, [query]);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoGroup}>
                <span className={styles.logoIcon} onClick={() => navigate('/')}>
                    Chefify
                </span>
            </div>

            <div className={styles.searchBar}>
                <span className={styles.searchIcon}>🔍</span>
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

            {/* Render thay đổi tùy thuộc vào prop onLoginClick */}
            {onLoginClick ? (
                <div className={styles.authButtons}>
                    <button className={styles.loginBtn} onClick={onLoginClick}>
                        Login
                    </button>
                    
                    <Link to="subscribe"><button className={styles.subscribeBtn}>Subscribe</button></Link>
                </div>
            ) : (
                <Link to="/recipe-box" style={{ textDecoration: 'none' }}>
                    <div className={styles.headerActions}>
                        <button className={styles.recipeBoxBtn}>
                            <span className={styles.checkIcon}>☑</span> Your Recipe Box
                        </button>
                        <img src="/visily-avatar-42.webp" alt="Profile" className={styles.avatar} />
                    </div>
                </Link>
            )}
        </header>
    );
};

export default Header;