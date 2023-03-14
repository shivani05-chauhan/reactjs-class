// Create a form when we can sumit the name of a person in the input field
// use useState by initializing the value as an empty array 
// push all the submitted names to an array and then update the state

// use the updated users state to map and render in the UI
// If Possible: include a delete button along with every user mapped to delete and update the state.

import React, { useState } from 'react'

const FormsChallenge = () => {

    const [name, setName] = useState('')
    const [users, setUsers] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('name', name)
        let newUser = name
        let updatedUser = [...users, newUser]
        setUsers(updatedUser)
    }

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }
    console.log('users', users)

    const handleDelete = (e) => {
        console.log('user from map', e.target.value)
        console.log('users from state', users)

        // user filter array method
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='submit'>Submit</button>
                </div>
            </form>

            {
                users.map((user, index) => {
                    return (
                        <div key={index + 1}>
                            <h3> * {user}</h3>
                            <button value={user} onClick={(user) => handleDelete(user)}>Delete User</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default FormsChallenge

