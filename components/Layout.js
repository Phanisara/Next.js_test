import React from 'react'
import Meta from './Meta'
import Header from '../components/Header'
import Nav from '../components/Nav'
import style from '../styles/Layout.module.css'

const layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={style.container}>
                <main className={style.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default layout