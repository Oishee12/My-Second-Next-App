'use client'
import React, { use } from 'react'

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log("posts", posts);
  return (
    <div>
        <h2 className='text-5xl'>
            Posts: {posts.length}
        </h2>
    </div>
  )
}

export default Posts