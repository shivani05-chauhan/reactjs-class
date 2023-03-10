import React, { useEffect, useState } from 'react'

const MultipleReturnsBasic = () => {

    const [loading, isLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            // fetching data
            isLoading(false)
        }, 4000)
    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <h2>
            My App
        </h2>
    )
}

export default MultipleReturnsBasic
