// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import RecipeCard from './components/RecipeCard.vue'
import RecipeCards from './components/RecipeCards.vue'
import RecipeImage from './components/RecipeImage.vue'
import IngredientsList from './components/IngredientsList.vue'
import InstructionsList from './components/InstructionsList.vue'
import PWAInstallPrompt from './components/PWAInstallPrompt.vue'
import IOSInstallPrompt from './components/IOSInstallPrompt.vue'
import FooterInstallButton from './components/FooterInstallButton.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => [h(PWAInstallPrompt), h(IOSInstallPrompt)]
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    app.component('RecipeCard', RecipeCard)
    app.component('RecipeCards', RecipeCards)
    app.component('RecipeImage', RecipeImage)
    app.component('IngredientsList', IngredientsList)
    app.component('InstructionsList', InstructionsList)
    app.component('FooterInstallButton', FooterInstallButton)
  }
}
