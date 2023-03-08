import React, { useEffect, useState } from 'react'


const CleanupFunction = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button className='btn' onClick={() => setToggle(!toggle)}>
                Toggle Component
            </button>
            {
                toggle && <RandomComponent />
            }
        </div>
    )
}

const RandomComponent = () => {
    useEffect(() => {
        console.log('This is effect after clean up')
        const interval = setInterval(() => {
            console.log('Hello from interval')
        }, 1000)

        return () => {
            console.log('Hi before clean up')
            clearInterval(interval)
            console.log('Hi after clean up')
        }
    }, [])

    return (
        <div>
            Hello World
        </div>
    )
}

export default CleanupFunction
