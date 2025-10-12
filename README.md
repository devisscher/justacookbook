# Just a Cookbook 🍳

> No ads, no popups, just recipes.

A clean, beautiful recipe cookbook built with VitePress. Tired of scrolling through endless stories and ads on recipe websites? This cookbook gets straight to the point.

## Features

- 🎨 **Beautiful Design** - Custom recipe-themed styling with warm, appetizing colors
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
- 🔍 **Searchable** - Quick local search through all recipes
- 🖨️ **Print-Friendly** - Optimized for printing recipes
- 🖼️ **Recipe Images** - Support for hero images with captions and credits
- ⚡ **Fast** - Built with VitePress for lightning-fast page loads
- 🌙 **Dark Mode** - Full dark mode support
- 📖 **Easy Navigation** - Table of contents for quick access to ingredients and instructions

## Current Recipes

- [Oven-Baked Leeks with Miso Chili Cream](./recipes/braised_leek.md)
- [Lohikeitto (Finnish Salmon Soup)](./recipes/salmon_soup.md)

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev
```

Visit `http://localhost:5173` to see your cookbook.

### Build

```bash
# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Adding a New Recipe

1. Create a new `.md` file in the `recipes/` folder
2. Add frontmatter with optional image:

```markdown
---
title: My Amazing Recipe
image: /images/my-recipe.jpg
imageAlt: A delicious plate of food
imageCaption: Fresh from the oven
---

# My Amazing Recipe

<RecipeImage />

*Serves 4 people*

## Ingredients

- 2 cups flour
- 1 cup sugar
- 3 eggs

## Instructions

1. **Preheat oven**: Preheat to 350°F...
2. **Mix ingredients**: Combine all dry ingredients...
3. **Bake**: Pour into pan and bake for 30 minutes...

## Tips

- Store in an airtight container
- Best served warm
```

3. Update `.vitepress/config.mts` to add your recipe to the sidebar
4. Update `recipes/index.md` to include your recipe in the listing

## Project Structure

```
justacookbook/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── .vitepress/
│   ├── config.mts            # VitePress configuration
│   └── theme/
│       ├── index.js          # Custom theme entry
│       ├── style.css         # Recipe-specific styling
│       └── components/       # Vue components
│           ├── RecipeCard.vue
│           ├── RecipeImage.vue
│           ├── IngredientsList.vue
│           └── InstructionsList.vue
├── recipes/
│   ├── index.md              # Recipe listing page
│   ├── braised_leek.md       # Individual recipes
│   └── salmon_soup.md
├── public/
│   └── images/               # Recipe images (optional)
├── index.md                  # Homepage
└── package.json
```

## Deployment

This cookbook is configured to automatically deploy to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick steps:**
1. Push to GitHub
2. Enable GitHub Pages with "GitHub Actions" source
3. Configure `base` path in config if needed
4. Your cookbook is live! 🎉

## Theme Features

### Custom Components

- **`<RecipeImage />`** - Displays hero images from frontmatter
- **`<RecipeCard>`** - Recipe preview cards for listings
- **`<IngredientsList>`** - Styled ingredient lists with checkmarks
- **`<InstructionsList>`** - Numbered instruction steps

### Automatic Styling

The theme automatically styles standard Markdown:
- H1 headings with bottom borders
- H2 section headings in brand color
- Italic text as serving info with background
- Unordered lists as ingredients with emojis
- Ordered lists as numbered instruction steps
- Blockquotes as tips/notes

See [.vitepress/theme/README.md](./.vitepress/theme/README.md) for complete theme documentation.

## Contributing

Feel free to submit issues or pull requests! Some ideas:
- Add more recipes
- Improve styling
- Add recipe categories/tags
- Add cooking time estimates
- Add difficulty ratings

## License

MIT License - Feel free to use this for your own cookbook!

## Built With

- [VitePress](https://vitepress.dev/) - Static site generator
- [Vue 3](https://vuejs.org/) - JavaScript framework
- Custom recipe theme with love ❤️

---

Made with ❤️ and VitePress • No ads, no popups, just recipes

