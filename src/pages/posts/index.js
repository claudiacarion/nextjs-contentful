import React from 'react'
import { client } from '../../../lib/contentful/client'
import PostCard from '../../../components/PostCard'

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: data.items,
      revalidate: 60
    }
  }
}

export default Posts
