# Installing on Mobile Devices

Quick guide to installing Just a Cookbook on your phone.

## 📱 iPhone / iPad (iOS)

iOS doesn't allow automatic install prompts, so you need to add it manually:

### Step-by-Step Instructions

1. **Open Safari** (MUST use Safari - see why below)
2. **Visit** the cookbook at: `https://devisscher.github.io/justacookbook/`
3. **Tap the Share button** at the bottom (box with arrow pointing up)
   - iPhone: Bottom of screen
   - iPad: Top of screen
4. **Scroll down** in the share menu
5. **Tap "Add to Home Screen"**
6. **Edit the name** if you want (optional)
7. **Tap "Add"** in the top-right corner
8. **Done!** The app icon appears on your home screen

### What You Get

✅ App icon on home screen  
✅ Opens like a native app (no browser UI)  
✅ Works offline after first visit  
✅ Fast loading from cache  

### iOS Limitations

⚠️ **No automatic prompt** - Apple doesn't allow web apps to show install dialogs  
⚠️ **Must use Safari** - Add to Home Screen only available in Safari  
⚠️ **Limited notifications** - No push notifications from web apps  
⚠️ **Chrome/Firefox iOS won't work** - All iOS browsers use Safari's engine, but only Safari has the "Add to Home Screen" feature

### Why Only Safari on iOS?

Apple requires **all iOS browsers to use Safari's WebKit engine**. This means:
- Chrome on iOS = Safari engine + Chrome interface
- Firefox on iOS = Safari engine + Firefox interface
- Edge on iOS = Safari engine + Edge interface

Only the Safari app has access to "Add to Home Screen" functionality. Even though Chrome iOS uses the same engine, Apple restricts PWA installation to Safari only.  

### Troubleshooting iOS

**"Add to Home Screen" not showing?**
- Make sure you're using **Safari** (not Chrome, Firefox, or Edge)
- Chrome/Firefox on iOS look different but don't have this feature
- Update to latest iOS version
- Try restarting Safari

**Using Chrome on iOS?**
- Chrome on iOS cannot install PWAs
- You must switch to Safari
- All iOS browsers use Safari's engine anyway
- Chrome on Android works fine!

**App not working offline?**
- Visit the app online first
- Browse a few recipes to cache them
- Close and reopen the app

---

## 🤖 Android

Android has full PWA support with automatic prompts!

### Automatic Install (Recommended)

1. **Open Chrome or Edge** (not Firefox)
2. **Visit** the cookbook
3. **Wait 5 seconds** - Install banner appears at bottom
4. **Tap "Install"**
5. **Done!** App installs automatically

### Manual Install

If the banner doesn't appear:

1. **Tap menu** (three dots ⋮) in Chrome
2. **Tap "Install app"** or "Add to Home screen"
3. **Confirm** installation
4. **Done!** App icon appears

### What You Get

✅ Automatic install prompt  
✅ App icon in app drawer  
✅ Opens like a native app  
✅ Works offline with full caching  
✅ Background sync  
✅ Updates automatically  

### Android Requirements

- Chrome 87+ or Edge 87+
- Android 5.0+
- Stable internet connection for first visit

### Troubleshooting Android

**Install prompt not showing?**
- Check you're on HTTPS (GitHub Pages ✅)
- Try incognito/private mode
- Clear browser cache
- Make sure app isn't already installed

**"App not supported" error?**
- Update Chrome to latest version
- Try Edge browser instead
- Check if you have enough storage space

---

## 🖥️ Desktop (Optional)

You can also install on desktop computers!

### Chrome / Edge

1. **Visit** the cookbook
2. **Click install icon** in address bar (⊕ or computer icon)
3. OR: Menu (⋮) → "Install Just a Cookbook"
4. **Click "Install"**
5. App opens in its own window

### What You Get

✅ Dedicated app window  
✅ No browser tabs/UI  
✅ Appears in Start menu/Applications  
✅ Works offline  
✅ Fast access  

---

## 🔍 How to Tell If It's Installed

### iOS
- Look for cookbook icon on home screen
- Icon has no Safari badge
- Opens without browser UI

### Android  
- Icon in app drawer
- "Open" button in Chrome (not "Install")
- Notification on successful install

### Desktop
- Listed in Start menu/Applications
- Opens in standalone window
- Install icon gone from browser

---

## 🗑️ Uninstalling

### iOS
1. **Long-press** the app icon
2. **Tap "Remove App"**
3. **Tap "Delete App"**
4. Confirm deletion

### Android
1. **Long-press** the app icon
2. **Drag to "Uninstall"**
3. OR: Settings → Apps → Just a Cookbook → Uninstall

### Desktop
- **Windows**: Start → Right-click app → Uninstall
- **Mac**: Applications → Drag to Trash
- **Linux**: Right-click app → Remove

---

## ❓ FAQ

### Do I need internet to use it?
After installing and visiting once:
- ✅ Browse visited recipes offline
- ✅ Search works offline
- ❌ Can't load new recipes without internet
- ❌ External images need internet first time

### How much storage does it use?
Very little!
- App: ~2-5 MB
- Each recipe: ~50-100 KB
- Images: Varies (cached for 30 days)

### Does it auto-update?
Yes! When we publish updates:
- App checks for updates automatically
- Downloads in background
- Updates on next launch
- No action needed

### Is it secure?
Absolutely!
- ✅ Served over HTTPS
- ✅ Same security as website
- ✅ No extra permissions needed
- ✅ No tracking or ads

### Can I have both website and app?
Yes! They're the same thing:
- App is just the website in standalone mode
- Same content and features
- Choose whichever you prefer

### Why install instead of bookmark?
Benefits of installing:
- 🚀 Faster loading (cached)
- 📱 Feels like native app
- 🔌 Works offline
- 🎯 Easy access from home screen
- 🖼️ Full-screen experience

---

## 💡 Tips

### For Best Experience

1. **Install the app** for fastest access
2. **Browse recipes while online** to build cache
3. **Check for updates** by reopening occasionally
4. **Allow notifications** for new recipe alerts (coming soon!)

### Cooking Mode

Once installed:
- Keep phone unlocked while cooking
- Swipe between recipes quickly
- No annoying browser UI
- Won't lose your place

### Share with Friends

Tell them to:
1. Visit the site
2. Look for "Install" prompt or button
3. On iPhone: Share → Add to Home Screen

---

**Questions?** [Open an issue](https://github.com/devisscher/justacookbook/issues) or check the [PWA Guide](./PWA_GUIDE.md) for technical details.

**Happy Cooking!** 🍳👨‍🍳

