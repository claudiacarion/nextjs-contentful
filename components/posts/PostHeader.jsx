import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'

const PostHeader = ({ post }) => {
  const { title, image, author } = post.fields

  return (
    <>
      <h2>{title}</h2>
      <div>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={image.fields.file.url}
          width={200}
          height={image.fields.file.details.image.height}
        />
      </div>
      <div>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
      </div>
    </>
  )
}

export default PostHeader