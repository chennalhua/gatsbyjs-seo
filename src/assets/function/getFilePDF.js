//@ pet 寵物險
import 富邦寵物險計畫二保單條款 from '../pdf/FuBon/富邦寵物險計畫二保單條款.pdf'
import 富邦產物寵物綜合保險 from '../pdf/FuBon/富邦產物寵物綜合保險(其-20220209).pdf'
import 華南產物寵物綜合保險 from '../pdf/SouthChine/華南產物寵物綜合保險(A).pdf'
//@ travel 旅平險
import 富邦產物旅綜保險 from '../pdf/FuBon/富邦產物旅綜保險條款.pdf'
import 華南產物旅綜險商品內容 from '../pdf/SouthChine/華南產物旅綜險商品內容.pdf'
import 華南產物國內旅綜條款 from '../pdf/SouthChine/華南產物國內旅綜條款.pdf'
import 華南產物國外旅綜條款 from '../pdf/SouthChine/華南產物國外旅綜條款.pdf'
import 華南保險契約變更書 from '../pdf/SouthChine/華南保險契約變更書.pdf'
import 華南信用卡授權書 from '../pdf/SouthChine/華南信用卡授權書_11109.pdf'
import 華南英文投保證明申請書 from '../pdf/SouthChine/華南英文投保證明申請書.pdf'
//@ life 定壽險
import 保誠人壽e無憂定期壽險條款樣張 from '../pdf/Prudential/保誠人壽e無憂定期壽險.pdf'
import 保誠人壽e起到老定期壽險條款樣張 from '../pdf/Prudential/保誠人壽e起到老定期壽險.pdf'
import 保誠人壽e保庇健康保險條款樣張 from '../pdf/Prudential/保誠人壽e保庇健康保險.pdf'
//@ walk 
import 法商法國巴黎人壽e起健走定期壽險 from '../pdf/Cardif/法商法國巴黎人壽e起健走定期壽險.pdf'
import 法商法國巴黎人壽e起健走一至六級意外失能扶助保險 from '../pdf/Cardif/法商法國巴黎人壽e起健走一至六級意外失能扶助保險.pdf'
import 法國巴黎人壽MCC_APP_e健康操作手冊 from '../pdf/Cardif/法國巴黎人壽MCC_APP_e健康操作手冊.pdf'
import 個人健康險及傷害險之費率可能調整告知書 from '../pdf/Cardif/個人健康險及傷害險之費率可能調整告知書.pdf'
import FATCA及CRS身份確認同意暨聲明書 from '../pdf/Cardif/FATCA及CRS身份確認同意暨聲明書.pdf'
import 要保書警語及其相關聲明事項 from '../pdf/Cardif/要保書警語及其相關聲明事項.pdf'
import 履行個人資料保護法告知義務通知書 from '../pdf/Cardif/法商法國巴黎人壽保險股份有限公司台灣分公司履行個人資料保護法告知義務通知書_頁1-1_202210.pdf'
import 傳統壽險投保人須知要保書填寫說明_OTC版 from '../pdf/Cardif/傳統壽險-投保人須知暨要保書填寫說明-網投傳統壽險版.pdf'
import 電子保單申請暨權益事項說明 from '../pdf/Cardif/法商法國巴黎人壽電子保單申請書暨權益事項說明.pdf'

export default function getFilePDF(fileName) {
    if (fileName == '保誠人壽e無憂定期壽險條款樣張') {
        return (保誠人壽e無憂定期壽險條款樣張)
    } else if (fileName == '保誠人壽e起到老定期壽險條款樣張') {
        return (保誠人壽e起到老定期壽險條款樣張)
    } else if (fileName == '保誠人壽e保庇健康保險條款樣張') {
        return (保誠人壽e保庇健康保險條款樣張)
    } else if (fileName == '富邦產物寵物綜合保險') {
        return (富邦產物寵物綜合保險)
    } else if (fileName == '富邦寵物險計畫二保單條款') {
        return (富邦寵物險計畫二保單條款)
    } else if (fileName == '富邦產物旅綜保險') {
        return (富邦產物旅綜保險)
    } else if (fileName == '華南產物寵物綜合保險') {
        return (華南產物寵物綜合保險)
    } else if (fileName == '華南產物旅綜險商品內容') {
        return (華南產物旅綜險商品內容)
    } else if (fileName == '華南產物國內旅綜條款') {
        return (華南產物國內旅綜條款)
    } else if (fileName == '華南產物國外旅綜條款') {
        return (華南產物國外旅綜條款)
    } else if (fileName == '華南保險契約變更書') {
        return (華南保險契約變更書)
    } else if (fileName == '華南信用卡授權書') {
        return (華南信用卡授權書)
    } else if (fileName == '華南英文投保證明申請書') {
        return (華南英文投保證明申請書)
    } else if (fileName == '法商法國巴黎人壽e起健走定期壽險') {
        return (法商法國巴黎人壽e起健走定期壽險)
    } else if (fileName == '法商法國巴黎人壽e起健走一至六級意外失能扶助保險') {
        return (法商法國巴黎人壽e起健走一至六級意外失能扶助保險)
    } else if (fileName == '法國巴黎人壽MCC_APP_e健康操作手冊') {
        return (法國巴黎人壽MCC_APP_e健康操作手冊)
    } else if (fileName == '個人健康險及傷害險之費率可能調整告知書') {
        return (個人健康險及傷害險之費率可能調整告知書)
    } else if (fileName == 'FATCA及CRS身份確認同意暨聲明書') {
        return (FATCA及CRS身份確認同意暨聲明書)
    } else if (fileName == '要保書警語及其相關聲明事項') {
        return (要保書警語及其相關聲明事項)
    } else if (fileName == '履行個人資料保護法告知義務通知書') {
        return (履行個人資料保護法告知義務通知書)
    } else if (fileName == '傳統壽險投保人須知要保書填寫說明_OTC版') {
        return (傳統壽險投保人須知要保書填寫說明_OTC版)
    } else if (fileName == '電子保單申請暨權益事項說明') {
        return (電子保單申請暨權益事項說明)
    }
}