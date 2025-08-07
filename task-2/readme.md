# 📁 Task 2 – Central Perk API

This is my second task for the Unicode Coding Club interview.  
I made a small backend server using **Node.js** and **Express**.  
It gives data about the TV show **Friends** 

---

## 🚀 What this does

- Runs a local server on `http://localhost:3000`
- When you visit [`/friends`](http://localhost:3000/friends), it shows:
  - The show's name
  - Its summary
  - Its image
  - A list of all episodes (with their names, air dates, and summaries)


## ⚙️ How I did it

1. Made the main server in `index.js`
2. Created a route in `routes/friends.routes.js`
3. Wrote the main logic in `controllers/friends.controller.js`
4. Used **Axios** to get data from [TVMaze API](https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes)

