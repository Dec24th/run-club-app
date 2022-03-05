import React, { useState } from 'react'

function Tracker() {
    const [count, setCount] = useState(0)
    const onClickAdd = () => {
        setCount(count + 60)
    }
    return (
        <>
            <h3>{count}</h3>
            <button onClick={onClickAdd}>Button - click here</button>
        </>
    )
}

export default Tracker