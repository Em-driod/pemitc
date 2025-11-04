## Step-by-Step Guide to Building with `useContext`

This guide will walk you through the process of setting up and using `useContext` in your React application from scratch.

### Step 1: Create the Context

The first step is to create a new context. This is done using the `createContext` function from React. It's best practice to create this in a separate file so it can be easily imported where needed.

**Action:** Create a new file named `src/ThemeContext.js`.

```javascript
// src/ThemeContext.js
import { createContext } from 'react';

// Create a context with a default value (in this case, 'light')
export const ThemeContext = createContext('light');
```

### Step 2: Create a Provider Component

While you can use `ThemeContext.Provider` directly in your `App.js`, a common and recommended pattern is to create a custom Provider component. This component will be responsible for managing the state of the context and providing it to its children.

**Action:** Create a new file named `src/ThemeProvider.js`.

```javascript
// src/ThemeProvider.js
import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Step 3: Wrap Your App with the Provider

Now you need to make the context available to the components that will need it. You do this by wrapping your main application component (or a specific part of your component tree) with the custom provider you just created.

**Action:** Modify your `src/main.jsx` (or `src/index.js`) file.

```javascript
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider'; // Import the provider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Step 4: Consume the Context in a Component

Finally, you can access the context's value in any component that is a descendant of the provider. You use the `useContext` hook for this.

**Action:** Create a component that uses the theme, for example, `src/components/ThemeToggleButton.js`.

```javascript
// src/components/ThemeToggleButton.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeToggleButton = () => {
  // Use the useContext hook to access the theme and the toggle function
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ 
        background: theme === 'light' ? '#FFF' : '#333', 
        color: theme === 'light' ? '#000' : '#FFF' 
    }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;
```

Now you can use this `ThemeToggleButton` component anywhere in your app, and it will have access to the shared theme state and the function to change it.
