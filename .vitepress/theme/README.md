# Custom Recipe Theme

This custom theme extends VitePress's default theme with recipe-specific styling and components.

## Features

### 🎨 Custom Styling
- Warm, appetizing color palette (amber/orange tones)
- Beautiful typography using serif fonts for headings
- Recipe-optimized list styling for ingredients and instructions
- Hover effects and interactive elements
- Print-friendly styles
- Fully responsive design

### 📦 Vue Components

#### RecipeImage
Display a beautiful hero image for your recipe, reading data from frontmatter.

**Frontmatter Usage (Recommended):**
```yaml
---
title: My Amazing Recipe
image: /images/my-recipe.jpg
imageAlt: A delicious plate of food
imageCaption: Optional caption text
imageCredit: Photo by John Doe
---
```

Then in your markdown:
```vue
<RecipeImage />
```

**Manual Props Usage:**
```vue
<RecipeImage 
  src="/images/my-recipe.jpg"
  alt="A delicious plate of food"
  caption="Optional caption text"
  credit="Photo by John Doe"
/>
```

**Frontmatter Fields:**
- `image` - URL or path to the image (required)
- `imageAlt` - Alt text for accessibility (falls back to title)
- `imageCaption` - Caption overlay at bottom of image
- `imageCredit` - Photo credit shown in top-right corner

#### RecipeCard
Display recipe previews in a card format.

**Usage:**
```vue
<RecipeCard 
  title="My Recipe"
  link="/recipes/my-recipe"
  servings="Serves 4"
  description="A delicious recipe..."
  :tags="['Vegetarian', 'Quick']"
/>
```

#### IngredientsList
Display ingredients with beautiful checkable styling.

**Usage:**
```vue
<IngredientsList 
  :ingredients="[
    '2 cups flour',
    '1 cup sugar',
    '3 eggs'
  ]"
/>
```

#### InstructionsList
Display step-by-step instructions with numbered circles.

**Usage:**
```vue
<InstructionsList 
  :steps="[
    'Preheat oven to 350°F',
    'Mix dry ingredients',
    'Bake for 30 minutes'
  ]"
/>
```

## Automatic Styling

The theme automatically styles standard Markdown in recipe pages:

- **H1 headings**: Recipe titles with bottom border
- **H2 headings**: Section headings (Ingredients, Instructions, etc.)
- **Italic text after H1**: Automatically styled as serving info with colored background
- **Unordered lists (ul)**: Styled as ingredients with spoon emoji
- **Ordered lists (ol)**: Styled as numbered steps with circle badges
- **Blockquotes**: Styled as tips/notes with green accent

## Color Customization

Edit the CSS variables in `style.css` to customize colors:

```css
:root {
  --vp-c-brand-1: #d97706;  /* Primary brand color */
  --recipe-accent: #dc2626;  /* Accent color for highlights */
  --recipe-green: #059669;   /* For tips/notes */
}
```

## Dark Mode

The theme fully supports VitePress's dark mode with adjusted colors for better readability.

## Print Support

Print styles are included to hide navigation and optimize recipe layout when printing pages.

