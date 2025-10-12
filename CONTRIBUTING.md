# Contributing to Just a Cookbook

Thank you for your interest in contributing! 🎉 We love receiving contributions from our community.

## Ways to Contribute

### 🍳 Request a Recipe

Have a recipe you'd love to see in the cookbook? [Submit a recipe request](https://github.com/devisscher/justacookbook/issues/new?template=recipe-request.yml)!

We welcome all types of recipes:
- Family favorites
- Traditional dishes
- Quick weeknight meals
- Special occasion recipes
- International cuisine
- Dietary-specific recipes (vegan, gluten-free, etc.)

### ✏️ Report Recipe Issues

Found a typo, incorrect measurement, or have a suggestion? [Submit a recipe correction](https://github.com/devisscher/justacookbook/issues/new?template=recipe-correction.yml).

### 🐛 Report Bugs

Encountered a problem with the website? [Report a bug](https://github.com/devisscher/justacookbook/issues/new?template=bug-report.yml).

### 📝 Submit a Recipe (Pull Request)

Want to directly contribute a recipe? Here's how:

#### Prerequisites
- Node.js 20 or higher
- Git
- A text editor

#### Steps

1. **Fork the repository**
   - Click the "Fork" button on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/justacookbook.git
   cd justacookbook
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a new branch**
   ```bash
   git checkout -b recipe/your-recipe-name
   ```

5. **Add your recipe**
   
   Create a new file in `recipes/` folder:
   ```bash
   touch recipes/your-recipe-name.md
   ```

6. **Write your recipe** using this template:
   
   ```markdown
   ---
   title: Your Recipe Name
   image: /images/your-recipe.jpg  # Optional
   imageAlt: Description of the image
   imageCaption: Optional caption
   ---

   # Your Recipe Name

   <RecipeImage />  <!-- If you have an image -->

   *Serves X people*

   ## Ingredients

   - List your ingredients
   - With amounts and descriptions
   - One per line

   ## Instructions

   1. **First step**: Detailed instructions for first step...
   2. **Second step**: Continue with clear, numbered steps...
   3. **Final step**: Complete the recipe...

   ## Tips

   - Helpful tips for success
   - Storage instructions
   - Serving suggestions
   ```

7. **Add recipe image (optional)**
   - Place image in `public/images/`
   - Reference as `/images/your-recipe.jpg`
   - Recommended size: 1200px wide
   - Keep file size under 500KB

8. **Update navigation**
   
   Edit `.vitepress/config.mts` to add your recipe to the sidebar:
   ```typescript
   sidebar: [
     {
       text: 'Recipes',
       items: [
         { text: 'All Recipes', link: '/recipes/' },
         // ... existing recipes ...
         { text: 'Your Recipe Name', link: '/recipes/your-recipe-name' }
       ]
     }
   ]
   ```

9. **Update recipe index**
   
   Edit `recipes/index.md` to add your recipe to the listing:
   ```markdown
   ### [Your Recipe Name](./your-recipe-name)
   *Serves X people*

   Brief description of your recipe...
   ```

10. **Test locally**
    ```bash
    npm run docs:dev
    ```
    Visit `http://localhost:5173` to preview your recipe

11. **Commit your changes**
    ```bash
    git add .
    git commit -m "Add recipe: Your Recipe Name"
    ```

12. **Push to your fork**
    ```bash
    git push origin recipe/your-recipe-name
    ```

13. **Create a Pull Request**
    - Go to your fork on GitHub
    - Click "Pull Request"
    - Fill out the PR template
    - Submit!

## Recipe Guidelines

### Writing Style
- ✅ Be clear and concise
- ✅ Use active voice ("Mix the flour" not "The flour should be mixed")
- ✅ Include cooking times and temperatures
- ✅ Specify measurements (metric and/or imperial)
- ✅ List ingredients in order of use
- ✅ Bold the action word at the start of each step

### Quality Standards
- Recipe must be tested and work as written
- Include serving size/yield
- Provide prep time and cooking time
- Use standard measurements
- Include tips for success

### Images
- High quality, well-lit photos
- Show the finished dish
- You own the rights or it's Creative Commons
- Optimized for web (< 500KB)
- 1200px width recommended

### What Not to Submit
- ❌ Copyrighted recipes without permission
- ❌ Recipes you haven't tested
- ❌ Incomplete or vague instructions
- ❌ Recipes requiring highly specialized equipment
- ❌ Duplicate recipes already in the cookbook

## Code Contributions

### Theme/Style Improvements
- Improve CSS styling
- Fix responsive issues
- Enhance accessibility
- Add new components

### Features
- New recipe components
- Search improvements
- Navigation enhancements
- Performance optimizations

### Testing Changes
```bash
# Run development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Code Style

- Use TypeScript for configuration
- Follow existing code style
- Comment complex logic
- Test on multiple browsers/devices
- Ensure accessibility

## Questions?

- 💬 [Start a discussion](https://github.com/devisscher/justacookbook/discussions)
- 📧 Open an issue with your question
- 👀 Check existing issues and PRs

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You! ❤️

Every contribution makes this cookbook better. Whether you submit a recipe, fix a typo, or report a bug - thank you for helping create a better recipe resource!

---

**Remember**: No ads, no popups, just recipes. Let's keep it that way! 🍳

