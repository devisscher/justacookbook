# Recipe Automation

This cookbook now automatically generates the recipe navigation and index page! 🎉

## How It Works

The recipe automation system scans the `recipes/` directory and automatically:

1. **Generates the sidebar navigation** with all recipes alphabetically sorted
2. **Creates the recipes index page** (`recipes/index.md`) with descriptions
3. **Powers the RecipeCards component** that displays beautiful recipe cards anywhere in the site

## Adding a New Recipe

To add a new recipe, simply:

1. Create a new `.md` file in the `recipes/` folder (e.g., `recipes/chocolate_cake.md`)
2. Follow the recipe template format (see below)
3. Start the dev server or build the site

The recipe will automatically appear in:
- The sidebar navigation
- The recipes index page

## Recipe Template Format

Every recipe should follow this structure:

```markdown
---
title: Recipe Name
image: https://images.unsplash.com/photo-xxxxx?w=1200
imageAlt: Description of the image
imageCaption: Short caption for the image
imageCredit: Photo by Unsplash
---

# Recipe Name

<RecipeImage />

*Serves X people*

A brief description of the recipe. This will be used in the recipes index page.

## Ingredients

- Ingredient 1
- Ingredient 2

## Instructions

1. **Step name**: Step description

## Tips

- Tip 1
- Tip 2
```

### Important Notes:

- **Frontmatter is required** with at least a `title` field
- **Description paragraph** should come after the `*Serves*` line and before `## Ingredients`
- The description will be automatically extracted for the recipes index page
- If no description is found, a fallback description will be generated

## Technical Details

### Files Involved

- `.vitepress/recipeLoader.mts` - Scans recipes and extracts metadata
- `.vitepress/plugins/generateRecipesIndex.mts` - Generates the index page
- `.vitepress/config.mts` - Uses the loader to build navigation

### How Recipes Are Discovered

1. The `recipeLoader.mts` reads all `.md` files in `recipes/` (except `index.md`)
2. It parses the frontmatter using `gray-matter` to extract metadata
3. It sorts recipes alphabetically by title
4. The `generateSidebar()` function creates the sidebar configuration
5. The `generateRecipesIndex` plugin creates the index page on build

### When Changes Take Effect

- **During development**: The dev server will regenerate the index on start
- **During build**: The build process automatically generates everything

### Manual Regeneration

If you need to manually regenerate the index, simply restart the dev server:

```bash
npm run docs:dev
```

## Customizing Descriptions

Descriptions are extracted from the paragraph between the `*Serves*` line and the `## Ingredients` section. If no description is found, fallback descriptions are generated based on recipe titles.

To ensure your description is picked up:
1. Place it directly after the serving size line
2. Make sure it's a regular paragraph (not bold, italic, or inside special markdown)
3. Keep it concise (1-2 sentences)

## Troubleshooting

### Recipe not showing up?

- Check that the file is in the `recipes/` directory
- Ensure it has a `.md` extension
- Verify the frontmatter has a `title` field
- Restart the dev server

### Wrong description?

- Check that your description paragraph is after `*Serves*` and before `## Ingredients`
- Make sure there are no special characters or markdown that might interfere
- The parser looks for plain paragraphs only

## RecipeCards Component

The `<RecipeCards />` component displays all recipes as beautiful, interactive cards with images.

### Usage

Add it to any markdown page:

```markdown
<RecipeCards />
```

### Features

- 📸 **Automatic images** - pulls from recipe frontmatter
- 📝 **Auto descriptions** - extracts from recipe content
- 🎨 **Responsive grid** - adapts to screen size
- 🌗 **Dark mode support** - looks great in both themes
- ✨ **Hover effects** - smooth animations on interaction

### Current Usage

- **Homepage** (`index.md`) - displays all recipes below the hero section

### Styling

The component uses VitePress theme variables for consistent styling. It automatically adapts to:
- Light/dark mode
- Custom brand colors
- Responsive breakpoints

## Future Improvements

Potential enhancements:
- Add category/tag support for filtering cards
- Add search filtering by ingredients
- Add cooking time metadata
- Generate a recipe sitemap
- Add recipe schema markup for SEO
- Add sorting options (newest, alphabetical, cooking time)

