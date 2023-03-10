import React, { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturnsAdvance = () => {

    const [loading, isLoading] = useState(true)
    const [error, setError] = useState(false)
    const [users, setUsers] = useState(null)
    const [showContent, setShowContent] = useState(true)

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    setError(true)
                    isLoading(false)
                    return
                }
                const userszz = await response.json()
                setUsers(userszz)
            }

            catch (err) {
                console.log(err)
                setError(true)
            }

            isLoading(false)
        }
        fetchUser()
    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3> Oops cant reach server!</h3>
    }

    // destructuring the response
    const { avatar_url, bio, location, name } = users

    console.log('showContent', showContent)
    return (
        <div >
            <div style={{ display: `${showContent ? '' : 'none'}` }}>
                <img src={avatar_url} alt='avatar' />
                <h3>{name}</h3>
                <p>{bio}</p>
                <p>{location}</p>
            </div>
            <div>
                <button onClick={() => setShowContent(showContent => !showContent)}>Toggle</button>
            </div>

        </div>
    )
}

export default MultipleReturnsAdvance
