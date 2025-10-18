<template>
  <div class="recipe-cards-container">
    <div class="recipe-cards">
      <a 
        v-for="recipe in recipes" 
        :key="recipe.filename"
        :href="withBase(recipe.path)"
        class="recipe-card"
      >
        <div class="recipe-image">
          <img 
            :src="recipe.image" 
            :alt="recipe.imageAlt || recipe.title"
            loading="lazy"
          />
        </div>
        <div class="recipe-content">
          <h3>{{ recipe.title }}</h3>
          <p class="serving-size" v-if="recipe.servings">{{ recipe.servings }}</p>
          <p class="description">{{ recipe.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { data as recipes } from '../recipes.data.js'
</script>

<style scoped>
.recipe-cards-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.recipe-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.recipe-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.recipe-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: var(--vp-c-bg-mute);
}

.recipe-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.recipe-card:hover .recipe-image img {
  transform: scale(1.05);
}

.recipe-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.recipe-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  line-height: 1.4;
}

.serving-size {
  margin: 0 0 0.75rem 0;
  font-size: 0.875rem;
  font-style: italic;
  color: var(--vp-c-text-2);
}

.description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  flex: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .recipe-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .recipe-cards-container {
    margin: 1rem auto;
    padding: 0 1rem;
  }
}

/* Dark mode adjustments */
.dark .recipe-card {
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dark .recipe-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}
</style>

