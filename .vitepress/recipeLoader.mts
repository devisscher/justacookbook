import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Recipe {
  title: string
  path: string
  filename: string
  description?: string
  image?: string
  imageAlt?: string
  servings?: string
}

/**
 * Scan the recipes directory and return all recipes with their metadata
 */
export function loadRecipes(recipesDir: string): Recipe[] {
  const recipes: Recipe[] = []
  
  // Read all files in the recipes directory
  const files = fs.readdirSync(recipesDir)
  
  for (const file of files) {
    // Skip index.md and non-markdown files
    if (file === 'index.md' || !file.endsWith('.md')) {
      continue
    }
    
    const fullPath = path.join(recipesDir, file)
    const content = fs.readFileSync(fullPath, 'utf-8')
    
    // Parse frontmatter
    const { data } = matter(content)
    
    // Extract first paragraph after the RecipeImage component as description
    const contentLines = content.split('\n')
    let description = ''
    let foundServings = ''
    
    for (let i = 0; i < contentLines.length; i++) {
      const line = contentLines[i].trim()
      
      // Look for serving size (italicized text)
      if (line.startsWith('*') && line.endsWith('*') && line.includes('Serves')) {
        foundServings = line.replace(/^\*/, '').replace(/\*$/, '')
      }
    }
    
    const filename = file.replace('.md', '')
    
    recipes.push({
      title: data.title || filename,
      path: `/recipes/${filename}`,
      filename,
      description: description || `A delicious recipe for ${data.title || filename}`,
      image: data.image,
      imageAlt: data.imageAlt,
      servings: foundServings
    })
  }
  
  // Sort recipes alphabetically by title
  recipes.sort((a, b) => a.title.localeCompare(b.title))
  
  return recipes
}

/**
 * Generate sidebar items for VitePress config
 */
export function generateSidebar(recipes: Recipe[]) {
  return [
    {
      text: 'Recipes',
      items: [
        { text: 'All Recipes', link: '/recipes/' },
        ...recipes.map(recipe => ({
          text: recipe.title,
          link: recipe.path
        }))
      ]
    }
  ]
}

/**
 * Generate the recipes index page content
 */
export function generateRecipesIndex(recipes: Recipe[]): string {
  let content = `# Recipes

Welcome to our collection of delicious recipes! Browse through our carefully curated selection of dishes.

## All Recipes

`
  
  for (const recipe of recipes) {
    content += `### [${recipe.title}](./#{recipe.filename})\n`
    if (recipe.servings) {
      content += `*${recipe.servings}*\n\n`
    }
    content += `${recipe.description}\n\n`
  }
  
  content += `---

*Tired of scrolling, popups and ads? Just pure recipes, that's all.*\n`
  
  return content
}

