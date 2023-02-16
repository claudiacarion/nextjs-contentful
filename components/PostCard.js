import React from 'react'
import Link from 'next/link'

const PostCard = ({ posts }) => {
  const { title, slug, excerpt, image, author, date } = posts.fields

  return (
    <div>
      <li>
        <Link href={`/posts/${slug}`} />
      </li>
    </div>
  )
}

export default PostCard
