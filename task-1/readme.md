# Friends Nickname Generator

Could you *be* any more iconic?  
This mini-project generates a quirky nickname for you, straight out of the Friends universe.

### 🚀 How It Works
- You enter your first name.
- We take the first 4 letters of it (padding with `*` if it’s too short — Joey style).
- Then, we summon a random surname from the Friends gang using... **time itself**.

That’s right — `Date.now()` gives us the current timestamp (in milliseconds since 1970), and we mod it by the number of surnames (7).  
It's not pure chaos, but it *feels* like fate picked your name. ✨

---

### ⚙️ VS Code Fixes
If you’re running this in VS Code using Node.js:
- `prompt()` **doesn’t work in Node by default**.  
  So you can switch to [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) for smooth input handling.

To install it:
```bash
npm install prompt-sync
