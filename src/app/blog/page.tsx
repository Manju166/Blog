import Link from 'next/link'
import React from 'react'
import { Blog } from '../types/blog'

export default async function Blogpage() {
     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  return (
    <div>
      <h1>Blog posts</h1>
      <div>
        {posts.map((post:Blog)=>{
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


