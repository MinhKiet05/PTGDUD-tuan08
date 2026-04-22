import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import styles from './searchPage.module.css';
import Footer from '../../components/footer/Footer'; // Nhớ check lại đường dẫn này
import Card from '../../components/card/Card'; // Import component Card bạn đã tạo ở bài trước
import Header from '../../components/header/Header';
// Dữ liệu giả lập cho 9 thẻ kết quả
const mockSaladRecipes = [
  { id: 1, title: 'Cucumber salad, cherry tomatoes', time: '32 minutes',image: '/visily-image-121.webp'},
  { id: 2, title: 'Italian-style tomato salad', time: '32 minutes', image: '/visily-image-122.webp' },
  { id: 3, title: 'Potato Salad', time: '32 minutes', image: '/visily-image-123.webp' },
  { id: 4, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: '/visily-image-121.webp' },
  { id: 5, title: 'Five-color salad', time: '32 minutes', image: '/visily-image-122.webp' },
  { id: 6, title: 'Corn Salad', time: '32 minutes', image: '/visily-image-123.webp' },
  { id: 7, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: '/visily-image-121.webp' },
  { id: 8, title: 'Lotus delight salad', time: '32 minutes', image: '/visily-image-122.webp' },
  { id: 9, title: 'Avocado Salad', time: '32 minutes', image: '/visily-image-123.webp' },
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('name') || ''; 
  const navigate = useNavigate();

  const [localSearch, setLocalSearch] = useState(query);

  useEffect(() => {
    setLocalSearch(query);
  }, [query]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && localSearch.trim()) {
      navigate(`/search?name=${encodeURIComponent(localSearch)}`);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Header></Header>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        
        {/* SIDEBAR FILTER (Giữ nguyên cấu trúc tuyệt đối absolute như cũ) */}
        <aside className={styles.container}>
          <h3 className={styles.filterTitle}>
            <span className={styles.menuIcon}>☰</span> FILTERS
          </h3>

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

        {/* RESULTS SECTION (Thay thế cho emptyState cũ) */}
        <div className={styles.resultsContainer}>
          {/* Header của phần kết quả */}
          <div className={styles.resultsHeader}>
            <h1 className={styles.resultsTitle}>Salad (32)</h1>
            <select className={styles.sortSelect}>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Grid hiển thị danh sách Card */}
          <div className={styles.recipeGrid}>
            {mockSaladRecipes.map((recipe) => (
              <Card 
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                time={recipe.time}
              />
            ))}
          </div>

          {/* Phân trang */}
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>4</button>
            <span className={styles.pageDots}>...</span>
            <button className={styles.pageBtn}>10</button>
            <button className={styles.pageBtn}>11</button>
            <button className={styles.pageArrow}>&gt;</button>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default SearchPage;