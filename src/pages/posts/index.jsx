import { client } from '../../../lib/contentful/client'
import PostCard from '../../../components/posts/PostCard'

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
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts
