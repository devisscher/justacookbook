<template>
  <div class="instructions-list">
    <h2>{{ title }}</h2>
    <ol>
      <li v-for="(step, index) in steps" :key="index">
        {{ step }}
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Instructions'
  },
  steps: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.instructions-list {
  margin: 2rem 0;
}

.instructions-list h2 {
  font-family: var(--recipe-font-serif);
  color: var(--vp-c-brand-1);
  margin-bottom: 1rem;
}

.instructions-list ol {
  counter-reset: recipe-step;
  list-style: none;
  padding: 0;
}

.instructions-list li {
  counter-increment: recipe-step;
  position: relative;
  padding: 1.25rem 1.25rem 1.25rem 4rem;
  margin-bottom: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border-left: 3px solid var(--vp-c-brand-1);
  transition: all 0.2s ease;
  line-height: 1.7;
}

.instructions-list li:hover {
  border-left-color: var(--recipe-accent);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.instructions-list li::before {
  content: counter(recipe-step);
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  background: var(--vp-c-brand-1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1em;
  line-height: 1;
  flex-shrink: 0;
}

.instructions-list li:hover::before {
  background: var(--recipe-accent);
  transform: translateY(-50%) scale(1.1);
}
</style>

