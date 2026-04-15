import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './searchPage.module.css';

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

        <div className={styles.headerActions}>
          <button className={styles.recipeBoxBtn}>
            <span className={styles.checkIcon}>☑</span> Your Recipe Box
          </button>
          <img src="/avatar-placeholder.png" alt="Profile" className={styles.avatar} />
        </div>
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
          <img src="/empty-box-illustration.png" alt="No results" className={styles.emptyImage} />
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
      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
};

export default SearchPage;