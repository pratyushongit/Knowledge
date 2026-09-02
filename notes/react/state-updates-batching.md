# State Updates, Batching & State Snapshot ⭐⭐⭐

## 1. State is a Snapshot 📸

Every render gets its **own snapshot of state**.

```js
const [count, setCount] = useState(0);
```

On the first render:

```text
count = 0
```

If we call:

```js
setCount(1);
console.log(count);
```

The `console.log` still prints:

```text
0
```

`setCount()` **does not immediately change the `count` variable of the current render**.

Instead, it tells React:

> "Use this new state when you render again."

Think of it like:

```text
Render #1
count = 0
    ↓
setCount(1)
    ↓
React schedules update
    ↓
Render #2
count = 1
```

### Important

The current render's `count` **never changes**.

Each render has its own snapshot:

```text
Render #1 → count = 0
Render #2 → count = 1
Render #3 → count = 2
```

---

## 2. State Updates Go Into an Update Queue 📥

Calling a setter doesn't immediately re-render the component.

React puts the update into an **update queue**.

```js
setCount(...);
setCount(...);
setCount(...);
```

Conceptually:

```text
Update Queue

┌─────────────────┐
│ Update 1        │
│ Update 2        │
│ Update 3        │
└─────────────────┘
        ↓
React processes updates
        ↓
New state
        ↓
Render
```

This becomes important when multiple updates happen during the same event.

---

# 3. State Updates Are Batched ⭐

React **batches multiple state updates** and can perform one render instead of rendering after every setter.

```js
function handleClick() {
  setCount(...);
  setName(...);
  setAge(...);
}
```

Conceptually:

```text
setCount()
setName()
setAge()
    ↓
Batch updates
    ↓
ONE render
```

### Before React 18

Automatic batching mainly happened inside **React event handlers**:

```jsx
<button onClick={handleClick}>
```

### React 18+

Automatic batching was expanded to updates inside:

- React event handlers
- Promises
- `setTimeout`
- native event handlers
- other async contexts

For example:

```js
setTimeout(() => {
  setCount(1);
  setName("John");
}, 1000);
```

These updates can be batched into one render.

### Important distinction

**Batching ≠ update queue**

They are related but different:

```text
Update queue
→ How React collects and processes state updates

Batching
→ How React groups updates to reduce unnecessary renders
```

---

# 4. Two Ways to Update State

There are two important forms:

### Value / Non-functional form

```js
setCount(count + 1);
```

### Functional / Updater form

```js
setCount((prev) => prev + 1);
```

The difference becomes important when **multiple updates happen before the next render**.

---

# 5. Value Form Uses the Current Render's Snapshot

Suppose:

```text
count = 0
```

And we do:

```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

Because all three calls happen during the **same render**, all three see:

```text
count = 0
```

So React effectively receives:

```js
setCount(1);
setCount(1);
setCount(1);
```

The queue conceptually becomes:

```text
┌──────────────┐
│ set to 1     │
│ set to 1     │
│ set to 1     │
└──────────────┘
```

React processes them:

```text
Initial: 0

set 1 → 1
set 1 → 1
set 1 → 1

Final: 1
```

Therefore:

```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

results in:

```text
+1
```

**not +3.**

---

# 6. Functional / Updater Form Uses the Latest Queued State

Now:

```js
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

Instead of giving React a value, we're giving React a **function**.

React processes each function against the result of the previous update.

Starting with:

```text
count = 0
```

Queue:

```text
┌────────────────────┐
│ prev => prev + 1   │
│ prev => prev + 1   │
│ prev => prev + 1   │
└────────────────────┘
```

Processing:

```text
0 → 1
1 → 2
2 → 3
```

Final:

```text
count = 3
```

Therefore:

```js
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

results in:

```text
+3
```

---

# 7. Value Form vs Functional Form

## Value Form

```js
setCount(count + 1);
```

Means:

> "Set the state to this value that I calculated from my current snapshot."

Example:

```text
Snapshot:
count = 0

count + 1
    ↓
1

setCount(1)
```

It is essentially saying:

```text
"Set count to 1."
```

---

## Functional Form

```js
setCount((prev) => prev + 1);
```

Means:

> "When you process this update, give me the latest queued state and I'll calculate the next state."

Example:

```text
Current queued state = 0

prev => prev + 1
        ↓
       1

prev => prev + 1
        ↓
       2
```

