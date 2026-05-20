//Xu ly su kien click tren slot 2_3
import { useState } from 'react'

export default function Slot2_3() {
  const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <div>
      <h2>Slot 2_3</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}