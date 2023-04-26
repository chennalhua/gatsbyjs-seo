import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>首頁</title>
                <meta name="description" content='敘述' />
                <meta name="keywords" content="關鍵字" />
                {/* <!--Facebook,LINE:網址貼文時會有說明圖示--> */}
                <meta property="og:title" content={`首頁`} />
                <meta property="og:site_name" content='首頁' />
                {/* <!--圖片顯示--> */}
                <meta property="og:image" content='https://i.imgur.com/yz6yEhH.jpeg' />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
                {/* <!--敘述--> */}
                <meta property="og:description"
                    content="敘述" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="container py-5">
                <p>首頁</p>
                <a href='/blog' className='btn btn-primary my-3'>部落格</a>
            </div>
        </>
    )
}
export default HomePage