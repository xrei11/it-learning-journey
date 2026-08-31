# Portfolio Learning Cheat Sheet

> Personal notes for learning HTML, CSS, and Git while building my IT portfolio.

---

## 📄 HTML Basics

| Tag         | Purpose                      |
| ----------- | ---------------------------- |
| `<html>`    | HTML document                |
| `<head>`    | Page information/settings    |
| `<body>`    | Visible page content         |
| `<section>` | Section of a webpage         |
| `<div>`     | Container/group of content   |
| `<span>`    | Small inline part of content |
| `<h1>`      | Main heading                 |
| `<p>`       | Paragraph/text               |
| `<img>`     | Displays an image            |

### Attributes

```html
class=""
```

* Name used by CSS
* Can be reused on multiple elements

```html
id=""
```

* Unique identifier
* Usually used for a specific element/section

Example:

```html
<section id="home">
```

```html
<div class="hero-container">
```

---

# 🎨 CSS Basics

## Selectors

```css
.class
```

Selects elements with a specific class.

```css
#id
```

Selects an element with a specific ID.

```css
A B
```

Selects `B` inside `A`.

Example:

```css
.hero-container h1
```

Means:

> Select the `<h1>` inside `.hero-container`.

---

## Common Properties

```css
color: white;
```

Changes text color.

```css
background-color: black;
```

Changes background color.

```css
font-size: 65px;
```

Changes text size.

```css
font-family: sans-serif;
```

Changes the font.

---

# 📦 Spacing

### Padding

```css
padding: 20px;
```

Space **inside** the element.

```text
┌──────────────────────┐
│   ← padding →        │
│      CONTENT         │
│                      │
└──────────────────────┘
```

### Margin

```css
margin: 20px;
```

Space **outside** the element.

```text
   ← margin →
┌──────────────┐
│    CONTENT   │
└──────────────┘
```

### Shorthand

```css
padding: 0 70px;
```

Means:

```text
Top:    0
Bottom: 0
Left:   70px
Right:  70px
```

General rule:

```css
padding: A B;
```

* `A` = top & bottom
* `B` = left & right

---

# 📐 Flexbox

```css
display: flex;
```

Turns an element into a **Flexbox container**.

It controls how its child elements are arranged.

Example:

```css
.hero-container {
    display: flex;
}
```

Changes:

```text
TEXT

IMAGE
```

into:

```text
TEXT       IMAGE
```

---

## Main Axis & Cross Axis

```text
MAIN AXIS
←────────────────→
  justify-content


CROSS AXIS
      ↑
      │
   align-items
      │
      ↓
```

For our current default `row` layout:

```text
justify-content → left / right
align-items     → top / bottom
```

### Common values

```css
justify-content: center;
```

Centers items along the main axis.

```css
align-items: center;
```

Centers items along the cross axis.

```css
justify-content: space-between;
```

Places space between the items.

```text
ITEM                         ITEM
  ←────── space between ──────→
```

---

# 🖼️ Images

Our current portfolio image:

```css
.hero-image img {
    width: 400px;
    height: 450px;
    object-fit: cover;
    border-radius: 45%;
}
```

### `width`

```css
width: 400px;
```

Controls how wide the image is.

### `height`

```css
height: 450px;
```

Controls how tall the image is.

### `object-fit`

```css
object-fit: cover;
```

Fills the image box while maintaining its proportions.

It may crop parts of the image rather than stretch it.

### `border-radius`

```css
border-radius: 45%;
```

Rounds the corners/shape of the image.

---

# 🧱 Current Portfolio Structure

```text
HOME
└── hero-container
    │
    ├── hero-text
    │   ├── h1
    │   │   └── span
    │   ├── p
    │   └── p.tagline
    │
    └── hero-image
        └── img
```

Current design:

```text
┌──────────────────────────────────────────────┐
│                                              │
│   GERALD ANDREI                 ┌─────────┐ │
│   P. BAGUISA                    │         │ │
│                                 │  PHOTO  │ │
│   IT Student                    │         │ │
│                                 └─────────┘ │
│   LEARN · BUILD · GROW                     │
│                                              │
└──────────────────────────────────────────────┘
```

### Current color palette

```text
BLACK
WHITE
RED
```

---

# 🔀 Git Basics

## Check repository

```bash
git status
```

Shows:

* Current branch
* Changed files
* Untracked files
* Staged changes
* Whether the working tree is clean

---

## Stage changes

```bash
git add .
```

Stages all changes in the current repository.

Or stage a specific file/folder:

```bash
git add 04-Portfolio/
```

Think:

> **"Prepare these changes for my next commit."**

---

## Commit

```bash
git commit -m "Create initial portfolio"
```

Creates a snapshot of the staged changes in **local Git history**.

Important:

> A commit does NOT automatically mean the changes are on GitHub.

---

## Pull

```bash
git pull --rebase origin main
```

Gets changes from GitHub and places your local commits on top.

Useful when GitHub has changes that your local repository doesn't have.

---

## Push

```bash
git push origin main
```

Sends your local commits to GitHub.

---

# ⭐ Git Workflow

```text
       FILES
         ↓
     git add
         ↓
      STAGED
         ↓
    git commit
         ↓
     LOCAL GIT
         ↓
      git push
         ↓
       GITHUB
```

### If push is rejected

If Git says:

```text
non-fast-forward
```

It usually means the remote repository has changes your local repository doesn't have.

Typical solution:

```bash
git pull --rebase origin main
```

Then:

```bash
git push origin main
```

---

# 🧠 Things I Understand So Far

* HTML provides the **structure** of the website.
* CSS controls the **appearance and layout**.
* `<div>` is a general container/group.
* `<span>` targets a smaller inline part of content.
* `display: flex` creates a Flexbox layout.
* `justify-content` controls the main axis.
* `align-items` controls the cross axis.
* `padding` creates space inside an element.
* `margin` creates space outside an element.
* `object-fit: cover` helps images fill their box without stretching.
* Git `commit` saves changes locally.
* Git `push` sends commits to GitHub.

---

# 🚧 Current Learning Progress

### Portfolio

* [x] Create HTML structure
* [x] Create CSS file
* [x] Create Hero section
* [x] Add name and tagline
* [x] Add profile image
* [x] Learn Flexbox basics
* [x] Position text and image side-by-side
* [x] Style image
* [x] Add Hero spacing
* [ ] Improve Hero typography
* [ ] Learn margin vs padding in practice
* [ ] Add navigation
* [ ] Add About section
* [ ] Add Projects section
* [ ] Add Skills section
* [ ] Add Experience section
* [ ] Add Contact section
* [ ] Responsive design
* [ ] Animations
* [ ] Final polish

### Git/GitHub

* [x] `git status`
* [x] `git add`
* [x] `git commit`
* [x] `git pull --rebase`
* [x] `git push`
* [x] Successfully pushed Portfolio to GitHub

---

## 🎯 Learning Rule

> **Don't just copy code.**
>
> Understand what each part does, change values, observe the result, and then build it yourself.
>
> **LEARN · BUILD · GROW**


