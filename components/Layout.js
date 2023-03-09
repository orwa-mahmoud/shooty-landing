import Head from 'next/head';

const Layout = props => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout