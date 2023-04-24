import BlogData from '../jsonData/blog.json'
import { randomArray } from './toolFunction'
export default function contactBlogArr() {
    let newArr = []
    Object.keys(BlogData.data).map((item, index) => {
        BlogData.data.map((kitem, kindex) => {
            newArr.push(kitem)
        })
    })
    return newArr
}