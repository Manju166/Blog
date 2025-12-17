import Link from 'next/link'
import React from 'react'

export default function Blogpage() {
    const posts=[
        {
            id: 1,
            title: 'post 1',
            desc: 'post 1 desc',
        },
        {
            id: 2,
            title: 'post 2',
            desc: 'post 2 desc',
        }
    ]
  return (
    <div>
      <h1>Blog posts</h1>
      <div>
        {posts.map((post)=>{
            return <div key={post.id}>
                <h2>{post.title}</h2>
                <h3>{post.desc}</h3>
                <Link href={`/blog/${post.id}`}>Read More</Link>
            </div>
        })}
      </div>
    </div>
  )
}


