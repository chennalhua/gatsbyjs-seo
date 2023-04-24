import moment from "moment/moment"

export function getAGcode() {
    let url = new URL(window.location.href),
        params = new URLSearchParams(url.search),
        agTitle = url.search.split('=')[0].split('?')[1],
        agValue = params.getAll(`${agTitle}`)[0]
    if (agTitle == undefined || agValue == undefined) {
        return
    } else {
        if (ifStrHave(agTitle.toLowerCase(), 'agcode')) {
            if (agValue.length > 10) {
                sessionStorage.setItem('agcode', window.atob(agValue))
            } else {
                sessionStorage.setItem('agcode', agValue)
            }
        }
    }
    return agValue
}

export function toCurrency(num) { //數字逗號轉換
    if (num === undefined || num === null) {
        return
    } else {
        const parts = num.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
}

export function limitYears(date, years) { //限制年限
    var res = new Date(date);
    res.setFullYear(res.getFullYear() - years); //今年往前減去幾年
    return res;
}

export function limitNumber(val) { //限制 input 填寫數字
    val = val.replace(/[^\d]/g, '');
    return val
}

export function ifStrHave(str, specifyText) { // str:字串,specifyStr:指定文字
    if (str.indexOf(specifyText) !== -1) {
        return true
    } else {
        return false
    }
}

export function goAnchor(id) { //前往錨點
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}

export function timer(btnId, id, seconds) {
    var btn = document.getElementById(btnId);
    var ele = document.getElementById(id);
    var num = Number(seconds);
    btn.disabled = true;
    var timer = null;
    timer = setInterval(function () {
        if (num == -1) {
            clearTimeout(timer);
            btn.disabled = false;
            num = Number(seconds); //還原計時器
        }
        else {
            ele.innerHTML = num;
            num--;
        }
    }, 1000);
}

export function dateChange(type, day) { //日期規格轉換
    let dayDay = day.split(' ')
    let newGroupDay
    if (dayDay[1] === '上午') {
        newGroupDay = `${dayDay[0]} ${dayDay[2]} am`
    } else if (dayDay[1] === '下午') {
        newGroupDay = `${dayDay[0]} ${dayDay[2]} pm`
    }
    if (type === 'UTC') {
        return new Date(newGroupDay).toUTCString()
    } else if (type === 'taiwan') {
        return new Date(newGroupDay)
    }
}

export function DateDiff(sDate1, sDate2) { // sDate1 和 sDate2 是 2016-06-18 格式
    var oDate1 = new Date(sDate1);
    var oDate2 = new Date(sDate2);
    var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
    return iDays;
};

//* type(類型:name / num)
export function hideCenterText(type, str) { //隱藏文字中間
    if (type == 'name') {
        let newStr;
        if (str.length === 2) {
            newStr = str.substr(0, 1) + 'O'
        } else if (str.length > 2) {
            let char = '';
            for (let i = 0, len = str.length - 2; i < len; i++) {
                char += 'O'
            }
            newStr = str.substr(0, 1) + char + str.substr(-1, 1)
            //取名字首位 + 中間名隱藏 + 取名字最後位子
        }
        return newStr
    } else if (type == 'num') {
        if (str == null || str == '' || str == undefined) {
            return
        } else {
            return str.replace(/^(.{3})(?:\d+)(.{3})$/, "$1****$2")
        }
    }
}

//* 年齡計算(寵物)
export function getPetAge(birthday) {
    // 日期
    let date = new Date()
    // 今天日期，數組，同 birthday
    // let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()] //算當日 生日
    let today = [date.getFullYear(), date.getMonth() + 1] //算當月 生日
    // 分別計算年月日差值
    let age = today.map((value, index) => {
        return value - birthday[index]
    })

    /* 計算當日使用
    //當天數為負數時，月減 1 ，天數加上月總天數
    if (age[2] < 0) {
        // 簡單獲取上個月總天數的方法，不會錯
        let lastMonth = new Date(today[0], today[1], 0)
        age[1]--
        age[2] += lastMonth.getDate()
    }*/

    //當月數為負數，年減 1，月數加上 12
    if (age[1] < 0) {
        age[0]--
        age[1] += 12
    }
    if (age[1] >= 6) { //寵物年齡計算，如果滿6月，年齡加一歲(但[月]不會歸零)
        age[0] += 1
    }
    return age
}

//* 登入確認
export function loginCheck() {
    let loginToken = localStorage.getItem('_token')
    if (loginToken == null || loginToken == '' || loginToken == undefined) {
        return false
    } else {
        return true
    }
}

//* 隨機陣列
export function randomArray(arr) {
    let newArr = []; //new ary
    arr.forEach((item, index) => {
        newArr.push(item)
    })
    // newArr 做 random
    for (var i = newArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
}

//* scroll 到指定地方 id
export function scrollToPlace(placeId) {
    return document.getElementById(placeId).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}

//* 判斷字串是否包含數字或英文字
export function isHaveNumOrEnglish(text) {
    let enText = new RegExp("[A-Za-z]+");
    let numText = new RegExp("[0-9]+");
    if (enText.test(text) && numText.test(text)) { //英文加數字組成
        return true
    } else {
        return false
    }
}

//* 判斷特殊符號
export function hasSpecialStr(str) {
    let flag = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]")
    if (flag.test(str)) {
        return true
    } else {
        return false
    }
}


//* 計算年齡(實際)
export function personAge(birthday) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Number(Math.abs(ageDate.getUTCFullYear() - 1970));
}