---

# 8. Mixed Value and Functional Updates

This example demonstrates the update queue:

```js
setCount(count + 1);
setCount((prev) => prev + 1);
setCount(count + 1);
setCount((prev) => prev + 1);
```

Suppose:

```text
count = 0
```

The value-form updates use the snapshot:

```js
setCount(count + 1);
```

becomes:

```js
setCount(1);
```

So the queue is conceptually:

```text
set 1
+1
set 1
+1
```

React processes it sequentially:

```text
Initial = 0

set 1 → 1
+1    → 2
set 1 → 1
+1    → 2
```

Final:

```text
count = 2
```

### Important rule

> **Value updates replace the current queued value. Functional updates calculate from the current queued value.**

---

# 9. Multiple Clicks Are Different

This is an important distinction.

Suppose:

```js
function handleClick() {
  setCount(count + 1);
}
```

If you click the button **4 separate times**, you get:

```text
Click 1
snapshot = 0
    ↓
count = 1

Click 2
snapshot = 1
    ↓
count = 2

Click 3
snapshot = 2
    ↓
count = 3

Click 4
snapshot = 3
    ↓
count = 4
```

So:

```js
setCount(count + 1);
```

is **not inherently wrong**.

It works perfectly when you're doing one update per render/event.

The problem occurs when **multiple updates that depend on the previous state happen before the next render**.

---

# 10. When Should You Use Each Form?

## Use Value Form When

The new state doesn't depend on the previous state:

```js
setName("John");
setIsLoggedIn(true);
setTheme("dark");
```

Or when doing one simple state update:

```js
setCount(count + 1);
```

---

## Use Functional Form When

The new state **depends on the previous state**, especially when multiple updates may happen together:

```js
setCount((prev) => prev + 1);
```

Other examples:

```js
setItems((prev) => [...prev, newItem]);
```

```js
setUsers((prev) => prev.filter((user) => user.id !== id));
```

```js
setCount((prev) => prev * 2);
```

General pattern:

```js
setState((prev) => calculateNewState(prev));
```

---

# 11. Stale Closure Problem

Because each render has its own snapshot, functions can capture an **old state value**.

For example:

```js
function handleClick() {
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
}
```

The callback captures the `count` from the render in which `handleClick` was created.

If the state changes before the timeout executes, the callback may use an **old snapshot**.

The updater form avoids depending on that captured value:

```js
setTimeout(() => {
  setCount((prev) => prev + 1);
}, 1000);
```

Now React uses the latest queued state when processing the update.

This is why:

> **Use the updater form when the new state depends on the previous state.**

---

# 12. Snapshot + Queue + Batching Together

This is the complete mental model:

```text
                 RENDER
                   ↓
          ┌─────────────────┐
          │ State Snapshot  │
          │                 │
          │ count = 0       │
          └─────────────────┘
                   ↓
              User action
                   ↓
       ┌───────────────────────┐
       │ setCount(...)         │
       │ setCount(...)         │
       │ setCount(...)         │
       └───────────────────────┘
                   ↓
          Update Queue
                   ↓
       ┌───────────────────────┐
       │ Process updates       │
       │                       │
       │ Value updates         │
       │ Functional updates    │
       └───────────────────────┘
                   ↓
             New state
                   ↓
              ONE render
                   ↓
          New State Snapshot
```

---

# ⭐ Interview Summary

1. **State is a snapshot:** every render gets its own state values.

2. Calling `setState` **doesn't immediately change the current render's state variable**.

3. State updates are placed into React's **update queue**.

4. **Batching** allows React to process multiple updates and perform fewer renders.

5. React 18+ provides **automatic batching** across React events, promises, timers, native handlers, and other async contexts.

6. `setState(value)` is a **value/direct update** and uses the value calculated from the current render's snapshot.

7. `setState(prev => newValue)` is a **functional/updater update** and receives the latest queued state.

8. Multiple value updates using the same snapshot can overwrite each other:

```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// +1
```

9. Multiple functional updates are processed sequentially:

```js
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);

// +3
```

10. **Use the updater form whenever the new state depends on the previous state**, especially when multiple updates or asynchronous callbacks are involved.

---

## 🧠 One Sentence to Remember

> **Snapshot tells you what state your current code sees; the update queue holds the changes React needs to process; batching determines how those updates are grouped into renders; functional updates let each queued update use the latest state.**
