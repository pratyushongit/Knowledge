# Knowledge

Personal knowledge base for interview preparation — front-end / full-stack web development.

The repo is split into **notes** (theory & reference) and **projects** (runnable code playgrounds).

```
notes/       Theory & reference, grouped by topic  →  see notes/README.md
projects/    Self-contained runnable code playgrounds
resources/   Saved bookmark exports
REVIEW.md    Suspected factual errors flagged during the last cleanup
```

## 📚 Notes

Grouped by topic — full index in **[notes/README.md](notes/README.md)**.

| Topic | Path |
| --- | --- |
| JavaScript (fundamentals, OOP, async, patterns, polyfills) | [`notes/javascript/`](notes/javascript/) |
| Data Structures & Algorithms | [`notes/dsa/`](notes/dsa/) |
| Browser & Web APIs (DOM, workers, IndexedDB, a11y, perf) | [`notes/browser/`](notes/browser/) |
| Networking & Security (auth, HTTP/WebSockets, XSS/CSRF) | [`notes/networking-security/`](notes/networking-security/) |
| Angular | [`notes/angular/`](notes/angular/) |
| React | [`notes/react/`](notes/react/) |
| Styling (SASS) | [`notes/styling/`](notes/styling/) |
| Build tools (Webpack) | [`notes/build-tools/`](notes/build-tools/) |

## 🧪 Projects

Each folder is an independent app with its own `package.json`. Run `npm install` inside the folder, then its start script.

| Project | Description |
| --- | --- |
| [`projects/angular-training/`](projects/angular-training/) | Angular concepts (forms, routing, guards, RxJS, NgRx, lifecycle, change detection…) |
| [`projects/angular-ssr/`](projects/angular-ssr/) | Angular server-side rendering setup |
| [`projects/react-terms/`](projects/react-terms/) | React patterns & concepts (hooks, HOC, render props, redux, routing, suspense, custom hooks…) |
| [`projects/react-testing/`](projects/react-testing/) | React Testing Library + Jest examples (TypeScript) |
| [`projects/react-typescript/`](projects/react-typescript/) | React + TypeScript + Vite component exercises |
| [`projects/node-js/`](projects/node-js/) | Node.js mini-projects (file system, HTTP, MongoDB, web server, web sockets) |
| [`projects/micro-frontends/`](projects/micro-frontends/) | Webpack Module Federation — shell app + two remote apps |
| [`projects/webpack/`](projects/webpack/) | Webpack build configuration example |
| [`projects/vite-tailwind/`](projects/vite-tailwind/) | Vite + Tailwind CSS starter |

## 🔖 Resources

- [`resources/bookmarks/`](resources/bookmarks/) — exported browser bookmarks (DSA/React, general knowledge)

---
_Generated artifacts (`node_modules/`, `build/`, `dist/`, `coverage/`, `.DS_Store`) are git-ignored._
