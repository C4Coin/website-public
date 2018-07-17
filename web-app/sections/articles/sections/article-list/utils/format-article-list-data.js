import c4coinLogo from 'assets/icons/c4coin.complex.svg'

export default function formatArticleListData(inData) {
  return {
    fetchStatus: inData.fetchStatus,
    articles: inData.articles.map(dataPoint => ({
      title: dataPoint.title,
      url: dataPoint.url || `articles/${dataPoint.slug.current}`,
      publicationDate: new Date(dataPoint.publishDate),
      readTime: dataPoint.readTime,
      icon: dataPoint.logo || c4coinLogo,
      banner: dataPoint.image
    }))
  }
}
