// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import RecipeCard from './components/RecipeCard.vue'
import RecipeImage from './components/RecipeImage.vue'
import IngredientsList from './components/IngredientsList.vue'
import InstructionsList from './components/InstructionsList.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    app.component('RecipeCard', RecipeCard)
    app.component('RecipeImage', RecipeImage)
    app.component('IngredientsList', IngredientsList)
    app.component('InstructionsList', InstructionsList)
  }
}
