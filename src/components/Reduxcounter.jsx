import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

export function ReduxCounter() {
    const count = useSelector((state) => state.counter.value)
    const [amount, setAmount] = useState()
    const dispatch = useDispatch()

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <span style={{ fontSize: '2rem', marginRight: '20px' }}>{count}</span>

                <div style={{ marginBottom: '20px' }}>
                    <button
                        style={{
                            padding: '10px 20px',
                            marginRight: '10px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>

                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>

                <div>
                    <input
                        type="text"
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Enter amount"
                        style={{
                            padding: '10px',
                            width: '150px',
                            marginRight: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        onClick={() => dispatch(incrementByAmount(amount))}
                    >
                        Increment by Amount
                    </button>
                </div>
            </div>

        </>
    )
}