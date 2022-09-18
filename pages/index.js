import Head from 'next/head'
import {server} from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({article}) {
  console.log(article)
  return (
    <div>
      <ArticleList article={article} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }