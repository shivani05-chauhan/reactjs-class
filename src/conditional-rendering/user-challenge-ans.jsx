import React, { useState } from 'react'

const UserChallenge = () => {
    const [user, setUser] = useState(null)


    const login = () => {
        setUser({ name: 'Anil' })
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <div>
            {
                user ?
                    <div>
                        <h4>{user.name}</h4>
                        <button onClick={logout}>Logout</button>
                    </div>
                    :
                    <div>
                        <h4>click to login</h4>
                        <button onClick={login}>Login</button>
                    </div>
            }
        </div>
    )
}

export default UserChallenge

