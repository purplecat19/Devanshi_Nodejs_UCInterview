🧩 Friends Nickname Generator!


Ever wondered what your Friends-style nickname would be? No? Well, too bad — you're getting one anyway.

🚀 What It Does
You give us your first name.
We chop it to 4 letters (if it's shorter, we Joey it up with some *).

Then we pick a surname from the Friends universe using — wait for it — the current timestamp.
Using "Date.now" which gives us the exact time (in miliseconds) since the unix epoch (Jan 1, 1970). Then we divide it by 7, and pick the surname, based on the remainder.
It’s like fate. But with JavaScript.

⚙️ Running It in VS Code
If you tried running this with prompt() in Node.js and your terminal screamed at you — yeah, same.

Use prompt-sync to fix that:

(npm install prompt-sync)
