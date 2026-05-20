//Bai tap counter
import React, { useState } from 'react'
export default function Counter() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    //layout
    return (
        <div>
            <h2>Counter</h2>
            <button onClick={handleDecrement} style={{ padding: '10px', margin: '10px' }}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} style={{ padding: '10px', margin: '10px' }}>+</button>
        </div>
    )
}