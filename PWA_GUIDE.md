# Progressive Web App Guide

Just a Cookbook can be installed as a mobile app! Users can download it to their home screen and use it offline.

## 🎉 What is a PWA?

A Progressive Web App (PWA) is a website that works like a native app. Users can:

- 📱 **Install it** on their phone's home screen
- 🔌 **Use it offline** - recipes are cached locally
- ⚡ **Get fast loading** - assets are cached
- 📲 **Get app-like experience** - no browser UI
- 🔄 **Auto-updates** - always the latest version

## 🚀 How Users Install It

### On Android (Chrome/Edge)

1. Visit the cookbook in Chrome or Edge
2. Look for the "Install" prompt banner at the bottom
3. Tap "Install" button
4. OR: Tap menu (⋮) → "Install app" or "Add to Home screen"
5. Confirm installation
6. App icon appears on home screen!

### On iOS (Safari)

1. Visit the cookbook in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Edit the name if desired
5. Tap **"Add"**
6. App icon appears on home screen!

### On Desktop (Chrome/Edge)

1. Visit the cookbook
2. Look for install icon in address bar
3. Click "Install"
4. App opens in its own window

## ✨ Features

### Offline Support

Once installed, the cookbook works offline:
- All visited recipes are cached
- Browse previously viewed recipes
- Search still works
- External images (from Unsplash) are cached for 30 days

### App-Like Experience

- **Standalone mode**: Opens without browser UI
- **Splash screen**: Shows cookbook logo on launch
- **Theme color**: Matches your device's theme
- **Orientation**: Portrait mode (perfect for cooking!)
- **Fast**: Instant loading of cached content

### Smart Install Prompt

The app shows a custom install prompt:
- Appears after 5 seconds on first visit
- Can be dismissed ("Later" button)
- Won't show again for 7 days if dismissed
- Tracks if already installed

## 🛠️ Technical Details

### Manifest Configuration

Located in `.vitepress/config.mts`:

```typescript
manifest: {
  name: 'Just a Cookbook',
  short_name: 'Cookbook',
  description: 'No ads, no popups, just recipes',
  theme_color: '#d97706',      // Amber/orange
  background_color: '#ffffff',  // White
  display: 'standalone',        // Full-screen app
  orientation: 'portrait',      // Vertical orientation
  start_url: '/justacookbook/', // Homepage
  icons: [...],                 // App icons
}
```

### Service Worker

Powered by Workbox, handles:
- Caching static assets (CSS, JS, images)
- Caching recipes as you browse
- Offline fallback
- Background sync
- Cache invalidation on updates

### Caching Strategy

**Static Assets** (CacheFirst):
- HTML, CSS, JavaScript
- SVG, PNG, ICO files
- Fonts (woff2)
- Cached permanently until updated

**External Images** (CacheFirst):
- Unsplash images
- Cached for 30 days
- Max 10 images
- Automatic cleanup

### Update Behavior

When you deploy updates:
1. Service worker detects new version
2. Downloads new assets in background
3. User gets new version on next visit
4. No interruption to current session

## 📊 Testing PWA Features

### Local Testing

```bash
# Install dependencies (include PWA plugin)
npm install

# Run dev server with PWA enabled
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

### Chrome DevTools

1. Open DevTools (F12)
2. Go to **Application** tab
3. Check:
   - **Manifest**: View app manifest
   - **Service Workers**: See registration
   - **Cache Storage**: Inspect cached files
   - **Offline**: Toggle to test offline mode

### Lighthouse Audit

1. Open Chrome DevTools
2. Go to **Lighthouse** tab
3. Select **Progressive Web App**
4. Run audit
5. Get PWA score and recommendations

### Testing Checklist

- [ ] Manifest loads correctly
- [ ] Service worker registers
- [ ] Install prompt appears
- [ ] Can install to home screen
- [ ] App opens in standalone mode
- [ ] Works offline after visiting
- [ ] Cached recipes load quickly
- [ ] Icons display correctly
- [ ] Theme color matches UI

## 🎨 Customizing Icons

Current icons are simple SVG placeholders. For professional icons:

1. Design 192x192 and 512x512 PNG icons
2. Place in `public/` folder
3. Update manifest in config
4. See `public/ICON_GUIDE.md` for details

## 📱 Platform Support

### Full PWA Support
- ✅ Chrome (Android)
- ✅ Edge (Android/Windows)
- ✅ Samsung Internet (Android)
- ✅ Opera (Android)

### Partial Support
- ⚠️ Safari (iOS) - Add to Home Screen only
- ⚠️ Firefox (Android) - Limited PWA features

### What Works on iOS?
- ✅ Add to Home Screen
- ✅ Standalone mode
- ✅ App icon
- ❌ No install prompt
- ❌ No offline indication
- ❌ Limited service worker

## 🔧 Troubleshooting

### Install Prompt Not Showing?

**Possible causes:**
1. Already installed
2. Already dismissed (wait 7 days)
3. Not on HTTPS (required for PWA)
4. Browser doesn't support PWA
5. Site not meeting PWA criteria

**Solutions:**
- Clear site data in browser settings
- Try incognito/private mode
- Check console for errors
- Run Lighthouse audit

### Offline Not Working?

1. Visit site online first (must cache)
2. Service worker must be registered
3. Check Application > Service Workers in DevTools
4. Try hard refresh (Ctrl+Shift+R)

### Icons Not Displaying?

1. Check icons exist in `public/` folder
2. Verify paths in manifest
3. Check icon format (PNG/SVG)
4. Clear cache and reinstall

### Updates Not Appearing?

1. Service worker caches aggressively
2. Close all tabs/windows of the app
3. Reopen to get new version
4. OR: Unregister service worker in DevTools

## 🚢 Deployment Notes

### GitHub Pages

PWA works automatically with GitHub Pages:
- ✅ HTTPS enabled (required)
- ✅ Custom domain supported
- ✅ Service worker registers
- ✅ Manifest served correctly

### Important Settings

Make sure in `.vitepress/config.mts`:
```typescript
pwa: {
  base: '/justacookbook/',  // Must match repo name
  scope: '/justacookbook/', // Same as base
  mode: 'development',      // Change to 'production' when ready
}
```

### Production Mode

When ready for production, change:
```typescript
mode: 'production',
```

This enables:
- Stricter caching
- Better optimization
- Production service worker

## 📈 Analytics & Monitoring

Consider adding:
- Install tracking
- Offline usage analytics
- Service worker performance
- Cache hit rates

## 🎯 Best Practices

### For Developers

1. **Test offline regularly** - Ensure recipes work
2. **Monitor cache size** - Don't cache too much
3. **Version service worker** - Track updates
4. **Handle failed requests** - Show helpful errors
5. **Update manifest** - Keep info current

### For Users

1. **Install the app** - Better experience
2. **Browse recipes online first** - Build cache
3. **Check for updates** - Reopen app periodically
4. **Clear cache if issues** - Fresh start

## 🔮 Future Enhancements

Possible PWA improvements:
- Push notifications for new recipes
- Background sync for favorites
- Share target (share to app)
- Offline recipe creation
- Voice commands for hands-free cooking
- Timer integration

## 📚 Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Workbox Guide](https://developers.google.com/web/tools/workbox)
- [VitePress PWA Plugin](https://vite-pwa-org.netlify.app/frameworks/vitepress.html)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

---

**Happy Cooking!** 🍳

Your recipes are now just one tap away, anytime, anywhere - even without internet!

