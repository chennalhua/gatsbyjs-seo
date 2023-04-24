import moment from "moment"
export default function RecordStep() {
    function getState() {
        let thisTime = moment().valueOf()
        if (thisTime >= moment('2023/02/13 05:45').valueOf() && thisTime <= moment('2023/02/13 17:06').valueOf()) {
            return 'close'
        } else if (thisTime >= moment('2023/02/26 05:45').valueOf() && thisTime <= moment('2023/02/26 20:15').valueOf()) {
            return 'close'
        } else {
            return 'open'
        }
    }
    window.addEventListener('scroll', getState, true)
    window.addEventListener('click', getState, true)

    return getState()
}