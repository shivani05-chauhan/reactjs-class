import React, { useEffect, useState } from 'react'

const CleanUpFunction = () => {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('this is effet')
        const interval = setInterval(() => {
            console.log('im here every second')
            setNumber(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div>
            {number} testingdsff
        </div>
    )
}

export default CleanUpFunction
