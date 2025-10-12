# Recipe Image Guide

Complete guide for adding beautiful images to your recipes.

## Quick Start

### Method 1: Frontmatter (Recommended)

Add image metadata to your recipe's frontmatter:

```markdown
---
title: My Delicious Recipe
image: /images/my-recipe.jpg
imageAlt: A plate of delicious food
imageCaption: Fresh from the oven
imageCredit: Photo by Jane Doe
---

# My Delicious Recipe

<RecipeImage />

*Serves 4 people*

## Ingredients
...
```

### Method 2: Component Props

Use component props for more control:

```markdown
# My Delicious Recipe

<RecipeImage 
  src="/images/my-recipe.jpg"
  alt="A plate of delicious food"
  caption="Fresh from the oven"
  credit="Photo by Jane Doe"
/>

*Serves 4 people*
...
```

## Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `image` | Yes | URL or path to image | `/images/recipe.jpg` or `https://...` |
| `imageAlt` | No | Alt text for accessibility | `Bowl of soup with garnish` |
| `imageCaption` | No | Caption overlay (bottom) | `Traditional Finnish soup` |
| `imageCredit` | No | Photo credit (top-right) | `Photo by John Smith` |

## Image Sources

### 1. Local Images

Store images in a `/public/images/` folder:

```
justacookbook/
├── .vitepress/
├── recipes/
└── public/
    └── images/
        ├── salmon-soup.jpg
        └── braised-leek.jpg
```

Reference them with absolute paths:

```yaml
---
image: /images/salmon-soup.jpg
---
```

### 2. External URLs

Use full URLs from image hosting services:

```yaml
---
image: https://images.unsplash.com/photo-123456?w=1200
---
```

**Recommended Services:**
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Imgur](https://imgur.com/) - Image hosting
- Your own CDN or hosting

### 3. Image Optimization

**Best Practices:**
- **Resolution**: 1200px width recommended
- **Format**: JPEG for photos, PNG for graphics
- **File size**: Under 500KB for faster loading
- **Aspect ratio**: 16:9 or 4:3 works best

**Online Optimization Tools:**
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Resize & optimize
- [ImageOptim](https://imageoptim.com/) - Mac app

## Styling Features

### Automatic Features
- ✨ Rounded corners with shadow
- 🖱️ Hover effect (slight lift)
- 📱 Responsive sizing
- 🖨️ Print-friendly
- ⚡ Lazy loading

### Caption & Credit Positioning
- **Caption**: Bottom overlay with gradient
- **Credit**: Top-right corner with semi-transparent background

## Accessibility

Always include meaningful alt text:

```yaml
# Good
imageAlt: Bowl of creamy salmon soup garnished with fresh dill

# Bad
imageAlt: Image
```

If `imageAlt` is not provided, it falls back to the page `title`.

## Examples

### Complete Example

```markdown
---
title: Lohikeitto (Finnish Salmon Soup)
image: https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1200
imageAlt: A bowl of creamy Finnish salmon soup with fresh dill garnish
imageCaption: Traditional Finnish comfort food
imageCredit: Photo by Unsplash
---

# Lohikeitto (Finnish Salmon Soup)

<RecipeImage />

*Serves 4-6 people*

## Ingredients
- 500g fresh salmon...
```

### Minimal Example

```markdown
---
title: Simple Pasta
image: /images/pasta.jpg
---

# Simple Pasta

<RecipeImage />

Quick and easy pasta dish...
```

### No Image

Simply omit the `<RecipeImage />` component and frontmatter if you don't have an image. The recipe will still look great!

## Troubleshooting

### Image not showing?

1. **Check the path**: Ensure `/public/images/` exists if using local images
2. **Check the URL**: Test external URLs in a browser
3. **Check frontmatter**: Ensure proper YAML syntax with `---` delimiters
4. **Check component**: Make sure `<RecipeImage />` is in the markdown

### Image too large/small?

The component automatically:
- Sets max height to 500px (desktop) / 300px (mobile)
- Maintains aspect ratio
- Scales to full width

### Caption not visible?

Captions appear as overlays at the bottom. They work best on images with:
- Darker bottom areas
- Good contrast
- Not too much text at bottom

## Tips

1. **Use high-quality images** - Food photography matters!
2. **Keep consistent aspect ratios** - Makes your cookbook look professional
3. **Add captions sparingly** - Use them for context, not repetition
4. **Credit photographers** - Always give credit where due
5. **Optimize file sizes** - Your users will thank you
6. **Test on mobile** - Most users browse recipes on phones

## Copyright & Licensing

⚠️ **Important**: Only use images you have permission to use.

**Safe sources:**
- Your own photos
- Creative Commons (CC0) images
- Stock photos with proper license
- Images with photographer permission

**Never use:**
- Copyrighted images without permission
- Images from other recipe sites
- Google Image search results (without verification)

