import React, { useState } from 'react'
import './App.css'

function App() {
    const [phoneNumber, setPhoneNumber] = useState('')

    let buttonKeys = []

    for (let i = 1; i <= 9; i++) {
        buttonKeys.push({
            type: 'number',
            value: i.toString(),
        })
    }

    buttonKeys.push({
        type: 'spacer',
    })

    buttonKeys.push({
        type: 'number',
        value: '0',
    })

    buttonKeys.push({
        type: 'delete',
    })

    const addNumber = (number: string): void => {
        setPhoneNumber(phoneNumber + number)
    }

    const removeNumber = (): void => {
        setPhoneNumber(phoneNumber.slice(0, -1))
    }

    const chat = (): void => {
        window.location.href = 'https://wa.me/52' + phoneNumber
    }

    return (
        <div className="h-screen p-3">
            <div className="card w-100 h-full">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Type a phone number"
                        className="input input-bordered w-full max-w-xs"
                        value={phoneNumber}
                    />
                    <div className="grid grid-cols-3 gap-2">
                        {buttonKeys.map((buttonKey) => (
                            <div>
                                {buttonKey.type === 'number' && (
                                    <button
                                        className="btn btn-primary w-full"
                                        disabled={phoneNumber.length >= 10}
                                        onClick={() =>
                                            addNumber(buttonKey.value!)
                                        }
                                    >
                                        {buttonKey.value}
                                    </button>
                                )}
                                {buttonKey.type === 'delete' && (
                                    <button
                                        className="btn btn-primary w-full"
                                        disabled={phoneNumber.length === 0}
                                        onClick={() => removeNumber()}
                                    >
                                        {'<<'}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary w-full"
                            disabled={phoneNumber.length !== 10}
                            onClick={() => chat()}
                        >
                            Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
