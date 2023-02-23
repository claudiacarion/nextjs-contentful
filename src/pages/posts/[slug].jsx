import PostBody from '../../../components/posts/PostBody'
import PostHeader from '../../../components/posts/PostHeader'
import { client, previewClient } from '../../../lib/contentful/client'
import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()

  return (
    <section className='section'>
      <div className='container'>
        <article className='prose mx-auto'>
          {
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          }
        </article>
      </div>
    </section>
  )
}

export const getStaticProps = async ({ params, preview = false }) => {
  const cfClient = preview ? previewClient : client

  const { slug } = params
  const response = await cfClient.getEntries({
    content_type: 'post',
    'fields.slug': slug
  })

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
      revalidate: 60
    }
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post
