export default function formatPostData(post) {
  const { publishDate, ...rest } = post
  return {
    publishDate: new Date(publishDate),
    ...rest
  }
}
