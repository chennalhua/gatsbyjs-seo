export default function scrollDone(e) { //申明卷軸
    let { dataset, scrollHeight, scrollTop, clientHeight } = e.target
    if (Math.floor(scrollHeight - scrollTop) <= clientHeight || Math.floor(scrollHeight - scrollTop) == clientHeight) {
        return { title: dataset.title, isRead: true }
    } else {
        return { title: dataset.title, isRead: false }
    }
}