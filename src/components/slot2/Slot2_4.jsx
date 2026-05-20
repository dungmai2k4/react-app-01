//Bai toan nhap lieu tu ban phim
import React, { useState } from 'react'
export default function Slot2_4() {
    const [name, setName] = useState("")
    //layout
    return (
        <div>
            <h2>Slot 2_4</h2>
            <input style={{ padding: '10px', margin: '10px', border: '1px solid #ccc' }} type="text" placeholder='Nhap ten' onChange={(e) => setName(e.target.value)} />
            <p>Name: {name}</p>
        </div>
    )
}