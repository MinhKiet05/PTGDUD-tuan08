import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './searchPage.module.css';
import noResultImg from '../../../public/visily-image-105.webp'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
const SearchPage = () => {
  // Lấy dữ liệu từ URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get('name') || ''; 
  const navigate = useNavigate();

  // State cho thanh search trên chính trang SearchPage
  const [localSearch, setLocalSearch] = useState(query);

  // Cập nhật lại thanh search nếu URL thay đổi
  useEffect(() => {
    setLocalSearch(query);
  }, [query]);

  // Cho phép tìm kiếm tiếp từ trang này
  const handleSearch = (e) => {
    if (e.key === 'Enter' && localSearch.trim()) {
      navigate(`/search?name=${encodeURIComponent(localSearch)}`);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logoGroup}>
          <span className={styles.logoIcon} onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            Chefify
          </span>
        </div>
        
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input 
            type="text" 
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search recipes..."
          />
        </div>

        <ul className={styles.navLinks}>
          <li>What to cook</li>
          <li>Recipes</li>
          <li>Ingredients</li>
          <li>Occasions</li>
          <li>About Us</li>
        </ul>

        <Link to="/recipe-box">
          <div className={styles.headerActions}>
            <button className={styles.recipeBoxBtn}>
              <span className={styles.checkIcon}>☑</span> Your Recipe Box
            </button>
            <img src="/avatar-placeholder.png" alt="Profile" className={styles.avatar} />
          </div>
        </Link>
      </header>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        
        {/* SIDEBAR FILTER */}
        <aside className={styles.container}>
          <h3 className={styles.filterTitle}>
            <span className={styles.menuIcon}>☰</span> FILTERS
          </h3>

          {/* Type Filter */}
          <div className={styles.filterSection}>
            <div className={styles.sectionHeader}>
              <h4>Type</h4>
              <span>^</span>
            </div>
            <div className={styles.checkboxGrid}>
              <label><input type="checkbox" /> Pan-fried</label>
              <label><input type="checkbox" /> Stir-fried</label>
              <label><input type="checkbox" defaultChecked /> Grilled</label>
              <label><input type="checkbox" defaultChecked /> Roasted</label>
              <label><input type="checkbox" /> Sauteed</label>
              <label><input type="checkbox" /> Baked</label>
              <label><input type="checkbox" /> Steamed</label>
              <label><input type="checkbox" /> Stewed</label>
            </div>
          </div>

          {/* Time Filter */}
          <div className={styles.filterSection}>
            <div className={styles.sectionHeader}>
              <h4>Time</h4>
              <span>^</span>
            </div>
            <div className={styles.timeSlider}>
              <div className={styles.timeLabels}>
                <span>30 minutes</span>
                <span>50 minutes</span>
              </div>
              <input type="range" min="10" max="60" className={styles.slider} />
            </div>
          </div>

          {/* Rating Filter */}
          <div className={styles.filterSection}>
            <div className={styles.sectionHeader}>
              <h4>Rating</h4>
              <span>^</span>
            </div>
            <div className={styles.ratingList}>
              {[5, 4, 3, 2, 1].map((stars, index) => (
                <label key={index} className={styles.ratingRow}>
                  <input type="checkbox" defaultChecked={stars <= 3} />
                  <span className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < stars ? styles.starFilled : styles.starEmpty}>★</span>
                    ))}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button className={styles.applyBtn}>Apply</button>
        </aside>

        {/* EMPTY STATE RESULTS - HIỂN THỊ TỪ KHÓA ĐỘNG */}
        <div className={styles.emptyState}>
          <h2>
            {query 
              ? `Sorry, no results were found for “${query}”` 
              : "Please enter a search term"}
          </h2>
          <img src={noResultImg} alt="No results" className={styles.emptyImage} />
          <p>We have all your Independence Day sweets covered.</p>
          
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Sweet Cake</span>
            <span className={styles.tag}>Black Cake</span>
            <span className={styles.tag}>Pozole Verde</span>
            <span className={styles.tag}>Healthy food</span>
          </div>
        </div>

      </main>

      {/* FOOTER */}
              <Footer></Footer>
    </div>
  );
};

export default SearchPage;