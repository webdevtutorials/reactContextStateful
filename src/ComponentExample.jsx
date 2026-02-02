// src / ComponentExample.jsx

import { useContext, useEffect } from 'react';
import { ContextExample } from './App.jsx';

export default function ComponentExample() {
    const { dataExample, setDataExample } = useContext(ContextExample);

    useEffect(() => {
        setDataExample("Stateful");
    }, [setDataExample]);
    
    return (
        <div style={{ width: 400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>{ dataExample }</p>
        </div>
    );
}