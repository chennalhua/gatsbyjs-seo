import React, { useState, useEffect } from 'react';


import BlogData from '../assets/jsonData/blog.json'
import { useHistory } from 'react-router-dom';
import { TextLongToDot } from '../assets/function/toolFunction';
const Blog = () => {
    const history = useHistory();
    let ruleListAry = [
        { itemName: '#寵物險', href: '' },
        { itemName: '#寵物侵權', href: '' },
        { itemName: '#寵物住宿', href: '' },
        { itemName: '#寵物住宿', href: '' },
        { itemName: '#寵物醫院', href: '' },
        { itemName: '#寵物醫院', href: '' },
        { itemName: '#寵物行為', href: '' },
        { itemName: '#寵物花費', href: '' },
        { itemName: '#寵物到府服務', href: '' },
        { itemName: '#定期壽險', href: '' }
    ]
    //* values
    let [num, setNum] = useState({ min: 1, max: 15 }),
        [isType, setIsType] = useState('pet'),
        [blogList, setBlogList] = useState([])

    const handleEvent = {
        getBlogList: function (type) { // 撈取該 type item
            let arr = []
            BlogData.data[type].map((item, index) => {
                arr.push(item)
            })
            setBlogList(arr)
        },
        goBlogPage: function (id, type) {
            history.push(`/blog/${type}/${id}`)
        }
    }
    const handleComponentData = (mode, val) => {
        if (mode == 'buttonListType') { //種類切換 value
            setIsType(val)
            setNum({ min: 1, max: 15 }) //重置頁碼
        } else if (mode == 'itemNum') { //頁碼
            setNum(val)
        } else if (mode == 'mobileButtonListType') {
            setIsType(val)
        }
    }
    // useEffect(() => { handleEvent.getBlogList(isType) }, [isType])
    useEffect(() => { }, [num, isType, blogList]);
    return (
        <>
            <div className='bg-primary-m' style={{ minHeight: '100vh' }}>
                <div className="col-5 py-3 mx-auto">
                    <select className='form-select fw-bolder' onChange={e => setIsType(e.target.value)}>
                        <option value='pet' selected>寵物險</option>
                        <option value='travel'>旅遊平安險</option>
                        <option value='life'>壽險</option>
                        <option value='healthy'>健康險</option>
                    </select>
                </div>
                <div className='container py-3'>
                    <div className='row'>
                        {
                            BlogData.data.map((item, index) => {
                                return (
                                    <div key={index} className={`col-12 col-md-6 col-lg-4 p-3 ${item.type == isType ? '' : 'd-none'}`} style={{ cursor: 'pointer' }} onClick={e => window.location.href = `/blog/${item.type}/${item.id}`}>
                                        <div className='p-4 knowledge-item h-100'>
                                            <div className='rounded' style={{ overflow: 'hidden' }}>
                                                <img src={require(`../assets/image/type/${item.type}/blog/NO.${item.id}_S.jpg`)} alt={item.title} className='d-block img-fluid' style={{ transform: 'scale(1)' }} />
                                            </div>
                                            <div className='mt-4'>
                                                <h5 className='title fw-bolder' style={{ fontSize: '18px' }}>{item.title}</h5>
                                                <p className='tag my-2'>{item.tag}</p>
                                                <p className='content'>{TextLongToDot(item.des)}</p>
                                            </div>
                                            <div className='mt-4 text-center text-lg-end'>
                                                <span className='bg-secondary-l p-2 small rounded fw-bolder d-block d-lg-inline'>
                                                    了解更多
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog