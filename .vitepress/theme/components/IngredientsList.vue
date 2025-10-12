<template>
  <div class="ingredients-list">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Ingredients'
  },
  ingredients: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.ingredients-list {
  margin: 2rem 0;
}

.ingredients-list h2 {
  font-family: var(--recipe-font-serif);
  color: var(--vp-c-brand-1);
  margin-bottom: 1rem;
}

.ingredients-list ul {
  list-style: none;
  padding: 0;
}

.ingredients-list li {
  position: relative;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  margin-bottom: 0.5rem;
  background: var(--recipe-warm-bg);
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.ingredients-list li:hover {
  background: var(--recipe-cream);
  transform: translateX(4px);
}

.ingredients-list li::before {
  content: '✓';
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--recipe-green);
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s;
}

.ingredients-list li:hover::before {
  opacity: 1;
}
</style>

