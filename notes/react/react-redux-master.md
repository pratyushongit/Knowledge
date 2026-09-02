# React + Redux — Master Interview Guide

> **Purpose:** The single document to read end-to-end for a senior React interview. It consolidates and *supersedes* `reactjs.md` and `advanced-components.md`, corrects the mistakes in them, fills the gaps (React 19, Compiler, deep Redux), and links each topic to runnable code in `projects/react-terms`.
>
> **How to use it with the [sudheerj repo](https://github.com/sudheerj/reactjs-interview-questions):** Sections here are ordered by sudheerj's own categories. When that repo asks a question, find the topic here for the *senior-level answer* (the "why" and the tradeoff), and open the linked code file to show you've built it. sudheerj = breadth checklist; this doc = depth + your proof.
>
> **Legend:** 🔧 = corrects a mistake in the old notes. ⭐ = high-frequency senior question. 🆕 = React 18/19, easy to get caught out on. `📁` = your code.

---

## 0. Category map (sudheerj → this doc)

| sudheerj category | Section here |
|---|---|
| Core React | §1 Core React |
| Hooks | §2 Hooks |
| Context API | §3 Context |
| React Router | §4 Router |
| React Redux | §5 Redux & RTK |
| Modern React (18/19) | §6 Concurrent React & §7 React 19 + Compiler |
| Styled Components | §8 Styling |
| React Testing | §9 Testing |
| Internationalization | §10 i18n |
| Miscellaneous / Patterns | §11 Patterns, §12 Performance, §13 Rapid-fire |

---

## 1. Core React

### What React is (say this crisply)
A library for building UIs from **composable, declarative components**. You describe *what* the UI should look like for a given state; React figures out the *how* (the DOM mutations). Contrast with jQuery/imperative code where you manually walk and mutate the DOM.

- **Declarative** — you describe the *end result* ("for this state, show this UI"), not the step-by-step DOM operations to get there. React computes and applies the changes. The opposite is **imperative** (jQuery): "find this node, remove that class, append this child" — you own every step.
  - *Declarative:* `return <button disabled={loading}>Save</button>` — you state the desired UI; React toggles the attribute.
  - *Imperative:* `if (loading) btn.setAttribute('disabled', ''); else btn.removeAttribute('disabled');` — you script each DOM mutation yourself.
- **Composable** — components are small, self-contained pieces you combine and nest to build bigger UIs, like functions calling functions. A `<Page>` is built from `<Header>`, `<Sidebar>`, `<Feed>`; each is reusable on its own and can be dropped into other trees. React favors **composition over inheritance** — you assemble behavior by nesting/wrapping components (and passing `children`/props), not by extending base classes.

### Elements vs Components vs Instances ⭐
- **Element** — a plain immutable object (`{ type, props, key }`) describing what you want on screen. `<Foo a={1}/>` compiles to `React.createElement(Foo, {a:1})`. Cheap to create; you throw them away every render.
- **Component** — a function (or class) that returns elements.
- **Instance** — the live thing React keeps (its state, its position in the tree). You rarely touch instances directly with hooks.

### JSX
Syntactic sugar over `React.createElement`. `{}` embeds a JS **expression** (not statements). Since React 17 you don't need `import React` for JSX (new JSX transform).

### Fragments
`<>…</>` groups children **without** adding a DOM node. Use keyed `<Fragment key=…>` when mapping.

### Props vs State ⭐
- **Props** — inputs from the parent. **Immutable / read-only** to the child. Data flows **down** (one-way).
- **State** — data a component owns and can change over time. A state change re-renders that component **and its descendants**.
- **Lifting state up** — when siblings need the same data, move it to their closest common ancestor and pass down as props.

> 🔧 **Correction (old note said "setState updates state without re-rendering"):** That is wrong. `setState` / the `useState` setter is the *primary trigger* of a re-render. What's true is: (a) it's **asynchronous/batched** — you don't see the new value on the next line, and (b) it doesn't *mutate* the existing state, it schedules a replacement. Never say setState avoids re-renders.

### State updates are batched ⭐
React groups multiple state updates into **one** re-render.
- Pre-18: batched only inside React event handlers.
- **React 18+ (automatic batching):** also batched inside promises, `setTimeout`, and native handlers.

Two setter forms — know when each matters:
```js
setCount(count + 1);        // value form — uses the value captured this render
setCount(c => c + 1);       // updater form — uses the latest queued state
```
With three `setCount(count+1)` in a row you get `+1` (all read the same stale `count`). With `setCount(c=>c+1)` you get `+3`. **Use the updater form whenever the new state depends on the old.** This also fixes stale-closure bugs (see §11).

### Controlled vs Uncontrolled components ⭐
- **Controlled** — form value lives in React state; `value` + `onChange`. Single source of truth, easy validation, you can transform input. Preferred default.
- **Uncontrolled** — DOM owns the value; you read it via a `ref` (or `FormData`). Less code, good for simple/one-shot forms and file inputs. `defaultValue` sets initial.

### The render → commit model (the mental model everything hangs on) ⭐
1. **Trigger** — initial mount, or a state/prop change.
2. **Render (pure)** — React calls your component to produce a new element tree (the "Virtual DOM"). Must be side-effect free.
3. **Reconcile / diff** — compare new tree to previous; compute the minimal DOM change set.
4. **Commit** — apply DOM mutations, run refs, run layout effects (`useLayoutEffect`) synchronously, then paint, then run `useEffect` asynchronously.

**Re-render ≠ DOM update.** A component re-rendering (running its function again) does *not* mean the DOM changes — only the diff does. This distinction is a senior tell.

### Why a parent re-render re-renders all children (and how to stop it)
When a component re-renders, React re-renders its whole subtree by default — it assumes components are *not* pure. To opt out for a genuinely pure component, wrap it in **`React.memo`** (skips re-render when props are shallow-equal). `React.memo` needs stable props to help, which is where `useMemo`/`useCallback` come in (see §2).

> 🆕 With the **React Compiler** (§7), most of this manual memoization becomes unnecessary — but you must still be able to explain the manual version.

### Virtual DOM, Reconciliation, Diffing
- **Virtual DOM** — an in-memory tree of elements. React diffs the new one against the previous and updates only what changed in the real DOM.
- **Reconciliation** — the overall process of syncing VDOM → real DOM with minimal mutations.
- **Diffing heuristics** (O(n), not O(n³)):
  - **Different element type** → tear down the old subtree, build new.
  - **Same DOM type** → keep the node, patch only changed attributes.
  - **Same component type** → keep instance & state, update props, re-render.
  - **Lists** → compared by **key**.

### Keys ⭐
Stable identity for list items so React can match items across renders (reused when key+type match, regardless of position).
- **Never use array index as key** for lists that reorder/insert/delete — it ties identity to *position*, causing wrong state reuse and subtle bugs. Index is fine only for static, append-only, never-reordered lists.

### React Fiber (be ready to go deep) ⭐
The reconciliation engine since React 16. A **fiber** is a unit of work / a node holding `type`, `key`, `props`, `state`, and pointers to child/sibling/return. Why it matters:
- Splits rendering into **interruptible chunks** — React can pause, resume, reprioritize, or abandon work.
- Enables **concurrent features** (§6): urgent updates (typing) can preempt non-urgent ones (filtering a big list).
- The old **Stack reconciler** was synchronous and uninterruptible — one big recursive call that blocked the main thread until done.

### Lifecycle — class methods and their hook equivalents
You'll rarely write classes now, but you must map them.

| Class method | Purpose | Hook equivalent |
|---|---|---|
| `constructor` | init state (no side effects) | `useState`/`useReducer` initializer |
| `componentDidMount` | side effects, API calls, subscriptions | `useEffect(fn, [])` |
| `componentDidUpdate` | react to prop/state change | `useEffect(fn, [deps])` |
| `componentWillUnmount` | cleanup timers/subscriptions | cleanup return of `useEffect` |
| `shouldComponentUpdate` | skip re-render | `React.memo` (+ `useMemo`) |
| `getDerivedStateFromProps` | derive state from props (rare — usually an anti-pattern) | compute during render / `key` reset |
| `getSnapshotBeforeUpdate` | read DOM pre-mutation (e.g. scroll) | `useLayoutEffect` |

### Error Boundaries ⭐
A class component with `getDerivedStateFromError` (set fallback state) and/or `componentDidCatch(error, info)` (log). Catches render-phase errors in its **child tree** and shows a fallback instead of unmounting the whole app.
- **Does NOT catch:** event-handler errors, async code, SSR, or errors in the boundary itself. Handle those with try/catch.
- No hook equivalent yet → use a library (`react-error-boundary`) or a small class. `📁` `react-terms/src/lazy-loading/ErrorFallback.js`

### Refs & Portals
- **`useRef`** — a mutable `{current}` box that persists across renders and does **not** trigger re-renders. Two uses: (1) DOM access, (2) holding a mutable value (previous value, timer id, latest-state-for-closures).
- **Portals** — `createPortal(children, domNode)` renders children into a different DOM node (modals, tooltips, toasts) while keeping them in the React tree (context and event bubbling still work through the React tree, not the DOM tree).

### Never define a component inside another component 🔧⭐
Its identity (function reference) changes every parent render → React sees a *different type* → tears down and rebuilds the subtree → **child loses all state** and perf tanks. Define components at module scope; pass data via props.

---

## 2. Hooks

**Rules of Hooks:** only call at the **top level** of a component or another hook — never inside conditions, loops, or nested functions. React relies on **call order** to associate each hook with its state slot.

### `useState`
`const [x, setX] = useState(initial)`. Pass a **function** for expensive initial state so it runs once: `useState(() => compute())`. Setter is async/batched; use the updater form when new state depends on old (§1).

### `useEffect(fn, deps)` ⭐
Runs **after paint** (asynchronously) to sync a component with an external system (subscriptions, network, manual DOM, timers).
- `[]` → after mount only.
- `[a, b]` → after mount and whenever a or b change.
- no array → after **every** render (rarely what you want).
- **Cleanup:** return a function; it runs before the next effect run and on unmount. Order on update: cleanup(old) → effect(new).
- **Strict Mode (dev)** mounts → unmounts → remounts each component once, so effects run twice in dev. This surfaces missing cleanup. Not a bug; not in production.
- ⭐ Common senior point: **most `useEffect`s are unnecessary.** Don't use effects to transform data for rendering (compute during render) or to respond to user events (do it in the handler). Effects are for *external* systems. `📁` `react-terms/src/hooks/UseEffect.js`

### `useLayoutEffect`
Runs **synchronously after DOM mutation, before paint**. Use only when you must measure/mutate layout to avoid a visible flicker (tooltips positioning, scroll restoration). Blocks paint — don't overuse.

### `useRef`
See §1. `📁` `react-terms/src/hooks/UseRef.js`

### `useReducer` ⭐
`const [state, dispatch] = useReducer(reducer, initialArg, init?)`. Prefer over `useState` when: state is complex/object-shaped, next state depends on previous, or **multiple event handlers** update the same state. Centralizes update logic in a pure `(state, action) => newState` function → easier to test and reason about. `📁` `react-terms/src/hooks/UseReducer.js`, `react-terms/src/useReducer-useContext/`

### `useMemo` and `useCallback` 🔧⭐
- **`useMemo(fn, deps)`** — caches a **computed value** across renders; recomputes only when deps change. Use for genuinely expensive calculations, or to keep an object/array **referentially stable** (so a memoized child or an effect dep doesn't churn).
- **`useCallback(fn, deps)`** — caches a **function reference** across renders.

> 🔧 **Correction:** `useCallback` does *not* "cache an expensive function definition." Defining a function is cheap. Its purpose is **referential stability** — giving `React.memo` children and effect dependency arrays the *same reference* between renders so they don't needlessly re-run. `useCallback(fn, d)` ≡ `useMemo(() => fn, d)`.

Don't memoize everything — memoization has its own cost (deps comparison, memory). Reach for it when profiling shows a real problem, or to satisfy a memoized boundary. `📁` `react-terms/src/hooks/UseMemo.js`, `UseCallback.js`
> 🆕 The **React Compiler** auto-memoizes and largely retires manual `useMemo`/`useCallback` (§7).

### `useContext`
Reads the nearest matching Provider's value; re-renders the consumer whenever that value changes. See §3.

### `useTransition` / `useDeferredValue` 🆕⭐
Concurrent hooks — mark updates as **low priority** so urgent updates (typing) stay responsive.
- **`useTransition`** → `[isPending, startTransition]`. Wrap a state update you *control*: `startTransition(() => setQuery(input))`. `isPending` lets you show a subtle loading state.
- **`useDeferredValue`** → returns a lagging copy of a value you *don't* control (e.g. a prop). React keeps showing the old value until it can render the new one without janking.
- Rule of thumb: control the setter → `useTransition`; only have the value → `useDeferredValue`. `📁` `react-terms/src/hooks/UseTransition.js`, `UseDeferredValue.js`

### Other hooks to name
- **`useId`** — stable unique IDs for a11y (label/input) that match across SSR/CSR.
- **`useImperativeHandle`** + `forwardRef` — expose an imperative API from a child (e.g. `focus()`).
- **`useSyncExternalStore`** — subscribe to an external store safely with concurrent rendering (this is how Redux/Zustand integrate).
- 🆕 **`use()`** (React 19) — read a promise or context conditionally, even inside branches (§7).

### Custom hooks ⭐
Extract stateful logic into a `useX()` function that can call other hooks and returns values (not JSX). Wins: reuse, separation of concerns, testability. Examples: `useFetch`, `useLocalStorage`, `useDebounce`, `useTheme`. A custom hook shares *logic*, not *state* — each caller gets its own state.

---

## 3. Context API

**Problem it solves:** prop drilling — threading data through components that don't use it.

**Three steps:**
```js
const ThemeCtx = createContext(defaultValue);           // 1. create
<ThemeCtx.Provider value={theme}>…</ThemeCtx.Provider>  // 2. provide
const theme = useContext(ThemeCtx);                     // 3. consume
```
`createContext`'s default is used **only** when there's no Provider above. `useContext` finds the nearest Provider *above* the calling component. `📁` `react-terms/src/hooks/UseContext.js`

> 🔧 **Correction (old note: "Context is for static content, not dynamic data"):** Not accurate. Context handles dynamic data fine. The **real** senior point is a *performance* one: **when the Provider's `value` changes, every consumer re-renders** — even consumers that only care about an unchanged part of the value. And if you pass an inline object `value={{a, b}}`, it's a new reference every render, re-rendering all consumers each time.

**Mitigations (say these):**
- Memoize the value: `const value = useMemo(() => ({a, b}), [a, b])`.
- **Split contexts** by change frequency (e.g. separate `ThemeContext` from `UserContext`) so a change in one doesn't re-render the other's consumers.
- For high-frequency updates, use an external store (Redux/Zustand) with selectors instead.

**Context vs Redux (the classic ⭐):** Context is a **dependency-injection / transport** mechanism, not a state manager — it has no reducers, middleware, devtools, or selective subscription. Use Context for low-frequency global-ish values (theme, locale, current user, DI). Use Redux/Zustand when you have frequently-changing shared state, complex update logic, async flows, or need time-travel debugging and fine-grained subscription. Full comparison in §5.

---

## 4. React Router (v6+)

**Router flavors:**
- `createBrowserRouter` — real URLs (SEO-friendly). **Preferred.**
- `createHashRouter` — `#/…` URLs when you can't configure the server.
- `createMemoryRouter` — in-memory, for tests.
- (Older component API: `<BrowserRouter>` / `<HashRouter>`.)

**Data APIs (v6.4+):**
- **Loaders** — fetch data *before* a route renders; read with `useLoaderData`. Enables prefetching and avoids render-then-fetch waterfalls.
- **Actions** — handle non-GET submissions (POST/PUT/PATCH/DELETE); read with `useActionData` (common for form validation errors).
- **`errorElement`** — catches errors (incl. thrown from loaders/actions) at its level and below; errors **bubble up** to the nearest one → always put one at the root. Read with `useRouteError`.

**Navigation & params:**
- `useNavigate()` — navigate programmatically; `<Navigate replace/>` — redirect (replace history entry, e.g. after login).
- `useParams()` — path params (`/user/:id`); `useSearchParams()` — query string get/set.
- `useLocation()` — current location object.
- **Index route** — default child shown at the parent's URL.
- **`<Outlet/>`** — where nested child routes render; `useOutletContext()` passes data parent → child.
- **`*`** — wildcard / catch-all (404), distinct from `errorElement` (thrown errors).

**Protected routes / RBAC:** wrap routes in a guard that checks auth/role and `<Navigate>`s away if unauthorized. `📁` `react-terms/src/routing-rbac/`

> Your existing router notes are accurate — this is the condensed version. Full detail lives in the old `reactjs.md` if needed.

---

## 5. Redux & Redux Toolkit (deep) ⭐

> This is the section to over-prepare. It was the thinnest/most dated part of your notes, and interviewers push hard on it.

### The mental model
Redux is a **predictable state container**. Core ideas (the "three principles"):
1. **Single source of truth** — one store holding the whole app state as one object tree.
2. **State is read-only** — the only way to change it is to **dispatch an action** (a plain object describing *what happened*).
3. **Changes via pure reducers** — `(state, action) => newState`. Given the same input, same output; no mutation, no side effects, no async.

Data flow is **unidirectional** (Flux): `UI → dispatch(action) → middleware → reducer → new state → UI re-renders`.

### The pieces ⭐
- **Store** — holds state; `getState()`, `dispatch(action)`, `subscribe(listener)`.
- **Action** — `{ type: 'todos/added', payload }`. Type is a string describing the event.
- **Action creator** — a function returning an action.
- **Reducer** — pure function computing the next state. **Must not mutate** — return new objects/arrays (`{...state, ...}`). Combine per-feature reducers with `combineReducers`.
- **Dispatch** — sends an action into the store.
- **Selector** — a function `state => slice` that reads from the store. Keeps components decoupled from state shape.

### react-redux (the binding)
- **`<Provider store={store}>`** — makes the store available via context.
- **`useSelector(fn)`** — subscribe to a slice; component re-renders when the selected value changes (compared with `===` by default — return primitives or memoized objects).
- **`useDispatch()`** — get `dispatch`.
- Legacy `connect(mapStateToProps, mapDispatchToProps)(Component)` — the HOC API; `connect` itself is an HOC. Know it because older code and interviewers use it, but hooks are the modern default.

> ⭐ **Why pure reducers + immutability?** Predictability, time-travel debugging (replay actions), cheap change detection via reference equality (`prev === next` → skip re-render), and safe undo/redo. Mutating state breaks all of these — react-redux won't detect the change and the UI won't update.

### Middleware & async ⭐
Reducers are sync and pure, so **async lives in middleware**. Middleware sits between `dispatch` and the reducer: `dispatch → mw1 → mw2 → reducer`. Signature: `store => next => action => {}`.
- **Redux Thunk** — lets an action creator return a *function* `(dispatch, getState) => {}` instead of an object. Do your async there and dispatch plain actions with the results. Simple, imperative, the default (bundled in RTK).
- **Redux Saga** — uses generator functions and a declarative effects model (`takeLatest`, `call`, `put`, `fork`). Better for complex flows: cancellation, debouncing, racing, long-lived background tasks. Heavier concept load.
- **Rule of thumb:** thunks for most apps; saga only when you genuinely have complex concurrent async orchestration.

### Redux Toolkit (RTK) — the modern default ⭐
RTK is the **officially recommended** way to write Redux. It removes the boilerplate the old notes complained about.
- **`configureStore`** — sets up the store with good defaults (thunk, DevTools, dev-mode immutability & serializability checks).
- **`createSlice`** — generates action creators + reducers from one object. Uses **Immer** so you can "mutate" draft state and it produces immutable updates under the hood:
  ```js
  const todos = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      added: (state, action) => { state.push(action.payload); }, // Immer → safe
    },
  });
  export const { added } = todos.actions;
  ```
- **`createAsyncThunk`** — standardizes async: auto-dispatches `pending`/`fulfilled`/`rejected` actions.
- **`createEntityAdapter`** — normalized CRUD state + built-in selectors.

> 🔧 **Correction (old note: "Redux drawback = hard to debug/test"):** Outdated. With RTK + Redux DevTools, Redux is one of the *most* debuggable/testable state solutions (pure reducers test trivially; DevTools give time-travel and action logs). The real modern critique is "boilerplate," which RTK largely solved. `📁` `react-terms/src/redux-toolkit/store.js`, `RTK.js`

### RTK Query
A **data-fetching & caching** layer built into RTK (like React Query, but Redux-native). You define endpoints; it generates hooks (`useGetTodosQuery`, `useAddTodoMutation`) and handles caching, deduping, invalidation, loading/error state, and refetching. Often removes the need to hand-write thunks/slices for server data.

### Selectors & memoization — Reselect ⭐
`useSelector` runs after **every** dispatch. If a selector *derives/computes* data (filter, sort, map), it would recompute every time and, if it returns a new array/object, cause a re-render even when inputs didn't change. **Reselect's `createSelector`** memoizes: recomputes only when its inputs change, returns the same reference otherwise.
```js
const selectVisibleTodos = createSelector(
  [state => state.todos, state => state.filter],
  (todos, filter) => todos.filter(t => t.status === filter) // recomputed only on input change
);
```

### Normalized state ⭐
Store collections as `{ ids: [...], entities: { [id]: {...} } }` rather than nested arrays. Benefits: O(1) lookup/update by id, no duplication, no deep-nesting update pain. `createEntityAdapter` does this for you.

### Slices & folder structure
- **Slice** = the state + reducers for one feature/module. Multiple slices → follows SRP (each reducer owns one concern).
- Modern layout: **feature folders** ("ducks"/RTK style) — `features/todos/todosSlice.js` colocating slice, selectors, thunks — rather than splitting by type (`actions/`, `reducers/`).

### Redux vs alternatives (have an opinion) ⭐
| Need | Reach for |
|---|---|
| Theme, locale, current user (low-frequency global) | **Context** |
| Server cache (fetch/cache/sync remote data) | **RTK Query** or **React Query** |
| Complex client state, many consumers, async flows, devtools | **Redux Toolkit** |
| Lightweight global state, minimal boilerplate | **Zustand / Jotai** |
| Local component state | **useState / useReducer** |

Senior framing: *"Not all state is the same. Separate **server state** (React Query / RTK Query) from **client/UI state** (useState, Zustand, or Redux for the complex cases). Redux is overkill for small apps; it shines when many components share complex, frequently-changing state that benefits from a strict, debuggable update model."*

**When NOT to use Redux:** small app, few shared states, or the state is really server cache — then a data-fetching library + local state is simpler.

---

## 6. Concurrent React (React 18) 🆕⭐

- **`createRoot`** (replaces `ReactDOM.render`) — opts into concurrent features. `hydrateRoot` for SSR.
- **Concurrency** — React can interrupt, pause, and resume rendering to keep the app responsive. It's about **update prioritization**, not multithreading. Urgent (typing, click) can preempt non-urgent (rendering a big filtered list).
- **Automatic batching** — see §1 (now batches in promises/timeouts/native handlers too).
- **Transitions** — `useTransition` / `startTransition` mark non-urgent updates (§2).
- **`useDeferredValue`** — lag a value to keep input responsive (§2).
- **Suspense for data fetching** — `<Suspense fallback>` now works for data, not just lazy components. A component "suspends" (throws a promise) while loading; the nearest Suspense boundary shows the fallback. Enables **streaming SSR** with `renderToPipeableStream` and **selective hydration** (hydrate interactive parts first).
- **`useId`**, **`useSyncExternalStore`**, **`useInsertionEffect`** (for CSS-in-JS libs) added here.

### Suspense & lazy loading / code splitting ⭐
Split the bundle so chunks load on demand → smaller initial load.
```js
const Heavy = React.lazy(() => import('./Heavy'));   // default export only
<Suspense fallback={<Skeleton/>}><Heavy/></Suspense>
```
"Suspend" = React pauses rendering that subtree until the promise resolves; the boundary shows the fallback meanwhile. Wrap with an **error boundary** to handle load failures. `📁` `react-terms/src/lazy-loading/`, `react-terms/src/suspense/`

---

## 7. React 19 + React Compiler 🆕⭐ (your notes stopped at 18 — don't get caught here)

### React Compiler (formerly "React Forget")
A build-time compiler that **auto-memoizes** components and values. It figures out what can be cached and inserts the equivalent of `useMemo`/`useCallback`/`React.memo` for you.
- **Impact:** you largely stop writing manual `useMemo`/`useCallback`. Still understand them for interviews and legacy code.
- Opt-in via a Babel/build plugin; relies on your components following the Rules of React (purity, no mutation during render). Breaking those rules is why the rules matter more now, not less.

### Actions & form handling
- **Actions** — async transitions are first-class. An async function passed to `startTransition` (or a form `action`) gets pending state, error handling, and optimistic updates handled for you.
- **`useActionState(fn, initial)`** — manage form/action state: returns `[state, formAction, isPending]`. Replaces a lot of manual loading/error `useState`.
- **`useFormStatus()`** — read the parent `<form>`'s pending state from a child (e.g. disable the submit button) without prop drilling.
- **`useOptimistic(state, updateFn)`** — show an optimistic UI immediately, auto-revert if the action fails. Great for likes, sends, toggles.
- **`<form action={fn}>`** — pass a function to a form's `action`; React manages submission as a transition.

### The `use()` API
- **`use(promise)`** — read a promise's value during render; suspends until it resolves (works with Suspense). Unlike hooks, `use()` **can be called conditionally / inside loops**.
- **`use(Context)`** — read context, also conditionally.

### Ergonomic wins
- **`ref` as a regular prop** — function components can receive `ref` directly; `forwardRef` is being retired.
- **`<Context>` as provider** — `<MyContext value={…}>` instead of `<MyContext.Provider value={…}>`.
- **Document metadata** — render `<title>`, `<meta>`, `<link>` anywhere; React hoists them to `<head>`.
- **Resource preloading** — `preload`, `preinit`, `prefetchDNS` APIs.
- **Ref cleanup functions** — a ref callback can return a cleanup function.

### React Server Components (RSC) — know the concept ⭐
Components that render **on the server**, ship zero JS for themselves, and can access server resources (DB, filesystem) directly. Reduce bundle size and enable data fetching without client waterfalls. **Server** components can't use state/effects/browser APIs; **`"use client"`** marks the boundary where interactivity (state, effects, events) begins. This is the model behind Next.js App Router. You don't need deep RSC unless the role is Next.js-heavy, but be able to explain the server/client split and why it exists.

---

## 8. Styling

- **CSS Modules** — `styles.module.css`; class names are locally scoped (hashed), no global collisions. `📁` `react-terms/src/accordion/Home.module.css`
- **Styled-components (CSS-in-JS)** — write scoped styles in JS via tagged templates; props-driven dynamic styles; automatic critical CSS; dead-code elimination of unused styles. Runtime cost (know that zero-runtime libs like **Tailwind**, **vanilla-extract**, **Linaria** exist as the modern trend).
- **Tailwind** — utility-first; no naming, small production CSS via purge. `📁` `projects/vite-tailwind`, `react-typescript` (uses Tailwind).
- **`useInsertionEffect`** exists specifically for CSS-in-JS libraries to inject styles before layout effects.

---

## 9. Testing ⭐

- **React Testing Library (RTL)** philosophy: **test behavior, not implementation** — query the DOM the way a user would (`getByRole`, `getByText`, `getByLabelText`), assert on what the user sees. Avoid testing internal state/instance.
- **Query priority:** `getBy*` (must exist) vs `queryBy*` (may be absent → assert null) vs `findBy*` (async, returns promise).
- **`user-event`** over `fireEvent` for realistic interactions.
- **`waitFor` / `findBy`** for async UI.
- **MSW (Mock Service Worker)** to mock network at the boundary instead of stubbing fetch. `📁` `react-testing/src/mocks/`
- **Jest** (or Vitest) as the runner; snapshot tests sparingly.
`📁` Full examples: `projects/react-testing/src/components/` (greet, counter, users, skills — with `.test`/`.spec`).

---

## 10. Internationalization (i18n)

Libraries: **react-i18next** / **FormatJS (react-intl)**. Concepts to name: translation resource files per locale, `t('key')` lookup, interpolation, pluralization rules, number/date/currency formatting (`Intl` API), and lazy-loading locale bundles. Keep it brief unless the role calls for it.

---

## 11. Design patterns ⭐

All four have runnable examples in `react-terms`.

- **Custom Hooks** — the modern default for sharing *stateful logic*. See §2.
- **Higher-Order Component (HOC)** — `withX(Component)` returns an enhanced component. Used by `React.memo`, `connect` (Redux), old `withRouter`. **Limitations:** prop-name collisions when nesting, wrapper-hell in the tree, hard to trace. Prefer hooks now. `📁` `react-terms/src/HOC/HOC.js`
- **Render props** — pass a function-as-child that returns JSX; the component calls it with data it manages. Decouples logic from rendering. `📁` `react-terms/src/render-prop-pattern/`
- **Compound components** — a parent + children that share implicit state via context (`<Tabs><Tab/></Tabs>`, `<Accordion>`). Flexible, declarative composition. `📁` `react-terms/src/compoundComponents/`, `react-terms/src/accordion/`
- **Function composition** — compose small functions/components rather than inherit. React favors composition over inheritance.
- **Provider pattern** — a Context Provider component encapsulating shared state. `📁` `react-terms/src/useReducer-useContext/CountProvider.js`

### Stale closures 🔧⭐
A closure captures the state/props from the render it was created in. If you read state inside a `setInterval`/event handler set up once (`[]` deps), you get the **stale** value forever. Fixes:
- **Updater form**: `setCount(c => c + 1)` (doesn't read captured `count`).
- **Ref to latest value**: keep `latest.current = value` in an effect and read `latest.current` inside the callback.
- **Correct deps**: include the value in the effect deps so the closure is recreated.

---

## 12. Performance optimization (checklist) ⭐

- **Don't fix what isn't slow** — profile first with **React DevTools Profiler** (find what re-renders and why).
- **`React.memo`** + stable props (`useMemo`/`useCallback`) to cut needless re-renders — or let the **React Compiler** do it (§7).
- **Code splitting** — `React.lazy` + `Suspense`; route-based splitting.
- **Route loaders** — prefetch data before navigation (avoid render-then-fetch waterfalls).
- **Virtualize long lists** — `react-window` / `react-virtualized` (render only what's visible).
- **Concurrent features** — `useTransition` / `useDeferredValue` to keep input responsive during heavy renders.
- **Debounce / throttle** expensive handlers (search, resize, scroll). `📁` `react-terms/src/autosuggest/`
- **Keys** — stable keys so React reuses DOM (don't use index for dynamic lists).
- **Lift state down / colocate** — keep state as local as possible so re-renders stay small; the inverse of lifting up.
- **Fragments** — avoid extra DOM nodes.
- **Caching** — RTK Query / React Query for server data; IndexedDB/localStorage for assets.
- **Skeletons/Suspense fallbacks** for perceived performance.
- **Bundle hygiene** — tree-shaking, analyze bundle, avoid huge deps.

`📁` See also `react-terms/src/infinite-scroll/`, `react-terms/src/pagination/`.

---

## 13. Rapid-fire & gotchas

- **Why keys matter / not index:** identity for diffing; index breaks on reorder. (§1)
- **Why can't hooks be conditional:** React tracks them by call order. (§2)
- **`useEffect` runs twice in dev:** Strict Mode; surfaces missing cleanup. (§2)
- **Effect vs event:** external system → effect; user action → handler. (§2)
- **`useMemo` value vs `useCallback` function.** (§2)
- **Controlled vs uncontrolled inputs.** (§1)
- **`React.memo` + why props must be stable.** (§1/§2)
- **Reducers must be pure + immutable — why.** (§5)
- **Context re-renders all consumers on value change — mitigations.** (§3)
- **Server state vs client state — different tools.** (§5)
- **VDOM re-render ≠ DOM update.** (§1)
- **Fiber = interruptible reconciliation → enables concurrency.** (§1/§6)
- **React 19: Actions, `use()`, `useOptimistic`, Compiler, RSC.** (§7)

---

## Appendix: corrections applied vs the old notes

| Old note claim | Corrected |
|---|---|
| "setState updates state without re-rendering" | setState **triggers** the re-render; it's async/batched (§1) |
| "Context is for static content, not dynamic data" | Context handles dynamic data; real issue = **all consumers re-render** on value change (§3) |
| "useCallback caches an expensive function definition" | It's about **referential stability**, not expense (§2) |
| "Redux drawback: hard to debug/test" | Outdated — RTK + DevTools make it highly debuggable/testable (§5) |
| Stopped at React 18 | Added React 19 + Compiler + RSC (§7) |
| Redux shallow (no middleware/RTK/selectors/normalization) | Full middleware, thunk/saga, RTK, RTK Query, Reselect, normalized state (§5) |

---

*This doc supersedes `reactjs.md` and `advanced-components.md`. Those remain as raw source but should be treated as stale where they conflict with this file.*

