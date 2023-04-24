import Icon from '../../components/Icon'
import { ProductBlockTitle } from '../../components/ProductDescription'
import getFilePDF from './getFilePDF'

export default function subCaseProductText(type, company, option, caseName) {
    if (company == '法國巴黎人壽' && caseName == '一至六級意外失能扶助保險附約') {
        if (option == '商品特色') {
            return (
                <div className='col-12 pt-3 pb-2 mx-auto product'>
                    <div className='mb-5'>
                        <p className='text-center text-secondary fs-3 fw-bolder lh-base'>一至六級意外失能扶助保險附約</p>
                        <div className='text-center'><Icon color='#6c757d' icon='arrow_down' size={16} /></div>
                        <p className='text-center text-gary' style={{ fontSize: '20px' }}>
                            給付項目<br />
                            <span className='d-block small'>【一至六級意外失能扶助保險金】</span>
                        </p>
                    </div>
                    <div>
                        <div className='row'>
                            <div className="col-12 col-md-6 text-center">
                                <img src={require('../image/icon/保證給付.svg').default} className='img-fluid' alt='' width='200px' />
                                <div className='text-center'>
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            1~6級意外失能扶助金<br />保證給付十年
                                        </h3>
                                        <p className='my-2 text-center'>補償經濟中斷期間的醫療或生活費用支出。</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 text-center'>
                            <img src={require('../image/icon/銅板價.svg').default} className='img-fluid' alt='' width='200px' />
                                <div className='text-center'>
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            每天不到10元<br />銅板價享百萬失能扶助保障
                                        </h3>
                                        <p className='my-2 text-center'>小資族必備，出門在外打拼好放心。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (option == '保障商品說明') {
            return (
                <>
                    <ProductBlockTitle title='一至六級意外失能扶助保險金' isCheckIcon={false}>
                        <p>被保險人於本契約有效期間內身故者，本公司按下列約定給付「身故保險金」後，本契約之效力即行終止：</p>
                        <p>被保險人於本附約有效期間內因意外傷害事故發生之日起一百八十日以內致成失能等級第一級至第六級之失能程度之一者，自其失能診斷確定日起，依診斷確定當時之<span className='mx-1 text-danger' style={{ fontSize: '18px' }}>保險金額</span>按年給付「一至六級意外失能扶助保險金」，<span className='mx-1 text-danger' style={{ fontSize: '18px' }}>給付期限為十年</span>。
                            同一被保險人其「一至六級意外失能扶助保險金」的給付於保險有效期間內以<span className='mx-1 text-danger' style={{ fontSize: '18px' }}>一次為限</span>。本公司開始給付「一至六級意外失能扶助保險金」後，本附約效力即行終止，但嗣後本公司應給付之「一至六級意外失能扶助保險金」不受此項附約效力終止之限制。
                        </p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='除外責任' isCheckIcon={false}>
                        <p>被保險人因下列原因致成失能時，本公司不負給付保險金的責任：</p>
                        <ol className='text-cjk lh-lg'>
                            <li>被保險人的故意行為。</li>
                            <li>被保險人犯罪行為。</li>
                            <li>被保險人飲酒後駕（騎）車，其吐氣或血液所含酒精成份超過道路交通法令規定標準者。</li>
                            <li>戰爭（不論宣戰與否）、內亂及其他類似的武裝變亂。但附約另有約定者不在此限。但附約另有約定者不在此限。</li>
                            <li>因原子或核子能裝置所引起的爆炸、灼熱、輻射或污染。但附約另有約定者不在此限。但附約另有約定者不在此限。</li>
                        </ol>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='不保事項' isCheckIcon={false}>
                        <p>被保險人從事下列活動，致成失能時，除附約另有約定外，本公司不負給付保險金的責任： </p>
                        <ol className='text-cjk lh-lg'>
                            <li>被保險人從事角力、摔跤、柔道、空手道、跆拳道、馬術、拳擊、特技表演等的競賽或表演。</li>
                            <li>被保險人從事汽車、機車及自由車等的競賽或表演。</li>
                        </ol>
                    </ProductBlockTitle>
                </>
            )
        } else if (option == '投保規則') {
            return (
                <>
                    <div>
                        <p className='text-end text-gary small'>單位：新臺幣/元</p>
                        <table className='table bg-light'>
                            <tbody>
                                <tr className='text-center' valign="middle">
                                    <th className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>會員註冊方式</h6>
                                    </th>
                                    <th className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>最低保額</h6>
                                    </th>
                                    <th className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>累計公司最高保額</h6>
                                    </th>
                                    <th className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>累計同業最高保額</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>公司非有效保戶<br />以網路方式首次註冊及身分驗證(註)</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>225</span>萬</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>225</span>萬</h6>
                                    </td>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>公司有效保戶<br />以網路方式首次註冊及身分驗證(註)</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>450</span>萬</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>450</span>萬</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='text-gary small'>※ 以本人信用卡或本人存款帳戶作身分輔助驗證者。</p>
                        <p className='text-gary small'>※ 上述累計公司／同業最高保額係指網路投保商品險種保額。</p>
                        <p className='text-gary small'>※ 本傷害險附約累計計算方式採用保險金額x保證給付10年。</p>
                    </div>
                    <ProductBlockTitle title='投保規則' isCheckIcon={false}>
                        <ol>
                            <li className='py-2'>承保對象：要、被保險人以同一人為限，且為本國籍。</li>
                            <li className='py-2'>
                                被保險人投保限制：
                                <p className='py-1'>(1). 承保年齡：18足歲~55歲。</p>
                                <p className='py-1'>(2). 投保金額：10萬~40萬。</p>
                                <p className='py-1'>(3). 18足歲~30歲僅開放保險金額大於10萬。</p>
                                <p className='py-1'>(4). 保險金額30萬~40萬限既有有效客戶購買。</p>
                                <p className='py-1'>(5). 僅承保職業等級屬1~4級者。</p>
                            </li>
                            <li className='py-2'>保險期間／繳費期間：1年期</li>
                            <li className='py-2'>
                                繳別及繳費方式：
                                <p className='py-1'>(1). 繳別：限年繳。</p>
                                <p className='py-1'>(2). 繳費方式：首／續期：信用卡。</p>
                            </li>
                            <li className='py-2'>
                                投保說明：
                                <p className='py-1'>(1). 要保⼈與被保險⼈須為同一人，具中華⺠國國籍且有⾏為能⼒之⾃然⼈，並須於中華民國境內進行網路投保。</p>
                                <p className='py-1'>(2). 受益人規則：身故受益人以直系血親、配偶或法定繼承人為限。</p>
                                <p className='py-1'>(3). 於保險業網路投保之其他傷害險累計保額上限：800萬元。</p>
                                <p className='py-1'>(4). 特殊身分限制：學生（23歲以下未婚在學，且沒有兼職之全職學生）、現役軍人（含軍校學生）、無固定職業者（轉業、待業中、退休人士），累計公司傷害險最高投保金額300萬；家庭主婦，累計公司傷害險最高投保金額500萬。</p>
                                <p className='py-1'>(5). 須受「特殊身分與職業投保規則保額限制」，職業屬壽險拒保者，不予受理。</p>
                                <p className='py-1'>(6). 依投保險種、保險金額檢核被保險人職業、健康狀況、財務資料，如有異常且影響風險評估者或達到「核保控管作業規範」應需要進行財務核保、生調作業者或投保同業壽險主附約（不含團體險）網路商品且併有短期密集投保情形者（密集投保係指投保六個月內收件通報超過2家以上），不予受理。</p>
                                <p className='py-1'>(7). 保險契約之保險期間為一年，保險期間屆滿前，要保人與法國巴黎人壽雙方無反對之意思表示，且要保人於保險期間屆滿後之三十日內已交付保險費者，得更新保險契約使其繼續有效。</p>
                                <p className='py-1'>(8). 續約保險費應以續約時被保險人的職業為基礎，按當時主管機關所核定的費率計算，要保人如不同意該項保險費，契約自該期保險費應交之日起自動終止。</p>
                                <p className='py-1'>(9). 主契約有效時，本附約可續保至被保險人保險年齡65歲。</p>
                                <p className='py-1'>(10). 其餘未說明同傷害險商品核保規則。</p>
                            </li>
                        </ol>
                    </ProductBlockTitle>
                </>
            )
        } else if (option == '保單條款') {
            return (
                <>
                    <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                        <a href={getFilePDF('法商法國巴黎人壽e起健走一至六級意外失能扶助保險')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                            <Icon color='#fff' icon='file' size={22} className='pb-1' />
                            法國巴黎人壽e起健走一至六級意外失能扶助保險附約
                        </a>
                        <p className='text-gary small'>備查文號: 民國112年03月01日 巴黎(112)壽字第03002號</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='注意事項' isCheckIcon={false}>
                        <ol>
                            <li className='my-3' style={{ fontSize: '18px' }}>消費者投保前應審慎了解本保險商品之承保範圍、除外不保事項及商品風險，相關內容均詳列於保單條款及相關銷售文件，如有疑義請洽詢銷售人員以詳細說明。</li>
                            <li className='my-3'>本商品由公勝保險經紀人股份有限公司為本商品之行銷通路。網路投保平台及法國巴黎人壽網站可查詢法國巴黎人壽之保單條款，要保人須仔細閱讀，商品詳細內容以保單條款為準。</li>
                            <li className='my-3'>消費者於購買本商品前，應詳閱各種銷售文件內容，本商品之預定費用率(預定附加費用率)最高29.0%，最低29.0%；如要詳細了解其他相關資訊，請查閱法國巴黎人壽網址<a href='https://life.cardif.com.tw/' target='_blank'><u>https://life.cardif.com.tw/</u></a>，或洽免付費服務專線0800-012-899，以保障您的權益。</li>
                            <li className='my-3'><u>投保後解約或不繼續繳費可能不利消費者，請慎選符合需求之保險商品。</u></li>
                            <li className='my-3'>投保後解約時，將無法領回全部保險費，解約金之計算說明，請詳細參閱保單條款。</li>
                            <li className='my-3' style={{ fontSize: '18px' }}><u>保險契約各項權利義務皆詳列於保單條款，消費者務必詳加閱讀了解，並把握保單契約撤銷之時效（收到保單翌日起算十日內）。</u></li>
                            <li className='my-3'><u>本保險為不分紅保單，不參加紅利分配，並無紅利給付項目。</u></li>
                            <li className='my-3'>本商品為保險商品，依保險法及相關規定受「人身保險安定基金」保障。</li>
                            <li className='my-3'>本商品為保險商品，非存款商品，無受「存款保險」保障。</li>
                            <li className='my-3'>本商品經法國巴黎人壽合格簽署人員檢視其內容業已符合一般精算原則及保險法令，惟為確保權益，基於保險公司與消費者衡平對等原則，消費者仍應詳加閱讀保險單條款與相關文件，審慎選擇保險商品。本商品如有虛偽不實或違法情事，應由法國巴黎人壽及負責人依法負責。</li>
                            <li className='my-3'>人壽保險之死亡給付及年金保險之確定年金給付於被保險人死亡後給付於指定受益人者，依保險法第一百十二條規定不得作為被保險人之遺產，惟如涉有規避遺產稅等稅捐情事者，稽徵機關仍得依據有關稅法規定或納稅者權利保護法第七條所定實質課稅原則辦理。相關實務案例請至法國巴黎人壽官網<a href='https://life.cardif.com.tw/' target='_blank'><u>https://life.cardif.com.tw/</u></a>查閱。</li>
                            <li className='my-3'>本簡介僅供參考，詳細保單內容以保單條款為準，客戶投保前應詳細閱讀保單條款內容。</li>
                            <li className='my-3'>稅法相關規定或解釋與實質課稅原則認定，可能影響本商品所涉之給付金額及稅賦。</li>
                            <li className='my-3'>本商品以投保當時契約條款及法國巴黎人壽核保、保全、理賠作業情形為準。</li>
                            <li className='my-3'><u>本商品之紛爭處理及申訴管道：法國巴黎人壽免費申訴電話：0800-012-899、傳真電話：02-6636-3457、電子信箱(email)：group_assurance_tw_parislife@tw.cardif.com。</u></li>
                        </ol>
                        <p className='small text-gary'>版次: 112/02</p>
                    </ProductBlockTitle>
                </>
            )
        }
    }
}