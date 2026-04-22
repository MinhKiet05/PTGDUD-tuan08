import React from 'react';
import styles from './recipeBoxPage.module.css';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
const mockRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', image: '/visily-image-121.webp' },
  { id: 2, title: 'Vegetable and shrimp spaghetti', time: '15 minutes', image: '/visily-image-122.webp' },
  { id: 3, title: 'Lotus delight salad', time: '20 minutes', image: '/visily-image-123.webp' },
  { id: 4, title: 'Snack cakes', time: '21 minutes', image: '/visily-image-121.webp' },
  { id: 5, title: 'Salad with cabbage and shrimp', time: '32 minutes', image: '/visily-image-121.webp'},
  { id: 6, title: 'Bean, shrimp, and potato salad', time: '32 minutes', image: '/visily-image-122.webp' },
  { id: 7, title: 'Sunny-side up fried eggs', time: '32 minutes', image: '/visily-image-123.webp' },
  { id: 8, title: 'Lotus delight salad', time: '32 minutes', image: '/visily-image-121.webp' },
];

const RecipeBoxPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header/>
      {/* MAIN CONTENT */}
      <main className={styles.mainContainer}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          Home <span>&gt;</span> <span className={styles.currentCrumb}>Your Recipe Box</span>
        </div>

        {/* Profile Section */}
        <section className={styles.profileSection}>
          <img 
            src="/visily-avatar-42.webp" 
            alt="Emma Gonzalez" 
            className={styles.profileAvatar} 
          />
          <div className={styles.profileInfo}>
            <h1 className={styles.profileName}>Emma Gonzalez's Recipe Box</h1>
            <p className={styles.profileBio}>
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
            </p>
            <div className={styles.profileActions}>
              <span className={styles.subCount}>6.5k Subscribes</span>
              <button className={styles.shareBtn}>Share ↗</button>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <button className={`${styles.tabBtn} ${styles.activeTab}`}>Saved Recipes</button>
          <button className={styles.tabBtn}>Folders</button>
          <button className={styles.tabBtn}>Recipes by Genevieve</button>
        </div>

        {/* Recipe Grid Component */}
        <div className={styles.recipeGrid}>
          {mockRecipes.map((recipe) => (
            <Card 
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <button className={styles.pageArrow}>&lt;</button>
          <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>4</button>
          <span className={styles.pageDots}>...</span>
          <button className={styles.pageBtn}>10</button>
          <button className={styles.pageBtn}>11</button>
          <button className={styles.pageArrow}>&gt;</button>
        </div>
      </main>

      {/* FOOTER */}
      <Footer></Footer>
    </div>
  );
};

export default RecipeBoxPage;