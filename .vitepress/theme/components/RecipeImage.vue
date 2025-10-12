<template>
  <div v-if="shouldShowImage" class="recipe-image-wrapper">
    <div class="recipe-image-container">
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="recipe-image"
        loading="lazy"
      />
      <div v-if="imageCaption" class="recipe-image-caption">
        {{ imageCaption }}
      </div>
      <div v-if="imageCredit" class="recipe-image-credit">
        {{ imageCredit }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  // Allow manual props to override frontmatter
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  },
  credit: {
    type: String,
    default: ''
  }
})

// Get frontmatter data
const { frontmatter } = useData()

// Compute values with fallback priority: props > frontmatter > defaults
const imageSrc = computed(() => {
  return props.src || frontmatter.value.image || ''
})

const imageAlt = computed(() => {
  return props.alt || frontmatter.value.imageAlt || frontmatter.value.title || 'Recipe image'
})

const imageCaption = computed(() => {
  return props.caption || frontmatter.value.imageCaption || ''
})

const imageCredit = computed(() => {
  return props.credit || frontmatter.value.imageCredit || ''
})

const shouldShowImage = computed(() => {
  return imageSrc.value && imageSrc.value.trim() !== ''
})
</script>

<style scoped>
.recipe-image-wrapper {
  margin: 2rem 0 3rem 0;
  width: 100%;
}

.recipe-image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-image-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.recipe-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 500px;
}

.recipe-image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 2rem 1.5rem 1rem 1.5rem;
  font-size: 1.1em;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.recipe-image-credit {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85em;
  backdrop-filter: blur(4px);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .recipe-image {
    max-height: 300px;
  }
  
  .recipe-image-caption {
    font-size: 1em;
    padding: 1.5rem 1rem 0.75rem 1rem;
  }
  
  .recipe-image-credit {
    font-size: 0.75em;
    padding: 0.25rem 0.5rem;
  }
}

/* Print styles */
@media print {
  .recipe-image-container {
    box-shadow: none;
    page-break-inside: avoid;
  }
  
  .recipe-image-credit {
    background: none;
    color: black;
    position: static;
    display: block;
    text-align: right;
    padding: 0.5rem 0;
  }
}
</style>

