import React from 'react';
import Card from '../card/Card'; 
import styles from './FeaturedSection.module.css';

// Dữ liệu mẫu (mock data) cho các thẻ Card
const featuredRecipes = [
  { id: 1, title: 'Spinach and cheese pasta', time: '20 minutes', image: '/visily-image-121.webp' },
  { id: 2, title: 'Fancy Glazed Donuts', time: '40 minutes', image: '/visily-image-122.webp' },
  { id: 3, title: 'Mighty Cheesy Breakfast Burger', time: '15 minutes', image: '/visily-image-123.webp' },
  { id: 4, title: 'Caramel Strawberry Milkshake', time: '10 minutes', image: '/visily-image-121.webp' },
];

const FeaturedSection = ({ title, des }) => {
  return (
    <section className={styles.hpFeature_wrapper}>
      <div className={styles.hpFeature_header}>
        <h2 className={styles.hpFeature_title}>{title}</h2>
      </div>
      
      <p className={styles.hpFeature_subtitle}>
        {des}
      </p>

      <div className={styles.hpFeature_grid}>
        {featuredRecipes.map((recipe) => (
          <Card 
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;