import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charset="utf-8" />
        <link rel='icon' href='/favicon.png' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'web developement, programming',
    description: 'Get the latest news in web dev'
}

export default Meta