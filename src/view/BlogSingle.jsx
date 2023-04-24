import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useLocation } from 'react-router-dom';
import BlogText from '../assets/function/blogText';
import blogData from '../assets/jsonData/blog.json'
import { randomArray } from '../assets/function/toolFunction';

import contactBlogArr from '../assets/function/contactBlogArr';
const BlogSingle = () => {
    const history = useHistory()
    const location = useLocation();
    //* values
    let pathName = { type: location.pathname.split('/')[2], id: location.pathname.split('/')[3] }
    let [title, setTitle] = useState(''),
        [tag, setTag] = useState(''),
        [des, setDes] = useState(''),
        [isHave, setIsHave] = useState(null) //是否有該文章。防呆圖片找不到檔案問題

    randomArray(blogData.data)
    useEffect(() => {
        blogData.data.map((item, index) => {
            if (pathName.type == item.type && pathName.id == item.id) {
                setTitle(item.title)
                setTag(item.tag)
                setDes(item.des)
                setIsHave(true)
            }
        })
    }, []);

    useEffect(() => { }, [pathName, title, tag])

    useEffect(() => {
        var metas = document.getElementsByTagName('meta');
        for (var i = 0; i < metas.length; i++) {
            metas[i].parentNode.removeChild(metas[i]);
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>{title}|GOGOBO 公勝保經網路投保平台</title>
                <meta name="description" content={des} />
                <meta name="keywords" content="公勝,公勝保經,GOGOBO,GOGOBO-公勝保經網路投保平台,寵物險,旅遊平安險,定期壽險" />
                {/* <!--Facebook,LINE:網址貼文時會有說明圖示--> */}
                <meta property="og:title" content={`${title}|GOGOBO 公勝保經網路投保平台`} />
                <meta property="og:site_name" content={`${title}|GOGOBO 公勝保經網路投保平台`} />
                {/* <!--圖片顯示--> */}
                <meta property="og:image" content={require(`../assets/image/type/${pathName.type}/blog/NO.${pathName.id}_S.jpg`)} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
                {/* <!--敘述--> */}
                <meta property="og:description"
                    content={des} />
                <meta property="og:type" content="website" />
            </Helmet>
            <div>
                <div className='bg-primary-m pt-3 pb-5' style={{ minHeight: '100vh' }}>
                    <div style={{ paddingTop: '85px' }}>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-12 col-lg-10'>
                                    <div className='bg-light'>
                                        <div className='px-0 px-lg-3'>
                                            <div>
                                                <nav aria-label='breadcrumb'>
                                                    <ol class='breadcrumb'>
                                                        <li class='breadcrumb-item'><a href='/' className='small'>首頁</a></li>
                                                        <li class='breadcrumb-item'><a href='/blog' className='small'>保險懶人包</a></li>
                                                        <li class='breadcrumb-item active' aria-current='page'>
                                                            <span className='small'>懶人包文章</span>
                                                        </li>
                                                    </ol>
                                                </nav>
                                                <h2 className='text-primary fs-3 my-2'>{title}</h2>
                                                <p className='text-primary-l mb-3'>{tag}</p>
                                            </div>
                                            <div className='dot-line m-0 py-3' style={{ borderColor: '#107A47' }}>
                                                { // isHave 判斷為防呆圖片(必免抓不到)
                                                    isHave &&
                                                    <>
                                                        <img src={require(`../assets/image/type/${pathName.type}/blog/NO.${pathName.id}_S.jpg`)} className='pb-3 d-block d-md-none img-fluid' />
                                                        <img src={require(`../assets/image/type/${pathName.type}/blog/NO.${pathName.id}_L.jpg`)} className='pb-3 d-none d-md-block img-fluid' />
                                                    </>
                                                }
                                                {BlogText(pathName.id, pathName.type)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogSingle