# App Icon Guide

The PWA uses simple SVG placeholder icons with a cooking emoji. For a professional app, you should replace these with custom PNG icons.

## Current Icons

- `icon-192.svg` - 192x192 icon (required)
- `icon-512.svg` - 512x512 icon (required)

## Creating Custom Icons

### Option 1: Convert SVG to PNG

Use an online tool or ImageMagick:

```bash
# Install ImageMagick
brew install imagemagick  # macOS
sudo apt install imagemagick  # Linux

# Convert SVG to PNG
convert -background none icon-192.svg icon-192.png
convert -background none icon-512.svg icon-512.png
```

### Option 2: Design Custom Icons

1. **Design your icon** in a tool like:
   - Figma
   - Adobe Illustrator
   - Canva
   - Inkscape (free)

2. **Export as PNG** with these specs:
   - 192x192px
   - 512x512px
   - Transparent or solid background
   - PNG format

3. **Use warm cookbook colors**:
   - Primary: `#d97706` (amber/orange)
   - Accent: `#dc2626` (red)
   - Background: `#ffffff` (white)

### Option 3: Use an Icon Generator

Online PWA icon generators:
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### Icon Requirements

#### Sizes Needed
- **192x192** - Android home screen
- **512x512** - Android splash screen

#### Best Practices
- Use simple, recognizable symbols
- High contrast colors
- Looks good when scaled down
- No small text
- Square format (1:1 aspect ratio)

#### Icon Ideas for a Cookbook
- 🍳 Cooking pan or skillet
- 📖 Open cookbook
- 🍴 Fork and knife crossed
- 👨‍🍳 Chef's hat
- 🥘 Pot with steam
- 🔪 Chef's knife

### Updating the Config

If you change from SVG to PNG, update `.vitepress/config.mts`:

```typescript
icons: [
  {
    src: '/justacookbook/icon-192.png',  // Changed from .svg
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: '/justacookbook/icon-512.png',  // Changed from .svg
    sizes: '512x512',
    type: 'image/png',
  }
]
```

### Testing Your Icons

1. Build and deploy your site
2. Visit on mobile browser
3. Use browser DevTools:
   - Chrome: Lighthouse > PWA audit
   - Check manifest in Application tab
4. Test "Add to Home Screen"
5. Check icon appearance on home screen

## Additional Icon Sizes (Optional)

For a complete PWA, you might want:
- 16x16 (browser favicon)
- 32x32 (browser favicon)
- 180x180 (Apple Touch Icon)
- 512x512 maskable (adaptive icon)

These can be added to the manifest configuration.

