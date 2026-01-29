# React Context Stateful Demo
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing a basic stateful React context setup.

---

## If you just downloaded the repository and want to see the app:
```bash
cd reactContextStateful
yarn install
yarn dev
```

## To build your own start a new Vite-React project:
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

## Create static context consuming React component:
```bash
cd src
code AnyComponent.jsx
```

```js
// src / AnyComponent.jsx

import { useContext, useEffect } from 'react';
import { MyContext } from './App.jsx';

export default function AnyComponent() {
    const { data, setData } = useContext(MyContext);

    useEffect(() => {
        setData("Stateful");
    }, [setData]);

    return (
        <div style={{ width:400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>{ data }</p>
        </div>
    );
}
```

## Create context provider in App.jsx:
```js
// src / App.jsx

import { useState, createContext } from 'react';
import AnyComponent from './AnyComponent.jsx';

export const MyContext = createContext(null);

function MyProvider({ children }) {
    const [data, setData] = useState(null);

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
}

function App() {
    return (
        <MyProvider>
            <AnyComponent />
        </MyProvider>
    );
}

export default App;
```




## Additional theory and explanation:
- MyContext is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.
    ```const MyContext = createContext(null)```

- It contains **MyContext.Provider** and **MyContext.Consumer** properties, which both point to the same object.

- Consumers get access to data once wrapped in a provider like this:
    ```<MyContext.Provider />```
and import useContext from 'react' and MyContext from the object location.

- The providers receives data ones the data is assigned to the value property
in the wrapper like this:
    ```<MyContext.Provider value={3} />```

- The wrapped consumer access the data like this:
    ```const value = useContext(MyContext)```
if it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest MyContext.Provider
If no provider is found, the default value is returned.

## Quick-start step guide:
1. Create provider-consumer relationship:
    ```const MyContext = createContext(null)```

2. Wrap consumers in a provider:
    ```<MyContext.Provider />```

3. Supply the data via "value" property:
    ```<MyContext.Provider value="My data" />```

4. Retrieve data using useContext hook:
    ```const value = useContext(MyContext)```