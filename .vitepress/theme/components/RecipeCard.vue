<template>
  <div class="recipe-card">
    <h3>
      <a :href="link">{{ title }}</a>
    </h3>
    <p v-if="servings" class="servings">{{ servings }}</p>
    <p v-if="description" class="description">{{ description }}</p>
    <div v-if="tags" class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  servings: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.recipe-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.recipe-card h3 {
  margin-top: 0;
  font-size: 1.25rem;
}

.recipe-card h3 a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s;
}

.recipe-card h3 a:hover {
  color: var(--vp-c-brand-2);
}

.servings {
  font-style: italic;
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin: 0.25rem 0;
}

.description {
  flex-grow: 1;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
}
</style>

