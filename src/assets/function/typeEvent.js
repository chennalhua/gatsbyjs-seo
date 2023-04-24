export const lifeEvent = {
    getPCA5A04JobLevel: function (calData) { //取得 e起到老 job level
        const jobLevelData = require('../jsonData/InsuranceType/Lifes/Prudential/life_5A04/productMappingOccupations_5A04.json')
        let mainJobValue = calData.jobValue.occupation_code,
            partJobValue = null
        if (calData.isPartJob) {
            partJobValue = calData.partJobValue.occupation_code
        }

        let jobState = { main: null, part: null }
        jobLevelData.map((item, index) => {
            if (mainJobValue == item.occupation_code) {
                jobState.main = item.accept
            }
            if (partJobValue !== null && partJobValue == item.occupation_code) {
                jobState.part = item.accept
            }
        })

        let returnVal = null
        if (jobState.main == false || jobState.part == false) {
            returnVal = false
        } else {
            returnVal = true
        }
        return returnVal
    }
}