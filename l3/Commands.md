# Developer Environment & Terminal Mastery
### CLI, VS Code Setup — Senior Dev ka Pehla Qadam

---

## 📌 Table of Contents
1. [Terminal / CMD Basics](#1-terminal--cmd-basics)
2. [VS Code Setup](#2-vs-code-setup)
3. [Node.js & npm Install](#3-nodejs--npm-install)
4. [package.json](#4-packagejson)
5. [.env Files](#5-env-files)
6. [Git Basics](#6-git-basics)
7. [Nodemon](#7-nodemon)
8. [Modules](#8-modules)

---

## 1. Terminal / CMD Basics

> 💡 Real developers mouse se kaam nahi karte — terminal se karte hain!

### Windows (CMD / PowerShell)

```bash
cd folderName        # folder ke andar jao
cd ..                # ek step peeche aao
dir                  # files aur folders dekho
mkdir backendProject # naya folder banao
echo.> index.js      # naya empty file banao
del index.js         # file delete karo
rmdir folderName     # empty folder delete karo
rmdir /s folderName  # folder with all files delete karo
```

### Mac / Linux (Terminal)

```bash
cd folderName        # folder ke andar jao
cd ..                # ek step peeche aao
ls                   # files aur folders dekho
mkdir backendProject # naya folder banao
touch index.js       # naya empty file banao
rm index.js          # file delete karo
rm -rf folderName    # folder with all files delete karo
```

---

## 2. VS Code Setup

> 💡 Yeh sirf editor nahi — tumhara cockpit hai!

### Must-Have Extensions

| Extension | Kaam |
|-----------|------|
| **Prettier** | Code auto-format karta hai |
| **ESLint** | Code errors likhte waqt batata hai |
| **Thunder Client** | API test karo directly VS Code mein |
| **GitLens** | Git history directly editor mein dikhata hai |

### Extensions Install Kaise Karein?

```
VS Code open karo
→ Left sidebar mein Extensions icon click karo (Ctrl+Shift+X)
→ Search mein naam likho
→ Install button dabao
```

### GitLens Kya Karta Hai?

Jab tum kisi bhi line pe cursor rakhte ho — GitLens turant dikhata hai:
- ✅ Yeh line kisne likhi?
- ✅ Kab likhi?
- ✅ Commit message kya tha?

---

## 3. Node.js & npm Install

### Download & Install

- Windows / Mac: [https://nodejs.org](https://nodejs.org) se **LTS version** download karo

### Verify Installation

```bash
node -v     # Node version check karo  e.g. v20.11.0
npm -v      # npm version check karo   e.g. 10.2.4
```

### Local vs Global Install

```bash
npm install packageName      # local — sirf is project mein
npm install -g packageName   # global — poore system mein
```

> 💡 npm = Node Package Manager — jaise Play Store hota hai apps ka, npm hota hai packages ka!

---

## 4. package.json

### Create karo

```bash
npm init -y    # automatic package.json banao
```

### Example package.json

```json
{
  "name": "backendProject",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### Dependencies vs devDependencies

| Type | Kab Use Karein | Example |
|------|---------------|---------|
| **dependencies** | Production mein bhi chahiye | express, mongoose |
| **devDependencies** | Sirf development mein chahiye | nodemon, eslint |

> 💡 package.json tumhara project ka ID card hai — jo bhi install karo woh yahan record hota hai!

---

## 5. .env Files

### .env file banao

```bash
# .env
PORT=3000
DB_URL=mongodb://localhost/mydb
JWT_SECRET=mySuperSecretKey
```

### .gitignore file banao

```bash
# .gitignore
node_modules
.env
```

### .env use kaise karein (code mein)

```bash
npm install dotenv    # pehle install karo
```

```javascript
// index.js ke top pe
require('dotenv').config()

console.log(process.env.PORT)    // 3000
console.log(process.env.DB_URL)  // mongodb://localhost/mydb
```

> ⚠️ Kabhi bhi secret keys GitHub pe push mat karo — yeh ek professional ki sabse badi galti hai!

---

## 6. Git Basics

### Windows — Git Install

- [https://git-scm.com](https://git-scm.com) se download karo

### Mac / Linux

```bash
# Mac
brew install git

# Linux
sudo apt install git
```

### First Time Setup

```bash
git config --global user.name "Tumhara Naam"
git config --global user.email "email@example.com"
```

### Daily Git Commands

```bash
git init              # naya repo start karo
git add .             # sab files stage karo
git commit -m "msg"   # commit karo
git push origin main  # GitHub pe bhejo
```

### Simple Flow

```
Code likho → git add . → git commit -m "msg" → git push
     ↑__________________________________________________|
```

### GitHub pe First Repo

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

> 💡 Har feature ke baad commit karo — "one commit = one change" yeh rule hamesha follow karo!

---

## 7. Nodemon

### Install karo

```bash
npm install -D nodemon
```

### package.json mein script add karo

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

### Use karo

```bash
npm run dev    # server start karo — file save karo, auto restart!
```

> 💡 Nodemon tumhara time bachata hai — development mein hamesha nodemon use karo, production mein kabhi nahi!

---

## 8. Modules

### CommonJS (Default in Node.js)

```javascript
// math.js — export
const add = (a, b) => a + b
const subtract = (a, b) => a - b
module.exports = { add, subtract }

// index.js — import
const { add } = require('./math')
console.log(add(2, 3))  // 5
```

### ES6 Modules (Modern Way)

```javascript
// math.js — export
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b

// index.js — import
import { add } from './math.js'
console.log(add(2, 3))  // 5
```

### ES6 Enable karne ke liye

```json
// package.json mein add karo
{
  "type": "module"
}
```

### Kab Kya Use Karein?

| Type | Kab Use Karein |
|------|---------------|
| **CommonJS** | Default Node.js projects mein |
| **ES6** | Modern projects, `"type": "module"` ke saath |

> 💡 Dono samjho — kyunki real projects mein dono milenge!

---

## ✅ Setup Checklist

```
☐ Terminal commands practice kiye
☐ VS Code install kiya
☐ Prettier, ESLint, Thunder Client, GitLens install kiye
☐ Node.js install kiya — node -v check kiya
☐ npm -v check kiya
☐ npm init -y se package.json banaya
☐ .env file banai
☐ .gitignore mein node_modules aur .env add kiya
☐ Git install kiya aur config kiya
☐ GitHub pe first repo push kiya
☐ nodemon install kiya aur test kiya
☐ require aur import dono try kiye
```

---

## 🎯 Summary

```
Terminal  →  VS Code  →  Node/npm
     ↓
package.json  →  .env  →  .gitignore
     ↓
Git  →  nodemon  →  Modules
```

**Yeh sab setup ek baar karo — phir sirf code likhna hai! 🚀**

---

*Backend Development Free Series — by Muzaffar IT Academy*  
*Every Sunday — New Video! 🔥*