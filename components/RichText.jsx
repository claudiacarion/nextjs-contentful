import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content)}</>
}

export default RichText