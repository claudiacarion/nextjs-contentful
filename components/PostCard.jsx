import Link from 'next/link'
import Avatar from './ui/Avatar'
// import DateComponent from './ui/DateComponent'
import ContentfulImage from './ui/ContentfulImage'

const PostCard = ({ post }) => {
  const { title, slug, excerpt, image, author, date } = post.fields

  return (
    <li >
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={image.fields.file.url}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h3 >{title}</h3>
          <div>
            {/* <DateComponent dateString={date} /> */}
          </div>
          <p >{excerpt}</p>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      </Link>
    </li>
  )
}

export default PostCard
