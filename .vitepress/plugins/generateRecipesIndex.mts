import fs from 'fs'
import path from 'path'
import { loadRecipes } from '../recipeLoader.mts'

/**
 * VitePress plugin to automatically generate the recipes index page
 */
export function generateRecipesIndexPlugin(recipesDir: string) {
  return {
    name: 'generate-recipes-index',
    buildStart() {
      // Load all recipes
      const recipes = loadRecipes(recipesDir)
      
      // Generate the index content
      let content = `# Recipes

Welcome to our collection of delicious recipes! Browse through our carefully curated selection of dishes.

## All Recipes

`
      
      for (const recipe of recipes) {
        content += `### [${recipe.title}](./${recipe.filename})\n`
        if (recipe.servings) {
          content += `*${recipe.servings}*\n\n`
        }
        
        // Try to extract a brief description from the recipe
        const recipeFile = path.join(recipesDir, `${recipe.filename}.md`)
        const recipeContent = fs.readFileSync(recipeFile, 'utf-8')
        
        // Extract the first paragraph after the heading sections
        const lines = recipeContent.split('\n')
        let description = ''
        let inFrontmatter = false
        let foundServings = false
        
        // Look for content between serving size and Ingredients section
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim()
          
          // Track frontmatter
          if (line === '---') {
            if (!inFrontmatter) {
              inFrontmatter = true
              continue
            } else {
              inFrontmatter = false
              continue
            }
          }
          
          // Skip frontmatter content
          if (inFrontmatter) {
            continue
          }
          
          // We want content after the *Serves* line
          if (line.startsWith('*Serves')) {
            foundServings = true
            continue
          }
          
          // Stop at Ingredients section
          if (line.startsWith('## Ingredients')) {
            break
          }
          
          // Get the first non-empty paragraph after servings
          if (foundServings && line && !line.startsWith('#') && !line.startsWith('<') && !line.startsWith('*') && !line.includes('title:')) {
            description = line
            break
          }
        }
        
        // Fallback description based on recipe title
        if (!description) {
          if (recipe.title.includes('Soup') || recipe.title.includes('Lohikeitto')) {
            description = `A hearty and comforting soup that's perfect for cold days.`
          } else if (recipe.title.includes('Pasta')) {
            description = `A simple and delicious pasta dish that comes together in one pot for easy cleanup.`
          } else if (recipe.title.includes('Leek')) {
            description = `A rich and savory dish combining vegetables with bold flavors.`
          } else {
            description = `A delicious recipe that's sure to become a favorite.`
          }
        }
        
        content += `${description}\n\n`
      }
      
      content += `---

*Tired of scrolling, popups and ads? Just pure recipes, that's all.*\n`
      
      // Write the index file
      const indexPath = path.join(recipesDir, 'index.md')
      fs.writeFileSync(indexPath, content, 'utf-8')
      
      console.log(`✓ Generated recipes index with ${recipes.length} recipes`)
    }
  }
}

