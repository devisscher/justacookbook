import { createContentLoader } from 'vitepress'
import path from 'path'
import { fileURLToPath } from 'url'
import { loadRecipes } from '../recipeLoader.mts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  // This will be called at build time
  load() {
    const recipesDir = path.resolve(__dirname, '../../recipes')
    const recipes = loadRecipes(recipesDir)
    
    return recipes
  }
}

