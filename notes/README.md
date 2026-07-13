# Notes

Theory and reference notes for interview prep, grouped by topic. Prose notes are Markdown (`.md`); runnable reference snippets are kept as code (`.js`) so they stay copy-paste/run-ready.

## JavaScript — [`javascript/`](javascript/)
| File | What it covers |
| --- | --- |
| [javascript.md](javascript/javascript.md) | Language fundamentals — types, coercion, scope, closures, etc. |
| [oop.md](javascript/oop.md) | OOP in JS — classes, inheritance, prototypes, principles |
| [prototype.md](javascript/prototype.md) | Prototype chain (REPL walkthrough) |
| [this-and-arrow-functions.md](javascript/this-and-arrow-functions.md) | `this` binding with regular vs arrow functions |
| [methods.js](javascript/methods.js) | String / array / object method reference |
| [asynchronous-js.js](javascript/asynchronous-js.js) | Callbacks, promises, async/await, fetch |
| [design-patterns.js](javascript/design-patterns.js) | Common design patterns |
| [polyfills.js](javascript/polyfills.js) | Hand-written polyfills (bind, map, etc.) |
| [terms.js](javascript/terms.js) | Core concept demos — debounce, throttle, drag/drop, etc. |
| [typeof.js](javascript/typeof.js) · [oop-practice.js](javascript/oop-practice.js) · [practice.js](javascript/practice.js) | Scratch / practice snippets |
| [index.html](javascript/index.html) | Playground page that loads `terms.js` |

## Data Structures & Algorithms — [`dsa/`](dsa/)
- [data-structures.js](dsa/data-structures.js) — searches, sorts, data structures
- [algorithms.js](dsa/algorithms.js) — algorithm exercises
- [cheat-sheet.md](dsa/cheat-sheet.md) — pattern → technique quick reference
- [big-o.png](dsa/big-o.png) — Big-O complexity chart

## Browser & Web APIs — [`browser/`](browser/)
- [dom-manipulation.js](browser/dom-manipulation.js) — selecting, creating, events
- [custom-elements.js](browser/custom-elements.js) — Web Components
- [canvas-graphics.js](browser/canvas-graphics.js) — Canvas / SVG
- [indexeddb.js](browser/indexeddb.js) — IndexedDB
- [web-workers/](browser/web-workers/) — Web Worker (`worker.js` + `worker-main.js`)
- [web-app.md](browser/web-app.md) — front-end performance optimization
- [web-accessibility.md](browser/web-accessibility.md) — a11y practices
- Images: [html5.jpg](browser/html5.jpg), [script-loading-defer-async.png](browser/script-loading-defer-async.png), [website-performance-metrics.png](browser/website-performance-metrics.png)

## Networking & Security — [`networking-security/`](networking-security/)
- [authentication-and-authorization.md](networking-security/authentication-and-authorization.md) — stateful vs stateless, JWT, cookies, storage, OAuth, SSO
- [http-vs-websockets.md](networking-security/http-vs-websockets.md)
- [security-issues.md](networking-security/security-issues.md) — XSS, CSRF, XSSI, DoS
- [oauth.png](networking-security/oauth.png)

## Frameworks
- Angular — [`angular/change-detection.md`](angular/change-detection.md)
- React — [`react/reactjs.md`](react/reactjs.md), [`react/advanced-components.md`](react/advanced-components.md)

## Styling & Build Tools
- [styling/sass.md](styling/sass.md)
- [build-tools/webpack.md](build-tools/webpack.md)

---
See [`../REVIEW.md`](../REVIEW.md) for a list of suspected factual errors spotted while restructuring (the notes themselves were left as written).
