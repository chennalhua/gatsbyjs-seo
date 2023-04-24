import moment from 'moment';
//* 保單狀態顯示
// 寵物險
// 1.無訂單編號(PreApplyNo)且無狀態(Status) => 檢核不通過
// 2.有訂單編號(PreApplyNo)但無狀態(Status) => 前往繳費

// 旅平
// 1.無訂單編號(PreApplyNo)且無狀態(Status)  => 檢核不通過
// 2.有訂單編號(PreApplyNo)但無狀態(Status)  => 未繳費已取消
export default function queryInsState(code, callCode, company, endDate, orderNo, type) {
    let stateBox = (text, color) => { return <span className={`badge bg-${color} p-2 mx-1`}>{text}</span> }
    let twoStateBox = (array) => {
        return (
            array.map((item, index) => {
                return (
                    <span className={`badge bg-${item.color} p-2 mx-1`}>{item.text}</span>
                )
            })
        )
    }
    if (new Date().getTime() >= moment(endDate).valueOf()) {
        return stateBox('保單失效', 'danger')
    } else {
        if (code == 'T') {
            if (callCode == 'Y') {
                return twoStateBox([{ text: '繳費完成', color: 'fb' }, { text: '成功電訪', color: 'car' }])
            } else {
                return stateBox('繳費完成', 'fb')
            }
        } else if (code == 'V') {
            return stateBox('保單生效', 'travel')
        } else if (code == 'F') {
            return stateBox('已撤件', 'gary')
        } else if (code == 'C') {
            return stateBox('保險公司取消此件', 'gary')
        } else if (code == 'S') {
            if (company == '富邦產險') {
                return stateBox('簽署失敗', 'gary')
            }
        } else if (code == 'P') {
            if (company == '華南產物') {
                return stateBox('繳費失敗', 'danger')
            } else {
                return stateBox('扣款失敗', 'danger')
            }
        } else if (code == 'K') {
            return stateBox('未繳費已取消', 'gary')
        } else if (code == 'O') {
            return stateBox('是否電訪通知失敗', 'accident')
        } else if (code == 'I') {
            return stateBox('要保完成通知與發單失敗', 'accident')
        } else if (code == 'E') {
            return stateBox('保單異常', 'accident')
        } else if (code == 'N') {
            return stateBox('電訪結果通知失敗', 'accident')
        } else if (code == 'W') {
            if (callCode == 'Y') {
                return twoStateBox([{ text: '待電訪', color: 'warning' }])
            } else if (callCode == 'N') {
                return twoStateBox([{ text: '未通知發單', color: 'warning' }])
            }
        } else if (code == 'R') {
            return twoStateBox([{ text: '電訪失敗', color: 'danger' }])
        } else if (code == 'Q') {
            if (orderNo == null || orderNo == '') {
                return <></>
            } else {
                return stateBox('要保失敗', 'danger')
            }
        } else if (code == '') {
            if (type == 'pet') {
                if (orderNo == null || orderNo == '') {
                    return stateBox('檢核不通過', 'gary')
                }
            } else if (type == 'travel') {
                if (orderNo == null || orderNo == '') {
                    return stateBox('檢核不通過', 'gary')
                } else {
                    if (company == '富邦產險') {
                        return stateBox('未繳費已取消', 'gary')
                    }
                }
            }
        }
    }
}