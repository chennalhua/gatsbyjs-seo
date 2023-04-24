export default function fastRead(e) {
    e.preventDefault();
    let { dataset } = e.target
    let ele;
    ele = document.getElementById('ruleContainer')
    if (ele.scrollHeight > ele.clientHeight) {
        ele.scrollTo({ top: ele.scrollHeight, behavior: 'smooth' })
        return { title: dataset.title, isRead: true }
    } else {
        return { title: dataset.title, isRead: false }
    }
}