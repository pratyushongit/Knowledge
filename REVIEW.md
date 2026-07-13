# Review — suspected errors in the notes

While restructuring the notes (2026-07-13), the original wording was preserved **verbatim** — nothing below was edited in the note files. These are claims that look factually off and are worth a second look. Each is quoted from the note as written; decide for yourself and fix in the source `.md` if you agree.

## `notes/networking-security/security-issues.md`
- **"XSRF -> Cross site resource forgery"** — the acronym CSRF/XSRF expands to Cross-Site **Request** Forgery, not "resource forgery".

## `notes/networking-security/authentication-and-authorization.md`
- **"It is serverless"** (stateless auth, Pros) — stateless auth is not the same as "serverless"; the intended point is probably that the server need not store session state.
- **"the signing he signaturealgo mentioned in the header"** — garbled phrase, looks like a transcription slip.
- **"HTTP -> There is a distinct connection for every request … the server has to create a new handshake for every request. Once req is completed, connection is closed."** — this describes HTTP/1.0; HTTP/1.1 uses persistent (keep-alive) connections by default.

## `notes/javascript/oop.md`
- **"prototype on constructors function is available through Object.prototype"** — a constructor function's prototype is reached via `Fn.prototype`; `Object.prototype` sits at the top of the chain, not the constructor's own prototype.

## `notes/dsa/cheat-sheet.md`
- **"For [Group Anagrams] use [hash map] where i take an array of 26 length and form a key based on the diff …"** — anagram grouping keys on a character-frequency count, not a "diff" (the word "diff" appears carried over from the Two Sum line above, where it is correct).

## `notes/react/reactjs.md`
- **"use createRoot and createHydrate insead of render and hydrate"** — `createHydrate` is not a React API; the React 18 API is `hydrateRoot` (correctly named in `advanced-components.md`).
- **"npm create-react app my-app --template <redux/redux-typescript>"** — the actual command is `npx create-react-app` (single hyphenated package name).
- **Under the "Webpack ->" entry**, the trailing sentences ("… you use refs to access form values directly from the DOM. This method allows for less control …") describe **uncontrolled components**, not Webpack — they appear misplaced.

## `notes/build-tools/webpack.md`
- **"GENERATE_SOURCEMAPS=false react-scripts build"** (and the repeated `.env` version) — the Create React App variable is `GENERATE_SOURCEMAP` (singular, no trailing S).
- **`devtool: "source-map"`** in the sample config — the surrounding text is about *removing* source maps, yet this option *generates* full source maps.
