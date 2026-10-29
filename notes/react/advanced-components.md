# Reactjs Advanced components

> ⚠️ **Superseded by [`react-redux-master.md`](./react-redux-master.md)** — read that for interview prep. Its Fiber, reconciliation, and patterns sections absorb and extend this file. Kept as raw source only.

## Advanced React features

Actual DOM -> It is the structured representation of an HTML webpage. It enables JS to manipulate HTML elements on the webpage and style them. DOM structure is created when the page loads. It is basically a tree of objects where every object is an HTML element.

Virtual DOM -> is the virtual representation of Real DOM. It is a giant tree of objects. React update the state changes in Virtual DOM first and then with the help of reconiliation and diffing algorithm it syncs with Real DOM.

React DOM -> React DOM is a package that provides methods to connect React with the browser's DOM. Few DOM-specific methods are:

- createRoot() - creates a React root inside a DOM element, where React can render and manage the application.
- hydrateRoot() - is used when HTML is already rendered on the server. It connects React to that existing HTML and makes it interactive.

### React is declarative

Let's take an example of a different ui lib called jquery. In Jquery we have to manually traverse though the dom tree and make the modifications ourselves. Instead of imperatively manipulating the DOM to reflect changes, developers describe how the UI should look for any given state, and React takes care of updating the actual DOM efficiently to reflect the updates state. This is achieved through React's use of virtual DOM and its reconciliation algorithm.

### React.memo()

By wrapping a component in React.memo() we are telling React that this component is pure. You don't need to re-render it unless its props change. Hence React memoizes or specifically memorizes the result and provides the same result when the same props are passes to it. Thus not causing a rerender to happen.

Syntax: export default React.memo(<Component />)

---

### When the state or props changes in a React component, React triggers a process to re-render the component and its children. Here's how it typically works:

State Update: When you call setState() or use hooks like useState() to update the state within a component, or When a parent component passes new props to a child component, React schedules a re-render of that component along with the child components.

Component Re-render: React re-renders the component by calling its render() method again. This generates a new virtual DOM representation of the component and its children based on the updated state.

Virtual DOM Comparison: React then compares the new virtual DOM with the previous one generated during the previous render cycle. It identifies the differences between the two virtual DOM trees using a process called "diffing."

Minimal DOM Updates: React determines the minimal set of changes needed to update the actual DOM to reflect the changes in the virtual DOM. This process optimizes performance by avoiding unnecessary updates to the DOM. This process is called reconciliation.

Update Child Components: If the changes in the virtual DOM affect child components, React follows the same process recursively for each child component. It re-renders the affected child components and updates the DOM accordingly.

---

### Reconciliation process

It is a process that allows React to update the Actual DOM to reflect the changes in the virtual dom with minimal set of changes.

### Rules of diffing

- Elements Of Different Types - old tree is dropped and a new DOM tree is created
- DOM Elements Of The Same Type - only the atrributes changed are updated in the underlying DOM node.
- Component Elements Of The Same Type - When comparing 2 same components among the 2 DOM trees, the component instance stays the same, and just update the props passed to it. As a result of that, render method is called and an updated virtual DOM is created and diffed with the pre updated Virtual DOM and reconciliation takes place recursively.
- Recursing On Children - By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.

### Key attribute

It helps to uniquely identify elements of the same type within the same array of children. Keys help React identify which items have changed, are added, or are removed.
Elements which have the same key and same type will be reused between re renders regardless of their position in the array.

Why shouldn't we use index as a key? - Because an index identifies an item's position, not the item itself. When the list is reordered, inserted into, or deleted from, the indexes can change, causing React to reuse the wrong component instances and potentially causing bugs.

### Diffing algorithm

diffing algorithm is a part of the reconciliation process of React to efficiently update the actual DOM.

### React Fiber

React fiber refers to the new reconciliation engine that was introduced in React version 16. Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and prioritize tasks. We can pause work and come back to it later. We can also reuse previously completed work or maybe abort it if it is not needed. As opposed to the old Stack reconciler, it is asynchronous.

### Stack reconciler

The Stack Reconciler was the original algorithm used by React for rendering and updating components. Stack was synchronous and it has this name because it worked like a stack. You could add items, and remove items, but it had to work until the stack was empty. It couldn’t be interrupted.

### Fiber node

Fiber nodes represent elements in the React virtual DOM and are used by the reconciliation process to efficiently update the actual DOM. It contains properties such as type, key, props passed to the component/element.

### Never create components inside components

Components are basically functions. When we change a state in the component, the component rerenders. Now since the child component is defined inside the parent component. It will be recreated.
When the diffing happens, it compares the nested components/functions. 2 functions will never be the same as they are not primitives and the comparison is happening on the reference of the function, hence the same nested components will be recreacted. Also it will lose it's state on every remount. This leads to poor performance and bugs.

---

### React.StrictMode

React.StrictMode is a development-only tool that helps you find potential problems in your React code. It

- Double-invokes render
- Double-invokes effects
- Warns about deprecated/legacy APIs
- Detects unexpected side effects

## React Query

is a powerful library for data fetching and state management in React applications.
It manages loading and error states automatically through the useQuery hook's returned values (data, error, isLoading)

useQuery() -> to Read data from API
useMutation() -> to Create, Update, Delete data through API

```jsx
const createProduct = async (product) => {
  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response.json();
};

function Products() {
  const queryClient = useQueryClient();

  // GET
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // POST
  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  // PUT
  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  // DELETE
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  // ...
}
```

---

## Function composition

Function composition ->
In React, function composition means combining multiple functions/components together so that each one adds or performs a specific piece of behavior, producing a more useful final function or component.

Instead of putting all logic into one large function, we can build functionality by combining smaller functions.
This concept is particularly common with Higher-Order Components (HOCs)

```js
const withAuth = (Component) => {
  return (props) => {
    console.log("Checking authentication...");
    return <Component {...props} />;
  };
};

const withLogger = (Component) => {
  return (props) => {
    console.log("Component rendered");
    return <Component {...props} />;
  };
};

const EnhancedComponent = withAuth(withLogger(MyComponent));
```

---

## Important Design patterns in React JS

- Custom Hooks
- HOC
- Render Prop pattern
- Compound Components

---

## HOC

Higher order components:

```js
const NewComponent = higherOrderComponent(OriginalComponent);
```

What -> It is a function, that takes in a component as an argument, enhances it in some way and returns back the enhanced component.

Why -> Code Reusability, Easy to scale, Separation of Concerns.

When -> To share common functionality between several components.

How -> If in our project we want to add some functionality to several components then a better approach would be to keep this functionality in one place in form of a function. Supply a component to it. Let the function enchance the component by adding the logic that we want to the component and then returning back an enhanced component.
HOCs usually start with the 'with' keyword. For example -> withAuthentication.js , withAuth.js, withErrorhandling.js, withDataLoaded.js, withDarkMode.js
Multiple Hocs can be wrapped around a component -> withDarkMode(withAuthentication(Component));

Real life example -> Suppose we add some products to the shopping cart. Now whenever we navigate to a new page we pass the shopping cart component through a HOC which checks if the products in the cart are still in stock or not. If not, show a popup, toast notigication on the screen.

Uses: Conditional rendering, styling across multiple components, if we want to share a common prop across multiple components

Real life examples:
React.memo, React.lazy is an HOC.
withRouter is an HOC-> Get access to history object's properties
connect() of Redux -> It is used to connect a React component to a Redux store.

Limitations of HOC:

Prop collision or Prop name collision -> So if we are using multiple nested HOCs and in one HOC we pass a prop 'name'. Now in other HOC we might overwrite the prop value with a different one while keeping the same prop name 'name'. This leads to prop collision.
Debugging is thougher when we wrap a component with multiple HOCs

```jsx
function withUser(Wrapped) {
  return function Enhanced(props) {
    const user = useContext(UserContext);
    return <Wrapped user={user} {...props} />; // props spread AFTER
  };
}

const UserProfile = withUser(Profile);
<UserProfile user={someOtherUser} />;
```

Solve the above limitations using -> Render props or custom hooks.

---

## Render props pattern

Render Props is a React pattern where a component receives a function as a prop and calls that function to decide what should be rendered. The component handles the logic, while the parent decides what UI to render.

Libraries that use render props include-> React Router. example -> <RouterProvider router={router}></RouterProvider>
Render props are used in - fetching data, form validation, mouse tracking

Advantages:

- Loose coupling
- Write reusable code
- Separation of concern
- Easier to test

---

## Compound Components

Compound Components is a React design pattern where multiple related components are designed to work together, with a parent component managing shared state and behavior, typically using Context, while allowing consumers to control the structure and composition of the UI.

---

## Lazy loading / code splitting

Lazy loading in React is a technique used to improve the performance of your application by splitting our code into multiple chunks and only loading components or data when they are actually needed during runtime. This can significantly reduce the initial load time and improve the user experience, especially in large applications.

The best way to introduce code-splitting into your app is through the dynamic import()
The React.lazy function lets you render a dynamically imported component as a regular component.

```js
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

Suspend - "suspend" refers to the mechanism by which React temporarily pauses the rendering of a component while it waits for some asynchronous operation to complete.

Suspense - Since React.lazy returns a Promise, you need to wrap the lazy-loaded component with React.Suspense. The Suspense component allows you to specify a fallback that is displayed while the lazy component is being loaded.

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
</Suspense>
```

You can even wrap multiple lazy components with a single Suspense component.

Note - React.lazy function supports default exports only.

Suspense can also be used to show a fallback UI when a component suspends while fetching data from an API. For this we need to return a promise from the component in the similar fashion how Rect.lazy returns a promise.

---

## React Portals

It lets you render some children into a different part of the DOM, outside the DOM hierarchy of the parent component.

---

## Prevent stale closures

- Use the Functional Update Form of setState
- Use a Ref to Keep Track of State
