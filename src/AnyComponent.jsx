// src / AnyComponent.jsx

import { useContext, useEffect } from 'react';
import { MyContext } from './App.jsx';

export default function AnyComponent() {
    const { data, setData } = useContext(MyContext);

    useEffect(() => {
        setData("Stateful");
    }, [setData]);
    
    return (
        <div style={{ width: 400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>{ data }</p>
        </div>
    );
}