
// if user is there is login page
// if user is not there then logout page
// if user clicks logout set user null
// if user click login set some value to the user

import React, { useState } from 'react'

const UserChallengeTest = () => {

    const [user, setUser] = useState(null)

    const handleLogin = () => {
        setUser({ name: "Achivers IT" })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {
                user ?
                    <div>
                        <h4>{user.name}</h4>
                        <button onClick={handleLogout}>Logout</button>
                    </div> :
                    <div>
                        <h4>Click to login</h4>
                        <button onClick={handleLogin}>Login</button>
                    </div>
            }

        </div>
    )
}

export default UserChallengeTest
