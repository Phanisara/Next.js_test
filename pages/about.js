import headerStyle from '../styles/Header.module.css'
import Meta from '../components/Meta'

export default function About() {
    return (
        <div>
            <Meta title="About" />
            <h1>About the WebDev News</h1>
            <h4 className= {headerStyle.description}>by crash course Traversy Media</h4>
        </div>
    )
}
