# Portfolio

Personal portfolio website built while learning and practicing HTML & CSS.

## Current Progress

* [x] Hero section
* [x] Navigation bar
* [x] Flexbox layout
* [x] Navbar hover effects
* [x] Sticky navbar
* [x] Smooth scrolling
* [ ] About
* [ ] Skills
* [ ] Projects
* [ ] Experience
* [ ] Contact

---

# 🧱 HTML Cheat Sheet

## `div`

Container / box used to group different contents.

```html
<div class="hero-container">
    ...
</div>
```

**Think:** `div` = container / box

---

## `span`

Targets a smaller part of content, especially text.

```html
<h1>
    Gerald Andrei
    <span>P. Baguisa</span>
</h1>
```

Useful when styling only part of a text.

**Think:** `span` = small piece inside another element

---

## `section`

A major section of the webpage.

```html
<section id="about">
    ...
</section>
```

---

## `header`

Usually contains navigation or introductory content.

```html
<header>
    ...
</header>
```

---

## `nav`

Contains navigation links.

```html
<nav>
    ...
</nav>
```

---

## `a`

Creates a clickable link.

```html
<a href="#about">About</a>
```

`href="#about"` connects to:

```html
<section id="about">
```

---

# 🎨 CSS Selectors

### Element

```css
nav {
}
```

Targets `<nav>`.

### Class

```css
.nav-links {
}
```

Targets:

```html
class="nav-links"
```

### ID

```css
#home {
}
```

Targets:

```html
id="home"
```

Remember:

```text
nav        → element
.nav-links → class
#home      → ID
```

---

# 📐 Flexbox

## `display: flex`

Turns an element into a Flexbox container.

```css
nav {
    display: flex;
}
```

---

## `justify-content`

Controls positioning along the main axis.

```css
justify-content: center;
```

Centers the content.

```css
justify-content: space-between;
```

Pushes the first and last items apart.

Example:

```text
AB                         Contact
```

---

## `align-items`

Controls alignment on the cross-axis.

```css
align-items: center;
```

Usually centers items vertically when using a row.

---

## `gap`

Controls consistent spacing between Flexbox items.

```css
.nav-links {
    display: flex;
    gap: 30px;
}
```

---

# 📦 Spacing

## `padding`

Space **inside** an element.

```css
padding: 20px;
```

```css
padding: 0 70px;
```

Means:

```text
Top/Bottom → 0
Left/Right → 70px
```

---

## `margin`

Space **outside** an element.

```css
margin-top: 10px;
margin-bottom: 10px;
```

Remember:

```text
padding = inside
margin  = outside
```

---

# ✍️ Text

## `font-size`

```css
font-size: 30px;
```

Changes text size.

## `font-weight`

```css
font-weight: bold;
```

Makes text thicker.

or:

```css
font-weight: 700;
```

## `line-height`

Controls spacing between lines.

```css
line-height: 1.2;
```

---

# 🔗 Links

Remove the default underline:

```css
a {
    text-decoration: none;
}
```

Change the color:

```css
a {
    color: white;
}
```

---

# 🖱️ Hover

`:hover` changes styling when the mouse is over an element.

```css
a:hover {
    color: yellow;
}
```

Current portfolio behavior:

```text
Normal → White
Hover  → Yellow
```

---

# ⏱️ Transition

Makes CSS changes happen smoothly.

```css
a {
    transition: 1s;
}
```

Example:

```css
a {
    color: white;
    transition: 1s;
}

a:hover {
    color: yellow;
}
```

Think:

```text
WHITE ───────────→ YELLOW
       1 second
```

---

# 📌 Sticky Navbar

Keeps the navbar visible while scrolling.

```css
header {
    position: sticky;
    top: 0;
}
```

### `position: sticky`

Allows the element to stick while scrolling.

### `top: 0`

Keeps it at the top of the screen.

---

# 🌀 Smooth Scrolling

```css
html {
    scroll-behavior: smooth;
}
```

Makes anchor navigation scroll smoothly instead of instantly jumping.

Example:

```html
<a href="#skills">Skills</a>
```

connects to:

```html
<section id="skills">
```

---

# 📏 Viewport Height

```css
min-height: 100vh;
```

`vh` = viewport height.

```text
100vh ≈ one full screen height
```

Useful for testing full-screen sections.

**Important:** Not every final portfolio section needs to be `100vh`.

---

# 🖼️ Images

Example:

```css
.hero-image img {
    width: 400px;
    height: 450px;
    object-fit: cover;
    border-radius: 35%;
    border: 3.5px solid red;
}
```

### `object-fit: cover`

Makes the image fill its dimensions while maintaining its proportions.

### `border-radius`

Rounds the corners / changes the shape.

### `border`

```css
border: 3.5px solid red;
```

Means:

```text
3.5px → thickness
solid → style
red   → color
```

---

# 🎯 CSS Specificity

More specific selectors can override general selectors.

```css
a {
    color: white;
}

.logo {
    color: red;
}
```

`.logo` is more specific than `a`.

So:

```text
Normal link → White
Logo        → Red
```

Then:

```css
a:hover {
    color: yellow;
}
```

On hover:

```text
Logo → Yellow
```

---

# 🧭 Current Navbar Structure

```html
<header>

    <nav>

        <a href="#home" class="logo">AB</a>

        <div class="nav-links">

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>

        </div>

    </nav>

</header>
```

Outer Flexbox:

```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

Inner Flexbox:

```css
.nav-links {
    display: flex;
    gap: 30px;
}
```

Result:

```text
AB                    About Skills Projects Experience Contact
```

---

# 🎨 Portfolio Color System

Current direction:

```text
BLACK  → background / foundation
WHITE  → main text / simplicity
RED    → primary accent / emphasis
YELLOW → interactive / technical accent
```

Possible future colors:

```text
GREEN → growth / success
BLUE  → information / technical elements
```

**Rule:** Don't add colors unless they have a purpose.

---

# 🏗️ Portfolio Sections

```text
HOME
│
├── Name
├── Role
├── Tagline
└── Image

ABOUT
└── Who am I?

SKILLS
├── Tech Stack
├── What I'm proficient in
└── What I'm currently exploring

PROJECTS
└── What I built

EXPERIENCE
└── What I do / have done

CONTACT
└── Where people can reach me
```

---

# 💻 Git Cheat Sheet

## Check changes

```bash
git status
```

Shows changed, staged, and untracked files.

---

## Add changes

```bash
git add .
```

`.` = add all changes in the current repository.

Specific file:

```bash
git add index.html
```

---

## Commit

```bash
git commit -m "Describe changes"
```

Commit = save changes to your **local Git history**.

Important:

```text
git commit ≠ GitHub
```

---

## Push

```bash
git push origin main
```

Push = send your local commits to GitHub.

---

## Normal Git Workflow

```text
Edit files
    ↓
git status
    ↓
git add .
    ↓
git commit -m "..."
    ↓
git push origin main
    ↓
GitHub 🚀
```

---

## If `non-fast-forward` appears

Don't immediately force push.

It usually means the remote has changes your local branch doesn't have.

Check the situation first.

Usually:

```bash
git pull
```

---

# 🧠 Learning Mindset

Don't memorize every property.

Instead ask:

```text
What do I want to change?
        ↓
Which HTML element/class?
        ↓
Which CSS property controls it?
        ↓
Try it
        ↓
Look at the result
        ↓
Adjust
```

> **Understand the code, don't just memorize the code.**

---

# 🚀 Next Session

Continue building the portfolio from the empty sections.

Next major section:

**About — "Who am I?"**

Before coding it:

1. Decide what information belongs there.
2. Decide the visual layout.
3. Build the HTML.
4. Style it with CSS.
5. Test it.
6. Polish it.