//* 計算年齡(保險年齡)
export function insurancePersonAge(birthday) {
    let birthYear = Number(moment(birthday).format('YYYY'));
    let birthMonth = Number(moment(birthday).format('MM'));
    let birthDate = Number(moment(birthday).format('DD'));

    var compareYear = Number(moment().format('YYYY'));
    var compareMonth = Number(moment().format('MM'));
    var compareDay = Number(moment().format('DD'));
    var subtractYear = compareYear - birthYear;
    var subtractMonth = compareMonth - birthMonth;
    var subtractMonthInvers = birthMonth - compareMonth;
    if (subtractMonth > 6 || (subtractMonth == 6 && compareDay > birthDate)) {
        return subtractYear + 1;
    } else {
        if (
            subtractMonthInvers > 6 ||
            (subtractMonthInvers == 6 && birthDate >= compareDay)
        ) {
            return subtractYear - 1;
        } else {
            return subtractYear;
        }
    }
}

//* 全形文字轉半形
export function toCDB(str) {
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 12288) {
            tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
            continue;
        }
        if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
            tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
        }
        else {
            tmp += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return tmp
}

//* 元轉萬元
export function formatNumber(num) {
    num = Number(num);
    if (num == 0) {
        return num + '';
    } else
        if (num > 1 && num < 10000) {
            return num + '';
        } else {
            return (num / 10000);
        }
}

//* 數字轉國字數字
export function numberConvertToUppercase(num) {
    if (new RegExp("[0-9]+").test(num)) {
        num = Number(num);
        var upperCaseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
        var length = String(num).length;
        if (num == '' || num == null || num == undefined) {
            return ''
        }
        if (length == 1) {
            return upperCaseNumber[num];
        } else if (length == 2) {
            if (num == 10) {
                return upperCaseNumber[num];
            } else if (num > 10 && num < 20) {
                return '十' + upperCaseNumber[String(num).charAt(1)];
            } else {
                return upperCaseNumber[String(num).charAt(0)] + '十' + upperCaseNumber[String(num).charAt(1)].replace('零', '');
            }
        }
    } else {
        return num
    }
}

export function studIdNumberIdentify(nationality, idNumber) {
    let studIdNumber = idNumber.toUpperCase().trim();
    //本國人
    if (nationality == 0) {
        //驗證填入身分證字號長度及格式
        if (studIdNumber.length != 10) {
            alert("長度不足");
            return false;
        }
        //格式，用正則表示式比對第一個字母是否為英文字母
        if (isNaN(studIdNumber.substr(1, 9)) ||
            (!/^[A-Z]$/.test(studIdNumber.substr(0, 1)))) {
            alert("格式錯誤");
            return false;
        }

        var idHeader = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; //按照轉換後權數的大小進行排序
        //這邊把身分證字號轉換成準備要對應的
        studIdNumber = (idHeader.indexOf(studIdNumber.substring(0, 1)) + 10) + '' + studIdNumber.substr(1, 9);
        //開始進行身分證數字的相乘與累加，依照順序乘上1987654321
        let s = parseInt(studIdNumber.substr(0, 1)) +
            parseInt(studIdNumber.substr(1, 1)) * 9 +
            parseInt(studIdNumber.substr(2, 1)) * 8 +
            parseInt(studIdNumber.substr(3, 1)) * 7 +
            parseInt(studIdNumber.substr(4, 1)) * 6 +
            parseInt(studIdNumber.substr(5, 1)) * 5 +
            parseInt(studIdNumber.substr(6, 1)) * 4 +
            parseInt(studIdNumber.substr(7, 1)) * 3 +
            parseInt(studIdNumber.substr(8, 1)) * 2 +
            parseInt(studIdNumber.substr(9, 1));

        let checkNum = parseInt(studIdNumber.substr(10, 1));
        //模數 - 總和/模數(10)之餘數若等於第九碼的檢查碼，則驗證成功
        //若餘數為0，檢查碼就是0
        if ((s % 10) == 0 || (10 - s % 10) == checkNum) {
            return true;
        }
        else {
            return false;
        }
    }
    //外籍生，居留證號規則跟身分證號差不多，只是第二碼也是英文字母代表性別，跟第一碼轉換二位數字規則相同，但只取餘數
    else if (nationality == 1) {
        let enText = new RegExp("[A-Za-z]+");
        let numText = new RegExp("[0-9]+");
        //驗證填入身分證字號長度及格式
        if (studIdNumber.length != 10) {
            return false;
        }

        let secondText = (studIdNumber.toString()).trim().split('')[1] //第二位是否為英文
        if (enText.test(secondText)) { //舊式
            //格式，用正則表示式比對第一個字母是否為英文字母
            if (isNaN(studIdNumber.substr(2, 8)) ||
                (!/^[A-Z]$/.test(studIdNumber.substr(0, 1))) ||
                (!/^[A-Z]$/.test(studIdNumber.substr(1, 1)))) {
                return false;
            }

            var idHeader = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; //按照轉換後權數的大小進行排序
            //這邊把身分證字號轉換成準備要對應的
            studIdNumber = (idHeader.indexOf(studIdNumber.substring(0, 1)) + 10) +
                '' + ((idHeader.indexOf(studIdNumber.substr(1, 1)) + 10) % 10) + '' + studIdNumber.substr(2, 8);
            //開始進行身分證數字的相乘與累加，依照順序乘上1987654321

            let s = parseInt(studIdNumber.substr(0, 1)) +
                parseInt(studIdNumber.substr(1, 1)) * 9 +
                parseInt(studIdNumber.substr(2, 1)) * 8 +
                parseInt(studIdNumber.substr(3, 1)) * 7 +
                parseInt(studIdNumber.substr(4, 1)) * 6 +
                parseInt(studIdNumber.substr(5, 1)) * 5 +
                parseInt(studIdNumber.substr(6, 1)) * 4 +
                parseInt(studIdNumber.substr(7, 1)) * 3 +
                parseInt(studIdNumber.substr(8, 1)) * 2 +
                parseInt(studIdNumber.substr(9, 1));

            //檢查號碼 = 10 - 相乘後個位數相加總和之尾數。
            let checkNum = parseInt(studIdNumber.substr(10, 1));
            //模數 - 總和/模數(10)之餘數若等於第九碼的檢查碼，則驗證成功
            ///若餘數為0，檢查碼就是0
            if ((s % 10) == 0 || (10 - s % 10) == checkNum) {
                return true;
            }
            else {
                return false;
            }
        } else { //新式
            let firstText = (studIdNumber.toString()).trim().split('')[0] //第一位是否為英文
            if (enText.test(firstText) == false) { //如果第一位不等於 英文
                return false
            }
            if (enText.test(studIdNumber.toString().trim().substr(1))) {
                return false
            }
            if (numText.test(secondText) == false) {
                return false
            } else {
                if (secondText !== '8' && secondText !== '9') {
                    return false
                } else {
                    return true
                }
            }
        }
    }
}

//* 天數相減
export function differenceInDays(thisDay) {
    let day1 = new Date(moment().format('YYYY/MM/DD'));
    let day2 = new Date(thisDay);

    let difference = Math.abs(day2 - day1);
    let days = difference / (1000 * 3600 * 24)

    return days
}

//* 文字過長處理
export function TextLongToDot(str) {
    let maxLength = 30;
    let abbreviatedStr = str.length > maxLength ? str.substring(0, maxLength) + "..." : str;

    return abbreviatedStr
}