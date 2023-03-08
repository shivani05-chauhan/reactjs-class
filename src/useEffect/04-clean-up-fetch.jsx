import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let isCancelled = false
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled) {
                    alert('Posts are ready!')
                    setPosts(data.splice(0, 10))
                    console.log(data)
                }
            })

        return () => {
            isCancelled = true
        }

    }, [])


    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <>
                            <p>Title: {post.title}</p>
                            <p>Body: {post.body}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Posts
