import ArticleItem from './ArticleItem.jsx'
import articleStyle from '../styles/Article.module.css'

const ArticleList = ({ article }) => {
    return (
        <div className={articleStyle.grid}>
            {article.map((article) => (
                <ArticleItem article={article} />
            ))}
        </div>
    )
}

export default ArticleList