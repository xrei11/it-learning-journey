# Portfolio Cheat Sheet

## 🧱 HTML Basics

### `div`

Container / box used to group different contents.

```html
<div class="hero-container">
    ...
</div>
```

### `span`

Targets a smaller part of content, especially text.

```html
<h1>
    Gerald Andrei
    <span>P. Baguisa</span>
</h1>
```

Useful when styling only part of a text.

### `section`

A major section of the webpage.

```html
<section id="about">
    ...
</section>
```

### `header`

Usually contains the website's navigation or introductory content.

### `nav`

Contains navigation links.

### `a`

Creates a clickable link.

```html
<a href="#about">About</a>
```

`#about` → goes to:

```html
<section id="about">
```

---

# 🎨 CSS Basics

### Selectors

```css
nav { }
```

Targets the HTML element `<nav>`.

```css
.nav-links { }
```

Targets `class="nav-links"`.

```css
#home { }
```

Targets `id="home"`.

Remember:

```text
nav        → element
.nav-links → class
#home      → ID
```

---

# 📐 Flexbox

### `display: flex`

Turns an element into a Flexbox container.

```css
nav {
    display: flex;
}
```

### `justify-content`

Controls spacing/alignment along the main axis.

```css
justify-content: center;
```

Centers content.

```css
justify-content: space-between;
```

Pushes the first and last items apart.

### `align-items`

Controls alignment on the cross axis.

```css
align-items: center;
```

### `gap`

Controls consistent spacing between Flexbox items.

```css
.nav-links {
    display: flex;
    gap: 30px;
}
```

Think:

```text
About → Skills → Projects → Experience → Contact
       30px      30px       30px         30px
```

---

# 📦 Spacing

### `padding`

Space **inside** an element.

```css
padding: 20px;
```

All sides.

```css
padding: 0 70px;
```

```text
Top/Bottom → 0
Left/Right → 70px
```

### `margin`

Space **outside** an element.

```css
margin-top: 20px;
margin-bottom: 10px;
```

Remember:

```text
padding = inside
margin  = outside
```

---

# ✍️ Text

### `font-size`

```css
font-size: 30px;
```

### `font-weight`

```css
font-weight: bold;
```

or:

```css
font-weight: 700;
```

### `line-height`

Controls spacing between lines.

```css
line-height: 1.2;
```

---

# 🔗 Links

Remove default underline:

```css
a {
    text-decoration: none;
}
```

Change color:

```css
a {
    color: white;
}
```

---

# 🖱️ Hover

Changes styling when the mouse is over an element.

```css
a:hover {
    color: yellow;
}
```

Current portfolio idea:

```text
Normal → White
Hover  → Yellow
```

---

# ⏱️ Transition

Makes changes happen smoothly.

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

---

# 📌 Sticky Navbar

Keeps the navbar visible while scrolling.

```css
header {
    position: sticky;
    top: 0;
}
```

`top: 0` → sticks to the top of the screen.

---

# 🌀 Smooth Scrolling

```css
html {
    scroll-behavior: smooth;
}
```

Makes navigation to sections scroll smoothly instead of instantly jumping.

---

# 📏 Viewport Height

```css
min-height: 100vh;
```

`vh` = viewport height.

```text
100vh ≈ one full screen height
```

Useful for full-screen sections, but not every final section needs to be `100vh`.

---

# 🖼️ Images

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

Fills the image dimensions while maintaining its proportions.

### `border-radius`

Rounds the corners / changes the shape.

### `border`

```css
border: 3.5px solid red;
```

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

Result:

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

Basic layout:

```text
AB                    About Skills Projects Experience Contact
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

---

# 🎨 Portfolio Color System

Current design direction:

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

Only introduce additional colors if they have a purpose.

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

### Check changes

```bash
git status
```

### Stage changes

```bash
git add .
```

`.` → adds all changes.

### Commit

```bash
git commit -m "Describe changes"
```

Commit = saves the changes to your **local Git history**.

It does NOT automatically put them on GitHub.

### Push

```bash
git push origin main
```

Push = sends your local commits to **GitHub**.

### Normal workflow

```text
Edit
 ↓
git status
 ↓
git add .
 ↓
git commit -m "..."
 ↓
git push origin main
 ↓
GitHub
```

### If you get `non-fast-forward`

Don't force push immediately.

Usually the remote has changes your local branch doesn't have.

Check the situation first, then:

```bash
git pull
```

---

# 🧠 Remember

Don't memorize every property.

Instead ask:

```text
What do I want to change?
        ↓
Which HTML element/class?
        ↓
Which CSS property controls it?
        ↓
Test it
        ↓
Look at the result
        ↓
Adjust
```

> **Understand the code, don't just memorize the code.**
