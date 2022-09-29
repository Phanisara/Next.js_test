import { useRouter } from "next/router"
import Meta from "../../../components/Meta"
import {server} from '../../../config'
import Link from "next/link"

const article = ({article}) => {
//   const router = useRouter()
//   const {id} = router.query

  return (
    <>
        <Meta title={article} description={article}/>
        <h2>{article}</h2>
        <p>{article}</p>
        <br />
        <Link href={'/'}>Go Back</Link>
    </>
  )
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`${server}/api/articles/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props:{
//             article
//         }
//     }
// }

// export const getStaticPaths = async (context) => {
//     const res = await fetch(`${server}/api/articles`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props:{
//             article
//         }
//     }
// }

// export const getStaticPaths = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))
//     return {
//         paths,
//         fallback: false
//     }
// }

export default article