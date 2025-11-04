
## Understanding `useContext` in React

The `useContext` hook in React provides a way to pass data through the component tree without having to pass props down manually at every level. This is especially useful for sharing "global" data for a tree of React components, such as the currently authenticated user, theme, or preferred language.

### The Problem: Prop Drilling ...

Imagine you have a component deep in your application that needs access to some data from a top-level component. Without `useContext`, you would have to pass that data as a prop through every single intermediate component. This is called "prop drilling" and can become cumbersome and make your code harder to maintain.

### The Solution: `useContext`

`useContext` allows you to "provide" a value at a high level in your component tree and "consume" it at any lower level without explicitly passing props.

### How to Use `useContext`

There are three main parts to using the Context API:

1.  **`React.createContext()`**: This creates a Context object. When React renders a component that subscribes to this Context object, it will read the current context value from the closest matching `Provider` above it in the tree.

2.  **`Context.Provider`**: This component is used to wrap a part of your component tree where you want to make the context value available. It accepts a `value` prop to be passed to consuming components that are descendants of this Provider.

3.  **`useContext(MyContext)`**: This hook is used in a functional component to access the value from the nearest `Context.Provider` above it in the component tree.

### Example

Let's say we want to share a user's name throughout our app.

**1. Create the Context:**

First, we create a context to hold the user information.

```javascript
// UserContext.js
import { createContext } from 'react';

export const UserContext = createContext(null);
```

**2. Provide the Context:**

Next, we use the `UserContext.Provider` in our main `App` component to provide the user's name to all components within it.

```javascript
// App.js
import React from 'react';
import { UserContext } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const userName = "John Doe";

  return (
    <UserContext.Provider value={userName}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
```

**3. Consume the Context:**

Now, any component inside `App` can use the `useContext` hook to get the user's name without it being passed as a prop.

```javascript
// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const userName = useContext(UserContext);

  return <h1>Welcome, {userName}</h1>;
}

export default UserProfile;
```

In this example, `UserProfile` can directly access the `userName` value from `App` without `App` needing to pass it as a prop. This makes the code cleaner and easier to refactor.
