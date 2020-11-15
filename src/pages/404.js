import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFoundPage = () => {

    return (
        <Layout>
            <Head title="404 NOT FOUND" />
                <h1>404 Page Not Found</h1>
                <p>Please try again my friend!</p>
                <img src="https://a.wattpad.com/cover/112237972-256-k70198.jpg" alt="sideshow bob" />       
        </Layout>
    )
}

export default NotFoundPage