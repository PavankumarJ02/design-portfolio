# ⚡ Pavan Kumar J

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=36BCF7&center=true&vCenter=true&width=650&lines=AI+%26+ML+Engineer;Full+Stack+Developer;Creative+Technologist;Building+Ideas+into+Reality;Always+Learning.+Always+Building." alt="Typing SVG" />

<br/>

### `AI/ML × Software Engineering × Creative Technology`

<br/>

<a href="https://github.com/PavankumarJ02">
<img src="https://img.shields.io/github/followers/PavankumarJ02?label=Followers&style=for-the-badge&logo=github">
</a>

<a href="https://github.com/PavankumarJ02">
<img src="https://img.shields.io/github/stars/PavankumarJ02?label=Stars&style=for-the-badge&logo=github">
</a>

<a href="https://github.com/PavankumarJ02">
<img src="https://komarev.com/ghpvc/?username=PavankumarJ02&style=for-the-badge&label=PROFILE+VIEWS">
</a>

</div>

---

## 🧠 About Me

I'm **Pavan Kumar**, a Computer Science student focused on **Artificial Intelligence & Machine Learning**, software development, and building practical technology.

I enjoy working at the intersection of:

```text
Artificial Intelligence
        +
Software Engineering
        +
Creative Design
        =
Interesting Products
```

I'm currently exploring and building projects involving:

* 🤖 Artificial Intelligence
* 🧠 Machine Learning
* 🕸️ Deep Learning
* 👁️ Computer Vision
* 🌐 Full-Stack Development
* ☁️ Cloud & Azure
* 📱 Flutter Development
* 🔌 REST APIs
* ⚙️ Automation

---

# 🚀 What I'm Building

```text
┌─────────────────────────────────────────────┐
│                                             │
│             CURRENT EXPLORATION             │
│                                             │
│     🤖 AI / ML                             │
│     🌐 Full Stack                           │
│     ☁️ Cloud & Azure                       │
│     🎨 Creative Interfaces                  │
│     🧪 Experimental Projects                │
│                                             │
└─────────────────────────────────────────────┘
```

My goal is not just to learn technologies.

**I want to build things with them.**

---

# 🛠️ Tech Stack

### Languages

<p>
<img src="https://skillicons.dev/icons?i=python,java,js,ts,html,css" />
</p>

### AI / Machine Learning

<p>
<img src="https://skillicons.dev/icons?i=tensorflow,pytorch" />
</p>

`Machine Learning` · `Deep Learning` · `Computer Vision` · `NLP`

### Development

<p>
<img src="https://skillicons.dev/icons?i=nextjs,react,nodejs,flutter,fastapi" />
</p>

### Cloud & Tools

<p>
<img src="https://skillicons.dev/icons?i=azure,git,github,vscode,linux" />
</p>

---

# 📊 GitHub Activity

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=PavankumarJ02&show_icons=true&hide_border=true&rank_icon=github&include_all_commits=true&count_private=true" height="180"/>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PavankumarJ02&layout=compact&hide_border=true&langs_count=8" height="180"/>

</div>

---

# 🔥 Contribution Streak

<div align="center">

<img src="https://streak-stats.demolab.com?user=PavankumarJ02&hide_border=true" />

</div>

---

# 🐍 GitHub Contribution Movement

### Watch my contributions come alive.

<div align="center">

<img src="https://raw.githubusercontent.com/PavankumarJ02/PavankumarJ02/output/github-contribution-grid-snake.svg" alt="GitHub Contribution Snake Animation" />

</div>

---

# 🌱 Contribution Journey

```text
Learning
   │
   ▼
Experimenting
   │
   ▼
Building
   │
   ▼
Breaking Things
   │
   ▼
Debugging
   │
   ▼
Improving
   │
   ▼
Shipping 🚀
```

> Every contribution represents another step forward.

---

# 🏗️ Selected Projects

| Project                            | Technology           | Focus                   |
| ---------------------------------- | -------------------- | ----------------------- |
| 🤖 AI Projects                     | Python / ML          | Artificial Intelligence |
| 📱 Flutter Apps                    | Flutter / Dart       | Mobile Development      |
| 🌐 Portfolio                       | Next.js / TypeScript | Web Development         |
| 📄 Intelligent Document Processing | Azure AI             | AI + Cloud              |
| 🎵 Music Classification            | Python / TensorFlow  | Deep Learning           |
| 🚗 Number Plate Recognition        | Computer Vision      | AI                      |

More projects are available across my repositories.

---

# 📈 GitHub Contribution Graph

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=PavankumarJ02&hide_border=true&area=true" width="95%" />

</div>

---

# 🎯 Current Goals

```text
[██████████████████░░] AI / ML

[████████████████░░░░] Full Stack

[███████████████░░░░░] Cloud

[████████████░░░░░░░░] System Design

[██████████░░░░░░░░░░] Open Source

[████████░░░░░░░░░░░░] Research
```

---

# 🌐 Connect

<div align="center">

<a href="https://github.com/PavankumarJ02">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://www.linkedin.com/">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://jpavankumar.me">
<img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

</div>

---

# ⚡ Contribution Snake Setup

To make the **snake animation actually update from your GitHub contributions**, create this workflow:

```text
.github/
└── workflows/
    └── snake.yml
```

Add:

```yaml
name: Generate Snake

on:
  schedule:
    - cron: "0 0 * * *"

  workflow_dispatch:

jobs:
  generate:
    runs-on: ubuntu-latest

    permissions:
      contents: write

    steps:
      - name: Generate contribution snake
        uses: Platane/snk@v3
        with:
          github_user_name: PavankumarJ02
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Publish
        uses: crazy-max/ghaction-github-pages@v4
        with:
          build_dir: dist
        env:
          GH_PAT: ${{ secrets.GITHUB_TOKEN }}
```

After pushing the workflow:

```bash
git add .
git commit -m "add github contribution animation"
git push
```

GitHub Actions will generate the animation and publish it.

---

# ✨ The Idea

This README isn't meant to be a static resume.

It's a **living developer profile**.

```text
       CODE
        │
        ▼
     CREATE
        │
        ▼
     COMMIT
        │
        ▼
     CONTRIBUTE
        │
        ▼
      GROW
        │
        └───────────────┐
                        │
                        ▼
                       CODE
```

### Build → Learn → Experiment → Contribute → Repeat.

---

<div align="center">

### `Keep building. Keep breaking. Keep learning.`

**Pavan Kumar J**

<br/>

⭐ If you find something interesting, consider starring a repository.

</div>
