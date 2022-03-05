import React, { useReducer } from 'react';
import { FaRegHeart } from "react-icons/fa";

const reducer = (state, action) => {
    switch (action.type) {
        case 'onClickAdd':
            return { ...state, count: state.count + 1 }
        case 'onClickSubtract':
            return { ...state, count2: state.count2 - 1 }
        case 'inputValue':
            return { ...state, inputValue: action.payload }
        default:
            throw new Error();
    }
}
//If using ACTION variable, you can check the type: 'ACTION.ADD' instead of type: 'onClickAdd
const ACTION = {
    ADD: 'onClickAdd',
    SUBTRACT: 'onClickSubtract',
    ADD_NAME: 'inputValue',
}


function AddComment() {

    const [state, dispatch] = useReducer(reducer, { count: 0, count2: 1, inputValue: '' })

    return (
        <>
            <div className='grid-container'> 
                <div>
                    <h1>Hello, my name is</h1>
                    <h2>{state.inputValue}</h2>
                </div>
                <br></br>

                <h3>{state.count} Likes</h3>
                <br></br>
                <button
                    className='btn-heart'
                    onDoubleClick={(() => dispatch({ type: ACTION.ADD }))}>
                    <FaRegHeart />
                </button>
                <br></br>
                <input
                    style={{ backgroundColor: 'white', color: 'black' }}
                    placeholder='Enter name ...'
                    value={state.inputValue}
                    onChange={(e) => dispatch({ type: ACTION.ADD_NAME, payload: e.target.value })}
                ></input>

                <h3>{state.count2}</h3>
                <button onClick={(() => dispatch({ type: ACTION.SUBTRACT }))}>Button - click here</button>
            </div>
        </>

    )
}

export default AddComment