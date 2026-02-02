# React Context for Stateful dataExample
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing a basic stateful React context setup.

---

## To run the app:
```bash
cd reactContextStateful
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:
```bash
cd tutorials

yarn create vite reactContextStateful --template react
cd reactContextStateless
```

## Initiate version control:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -m master main
```

## Upload to GitHub:
```bash
gh auth status
gh repo create reactContextStateful --public --source=. --remote=origin --push
```

## Open in editor (optional):
```bash
code
```

## Create React component (context consumer):
```bash
cd src
code ComponentExample.jsx
```

```js
// src / ComponentExample.jsx

import { useContext, useEffect } from 'react';
import { ContextExample } from './App.jsx';

export default function ComponentExample() {
    const { dataExample, setDataExample } = useContext(ContextExample);

    useEffect(() => {
        setDataExample("Stateful");
    }, [setDataExample]);

    return (
        <div style={{ width:400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>{ dataExample }</p>
        </div>
    );
}
```

## Create context provider in App.jsx:
```js
// src / App.jsx

import { useState, createContext } from 'react';
import ComponentExample from './ComponentExample.jsx';

export const ContextExample = createContext(null);

function MyProvider({ children }) {
    const [dataExample, setDataExample] = useState(null);

    return (
        <ContextExample.Provider value={{ dataExample, setDataExample }}>
            {children}
        </ContextExample.Provider>
    );
}

function App() {
    return (
        <MyProvider>
            <ComponentExample />
        </MyProvider>
    );
}

export default App;
```




## Additional explanation:

- To pass stateful dataExample create MyProvider component with React reserved keyword **children**. This keyword means that everything this component wraps around is passed as properties in an object, which in itself is a parameter called "children". In this component the dataExample is also passed into the **value** property.

```js
    function MyProvider({ children }) {
    const [dataExample, setDataExample] = useState(null);

    return (
        <ContextExample.Provider value={{ dataExample, setDataExample }}>
            {children}
        </ContextExample.Provider>
    );
}
```


- Wrap consumers in a provider like this:
```js
        <MyProvider>
            <ComponentExample />
        </MyProvider>
```

## Quick-start guide:
1. Create provider-consumer relationship:
    ```const ContextExample = createContext(null)```

2. Create Context Provider Component:
    ```js
    function MyProvider({ children }) {
        const [dataExample, setDataExample] = useState(null);

        return (
            <ContextExample.Provider value={{ dataExample, setDataExample }}>
                {children}
            </ContextExample.Provider>
        );
        }
    ```

3. Wrap consumers in a provider:
    ```js
        <MyProvider>
            <ComponentExample />
        </MyProvider>
    ```

4. Use useEffect hook to update stateful dataExample inside a consumer to avoid infinite loop and crush:
    ```js
        const { dataExample, setDataExample } = useContext(ContextExample);

        useEffect(() => {
            setDataExample("Stateful");
        }, [setDataExample]);
    ```