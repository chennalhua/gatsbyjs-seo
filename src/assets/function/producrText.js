import Icon from '../../components/Icon'
import { ProductBlockTitle } from '../../components/ProductDescription'
import getFilePDF from './getFilePDF'

// pdf
import PolicyDescMingTai from '../pdf/MingTai/PolicyDesc_MingTai.pdf'
import PolicyDescFuBon from '../pdf/FuBon/富邦產物寵物綜合保險(其-20220209).pdf'
import PolicyDescFuBonLuxury from '../pdf/FuBon/富邦寵物險計畫二保單條款.pdf'
import ruleText from './ruleText'

export default function productText(type, company, option, caseName, theme) {
    if (type == 'pet') { //@ 寵物險
        if (company == '華南產物') { //*華南
            if (option == '商品特色') {
                return (
                    <div className='col-12 pb-2 mx-auto product'>
                        <ProductBlockTitle title='保障寵物醫療'>
                            <div className='row'>
                                <div className='col-12 col-lg-8'>
                                    <p className='mb-2'>採各項費用保險金額及保險期間內最高累計賠償內實支實付</p>
                                    <p className='d-flex flex-wrap'>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>門診費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>住院費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>手術費用</span></span>
                                    </p>
                                </div>
                                <div className='col-12 col-lg-4 d-none d-md-block text-end'>
                                    <img src={require('../image/icon/01_醫療給付.svg').default} className='img-fluid' alt='醫療給付' />
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='專案保障範圍多元，可依實際需求投保'>
                            <div className='row'>
                                <div className='col-12 col-lg-8'>
                                    <p className='d-flex flex-wrap'>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>醫療費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>侵權責任</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>協尋廣告費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>寄宿費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>喪葬費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>重新取得費用</span></span>
                                        <span className='text-primary me-3'>
                                            <Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' />
                                            <span className='text-dark fw-bolder'>旅遊行程取消費用</span></span>
                                    </p>
                                </div>
                                <div className='col-12 col-lg-4 d-none d-md-block text-end'>
                                    <img src={require('../image/icon/02_專案保障.svg').default} className='img-fluid' alt='專案保障' />
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='補償寵物取得費用，鼓勵認養取代購買'>
                            <div className='row align-items-center'>
                                <div className='col-12 col-lg-8'>
                                    <p className='small text-danger'>*僅限完成晶片植入、寵物登記者</p>
                                    <div className=''>
                                        <p className='fw-bolder text-primary'>
                                            <Icon color='#ff8f00' icon='tag' size={22} className='pb-1' />
                                            <span className='text-dark'>認養補償</span></p>
                                        <p className='mx-2'>包含認養、植入晶片、寵物登記、診療、美容、清潔、體檢、預防注射、結紮、預防性治療或除蟲費用</p>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='fw-bolder text-primary'>
                                            <Icon color='#ff8f00' icon='tag' size={22} className='pb-1' />
                                            <span className='text-dark'>購買補償</span></p>
                                        <p className='mx-2'>包含購買費用、植入晶片及寵物登記費用</p>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 d-none d-md-block text-end'>
                                    <img src={require('../image/icon/03_補償寵物.svg').default} className='img-fluid' alt='補償寵物' />
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='貓狗實質風險不同，保費差異更顯公平'></ProductBlockTitle>
                        <ProductBlockTitle title='假期取消無須擔憂，行程費用也可補償'>
                            <p className='small text-danger'>*僅限取消行程後，無法獲得退費之費用支出
                            </p>
                        </ProductBlockTitle>
                        <div className='bg-primary-m p-3 text-primary rounded mt-5'>
                            <p>※ 本專案理賠方式於保障限額內採「實際支出之費用給付」，詳細內容以
                                <a href={getFilePDF('華南產物寵物綜合保險')} target='_blank' className='btn btn-danger fw-bolder px-1 mx-1'>
                                    <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                    保單條款
                                </a>為準，華南產險保留承保與否之權利。</p>
                        </div>
                    </div>
                )
            } else if (option == '證明文件') {
                return (
                    <>
                        <div className='col-12 text-center mb-3 p-2'>
                            <p className='fw-bolder text-danger mb-2 text-center'>建議您投保前先 <a href='https://www.pet.gov.tw/web/o201.aspx' target='_blank' variant='transparent' className='bg-danger rounded py-1 px-2 mx-2 text-light d-inline-block info--icon-before cursor-pointer animate__animated animate__pulse animate__infinite'>點我查詢寵物登記</a>，檢查毛孩晶片號碼是否正確，避免影響投保！！</p>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-lg-7 bg-light p-3 rounded'>
                                <ul className='list-unstyled d-flex flex-column flex-sm-row justify-content-center align-items-center h-100'>
                                    <li className='text-center'>
                                        <img src={require('../image/icon/晶片序號.png')} width='60%' alt='晶片序號' />
                                        <p className='fw-bolder mt-3'>晶片序號 + 晶片登記文件</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-12 col-lg-1 fs-5 py-2 py-lg-0 m-auto text-center'>+</div>
                            <div className='col-12 col-lg-4 bg-light p-3 rounded text-center'>
                                <img src={require('../image/icon/正面照片.png')} className='pet-photo' alt='近三個月內正面彩色照片（含四肢）' width='50%' />
                                <p className='fw-bolder text-center mt-3'>近三個月內正面彩色照<br />（含四肢）</p>
                            </div>
                        </div>
                        <div className='bg-primary-m p-3 text-primary rounded mt-5'>
                            <p className='text-center'>※ 目前僅接受<span className='mx-2' style={{ fontSize: '18px' }}>已施打寵物晶片</span>並<span className='mx-2' style={{ fontSize: '18px' }}>完成農委會寵物登記</span>為限，暫不接受其他證明文件。</p>
                        </div>
                    </>
                )
            } else if (option == '投保規則') {
                return (
                    <>
                        <ProductBlockTitle title='投保資格' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>要被保人限晶片登記之寵物主本人。</span></p>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>配合網路投保相關法令規定：要保人投保年齡限20歲以上 </span></p>
                                <ul className='list-unstyled ms-4'>
                                    <li>1. 首次投保需先完成會員註冊。</li>
                                    <li>2. 本國籍自然人。</li>
                                    <li>3. 要保險人與被保險人須為同一人。</li>
                                </ul>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='寵物年齡' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'><b>首次投保</b>：滿六個月且未滿八歲六個月。</span></p>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'><b>續保年齡</b>：已在華南產投保且持續續保者，可續保至未滿十五歲六個月，已滿十五歲六個月者視為十六歲。</span></p>
                                <div className='alert alert-danger d-flex align-items-center small px-3 py-2 mt-3' role='alert'>
                                    <Icon color='#842029' size={18} icon='info_circle' />
                                    <p className='fw-bolder d-inline-block mx-2'>本保險為非保證續保商品，且依寵物續保年齡之不同，按當時主管機關核可的保險費率計算保費。</p>
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='身分證明文件' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>目前僅接受已施打寵物晶片並完成農委會寵物登記為限。</span></p>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='可承保的寵物' isCheckIcon={false}>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='mt-2 me-2 card-list w-100'>
                                        <h6 className='py-2 card-header bg-primary-l'><Icon color='#fff' icon='circle_check' size={22} className='pb-1' />適用於</h6>
                                        <div className='card-body position-relative'>
                                            <p>指因玩賞、伴侶之目的而飼養或管領之犬隻或貓隻</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='mt-2 card-list w-100'>
                                        <h6 className='py-2 card-header bg-danger'><Icon color='#fff' icon='error' size={22} className='pb-1' />不適用</h6>
                                        <div className='card-body'>
                                            <p>專門繁殖用、狩獵用、競賽用、特技表演用、醫學用途或特殊工作用者（如校犬、搜救犬、軍犬、警犬、緝毒犬、導盲犬…具攻擊性之寵物等）。</p>
                                            <p>品種：</p>
                                            <ul className='list-unstyled d-flex flex-wrap'>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>比特犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>美國比特鬥牛犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>美國史大佛夏牛頭犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>日本土佐犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>紐波利頓犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>阿根廷杜告犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>巴西菲勒犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>獒犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>西藏獒犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>鬥牛獒犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>義大利獒犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>波爾多獒犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>羅威納</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>加納利犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>惡霸犬</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>比特犬混種</span></li>
                                                <li className='text-danger my-1'><Icon color='#dc3545' icon='error' size={22} className='pb-1' /><span className='fw-bolder text-dark'>米克斯</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='其他規定' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>保單生效日為「翌日零時」，最長可選一週內為生效日期，保險期間為期一年。<br />
                                    <b className='text-danger my-2 ms-3'>※ 提醒您，投保申請每日晚上8點(含) 後申請，生效日為翌日+1日零時</b></span></p>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>每一晶片登記之寵物，不可同時再投保其他保險公司。</span></p>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='繳費方式' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>本人信用卡(驗證要、被保險人身份必須為本人) 。</span></p>
                            </div>
                        </ProductBlockTitle>
                    </>
                )
            }
        } else if (company == '富邦產險') { //*富邦
            if (option == '商品特色') {
                return (
                    <div className='col-12 pt-3 pb-2 mx-auto product'>
                        <ProductBlockTitle title='提供完整，四大保障'>
                            <div className='row'>
                                <div className='col-12 col-lg-8'>
                                    <p className='d-flex flex-wrap'>
                                        <span className='text-primary me-3'><Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' /><span className='text-dark fw-bolder'>寵物醫療費用</span></span>
                                        <span className='text-primary me-3'><Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' /><span className='text-dark fw-bolder'>侵權責任費用</span></span>
                                        <span className='text-primary me-3'><Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' /><span className='text-dark fw-bolder'>意外喪葬費用</span></span>
                                        <span className='text-primary me-3'><Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' /><span className='text-dark fw-bolder'>協尋廣告費用</span></span>
                                    </p>
                                </div>
                                <div className='col-12 col-lg-4 d-none d-md-block text-end'>
                                    <img src={require('../image/icon/02_專案保障.svg').default} className='img-fluid' alt='保障最完整' />
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='提供費用補償'>
                            <div className='row'>
                                <div className='col-12 col-lg-8'>
                                    <p className='mb-2'>定額補償輸血、因施打預防針而過敏事故</p>
                                    <p className='d-flex flex-wrap'>
                                        <span className='text-primary me-3'><Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' /><span className='text-dark fw-bolder'>輸血費用</span></span>
                                        <span className='text-primary me-3'><Icon color='#ff8f00' icon='circle_check' size={22} className='pb-1' /><span className='text-dark fw-bolder'>預防針過敏費用</span></span>
                                    </p>
                                </div>
                                <div className='col-12 col-lg-4 d-none d-md-block text-end'>
                                    <img src={require('../image/icon/01_醫療給付.svg').default} className='img-fluid' alt='醫療給付免自負額,沒有理賠次數限制' />
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='投保免體檢，晶片號碼快速核保'></ProductBlockTitle>
                        <ProductBlockTitle title='快速投保，最快翌日零時享有保障'></ProductBlockTitle>
                        <div className='bg-primary-m p-3 text-primary rounded mt-5'>
                            <p>*本專案理賠方式於保障限額內採「實際支出之費用給付」，詳細內容以
                                <a href={PolicyDescFuBon} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mx-1">
                                    <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                    保單條款
                                </a>為準，富邦產險保留承保與否之權利。</p>
                        </div>
                        <div className='bg-primary-m p-3 text-primary rounded mt-3'>
                            <p>*富邦【寵物險計畫二】
                                <a href={PolicyDescFuBonLuxury} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mx-1">
                                    <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                    保單條款
                                </a>，富邦產險保留承保與否之權利。</p>
                        </div>
                    </div>
                )
            } else if (option == '證明文件') {
                return (
                    <>
                        <div className='col-12 text-center mb-3 p-2'>
                            <p className='fw-bolder text-danger mb-2 text-center'>建議您投保前先 <a href='https://www.pet.gov.tw/web/o201.aspx' target='_blank' variant='transparent' className='bg-danger rounded py-1 px-2 mx-2 text-light d-inline-block info--icon-before cursor-pointer animate__animated animate__pulse animate__infinite'>點我查詢寵物登記</a>，檢查毛孩晶片號碼是否正確，避免影響投保！！</p>
                        </div>
                        <div className='row g-0 justify-content-center'>
                            <div className='col-12 col-lg-10 bg-light p-3 rounded'>
                                <ul className='list-unstyled h-100'>
                                    <li className='text-center'>
                                        {/* <ProductBlockTitle title='必備文件'></ProductBlockTitle> */}
                                        <img src={require('../image/icon/晶片序號.png')} width='120px' alt='晶片序號' />
                                        <p className='fw-bolder mt-3 text-center'>晶片序號</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )

            } else if (option == '投保規則') {
                return (
                    <>
                        <ProductBlockTitle title='保險費'>
                            <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /> 富邦寵物險計畫一：投保無寵物年齡限制</p>
                            <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /> 富邦寵物險計畫二：寵物年齡 7 歲（含）以下，保費採自然費率計算</p>
                            <div className='bg-light py-3 px-4 mt-2 rounded'>
                                <ul className='px-4 text-danger'>
                                    <li className='my-2'>商品核准名稱及文號：富邦產物寵物綜合保險111.02.09富保業字第1110000446號函備查。富邦產物安心寵物綜合保險111.03.10富保業字第1110000808號函備查。</li>
                                    <li className='my-2'>本簡介僅供參考，詳細保險內容以保單及其條款記載為準，富邦產險保有最終承保與否之決定權，其他未盡事宜，悉依核保規則與保單條款辦理。</li>
                                    <li className='my-2'>消費者投保前應審慎了解本保險商品之承保範圍、除外不保事項及商品風險。
                                        消費者於購買前，應詳閱各種銷售文件內容，本商品之預定費用率（預定附加費用率）最高31%，最低31%(適用直接通路)。</li>
                                    <li className='my-2'>有關富邦產物保險(股)公司資訊公開說明，歡迎利用網際網路至富邦產物保險(股)公司網站www.fubon.com查詢。富邦產物保險股份有限公司地址：台北市中山區遼寧街179號7~14樓。24小時免費服務(申訴)電話：0800-009-888。</li>
                                </ul>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='保險費投保資格'>
                            <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' />本商品為網路投保專案，限本人投保，需年滿20足歲到70歲。</p>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='等待期限制'>
                            <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' />首年被保險寵物疾病之等待期為30日，癌症之等待期為90日，意外傷害則不受等待期限制。</p>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='適用寵物'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='mt-2 me-2 card-list w-100'>
                                        <h6 className='py-2 card-header bg-primary'><Icon color='#fff' icon='circle_check' size={22} className='pb-1' />適用於</h6>
                                        <div className='card-body position-relative'>
                                            <p>因玩賞、伴侶之目的而飼養或管領之犬隻或貓隻</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='mt-2 card-list w-100'>
                                        <h6 className='py-2 card-header bg-danger'><Icon color='#fff' icon='error' size={22} className='pb-1' />不適用</h6>
                                        <div className='card-body'>
                                            <p>專門繁殖用、狩獵用、醫學用途之犬隻或貓隻</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='繳費方式'>
                            <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' />必須為要保人本人信用卡</p>
                        </ProductBlockTitle>
                    </>
                )
            }
        }
    } else if (type == 'travel') { //@ 旅行平安險
        if (company == '華南產物') {
            if (option == '商品特色') {
                return (
                    <>
                        <div className='col-12 pt-5 pb-2 mx-auto product'>
                            <div>
                                <div className='row'>
                                    <div className="col-12 col-md-4 text-center">
                                        <img src={require('../image/icon/assure.svg').default} className='img-fluid' alt='' width='150px' />
                                        <div className='text-center'>
                                            <div className='pt-2 pb-4'>
                                                <h3 className='fs-5 dot-line-bottom-primary-light text-primary' style={{ height: '87px' }}>
                                                    <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                    意外身故失能<br />傷害醫療實支實付皆有保障
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4 text-center'>
                                        <img src={require('../image/icon/foreignfee_height.svg').default} className='img-fluid' alt='' width='169px' />
                                        <div className='text-center'>
                                            <div className='pt-2 pb-4'>
                                                <h3 className='fs-5 dot-line-bottom-primary-light text-primary' style={{ height: '87px' }}>
                                                    <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                    海外醫療費用高
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4 text-center'>
                                        <img src={require('../image/icon/insurance-check.svg').default} className='img-fluid' alt='' width='130px' />
                                        <div className='pt-2 pb-4'>
                                            <h3 className='fs-5 dot-line-bottom-primary-light text-primary' style={{ height: '87px' }}>
                                                <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                保障多樣化
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-danger rounded'>
                            <p>※ 國外旅遊均享有：海外緊急救援服務（限意外傷害所致）：（886）2 6619 9236</p>
                            <p>※ 海外旅綜險計畫 A、B、C、D 海外突發疾病(甲型)，不含法定傳染疾病。</p>
                            <p>※ 海外旅綜險計畫 E、F 海外突發疾病(乙型)，包含法定傳染疾病。</p>
                        </div>
                    </>
                )
            } else if (option == '投保規則') {
                return (
                    <>
                        <ProductBlockTitle title='投保資格' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>投保時，被保險人必須在國內（台、澎、金、馬地區）。</span></p>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>配合網路投保相關法令規定：要保人投保年齡限20歲以上 </span></p>
                                <ul className='list-unstyled ms-4'>
                                    <li>1. 首次投保需先完成會員註冊。</li>
                                    <li>2. 本國籍自然人。</li>
                                    <li>3. 要保險人與被保險人須為同一人。</li>
                                </ul>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='年齡資格' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-end text-gary small'>單位：新臺幣/元</p>
                                <table className='table bg-light'>
                                    <tbody>
                                        <tr className='text-center bg-primary-m' valign="middle">
                                            <th className='border'>
                                                <h6 className='text-center' style={{ fontSize: '18px' }}>投保年齡</h6>
                                            </th>
                                            <th className='border'>
                                                <h6 className='text-center' style={{ fontSize: '18px' }}>滿20歲-70歲</h6>
                                            </th>
                                            <th className='border'>
                                                <h6 className='text-center' style={{ fontSize: '18px' }}>滿70歲-75歲</h6>
                                            </th>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>旅行平安保險</h6>
                                            </td>
                                            <td className='border'>
                                                <h6>1,000 萬</h6>
                                            </td>
                                            <td className='border'>
                                                <h6>300 萬</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>傷害醫療保險</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>旅行平安險保額之10％</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>海外突發疾病(甲型)-住院醫療</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>旅行平安險保額之5％</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>海外突發疾病(甲型)-門診醫療</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>海外突發疾病-住院醫療保額之0.5％</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>海外突發疾病(甲型)-急診醫療</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>海外突發疾病-住院醫療保額之1％</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>海外突發疾病(乙型)-住院醫療</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>旅行平安險保額之5％</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>海外突發疾病(乙型)-門診醫療</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>海外突發疾病-住院醫療保額之0.5％</h6>
                                            </td>
                                        </tr>
                                        <tr className='text-center' valign="middle">
                                            <td className='border'>
                                                <h6 className='text-primary'>海外突發疾病(乙型)-急診醫療</h6>
                                            </td>
                                            <td className='border' colSpan='2'>
                                                <h6>海外突發疾病-住院醫療保額之1％</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className='text-danger fw-bolder'>註：海外旅綜險計畫 A、B、C、D 海外突發疾病(甲型)，不含法定傳染疾病。</p>
                                <p className='text-danger fw-bolder'>註：海外旅綜險計畫 E、F 海外突發疾病(乙型)，包含法定傳染疾病。保障最多可投保 10 天</p>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='如何申請英文投保證明' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' />保戶填寫<a href={getFilePDF('華南英文投保證明申請書')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2 mx-2">
                                    <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                    英文投保證明申請書
                                </a>，傳真至 02-6636-7558  A&H 申請。</p>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='海外緊急救援服務' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' />限意外傷害所致：（886）2 6619 9236</p>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='繳費方式' isCheckIcon={false}>
                            <div className='mt-3 rounded'>
                                <p className='text-primary'><Icon color='#ffbb18' icon='tag' size={22} className='pb-1' /><span className='text-dark'>本人信用卡(驗證要、被保險人身份必須為本人) 。</span></p>
                            </div>
                        </ProductBlockTitle>
                    </>
                )
            } else if (option == '保單條款') {
                return (
                    <>
                        <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                            <a href={getFilePDF('華南產物國內旅綜條款')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                                <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                華南產物旅行綜合保險（國內）
                            </a><br />
                            <a href={getFilePDF('華南產物國外旅綜條款')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                                <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                華南產物旅行綜合保險（國外）
                            </a>
                            <p className='text-gary small'>92.04.04華企(92)字第004號函核准<br />111.10.14(111)華產企字第171號函備查</p>

                            <ul className='mt-2 ms-4'>
                                <li>
                                    <p>華南產物旅行綜合保險附加旅行平安保險</p>
                                    <span className='small text-gary'>
                                        92.04.04華企(92)字第004號函核備<br />
                                        110.12.15(110)華產企字第308號函備查
                                    </span>
                                </li>
                                <li>
                                    <p>華南產物旅行綜合保險附加旅行平安保險傷害醫療保險給付附加條款</p>
                                    <span className='small text-gary'>
                                        92.04.04華企(92)字第004號函核備<br />
                                        108.10.28依金融監督管理委員會108.04.09金管保壽字第10804904941號函修正
                                    </span>
                                </li>
                                <li>
                                    <p>華南產物海外突發疾病醫療健康保險附約(甲型)</p>
                                    <span className='small text-gary'>
                                        112.01.18(112)華產企字第028號函備查
                                    </span>
                                </li>
                                <li>
                                    <p>華南產物海外突發疾病醫療健康保險附約(乙型)</p>
                                    <span className='small text-gary'>
                                        112.03.25(112)華產企字第 057 號函備查
                                    </span>
                                </li>
                                <li>
                                    <p>華南產物旅行綜合保險班機改降補償保險附加條款</p>
                                    <span className='small text-gary'>
                                        107.11.14(107)華產企字第287號函備查<br />
                                        108.12.27(108)華產企字第331號函備查
                                    </span>
                                </li>
                                <li>
                                    <p>華南產物旅行綜合保險信用卡盜用損失補償附加條款</p>
                                    <span className='small text-gary'>
                                        106.08.30(106)華產企字第254號函備查<br />
                                        108.12.27(108)華產企字第333號函備查
                                    </span>
                                </li>
                                <li>
                                    <p>華南產物旅行綜合保險旅行期間居家竊盜保險附加條款</p>
                                    <span className='small text-gary'>
                                        106.08.30(106)華產企字第255號函備查<br />
                                        108.12.27(108)華產企字第332號函備查
                                    </span>
                                </li>
                            </ul>
                            <p className='text-danger fw-bolder mt-4'>註：海外旅綜險計畫 A、B、C、D 海外突發疾病(甲型)，不含法定傳染疾病。</p>
                            <p className='text-danger fw-bolder'>註：海外旅綜險計畫 E、F 海外突發疾病(乙型)，包含法定傳染疾病。</p>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='附加費用率' isCheckIcon={false}>
                            <p>消費者於購買前，應詳閱各種銷售文件內容，本商品之預定附加費用率<span className='text-danger'>最高 42%，最低 23%</span>。<br />
                                如要了解其他相關資訊，請洽本公司業務員、服務據點（免付費電話：0800-010-850）<br />或網站（網址：<a href='https://www.south-china.com.tw' target='_blank'><u>https://www.south-china.com.tw</u></a>），以保障您的權益
                            </p>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='提醒事項' isCheckIcon={false}>
                            <p>投保時若旅遊地點已宣布／發生罷工，因該罷工導致的保險事故，班機延誤屬於除外不保事項。投保前請審慎評估您的旅遊及保險需求。 </p>
                            <br />
                            <p>因應主管機關規範，即日起，被保險人以網路方式投保旅平險之傷害醫療實支實付保險者，重疊的保險期間內以1張為限。 申領保險金時，須提供醫療費用明細正本或收據正本。</p>
                            <br />
                            <p>提醒您，若您欲前往的旅遊地點包含外交部發布之紅色旅遊警示國家或中國大陸地區，本公司將不受理承保旅遊險，造成不便，敬請見諒。</p>
                        </ProductBlockTitle>
                    </>
                )
            }
        } else if (company == '富邦產險') {
            if (option == '注意事項') {
                return (
                    <>
                        <ProductBlockTitle title='國內旅遊' isCheckIcon={false}>
                            <ol className='text-cjk lh-lg'>
                                <li>{`若投保【方案B】→旅行平安險保額須>=300萬，投保天數須>=3天。投保一人須提前3天投保。`}</li>
                                <li>{`若投保【方案C】→僅能投保一人，且須是開車的駕駛人。旅行平安險保額須>=300萬，投保天數須>=3天。投保一人(限駕駛人刷卡)須提前3天投保。`}</li>
                                <li>各投保方案，僅供國內旅遊適用。總保費僅供參考，實際投保組合及保費歡迎點選連結試算投保。</li>
                                <li>各承保險種僅供參考，詳細給付範圍限保單之承保項目為限，承保及理賠條件請依條款記載為主。</li>
                            </ol>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='國外旅遊' isCheckIcon={false}>
                            <ol className='text-cjk lh-lg'>
                                <li>目前僅先開放30天內要出國的保戶投保。投保後如需退保，請洽各分支機構辦理；另外相同的保險期間，網路投保以1張為限。</li>
                                <li>以上若選擇"投保一人"(網路投保區)：
                                    →須年滿18歲，須使用本人信用卡；出發前2小時仍可保，免回傳要保書。</li>
                                <li>以上投保【XL方案】，若為前往申根地區國家，將隨保單寄送"申根憑證"及"英文投保證明"。</li>
                                <li>被保險人因罹患中華民國傳染病防治法第三條所規定之法定傳染病，而衍生之住院、門診費用，本公司不負給付海外突發疾病的各項醫療保險金的責任。</li>
                                <li>各投保方案，僅供國外旅遊適用。總保費僅供參考，實際投保組合及保費請點選連結試算投保。</li>
                                <li>各承保險種僅供參考，詳細給付範圍限保單之承保項目為限，承保理賠條件請依條款記載為主。</li>
                            </ol>
                        </ProductBlockTitle>
                    </>
                )
            } else if (option == '保單條款') {
                return (
                    <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                        <a href={getFilePDF('富邦產物旅綜保險')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                            <Icon color='#fff' icon='file' size={22} className='pb-1' />
                            富邦產物旅綜保險
                        </a>
                    </ProductBlockTitle>
                )
            }
        }
    } else if (type == 'life') { //@定壽險
        if (company == '保誠人壽' && caseName == 'e無憂') { //* 保誠 e無憂
            if (option == '商品內容') {
                return <div className='col-12 pt-3 pb-2 mx-auto product'>
                    <div>
                        <div className='mb-5'>
                            <p className='text-center text-secondary fs-3 fw-bolder lh-base'>三大特點<br />穩穩築起人生堅實保障</p>
                        </div>
                        <div className='row'>
                            <div className="col-12 col-md-4 text-center">
                                <img src={require('../image/type/life/prudential/pro1.gif')} className='img-fluid' alt='' width='200px' />
                                <div className='text-center'>
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            保費實惠<br />簡單擁有高保障
                                        </h3>
                                        <p className='my-2'>用較低保費幫在打拼事業的奮鬥族，打造高CP值壽險保障，讓您無後顧之憂。</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 text-center'>
                                <img src={require('../image/type/life/prudential/pro2.gif')} className='img-fluid' alt='' width='200px' />
                                <div className='text-center'>
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            符合人生階段<br />保障彈性調整
                                        </h3>
                                        <p className='my-2'>投保一次保障5年，可依不同人生階段，每5年彈性調整、規劃最適合自己需求的階段性保障。</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 text-center'>
                                <img src={require('../image/type/life/prudential/pro3.gif')} className='img-fluid' alt='' width='200px' />
                                <div className='pt-2 pb-4'>
                                    <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                        <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                        網路投保<br />既快速又方便
                                    </h3>
                                    <p className='my-2'>全年無休的網路投保服務， 任何時間、地點都能線上投保，手續簡單快速。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-center text-gary' style={{ fontSize: '20px' }}>
                            給付項目<br />
                            <span className='d-block small'>【身故保險金或喪葬費用保險金、完全失能保險金】</span>
                            <Icon color='#6c757d' icon='arrow_down' size={16} />
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span style={{ fontSize: '18px' }}>保誠人壽e無憂定期壽險</span>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-primary-m">
                                        <ProductBlockTitle title='身故保險金或喪葬費用保險金' isCheckIcon={false}>
                                            <p>被保險人身故時，按「保險金額」給付身故保險金；若在繳費期間身故則加計已繳但未到期保險費。給付後，保險契約效力即行終止。</p>
                                            <p className='mt-1 text-gary'>※訂立保險契約時，以受監護宣告尚未撤銷者為被保險人，其身故保險金之計算，另依條款約定。</p>
                                        </ProductBlockTitle>
                                        <ProductBlockTitle title='完全失能保險金' isCheckIcon={false}>
                                            <p>被保險人完全失能時，按「保險金額」給付完全失能保險金；若在繳費期間完全失能則加計已繳但未到期保險費。給付後，保險契約效力即行終止。</p>
                                        </ProductBlockTitle>
                                        <hr />
                                        <div style={{ fontSize: '14px' }}>
                                            <p className='text-gary lh-sm mb-2'>被保險人同時或先後致成保單條款附表一所列二項以上之完全失能程度者，保誠人壽僅給付一項完全失能保險金。</p>
                                            <p className='text-gary lh-sm'>受益人申領保險給付時，依保單條款之約定，保誠人壽於需要時會參據醫學專業意見，並得對被保險人的身體予以檢驗，以作為理賠審核之依據。</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className='text-center'><u>除外責任</u></p>
                                            <p>要保人故意致被保險人於死、被保險人故意自殺或自成完全失能、或被保險人因犯罪致死或完全失能者，保誠人壽不負給付保險金之責。</p>
                                            <p className='text-gary small'>完整之除外責任請詳保單條款。</p>
                                            <div className='bg-primary-m p-3 text-primary rounded mt-3'>
                                                <p className='text-center'>上述說明內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            } else if (option == '投保規則') {
                return <>
                    <ProductBlockTitle title='投保限額' isCheckIcon={false}>
                        <p className='text-end text-gary small'>單位：新臺幣/元</p>
                        <table className='table bg-light'>
                            <tbody>
                                <tr className='text-center' valign="middle">
                                    <th className='border' rowSpan='2' style={{ background: 'linear-gradient(26deg, transparent 49.5%, #dee2e6 49.5%, #dee2e6 50.5%, transparent 50.5%)' }}>
                                        <h6 className='text-end mb-5'>會員註冊方式</h6>
                                        <h6 className='text-start'>投保身分</h6>
                                    </th>
                                    <th colSpan='2' className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>網路註冊</h6>
                                    </th>
                                    <th colSpan='2' className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>臨櫃註冊</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' align="center">
                                    <th className='border'>
                                        <h6>20足歲~50歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>51歲~55歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>20足歲~50歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>51歲~55歲</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽既有客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>50</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為600萬)</p>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>50</span>萬~
                                            <span className='px-1 text-primary fs-5'>200</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td><td rowSpan="2" className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>50</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為600萬)</p>
                                    </td>
                                    <td rowSpan="2" className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>50</span>萬~
                                            <span className='px-1 text-primary fs-5'>200</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽新客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>50</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>50</span>萬~
                                            <span className='px-1 text-primary fs-5'>200</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='text-gary small'>※ 累積保險業定期壽險網路投保保額。</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='投保規則' isCheckIcon={false}>
                        <ol>
                            <li className='py-2'>投保方式：<br />要保人以網路或親臨保誠人壽(含分支機構)營業處所方式並以要保人信用卡或要保人存款帳戶作身分輔助驗證者，於辦理首次註冊及身分驗證作業後，即可獲得網路投保資格，並進行線上網路投保。</li>
                            <li className='py-2'>保險期間：5年。</li>
                            <li className='py-2'>投保年齡：20足歲~55歲。</li>
                            <li className='py-2'>繳費年期、繳別：5年，限年繳。</li>
                            <li className='py-2'>
                                繳費方式：
                                <p className='py-1'>(1).首期：要保人之信用卡扣款、存款帳戶繳費(全國繳費網)或悠遊付。</p>
                                <p className='py-1'>(2).續期：指定金融機構帳戶自動轉帳、信用卡扣款、指定銀行現金匯款、郵政劃撥、自動櫃員機(ATM)轉帳、臨櫃及便利商店繳款。</p>
                            </li>
                            <li className='py-2'>投保說明：
                                <p className='py-1'>(1).要保⼈與被保險⼈須為同一人，具中華⺠國國籍且有⾏為能⼒之⾃然⼈，並須於中華民國境內進行網路投保。</p>
                                <p className='py-1'>(2).身故受益人以直系血親、配偶或法定繼承人為限。</p>
                                <p className='py-1'>(3).於保險業之壽險累計保額上限：1,500萬元。</p>
                                <p className='py-1'>(4).須受「特殊身分與職業投保規則保額限制」，且被保險人職業等級為五、六級者，於保誠人壽定期壽險累計保額最高以200萬元為限，超過限額者，不予受理。</p>
                                <p className='py-1'>(5).被保險人曾因意外傷害、既往病史就診或有體格異常………等體況異常情形，或有理賠紀錄、懷孕中婦女、產後一個月內者，不予受理。</p>
                                <p className='py-1'>(6).壽險職業加費者或職業屬傷害險拒保者，不予受理。</p>
                                <p className='py-1'>(7).依投保險種、保險金額檢核被保險人職業、健康狀況、財務資料，如有異常且影響風險評估者或達到「核保控管作業規範」應需要進行財務核保、生調作業者或投保同業壽險主附約(不含團體險)網路商品且併有短期密集投保情形者(密集投保係指投保六個月內收件通報超過2家以上)，不予受理。</p>
                                <p className='py-1'>(8).累計體檢保額超過免體檢授權額度者，不予受理。</p>
                            </li>
                        </ol>
                    </ProductBlockTitle>
                </>
            } else if (option == '保單條款') {
                return <>
                    <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                        <a href={getFilePDF('保誠人壽e無憂定期壽險條款樣張')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                            <Icon color='#fff' icon='file' size={22} className='pb-1' />
                            保誠人壽e無憂定期壽險條款樣張
                        </a>
                        <p className='text-gary small'>備查文號：民國108年01月07日保誠總字第1080016號</p>
                        <p className='text-gary small'>逕行修訂文號：民國112年01月01日依金融監督管理委員會111年08月30日金管保壽字第1110445485號函修正</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='注意事項' isCheckIcon={false}>
                        <ol>
                            <li className='my-3' style={{ fontSize: '18px' }}>消費者投保前應審慎瞭解本商品之承保範圍、除外不保事項及商品風險。網頁介紹內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</li>
                            <li className='my-3' style={{ fontSize: '18px' }}>投保後解約或不繼續繳費可能不利消費者，請慎選符合需求之保險商品。</li>
                            <li className='my-3'>保險契約各項權利義務皆詳列於保單條款，消費者務必詳加閱讀了解，並把握保單契約撤銷之時效(收到保單翌日起算十日內)。</li>
                            <li className='my-3'>本商品之投保規則，依保誠人壽相關核保規定辦理，保誠人壽擁有最終承保與否之權利。</li>
                            <li className='my-3'>本保險為不分紅保險單，不參加紅利分配，且無紅利給付項目。</li>
                            <li className='my-3'>本商品為保險商品，受人身保險安定基金保障，非屬存款，故不受存款保險之保障。</li>
                            <li className='my-3'>本商品經保誠人壽合格簽署人員檢視其內容業已符合一般精算原則及保險法令，惟為確保權益，基於保險公司與消費者衡平對等原則，消費者仍應詳加閱讀保險單條款與相關文件，審慎選擇保險商品。本商品如有虛偽不實或違法情事，應由保誠人壽及負責人依法負責。</li>
                            <li className='my-3'>人壽保險之死亡給付及年金保險之確定年金給付於被保險人死亡後給付於指定受益人者，依保險法第一百十二條規定不得作為被保險人之遺產，惟如涉有規避遺產稅等稅捐情事者，稽徵機關仍得依據有關稅法規定或納稅者權利保護法第七條所定實質課稅原則辦理。消費者如欲進一步參考實質課稅相關案例，請詳保誠人壽網站。</li>
                            <li className='my-3'>消費者於購買前，應詳閱各種銷售文件內容，本商品之預定費用率(預定附加費用率) ，最高60%，最低25%；如要詳細了解其他相關資訊，請洽保誠人壽總公司(地址：台北市信義區松智路1號8樓，免付費客戶服務/申訴專線0809-0809-68、或網址 <a href='http://www.pcalife.com.tw' target='_blank'><u>http://www.pcalife.com.tw</u></a>)，以保障您的權益。</li>
                        </ol>
                        <p className='small text-gary'>版次：112/01</p>
                    </ProductBlockTitle>
                </>
            } else if (option == '範例說明') {
                return (
                    <>
                        <div>
                            <div>
                                <div className='col-12 mx-auto'>
                                    <p>小誠先生30歲投保本商品，投保保額200萬元，每年持續繳交保費。若遇到下列假設兩種狀況，分別獲得理賠金額如下：</p>
                                    <p className='text-end text-gary small mb-2'>單位：新臺幣/元</p>
                                </div>
                                <div className='col-12 mx-auto'>
                                    <div>
                                        <div className='row align-items-center'>
                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                <img src={require(`../image/type/life/prudential/ex1.gif`)} alt='' className='img-fluid' />
                                            </div>
                                            <div className='col-12 col-lg-7'>
                                                <p className='text-primary-l'>情境一</p>
                                                <h6>33歲時，不幸因病身故，可獲得整筆身故給付保險金。</h6>
                                                <ul className='text-gary list-unstyled my-3'>
                                                    <li>● 身故保險金：<span className='fs-5 text-danger'>200</span> 萬</li>
                                                    <li>● 完全失能保險金：-</li>
                                                </ul>
                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>200</span> 萬</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='col-12 mx-auto'>
                                    <div>
                                        <div className='row flex-row-reverse align-items-center'>
                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                <img src={require(`../image/type/life/prudential/ex2.gif`)} alt='' className='img-fluid' />
                                            </div>
                                            <div className='col-12 col-lg-7'>
                                                <p className='text-primary-l'>情境二</p>
                                                <h6>33歲時，因騎機車發生車禍傷及脊椎，經半年以上治療後，醫師診斷其全身癱瘓，四肢無法隨意識活動，機能永久喪失，終身不能從事任何工作且需專人周密照顧。</h6>
                                                <ul className='text-gary list-unstyled my-3'>
                                                    <li>● 身故保險金：-</li>
                                                    <li>● 完全失能保險金：<span className='fs-5 text-danger'>200</span> 萬</li>
                                                </ul>
                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>200</span> 萬</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-center small mt-4'>※ 保險期間無論疾病或意外原因導致身故或完全失能，皆提供整筆給付保障，相關定義及其他事項請詳閱保單條款。</p>
                        </div>
                        <div className='mt-5'>
                            <ProductBlockTitle title='保費效益比'>
                                <ol>
                                    <li>
                                        下列表格數值係指投保保誠人壽ｅ無憂定期壽險，繳費5年期，各保單年度末解約金與保險費之比例關係：
                                        <img src={require('../image/type/life/prudential/5H04 Premium benefit_202201.jpg')} className='img-fluid mt-2 d-block' alt='' />
                                    </li>
                                    <li className='small mt-5'>
                                        保費效益比公式如下：
                                        <img src={require('../image/type/life/prudential/5H04-2.png')} className='img-fluid mt-2 d-block' alt='' width='240px' />
                                        <div className='mt-4'>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註1：</div>
                                                <div>CVm 為第 m 保單年度之年末解約金</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註2：</div>
                                                <div>GPt 為第 t 保單年度之年繳保費</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註3：</div>
                                                <div>m=1~5</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註4：</div>
                                                <div> i 為前一日曆年度之十二個月臺灣銀行股份有限公司、第一商業銀行股份有限公司與合作金庫商業銀行股份有限公司每月初(每月第一個營業日)牌告之二年期定期儲蓄存款最高年利率之平均值(1.13%)</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註5：</div>
                                                <div>Σ 為加總之符號</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='small mt-5'>上述保費效益比是依據人身保險業辦理資訊公開管理辦法、財政部92.03.31台財保字第0920012416號令，以及行政院金融監督管理委員會96.07.26金管保一字第09602083930號函辦理。</li>
                                </ol>
                            </ProductBlockTitle>
                        </div>
                    </>
                )
            }
        } else if (company == '保誠人壽' && caseName == 'e起到老') { //* 保誠 e起到老
            if (option == '商品內容') {
                return <div className='col-12 pt-3 pb-2 mx-auto product'>
                    <div>
                        <div className='mb-5'>
                            <p className='text-center text-secondary fs-3 fw-bolder lh-base'>三大特點<br />輕鬆享有壽險保障</p>
                        </div>
                        <div className='row'>
                            <div className="col-12 col-md-4 text-center">
                                <img src={require('../image/type/life/prudential/5A04/pro1.gif')} className='img-fluid' alt='' width='200px' />
                                <div className='text-center'>
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            壽險保障輕鬆購
                                        </h3>
                                        <p className='my-2'>保費平準，輕鬆購買，繳費到90歲保障就到90歲。</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 text-center'>
                                <img src={require('../image/type/life/prudential/5A04/pro2.gif')} className='img-fluid' alt='' width='200px' />
                                <div className='text-center'>
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            免健告體檢輕鬆保
                                        </h3>
                                        <p className='my-2'>免健康告知、免體檢，手續簡便輕鬆投保。</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 text-center'>
                                <img src={require('../image/type/life/prudential/5A04/pro3.gif')} className='img-fluid' alt='' width='200px' />
                                <div className='pt-2 pb-4'>
                                    <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                        <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                        兩種繳別輕鬆選
                                    </h3>
                                    <p className='my-2'>有年繳、月繳兩種繳別，依您的財務分配輕鬆選擇。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-center text-gary' style={{ fontSize: '20px' }}>
                            給付項目<br />
                            <span className='d-block small'>【身故保險金或喪葬費用保險金、完全失能保險金】</span>
                            <Icon color='#6c757d' icon='arrow_down' size={16} />
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span style={{ fontSize: '18px' }}>保誠人壽e起到老定期壽險</span>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-primary-m">
                                        <ProductBlockTitle title='身故保險金或喪葬費用保險金' isCheckIcon={false}>
                                            <p>被保險人身故時，按下列三款計算方式所得金額取其最大值，給付身故保險金。給付後，保險契約效力即行終止。</p>
                                            <ol className='text-cjk'>
                                                <li className='border-0 p-0'>身故當時之「當年度保險金額(註1) 」。</li>
                                                <li className='border-0 p-0'>身故當時之「基本保險金額(註2)」的保單價值準備金 ⨯「保單價值準備金比率」。</li>
                                                <li className='border-0 p-0'>身故當時之「應已繳總保費」。</li>
                                            </ol>
                                            <p className='mt-1 text-gary'>※訂立保險契約時，以受監護宣告尚未撤銷者為被保險人，其身故保險金之計算，另依條款約定。</p>
                                        </ProductBlockTitle>
                                        <ProductBlockTitle title='完全失能保險金' isCheckIcon={false}>
                                            <p>被保險人致成條款約定完全失能程度之一者，按下列三款計算方式所得金額取其最大值，給付完全失能保險金。給付後，保險契約效力即行終止。</p>
                                            <ol className='text-cjk'>
                                                <li className='border-0 p-0'>完全失能當時之「當年度保險金額 (註1)」。</li>
                                                <li className='border-0 p-0'>完全失能當時之「基本保險金額(註2)」的保單價值準備金 ⨯「保單價值準備金比率」。</li>
                                                <li className='border-0 p-0'>完全失能當時之「應已繳總保費」。</li>
                                            </ol>
                                        </ProductBlockTitle>
                                        <hr />
                                        <div style={{ fontSize: '14px' }}>
                                            <div className='mt-4'>
                                                <div className='d-flex'>
                                                    <div style={{ width: '40px', whiteSpace: 'pre' }}>註1：</div>
                                                    <div>「當年度保險金額」於第一至第五保單年度，係指「應已繳總保險費」的1 . 025倍；於第六保單年度起，係指「基本保險金額」。</div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div style={{ width: '40px', whiteSpace: 'pre' }}>註2：</div>
                                                    <div>「基本保險金額」係指保險單所載明之保險金額。如該保險金額有所變更時，以變更後之保險金額為準。</div>
                                                </div>
                                                <p>※ 被保險⼈同時或先後致成保單條款附表⼀所列⼆項以上之完全失能程度者，保誠⼈壽僅給付⼀項完全失能保險⾦。</p>
                                                <p>※ 受益⼈申領完全失能保險金給付時，依保單條款之約定，保誠⼈壽於需要時會參據醫學專業意⾒，並得對被保險⼈的⾝體予以檢驗，以作為理賠審核之依據。</p>
                                                <p>※ 保單價值準備金比率</p>
                                                <div className='col-12 col-lg-6'>
                                                    <table class="table text-center table-bordered border-gary">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">計算當時被保險人之保險年齡</th>
                                                                <th scope="col">保單價值準備金比率</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">30歲以下者</th>
                                                                <td>190%</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">31歲~40歲</th>
                                                                <td>160%</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">41歲~50歲</th>
                                                                <td>140%</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">51歲~60歲</th>
                                                                <td>120%</td>
                                                            </tr>
                                                            <tr className='p-0'>
                                                                <th scope="row">61歲~70歲</th>
                                                                <td>110%</td>
                                                            </tr>
                                                            <tr className='p-0'>
                                                                <th scope="row">71歲~90歲</th>
                                                                <td>102%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className='text-center'><u>除外責任</u></p>
                                            <p>要保人故意致被保險人於死、被保險人故意自殺或自成完全失能、或被保險人因犯罪致死或完全失能者，保誠人壽不負給付保險金之責。</p>
                                            <p className='text-gary small'>完整之除外責任請詳保單條款。</p>
                                            <div className='bg-primary-m p-3 text-primary rounded mt-3'>
                                                <p className='text-center'>上述說明內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            } else if (option == '投保規則') {
                return <>
                    <ProductBlockTitle title='投保限額' isCheckIcon={false}>
                        <p className='text-end text-gary small'>單位：新臺幣/元</p>
                        <table className='table bg-light'>
                            <tbody>
                                <tr className='text-center' valign="middle">
                                    <th className='border' rowSpan='2' style={{ background: 'linear-gradient(26deg, transparent 49.5%, #dee2e6 49.5%, #dee2e6 50.5%, transparent 50.5%)' }}>
                                        <h6 className='text-end mb-5'>會員註冊方式</h6>
                                        <h6 className='text-start'>投保身分</h6>
                                    </th>
                                    <th colSpan='2' className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>網路註冊</h6>
                                    </th>
                                    <th colSpan='2' className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>臨櫃註冊</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' align="center">
                                    <th className='border'>
                                        <h6>20足歲~50歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>51歲~60歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>20足歲~50歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>51歲~60歲</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽既有客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬~
                                            <span className='px-1 text-primary fs-5'>30</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為600萬)</p>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬~
                                            <span className='px-1 text-primary fs-5'>30</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td><td rowSpan="2" className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬~
                                            <span className='px-1 text-primary fs-5'>30</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為600萬)</p>
                                    </td>
                                    <td rowSpan="2" className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬~
                                            <span className='px-1 text-primary fs-5'>30</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽新客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬~
                                            <span className='px-1 text-primary fs-5'>30</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>10</span>萬~
                                            <span className='px-1 text-primary fs-5'>30</span>萬</h6>
                                        <p className='small text-gary text-center'>(※壽險累積上限為300萬)</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='text-gary small'>※ 累積保險業定期壽險網路投保保額。</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='投保規則' isCheckIcon={false}>
                        <ol>
                            <li className='py-2'>投保方式：<br />要保人以網路或親臨保誠人壽(含分支機構)營業處所方式並以要保人信用卡或要保人存款帳戶作身分輔助驗證者，於辦理首次註冊及身分驗證作業後，即可獲得網路投保資格，並進行線上網路投保。</li>
                            <li className='py-2'>保險期間：至保險年齡達90歲當年之保單週年日。</li>
                            <li className='py-2'>投保年齡：20足歲~60歲。</li>
                            <li className='py-2'>繳費年期、繳別：90歲滿期，年繳、月繳。<br />※若不繼續繳費可能導致保單停效，在停效起兩年內可申請復效，逾期未申請保單將失效。</li>
                            <li className='py-2'>
                                繳費方式：
                                <p className='py-1'>(1).首期：要保人之信用卡扣款、存款帳戶繳費(全國繳費網)或悠遊付。</p>
                                <p className='py-1'>(2).續期：指定金融機構帳戶自動轉帳、信用卡扣款、指定銀行現金匯款、郵政劃撥、自動櫃員機(ATM)轉帳、臨櫃及便利商店繳款。</p>
                            </li>
                            <li className='py-2'>投保說明：
                                <p className='py-1'>(1).要保⼈與被保險⼈須為同一人，具中華⺠國國籍且有⾏為能⼒之⾃然⼈，並須於中華民國境內進行網路投保。</p>
                                <p className='py-1'>(2).身故受益人以直系血親、配偶或法定繼承人為限。</p>
                                <p className='py-1'>(3).每一被保險人投保本商品限一張。</p>
                                <p className='py-1'>(4).於保誠人壽網路投保定期壽險累計保額上限：300萬元。</p>
                                <p className='py-1'>(5).於保險業之壽險累計保額上限：1,500萬元。</p>
                                <p className='py-1'>(6).須受「特殊身分與職業投保規則保額限制」，且被保險人職業等級為五、六級者，於保誠人壽定期壽險累計保額最高以200萬元為限，超過限額者，不予受理。</p>
                                <p className='py-1'>(7).壽險職業加費者或職業屬傷害險拒保者，不予受理。</p>
                                <p className='py-1'>(8).依投保險種、保險金額檢核被保險人職業、財務資料，如有異常且影響風險評估者或達到「核保控管作業規範」應需要進行財務核保、生調作業者或投保同業壽險主附約(不含團體險)網路商品且併有短期密集投保情形者(密集投保係指投保六個月內收件通報超過2家以上)，不予受理。</p>
                            </li>
                        </ol>
                    </ProductBlockTitle>
                </>
            } else if (option == '保單條款') {
                return <>
                    <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                        <a href={getFilePDF('保誠人壽e起到老定期壽險條款樣張')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                            <Icon color='#fff' icon='file' size={22} className='pb-1' />
                            保誠人壽e起到老定期壽險條款樣張
                        </a>
                        <p className='text-gary small'>備查文號：民國109年11月13日保誠總字第1090834號</p>
                        <p className='text-gary small'>逕行修訂文號：民國112年01月01日依金融監督管理委員會111年08月30日金管保壽字第1110445485號函修正</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='注意事項' isCheckIcon={false}>
                        <ol>
                            <li className='my-3' style={{ fontSize: '18px' }}>消費者投保前應審慎瞭解本商品之承保範圍、除外不保事項及商品風險。網頁介紹內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</li>
                            <li className='my-3' style={{ fontSize: '18px' }}>投保後解約或不繼續繳費可能不利消費者，請慎選符合需求之保險商品。</li>
                            <li className='my-3'>保險契約各項權利義務皆詳列於保單條款，消費者務必詳加閱讀了解，並把握保單契約撤銷之時效(收到保單翌日起算十日內)。</li>
                            <li className='my-3'>本商品之投保規則，依保誠人壽相關核保規定辦理，保誠人壽擁有最終承保與否之權利。</li>
                            <li className='my-3'>本保險為不分紅保險單，不參加紅利分配，且無紅利給付項目。</li>
                            <li className='my-3'>本商品為保險商品，受人身保險安定基金保障，非屬存款，故不受存款保險之保障。</li>
                            <li className='my-3'>本商品經保誠⼈壽合格簽署人員檢視其內容業已符合⼀般精算原則及保險法令，惟為確保權益，基於保險公司與消費者衡平對等原則，消費者仍應詳加閱讀保險單條款與相關文件，審慎選擇保險商品。本商品如有虛偽不實或違法情事，應由保誠人壽及負責人依法負責。</li>
                            <li className='my-3'>人壽保險之死亡給付及年金保險之確定年金給付於被保險人死亡後給付於指定受益人者，依保險法第一百十二條規定不得作為被保險人之遺產，惟如涉有規避遺產稅等稅捐情事者，稽徵機關仍得依據有關稅法規定或納稅者權利保護法第七條所定實質課稅原則辦理。消費者如欲進一步參考實質課稅相關案例，請詳保誠人壽網站。</li>
                            <li className='my-3'>消費者於購買前，應詳閱各種銷售文件內容，本商品之預定費用率(預定附加費用率)，最高20%，最低8%；如要詳細了解其他相關資訊，請洽保誠⼈壽總公司(地址：台北市信義區松智路1號8樓，免付費客⼾服務/申訴專線0809-0809-68、或網址 <a href='http://www.pcalife.com.tw' target='_blank'><u>http://www.pcalife.com.tw</u></a> )，以保障您的權益。</li>
                        </ol>
                        <p className='small text-gary'>版次：112/01</p>
                    </ProductBlockTitle>
                </>
            } else if (option == '範例說明') {
                return (
                    <>
                        <div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button  bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            範例一
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-primary-m">
                                            <div>
                                                <div className='col-12 mx-auto'>
                                                    <p>伊小姐30歲，小資族，平時有儲蓄習慣，因為想有個基本保障，又不想影響到自己的儲蓄規劃，故投保保誠人壽 e 起到老定期壽險，基本保險金額30萬元，年繳保費2,610元，每年持續繳交保費。</p>
                                                    <p className='text-end text-gary small mb-2'>單位：新臺幣/元</p>
                                                </div>
                                                <div className='col-12 mx-auto'>
                                                    <div>
                                                        <div className='row align-items-center'>
                                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                                <img src={require(`../image/type/life/prudential/5A04/ex_fall down_5A04.png`)} alt='' className='img-fluid' />
                                                            </div>
                                                            <div className='col-12 col-lg-7'>
                                                                <p className='text-primary-l'>情境</p>
                                                                <h6>假設伊小姐在33歲時（保單年度第 4 年），因登山失足意外傷及頸椎，治療6個月後醫師診斷其全身癱瘓，四肢無法隨意活動，機能永久喪失，終身不能從事任何工作且需專人照護。</h6>
                                                                <p className='text-gary mt-2' style={{ fontSize: '14px' }}>註：完全失能保險金按三款方式(請詳保單條款)計算後，以完全失能當時之「基本保險金額的保單價值準備金 x 保單價值準備金比率」為最大值，故依此給付之。</p>
                                                                <ul className='text-gary list-unstyled my-3'>
                                                                    <li>● 身故保險金：-</li>
                                                                    <li>● 完全失能保險金：<span className='fs-5 text-danger'>11,820</span></li>
                                                                </ul>
                                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>11,820</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src={require('../image/type/life/prudential/5A04/ex1.v1_5A04.png')} className='img-fluid mt-4' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed  bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            範例二
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-primary-m">
                                            <div>
                                                <div className='col-12 mx-auto'>
                                                    <p>齊女士50歲，想買保障又擔心費用昂貴，後來選擇投保保誠人壽 e 起到老定期壽險，基本保險金額30萬元，年繳保費4,710元，每年持續繳交保費。</p>
                                                    <p className='text-end text-gary small mb-2'>單位：新臺幣/元</p>
                                                </div>
                                                <div className='col-12 mx-auto'>
                                                    <div>
                                                        <div className='row align-items-center'>
                                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                                <img src={require(`../image/type/life/prudential/5A04/ex_death_5A04.png`)} alt='' className='img-fluid' />
                                                            </div>
                                                            <div className='col-12 col-lg-7'>
                                                                <p className='text-primary-l'>情境</p>
                                                                <h6>假設齊女士在53歲時（保單年度第 4 年），不幸因意外身故。</h6>
                                                                <p className='text-gary mt-2' style={{ fontSize: '14px' }}>註：身故保險金按三款方式(請詳保單條款)計算後，以身故當時之「應已繳總保費x1.025」為最大值，故依此給付之。</p>
                                                                <ul className='text-gary list-unstyled my-3'>
                                                                    <li>● 身故保險金：<span className='fs-5 text-danger'>19,320</span></li>
                                                                    <li>● 完全失能保險金：-</li>
                                                                </ul>
                                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>19,320</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src={require('../image/type/life/prudential/5A04/ex2.v2_5A04.png')} className='img-fluid mt-4' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed  bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            範例三
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-primary-m">
                                            <div>
                                                <div className='col-12 mx-auto'>
                                                    <p>道先生20歲，投保保誠人壽 e 起到老定期壽險，基本保險金額30萬元，年繳保費2,970元，每年持續繳交保費。</p>
                                                    <p className='text-end text-gary small mb-2'>單位：新臺幣/元</p>
                                                </div>
                                                <div className='col-12 mx-auto'>
                                                    <div>
                                                        <div className='row align-items-center'>
                                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                                <img src={require(`../image/type/life/prudential/5A04/ex_car_5A04.png`)} alt='' className='img-fluid' />
                                                            </div>
                                                            <div className='col-12 col-lg-7'>
                                                                <p className='text-primary-l'>情境</p>
                                                                <h6>假設道先生40歲時，因車禍意外傷及雙眼，經6個月的治療與矯正後，視力仍在萬國式視力表0.02以下，醫師診斷其雙眼永久失明。</h6>
                                                                <p className='text-gary mt-2' style={{ fontSize: '14px' }}>註：完全失能保險金按三款方式(請詳保單條款)計算後，以完全失能當時之「基本保險金額」為最大值，故依此給付之。</p>
                                                                <ul className='text-gary list-unstyled my-3'>
                                                                    <li>● 身故保險金：-</li>
                                                                    <li>● 完全失能保險金：<span className='fs-5 text-danger'>30</span> 萬</li>
                                                                </ul>
                                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>30</span> 萬</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src={require('../image/type/life/prudential/5A04/ex3.v3_5A04.png')} className='img-fluid mt-4' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <ProductBlockTitle title='保費效益比'>
                                <ol>
                                    <li>
                                        下列表格數值係指投保保誠人壽e起到老定期壽險，繳費至90歲滿期，各保單年度末解約金與保險費之比例關係：
                                        <img src={require('../image/type/life/prudential/5A04/5A04_Premium benefit_20221221.png')} className='img-fluid mt-2 d-block' alt='' />
                                    </li>
                                    <li className='small mt-5'>
                                        保費效益比公式如下：
                                        <img src={require('../image/type/life/prudential/5A04/Premium.png')} className='img-fluid mt-2 d-block' alt='' width='240px' />
                                        <div className='mt-4'>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註1：</div>
                                                <div>CVm 為第 m 保單年度之年末解約金</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註2：</div>
                                                <div>GPt 為第 t 保單年度之年繳保費</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註3：</div>
                                                <div>m=1~5、10、15、20</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註4：</div>
                                                <div> i 為前⼀日曆年度之十二個月臺灣銀行股份有限公司、第⼀商業銀行股份有限公司與合作金庫商業銀行股份有限公司每月初(每月第⼀個營業日)牌告之二年期定期儲蓄存款最高年利率之平均值(1.13%)</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註5：</div>
                                                <div>Σ 為加總之符號</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='small mt-5'>上述保費效益比是依據⼈身保險業辦理資訊公開管理辦法、財政部92.03.31台財保第0920012416號令，以及行政院金融監督管理委員會96.07.26金管保⼀字第09602083930號函辦理。</li>
                                </ol>
                            </ProductBlockTitle>
                        </div>
                    </>
                )
            }
        }
    } else if (type == 'healthy') { //@ 健康險
        if (company == '保誠人壽') {
            if (option == '商品內容') {
                return (
                    <>
                        <div className='col-12 pt-3 pb-2 mx-auto product'>
                            <div>
                                <div className='mb-5'>
                                    <p className='text-center text-secondary fs-3 fw-bolder lh-base'>三大特點<br />醫療保障輕鬆購</p>
                                </div>
                                <div className='row'>
                                    <div className="col-12 col-md-4 text-center">
                                        <img src={require('../image/type/healthy/prudential/pro1.gif')} className='img-fluid' alt='' width='200px' />
                                        <div className='text-center'>
                                            <div className='pt-2 pb-4'>
                                                <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                                    <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                    無理賠紀錄<br />可享保障加值
                                                </h3>
                                                <p className='my-2'>前一保單年度無理賠，次年度可享保險金額5%增額保障。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4 text-center'>
                                        <img src={require('../image/type/healthy/prudential/pro2.gif')} className='img-fluid' alt='' width='200px' />
                                        <div className='text-center'>
                                            <div className='pt-2 pb-4'>
                                                <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                                    <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                    住院、門診手術皆有保<br />讓您安心治療免煩惱
                                                </h3>
                                                <p className='my-2'>透過實支實付，填補額外的醫療費用支出，讓您投保後無懼於疾病的來襲。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4 text-center'>
                                        <img src={require('../image/type/healthy/prudential/pro3.gif')} className='img-fluid' alt='' width='200px' />
                                        <div className='pt-2 pb-4'>
                                            <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                                <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                保證續保<br />保障延續不中斷
                                            </h3>
                                            <p className='my-2'>保證續保至50歲，年年安心享保障。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-center text-gary' style={{ fontSize: '20px' }}>
                                    給付項目<br />
                                    <span className='d-block small'>【住院醫療費用保險金、門診手術費用保險金】</span>
                                    <Icon color='#6c757d' icon='arrow_down' size={16} />
                                </p>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span style={{ fontSize: '18px' }}>保誠人壽e保庇健康保險</span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body bg-primary-m">
                                                <ProductBlockTitle title='住院醫療費用保險金' isCheckIcon={false}>
                                                    <p>被保險人因保單條款第四條之約定而以全民健康保險之保險對象身分「住院」診療時，保誠人壽按被保險人「住院」期間內所發生，且依全民健康保險規定其保險對象應自行負擔及不屬全民健康保險給付範圍之下列各項費用核付。但同一次「住院」期間的給付總額不得超過「保險金額」。同一保單年度的給付總額不得超過新台幣十五萬元整。</p>
                                                    <ol style={{ listStyle: 'cjk-ideographic' }}>
                                                        <li className='border-0 p-0'>醫師指示用藥。</li>
                                                        <li className='border-0 p-0'>血液(非緊急傷病必要之輸血)。</li>
                                                        <li className='border-0 p-0'>掛號費及證明文件。</li>
                                                        <li className='border-0 p-0'>來往醫院之救護車費。</li>
                                                        <li className='border-0 p-0'>超等住院之病房費差額。</li>
                                                        <li className='border-0 p-0'>管灌飲食以外之膳食費。</li>
                                                        <li className='border-0 p-0'>特別護士以外之護理費。</li>
                                                        <li className='border-0 p-0'>手術費用。</li>
                                                        <li className='border-0 p-0'>超過全民健康保險給付之住院醫療費用。</li>
                                                    </ol>
                                                    <p>前項若屬下列情形之一者，則保誠人壽不負賠償之責任：</p>
                                                    <ol style={{ listStyle: 'cjk-ideographic' }}>
                                                        <li className='border-0 p-0'>藥癮治療、預防性手術、變性手術。</li>
                                                        <li className='border-0 p-0'>成藥。</li>
                                                        <li className='border-0 p-0'>指定醫師費。</li>
                                                        <li className='border-0 p-0'>人體試驗、但經全民健康保險專案批准給付者不在此限。</li>
                                                    </ol>
                                                </ProductBlockTitle>
                                                <ProductBlockTitle title='門診手術費用保險金' isCheckIcon={false}>
                                                    <p>被保險人因保單條款第四條之約定而以全民健康保險之保險對象身分接受門診外科手術治療時，保誠人壽按被保險人因施行手術當日所發生，且依全民健康保險規定其保險對象應自行負擔及不屬全民健康保險給付範圍之醫療費用及手術費核付「門診手術費用保險金」，每次門診手術最高給付金額以「保險金額」之百分之十為限。同一保單年度給付以三次為限。</p>
                                                    <p>不屬全民健康保險醫療費用支付標準第二部第二章第七節所列舉之手術者，則保誠人壽不負賠償之責任。</p>
                                                    <p>全民健康保險醫療費用支付標準如有變更或停止適用者，前項第二款內容亦將隨之變更或停止適用。</p>
                                                </ProductBlockTitle>
                                                <hr />
                                                <div style={{ fontSize: '14px' }}>
                                                    <p className='text-gary lh-sm'>「住院」係指被保險人經醫師診斷其疾病或傷害必須入住醫院，且正式辦理住院手續並確實在醫院接受診療者，但不包含全民健康保險法第五十一條所稱之日間住院及精神衛生法第三十五條所稱之日間留院。保誠人壽辦理理賠作業於需要時會參據醫學專業意見審核被保險人住院之必要性。</p>
                                                    <p className='text-gary lh-sm'>受益人申領保險給付時，依保單條款之約定，保誠人壽於需要時會參據醫學專業意見，以作為理賠審核之依據。</p>
                                                </div>
                                                <hr />
                                                <div>
                                                    <p className='text-center'><u>除外責任</u></p>
                                                    <p >被保險人因以下原因所致之疾病或傷害而住院診療或門診手術者，保誠人壽不負給付各項保險金的責任：故意行為、犯罪行為、非法施用毒品、美容手術或外科整型(重建基本功能者不在此限)、外觀可見之天生畸形、非因當次住院治療之目的所進行之牙科手術、裝設輔具(例:義齒、義肢等)、非直接診治病人(例：健康檢查或養老等)、懷孕(特定疾病及行為不在此限)、流產或分娩及其併發症(醫療必要不在此限)、不孕症、人工受孕或非以治療為目的之避孕及絕育手術等。</p>
                                                    <p className='text-gary small'>完整之除外責任請詳保單條款。</p>
                                                    <div className='bg-primary-m p-3 text-primary rounded mt-3'>
                                                        <p className='text-center'>上述說明內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            } else if (option == '投保規則') {
                return <>
                    <ProductBlockTitle title='投保限額' isCheckIcon={false}>
                        <p className='text-end text-gary small'>單位：新臺幣/元</p>
                        <table className='table bg-light'>
                            <tbody>
                                <tr className='text-center' valign="middle">
                                    <th className='border' style={{ background: 'linear-gradient(15deg, transparent 49.5%, rgb(222, 226, 230) 49.5%, rgb(222, 226, 230) 50.5%, transparent 50.5%)' }}>
                                        <h6 className='text-end mb-3'>會員註冊方式</h6>
                                        <h6 className='text-start'>投保身分</h6>
                                    </th>
                                    <th className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>網路註冊</h6>
                                    </th>
                                    <th className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>臨櫃註冊</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽既有客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>3</span>萬~
                                            <span className='px-1 text-primary fs-5'>8</span>萬</h6>
                                        <p className='small text-gary text-center'>(※健康保險累積上限為20萬)</p>
                                    </td>
                                    <td className='border' rowSpan='2'>
                                        <h6><span className='px-1 text-primary fs-5'>3</span>萬~
                                            <span className='px-1 text-primary fs-5'>8</span>萬</h6>
                                        <p className='small text-gary text-center'>(※健康保險累積上限為20萬)</p>
                                    </td>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽新客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>3</span>萬~
                                            <span className='px-1 text-primary fs-5'>8</span>萬</h6>
                                        <p className='small text-gary text-center'>(※健康保險累積上限為10萬)</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='text-gary small'>※累積保險業健康保險網路投保保額。</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='投保規則' isCheckIcon={false}>
                        <ol>
                            <li className='py-2'>投保方式：<br />要保人以網路或親臨保誠人壽(含分支機構)營業處所方式並以要保人信用卡或要保人存款帳戶作身分輔助驗證者，於辦理首次註冊及身分驗證作業後，即可獲得網路投保資格，並進行線上網路投保。</li>
                            <li className='py-2'>保險期間：1年。</li>
                            <li className='py-2'>投保年齡：20足歲~45歲。</li>
                            <li className='py-2'>繳費年期、繳別：1年，限年繳。</li>
                            <li className='py-2'>
                                繳費方式：
                                <p className='py-1'>(1).首期：要保人之信用卡扣款、存款帳戶繳費(全國繳費網)或悠遊付。</p>
                                <p className='py-1'>(2).續期：指定金融機構帳戶自動轉帳、信用卡扣款、指定銀行現金匯款、郵政劃撥、自動櫃員機(ATM)轉帳、臨櫃及便利商店繳款。</p>
                            </li>
                            <li className='py-2'>投保說明：
                                <p className='py-1'>(1).要保⼈與被保險⼈須為同一人，具中華⺠國國籍且有⾏為能⼒之⾃然⼈，並須於中華民國境內進行網路投保。</p>
                                <p className='py-1'>(2).被保險人曾因意外傷害或既往病史就診或體格異常或…等體況異常情形或有理賠紀錄或懷孕中婦女或產後一個月內者，不予受理。</p>
                                <p className='py-1'>(3).已投保其他保險公司之商業實支實付型健康醫療保險商品者，不予受理。</p>
                                <p className='py-1'>(4).不受理的特殊身份 / 職業，請參照現行「特殊身份與職業投保規則」及職業分類表辦理；屬壽險/傷害保險拒保者亦不受理。</p>
                                <p className='py-1'>(5).現行「特殊身份與職業投保規則」內累計住院醫療日額採限額受理者，本商品累計保額以5萬元為限。</p>
                                <p className='py-1'>(6).依保險金額檢核被保險人職業、健康狀況、財務資料，如有異常且影響風險評估者或達到「核保控管作業規範」應需要進行財務核保者，不予受理。</p>
                                <p className='py-1'>(7).投保三個月內收件通報超過2家醫療險主附約者，本商品不予受理申請。</p>
                                <p className='py-1'>(8).保險契約保險期間為一年，保險期間屆滿時，要保人得依續保當時被保險人保險年齡交付續保保險費，以逐年使保險契約繼續有效。</p>
                                <p className='py-1'>(9).續約保險費，按續保生效當時依規定陳報主管機關之費率及被保險人年齡重新計算保險費，要保人如不同意該調整後之保費，保險契約效力於保險期間屆滿時即行終止。</p>
                                <p className='py-1'>(10).可續保至被保險人保險年齡50歲。</p>
                            </li>
                            <li className='py-2'>附約限制：依各附約規則辦理。</li>
                        </ol>
                    </ProductBlockTitle>
                </>
            } else if (option == '保單條款') {
                return <>
                    <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                        <a href={getFilePDF('保誠人壽e保庇健康保險條款樣張')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                            <Icon color='#fff' icon='file' size={22} className='pb-1' />
                            保誠人壽e保庇健康保險條款樣張
                        </a>
                        <p className='text-gary small'>備查文號：民國108 年04 月23 日保誠總字第1080034 號</p>
                        <p className='text-gary small'>逕行修訂文號：民國112年01月01日依金融監督管理委員會111年08月30日金管保壽字第1110445485號函修正</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='注意事項' isCheckIcon={false}>
                        <ol>
                            <li className='my-3' style={{ fontSize: '18px' }}>消費者投保前應審慎瞭解本商品之承保範圍、除外不保事項及商品風險。網頁介紹內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</li>
                            <li className='my-3' style={{ fontSize: '18px' }}>投保後解約或不繼續繳費可能不利消費者，請慎選符合需求之保險商品。</li>
                            <li className='my-3'>本保險「疾病」之定義：係指被保險人自保險契約生效日起持續有效三十日以後或自復效日起所發生之疾病。續保者不受前述三十日等待期間之限制。</li>
                            <li className='my-3'>保險契約各項權利義務皆詳列於保單條款，消費者務必詳加閱讀了解。</li>
                            <li className='my-3'>本商品之投保規則，依保誠人壽相關核保規定辦理，保誠人壽擁有最終承保與否之權利。</li>
                            <li className='my-3'>本保險為不分紅保險單，不參加紅利分配，且無紅利給付項目。</li>
                            <li className='my-3'>本商品為保險商品，受人身保險安定基金保障，非屬存款，故不受存款保險之保障。</li>
                            <li className='my-3'>本商品經保誠人壽合格簽署人員檢視其內容業已符合一般精算原則及保險法令，惟為確保權益，基於保險公司與消費者衡平對等原則，消費者仍應詳加閱讀保險單條款與相關文件，審慎選擇保險商品。本商品如有虛偽不實或違法情事，應由保誠人壽及負責人依法負責。</li>
                            <li className='my-3'>消費者於購買前，應詳閱各種銷售文件內容，本商品之預定費用率(預定附加費用率)，最高29%，最低24%；如要詳細了解其他相關資訊，請洽保誠人壽總公司(地址：台北市信義區松智路1號8樓，免付費客戶服務/申訴專線0809-0809-68、或網址 <a href='http://www.pcalife.com.tw' target='_blank'><u>http://www.pcalife.com.tw</u></a>)，以保障您的權益。</li>
                        </ol>
                        <p className='small text-gary'>版次：112/01</p>
                    </ProductBlockTitle>
                </>
            } else if (option == '範例說明') {
                return (
                    <>
                        <div>
                            <div className='col-12 mx-auto'>
                                <p>大保先生30歲時，在網路上投保「保誠人壽e保庇健康保險」保險金額新臺幣50,000元，當年度即可獲得以下保障：</p>
                                <p className='text-end text-gary small mb-2'>單位：新臺幣/元</p>
                                <div className='bg-primary-m py-3 mb-4'>
                                    <div className="row justify-content-center">
                                        <div className="col-8 my-1">
                                            <div className='d-flex justify-content-between'>
                                                <p>● 住院醫療費用保險金</p>
                                                <p>最高<span className='text-danger' style={{ fontSize: '22px' }}>50,000</span>/次</p>
                                            </div>
                                        </div>
                                        <div className="col-8 my-1">
                                            <div className='d-flex justify-content-between'>
                                                <p>● 門診手術費用保險金</p>
                                                <p>最高<span className='text-danger' style={{ fontSize: '22px' }}>5,000</span>/次</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 mx-auto'>
                                <div>
                                    <div className='row align-items-center'>
                                        <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                            <img src={require(`../image/type/healthy/prudential/ex1.gif`)} alt='' className='img-fluid' />
                                        </div>
                                        <div className='col-12 col-lg-7'>
                                            <p className='text-primary-l'>情境一</p>
                                            <h6>大保持續繳交保費，32歲時於河堤散步遭飛球意外擊中左眼睛，經醫師檢查後，診斷為外傷性白內障，需安排健保門診手術治療，手術內容置換人工水晶體，符合條款約定之醫療費用如下:</h6>
                                            <div>
                                                1.掛號費150元<br />
                                                2.醫療費用部分負擔5,000元<br />
                                                3.人工水晶體材料費39,000元<br />
                                            </div>
                                            <span className='text-gary small d-block' style={{ textAlign: 'justify' }}>※本次醫療費用合計44,150元，大保於本次事故之前一保單年度，無理賠給付紀錄，當年度保險金額提高5%，住院醫療及門診手術費用最高給付金額分別為52,500元及5,250元，因本次無住院治療僅接受門診手術，故僅給付門診手術保險金，以5,250元為限。</span>
                                            <ul className='text-gary list-unstyled my-3'>
                                                <li>● 住院醫療費用保險金：-</li>
                                                <li>● 門診手術費用保險金：<span className='fs-5 text-danger'>5,250</span> 元</li>
                                            </ul>
                                            <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                <span>理賠金額合計：<span className='fs-5 text-danger'>5,250</span> 元</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='col-12 mx-auto'>
                                <div>
                                    <div className='row flex-row-reverse align-items-center'>
                                        <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                            <img src={require(`../image/type/healthy/prudential/ex2.gif`)} alt='' className='img-fluid' />
                                        </div>
                                        <div className='col-12 col-lg-7'>
                                            <p className='text-primary-l'>情境二</p>
                                            <h6>大保持續繳交保費，33 歲時因呼吸困難、胸悶，緊急送醫治療，經醫師檢查後，診斷為充血性心臟衰竭，住院治療26天。<br />因等不到健保病房，選擇入住健保升等差額雙人房。住院期間符合條款約定之醫療費用如下:</h6>
                                            <div>
                                                1.病房費健保升等差額每日2,060元 x 26天 = 53,560元<br />
                                                2.住院期間檢查、材料費、醫藥費及部份負擔等費用共5,500元<br />
                                                3.住院治療證明費150元
                                            </div>
                                            <span className='text-gary small d-block' style={{ textAlign: 'justify' }}>※本次醫療費用合計59,210元，大保於本次事故發生之前一保單年度，有理賠給付紀錄，當年度保險金額為50,000元，因同一次住院期間給付總額不得超過50,000元，故超出部分不予給付。</span>
                                            <ul className='text-gary list-unstyled my-3'>
                                                <li>● 住院醫療費用保險金：<span className='fs-5 text-danger'>50,000</span> 元</li>
                                                <li>● 門診手術費用保險金：-</li>
                                            </ul>
                                            <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                <span>理賠金額合計：<span className='fs-5 text-danger'>50,000</span> 元</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <ProductBlockTitle title='名詞解釋' isCheckIcon={false}>
                                <div>
                                    <h5 className='text-primary-l'>無理賠紀錄之增額</h5>
                                    <p>被保險人於保險契約有效滿一年且一年內無理賠紀錄者，保誠人壽於次一保險年度內將該被保險人之「保險金額」提高5%，惟於理賠給付紀錄發生之次一保單年度回復原投保之「保險金額」，並按本項前段之約定重新計算。</p>
                                    <p>前項無理賠增額之比例以提高「保險金額」之5%為上限。</p>
                                </div>
                                <hr />
                                <div className='my-3'>
                                    <h5 className='text-primary-l'>傷害</h5>
                                    <p>被保險人於保險契約有效期間內，遭受意外傷害事故，因而蒙受之傷害。</p>
                                </div>
                                <hr />
                                <div className='my-3'>
                                    <h5 className='text-primary-l'>意外傷害事故</h5>
                                    <p>非由疾病引起之外來突發事故。</p>
                                </div>
                                <hr />
                                <div className='my-3'>
                                    <h5 className='text-primary-l'>住院</h5>
                                    <p>被保險人經醫師診斷其疾病或傷害必須入住醫院，且正式辦理住院手續並確實在醫院接受診療者。但不包含全民健康保險法第五十一條所稱之日間住院及精神衛生法第三十五條所稱之日間留院。</p>
                                </div>
                                <hr />
                                <div className='my-3'>
                                    <h5 className='text-primary-l'>疾病</h5>
                                    <p>被保險人自保險契約生效日起持續有效三十日以後或自復效日起所發生之疾病。續保者不受前述三十日等待期間之限制。</p>
                                </div>
                            </ProductBlockTitle>
                        </div>
                    </>
                )
            }
        }
    } else if (type == 'walk') { //@ 健走定期壽
        if (theme == 'FundSwap') {
            document.styleSheets[0].addRule('.dot-line-bottom-primary-light', 'border-color: #454b6c !important');
        }
        if (company == '法國巴黎人壽') {
            if (option == '商品特色') {
                return (
                    <div className='col-12 pt-3 pb-2 mx-auto product'>
                        <div className='mb-5'>
                            <p className='text-center text-secondary fs-3 fw-bolder lh-base'>ｅ起健走定期壽險</p>
                            <div className='text-center'><Icon color='#6c757d' icon='arrow_down' size={16} /></div>
                            <p className='text-center text-gary' style={{ fontSize: '20px' }}>
                                給付項目<br />
                                <span className='d-block small'>【身故保險金或喪葬費用保險金、完全失能保險金】</span>
                            </p>
                        </div>
                        <div>
                            <div className='row'>
                                <div className="col-12 col-md-4 text-center">
                                    <img src={require('../image/icon/保費實惠.svg').default} className='img-fluid' alt='' width='200px' />
                                    <div className='text-center'>
                                        <div className='pt-2 pb-4'>
                                            <h3 className={`fs-5 dot-line-bottom-primary-light ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>
                                                <Icon color={theme == 'FundSwap' ? '#454b6c' : '#107a47'} icon='check_blod' size={25} className='me-2' /><br />
                                                保費實惠<br />享壽險高額保障
                                            </h3>
                                            <p className='my-2'>預算有限的小資族也可輕鬆擁有高額保障。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4 text-center'>
                                    <img src={require('../image/icon/健康意識.svg').default} className='img-fluid' alt='' width='200px' />
                                    <div className='text-center'>
                                        <div className='pt-2 pb-4'>
                                            <h3 className={`fs-5 dot-line-bottom-primary-light ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>
                                                <Icon color={theme == 'FundSwap' ? '#454b6c' : '#107a47'} icon='check_blod' size={25} className='me-2' /><br />
                                                健康意識抬頭<br />養成良好習慣賺回饋
                                            </h3>
                                            <p className='my-2'>健康步數達標，續期保費折減<span className='text-danger mx-1' style={{ fontSize: '20px' }}>最多10%</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4 text-center'>
                                    <img src={require('../image/icon/定期保障.svg').default} className='img-fluid' alt='' width='200px' />
                                    <div className='pt-2 pb-4'>
                                        <h3 className={`fs-5 dot-line-bottom-primary-light ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>
                                            <Icon color={theme == 'FundSwap' ? '#454b6c' : '#107a47'} icon='check_blod' size={25} className='me-2' /><br />
                                            善用定期保障<br />滿足人生不同階段需求
                                        </h3>
                                        <p className='my-2'>依經濟條件，滾動式調整保險規劃，查缺補漏好安心。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`${theme == 'FundSwap' ? 'alert-fundswap-orange' : 'alert-secondary'} alert px-3 py-2`} role='alert'>
                                <p style={{ fontSize: '18px' }} className='mb-2'><Icon size={22} icon='point' color='#995600' className='mx-1' />多一份保障</p>
                                <p style={{ fontSize: '18px' }}>附約：e起健走一至六級意外失能扶助保險 <a href='/walk/subCase/cardif/一至六級意外失能扶助保險附約' className='text-danger mx-2' style={{ fontSize: '16px' }}><u>前往查看內容</u></a></p>
                            </div>
                        </div>
                    </div>
                )
            } else if (option == '保障商品說明') {
                return (
                    <>
                        <ProductBlockTitle title='身故保險金或喪葬費用保險金' isCheckIcon={false} theme={theme}>
                            <p>被保險人於本契約有效期間內身故者，本公司按下列約定給付「身故保險金」後，本契約之效力即行終止：</p>
                            <ol className='text-cjk'>
                                <li>第一保單年度至第二保單年度：<span className='text-danger' style={{ fontSize: '18px' }}>所繳保險費總和之一點零六倍</span>。</li>
                                <li>第三保單年度(含)以後：<span className='text-danger' style={{ fontSize: '18px' }}>保險金額</span>。</li>
                            </ol>
                            <p className='text-gary'>※訂立本契約時，以受監護宣告尚未撤銷者為被保險人，其身故保險金變更為喪葬費用保險金。</p>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='完全失能保險金' isCheckIcon={false} theme={theme}>
                            <p>被保險人於本契約有效期間內，致成完全失能程度之一者，本公司按下列約定給付「完全失能保險金」後，本契約之效力即行終止：</p>
                            <ol className='text-cjk'>
                                <li>第一保單年度至第二保單年度：<span className='text-danger' style={{ fontSize: '18px' }}>所繳保險費總和之一點零六倍</span>。</li>
                                <li>第三保單年度(含)以後：<span className='text-danger' style={{ fontSize: '18px' }}>保險金額</span>。</li>
                            </ol>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='第二保單年度起之續期保險費健康步數折扣' isCheckIcon={false} theme={theme}>
                            <p>被保險人於本契約有效且繳費期間內<span className='text-danger' style={{ fontSize: '18px' }}>上傳當年度有效健康步數</span>，如達到下列各款折扣標準之一者，本契約次一保單年度之續期保險費，按達到標準之最高折扣等級，提供健康步數折扣，每一保單年度重新計算續期保險費健康步數折扣： </p>
                            <table className='table bg-light w-75 mt-3'>
                                <tbody>
                                    <tr className={`text-center ${theme == 'FundSwap' ? 'bg-fundswap-orange text-light' : 'bg-primary-m'}`} valign="middle">
                                        <th className='border'>
                                            <h6 className='text-center'>紀錄期間最高150天平均健康步數</h6>
                                        </th>
                                        <th className='border'>
                                            <h6 className='text-center'>保費折扣(%)</h6>
                                        </th>
                                    </tr>
                                    <tr className='text-center' valign="middle">
                                        <td className='border'>
                                            <h6 className={theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}>5,500步~7,499步</h6>
                                        </td>
                                        <td className='border'>
                                            <h6>3%</h6>
                                        </td>
                                    </tr>
                                    <tr className='text-center' valign="middle">
                                        <td className='border'>
                                            <h6 className={theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}>7,500步~9,499步</h6>
                                        </td>
                                        <td className='border'>
                                            <h6>5%</h6>
                                        </td>
                                    </tr>
                                    <tr className='text-center' valign="middle">
                                        <td className='border'>
                                            <h6 className={theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}>≥ 9,500步</h6>
                                        </td>
                                        <td className='border'>
                                            <h6>10%</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='mt-3'>
                                <p>健康步數注意事項如下：</p>
                                <ol>
                                    <li>被保險人應定期將每日健康步數資料上傳，以免資料被覆蓋後無法上傳而導致無法計入有效健康步數。</li>
                                    <li>每日健康步數係指被保險人上傳之每日步行次數 ，若當日有多筆上傳資料，以最高步數為準。有效健康步數係指被保險人於約定之期間內，以本公司網站公告之健康管理裝置，或與公告之接收系統資料相容的其他裝置所紀錄之每日健康步數，經由電子傳輸方式，成功上傳至本公司資料庫之每日健康步數。</li>
                                    <li>用以紀錄健康步數之健康管理裝置或與公告之接收系統資料相容的其他裝置，須由保戶自行購買。</li>
                                </ol>
                            </div>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='除外責任' isCheckIcon={false} theme={theme}>
                            <p>有下列情形之一者，本公司不負給付「身故保險金或喪葬費用保險金」及「完全失能保險金」的責任：</p>
                            <ol className='text-cjk'>
                                <li>被保險人故意自殺或自成失能。但自契約訂立或復效之日起二年後故意自殺致死者，本公司仍負給付「身故保險金或喪葬費用保險金」之責任。</li>
                                <li>被保險人因犯罪處死或拒捕或越獄致死或失能。</li>
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
                                            <h6 className={theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}>公司非有效保戶<br />以網路方式首次註冊及身分驗證(註)</h6>
                                        </td>
                                        <td className='border'>
                                            <h6><span className={`px-1 fs-5 ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>100</span>萬</h6>
                                        </td>
                                        <td className='border'>
                                            <h6><span className={`px-1 fs-5 ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>225</span>萬</h6>
                                        </td>
                                        <td className='border'>
                                            <h6><span className={`px-1 fs-5 ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>225</span>萬</h6>
                                        </td>
                                    </tr>
                                    <tr className='text-center' valign="middle">
                                        <td className='border'>
                                            <h6 className={theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}>公司有效保戶<br />以網路方式首次註冊及身分驗證(註)</h6>
                                        </td>
                                        <td className='border'>
                                            <h6><span className={`px-1 fs-5 ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>100</span>萬</h6>
                                        </td>
                                        <td className='border'>
                                            <h6><span className={`px-1 fs-5 ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>450</span>萬</h6>
                                        </td>
                                        <td className='border'>
                                            <h6><span className={`px-1 fs-5 ${theme == 'FundSwap' ? 'text-fundswap-blue' : 'text-primary'}`}>450</span>萬</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='text-gary small'>※ 以本人信用卡或本人存款帳戶作身分輔助驗證者。</p>
                            <p className='text-gary small'>※ 上述累計公司／同業最高保額係指網路投保商品險種保額。</p>
                        </div>
                        <ProductBlockTitle title='投保規則' isCheckIcon={false} theme={theme}>
                            <ol>
                                <li className='py-2'>承保對象：要、被保險人以同一人為限，且為本國籍。</li>
                                <li className='py-2'>
                                    被保險人投保限制：
                                    <p className='py-1'>(1).承保年齡：18足歲~55歲。</p>
                                    <p className='py-1'>(2).投保金額：100萬~400萬。</p>
                                    <p className='py-1'>(3). 18足歲~30歲僅開放保險金額大於100萬。</p>
                                    <p className='py-1'>(4). 保險金額300~400萬限既有有效客戶購買。</p>
                                    <p className='py-1'>(5). 僅承保職業等級屬1~4級者。</p>
                                </li>
                                <li className='py-2'>保險期間／繳費期間：10、20年期</li>
                                <li className='py-2'>
                                    繳別及繳費方式：
                                    <p className='py-1'>(1). 繳別：限年繳。</p>
                                    <p className='py-1'>(2). 繳費方式：首／續期：信用卡。</p>
                                </li>
                                <li className='py-2'>
                                    投保說明：
                                    <p className='py-1'>(1). 要保⼈與被保險⼈須為同一人，具中華⺠國國籍且有⾏為能⼒之⾃然⼈，並須於中華民國境內進行網路投保。</p>
                                    <p className='py-1'>(2). 受益人規則：身故受益人以直系血親、配偶或法定繼承人為限。</p>
                                    <p className='py-1'>(3). 於保險業網路投保之壽險累計保額上限：800萬元。</p>
                                    <p className='py-1'>(4). 特殊身分限制：學生（23歲以下未婚在學，且沒有兼職之全職學生）、家庭主婦，累計公司傷害險最高投保金額500萬；現役軍人（含軍校學生），累計公司傷害險最高投保金額300萬；無固定職業者（轉業、待業中、退休人士），累計公司傷害險最高投保金額200萬。</p>
                                    <p className='py-1'>(5). 免體檢額度累計本公司壽險保額合計以1,000萬為限；逾免體檢保額需進行體檢者，無法以網路方式申請投保。</p>
                                    <p className='py-1'>(6). 被保險人領有身心障礙手冊或身心障礙證明或因體況等因素需體檢者，無法以網路方式申請投保。</p>
                                    <p className='py-1'>(7). 須受「特殊身分與職業投保規則保額限制」，職業屬壽險拒保者，不予受理。</p>
                                    <p className='py-1'>(8). 依投保險種、保險金額檢核被保險人職業、健康狀況、財務資料，如有異常且影響風險評估者或達到「核保控管作業規範」應需要進行財務核保、生調作業者或投保同業壽險主附約（不含團體險）網路商品且併有短期密集投保情形者（密集投保係指投保六個月內收件通報超過2家以上），不予受理。</p>
                                    <p className='py-1'>(9). 其餘未說明同壽險商品核保規則。</p>
                                </li>
                            </ol>
                        </ProductBlockTitle>
                    </>
                )
            } else if (option == '保單條款') {
                return (
                    <>
                        <ProductBlockTitle title='保單條款' isCheckIcon={false} theme={theme}>
                            <a href={getFilePDF('法商法國巴黎人壽e起健走定期壽險')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                                <Icon color='#fff' icon='file' size={22} className='pb-1' />
                                法國巴黎人壽e起健走定期壽險
                            </a>
                            <p className='text-gary small'>備查文號: 民國112年03月01日 巴黎(112)壽字第03001號</p>
                        </ProductBlockTitle>
                        <ProductBlockTitle title='注意事項' isCheckIcon={false} theme={theme}>
                            <ol>
                                <li className='my-3' style={{ fontSize: '18px' }}>消費者投保前應審慎了解本保險商品之承保範圍、除外不保事項及商品風險，相關內容均詳列於保單條款及相關銷售文件，如有疑義請洽詢銷售人員以詳細說明。</li>
                                <li className='my-3' style={{ fontSize: '18px' }}>本契約於訂立契約前已提供要保人不低於三日之審閱期間。</li>
                                <li className='my-3'>本商品由公勝保險經紀人股份有限公司為本商品之行銷通路。網路投保平台及法國巴黎人壽網站可查詢法國巴黎人壽之保單條款，要保人須仔細閱讀，商品詳細內容以保單條款為準。</li>
                                <li className='my-3'>消費者於購買本商品前，應詳閱各種銷售文件內容，本商品之預定費用率(預定附加費用率)最高30.0%，最低28.1%；如要詳細了解其他相關資訊，請查閱法國巴黎人壽網址 <a href='https://life.cardif.com.tw/' target='_blank'><u>https://life.cardif.com.tw/</u></a>，或洽免付費服務專線0800-012-899，以保障您的權益。</li>
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
                                <li className='my-3'>保單借款：若保戶在急需資金情況下，為避免中途解約之損失，可依保單借款選擇辦理借款，未來當保戶申請辦理保險單借款時，以法國巴黎人壽網站(<a href='https://life.cardif.com.tw/' target='_blank'><u>https://life.cardif.com.tw/</u></a>)公告之實際借款利率為準。</li>
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
    /*else if (type == 'lifeSpillover') { //! 健康定壽險(保誠) - 註解暫不開賣
        if (company == '保誠人壽') {
            if (option == '商品內容') {
                return (
                    <div className='col-12 pt-3 pb-2 mx-auto product'>
                        <div>
                            <div className='mb-5'>
                                <p className='text-center text-secondary fs-3 fw-bolder lh-base'>三大特點<br />外溢保單健康管理，保費折減享保障</p>
                            </div>
                            <div className='row'>
                                <div className="col-12 col-md-4 text-center">
                                    <img src={require('../image/type/lifeSpillover/prudential/pro1.gif')} className='img-fluid' alt='保費實惠' width='200px' />
                                    <div className='text-center'>
                                        <div className='pt-2 pb-4'>
                                            <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                                <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                滿足階段性保障
                                            </h3>
                                            <p className='my-2'>依照財務風險缺口，定期壽險滿足人生不同階段需求。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4 text-center'>
                                    <img src={require('../image/type/lifeSpillover/prudential/pro2.gif')} className='img-fluid' alt='符合人生階段 保障彈性調整' width='200px' />
                                    <div className='text-center'>
                                        <div className='pt-2 pb-4'>
                                            <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                                <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                                符合標準保費折減
                                            </h3>
                                            <p className='my-2'>定期提供體檢，體檢結果達標者，享有次2年保費折減10%。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4 text-center'>
                                    <img src={require('../image/type/lifeSpillover/prudential/pro3.gif')} className='img-fluid' alt='保費實惠高額保障' width='200px' />
                                    <div className='pt-2 pb-4'>
                                        <h3 className='fs-5 dot-line-bottom-primary-light text-primary'>
                                            <Icon color='#107a47' icon='check_blod' size={25} className='me-2' /><br />
                                            保費實惠高額保障
                                        </h3>
                                        <p className='my-2'>較低廉的保費獲得更高的保障，用小錢將保障部位建構起來。</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-primary-m p-3 text-primary rounded mt-3'>
                                <p className='text-center'>此份外溢保單之約定體檢結果符合標準，次2保單年度可享有保費折減<span className='text-danger fs-5'>10%</span>。</p>
                                <a href='https://online.pcalife.com.tw/oicms/activity/e_healthy/index.html' target='_blank' className='text-fb text-center d-block'><u>詳細內容請點選參考更多</u></a>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-center text-gary' style={{ fontSize: '20px' }}>
                                給付項目<br />
                                <span className='d-block small'>【身故保險金或喪葬費用保險金、完全失能保險金】</span>
                                <Icon color='#6c757d' icon='arrow_down' size={16} />
                            </p>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed bg-primary-m fw-bolder text-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span style={{ fontSize: '18px' }}>保誠人壽e起健康定期壽險</span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-primary-m">
                                            <ProductBlockTitle title='身故保險金或喪葬費用保險金' isCheckIcon={false}>
                                                <p>被保險人於第一保單年度至第二保單年度內身故者，按身故當時之「應已繳總保費」的1.03倍給付身故保險金；於第三保單年度後身故者，按「保險金額」給付身故保險金。給付後，保險契約效力即行終止。</p>
                                                <p className='mt-1 text-gary'>※訂立保險契約時，以受監護宣告尚未撤銷者為被保險人，其身故保險金之計算，另依條款約定。</p>
                                            </ProductBlockTitle>
                                            <ProductBlockTitle title='完全失能保險金' isCheckIcon={false}>
                                                <p>被保險人於第一保單年度至第二保單年度內致成條款約定完全失能程度之一者，按完全失能當時之「應已繳總保費」的1.03倍給付完全失能保險金；於第三保單年度後完全失能者，按當時之「保險金額」給付完全失能保險金。給付後，保險契約效力即行終止。</p>
                                            </ProductBlockTitle>
                                            <hr />
                                            <div style={{ fontSize: '14px' }}>
                                                <ol className='list-style ps-3'>
                                                    <li className='border-0 p-0 text-gary'>被保險人同時或先後致成保單條款附表一所列二項以上之完全失能程度者，保誠人壽僅給付一項完全失能保險金。</li>
                                                    <li className='border-0 p-0 text-gary'>受益人申領完全失能保險金給付時，依保單條款之約定，保誠人壽於需要時會參據醫學專業意見，並得對被保險人的身體予以檢驗，以作為理賠審核之依據。</li>
                                                </ol>
                                            </div>
                                            <hr />
                                            <div>
                                                <p className='text-center'><u>除外責任</u></p>
                                                <p>要保人故意致被保險人於死、被保險人故意自殺或自成完全失能、或被保險人因犯罪致死或完全失能者，保誠人壽不負給付保險金之責。</p>
                                                <p className='text-gary small'>完整之除外責任請詳保單條款。</p>
                                                <div className='bg-primary-m p-3 text-primary rounded mt-3'>
                                                    <p className='text-center'>上述說明內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            } else if (option == '投保規則') {
                return <>
                    <ProductBlockTitle title='投保限額' isCheckIcon={false}>
                        <p className='text-end text-gary small'>單位：新臺幣/元</p>
                        <table className='table bg-light'>
                            <tbody>
                                <tr className='text-center' valign="middle">
                                    <th className='border' rowSpan='2' style={{ background: 'linear-gradient(26deg, transparent 49.5%, #dee2e6 49.5%, #dee2e6 50.5%, transparent 50.5%)' }}>
                                        <h6 className='text-end mb-5'>會員註冊方式</h6>
                                        <h6 className='text-start'>投保身分</h6>
                                    </th>
                                    <th colSpan='2' className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>網路註冊</h6>
                                    </th>
                                    <th colSpan='2' className='border'>
                                        <h6 className='text-center' style={{ fontSize: '18px' }}>臨櫃註冊</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' align="center">
                                    <th className='border'>
                                        <h6>20足歲~50歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>51歲~55歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>20足歲~50歲</h6>
                                    </th>
                                    <th className='border'>
                                        <h6>51歲~55歲</h6>
                                    </th>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽既有客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>100</span>萬~
                                            <span className='px-1 text-primary fs-5'>600</span>萬</h6>
                                        <p className='small text-gary'>(※壽險累積上限為600萬)</p>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>100</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary'>(※壽險累積上限為600萬)</p>
                                    </td><td rowSpan="2" className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>100</span>萬~
                                            <span className='px-1 text-primary fs-5'>600</span>萬</h6>
                                        <p className='small text-gary'>※壽險累積上限為600萬)</p>
                                    </td>
                                    <td rowSpan="2" className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>100</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary'>(※壽險累積上限為600萬)</p>
                                    </td>
                                </tr>
                                <tr className='text-center' valign="middle">
                                    <td className='border'>
                                        <h6 className='text-primary'>保誠人壽新客戶</h6>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>100</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary'>(※壽險累積上限為300萬)</p>
                                    </td>
                                    <td className='border'>
                                        <h6><span className='px-1 text-primary fs-5'>100</span>萬~
                                            <span className='px-1 text-primary fs-5'>300</span>萬</h6>
                                        <p className='small text-gary'>(※壽險累積上限為300萬)</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='text-gary small'>※ 累積保險業定期壽險網路投保保額。</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='投保規則' isCheckIcon={false}>
                        <ol>
                            <li className='py-2'>投保方式：<br />要保人以網路或親臨保誠人壽(含分支機構)營業處所方式並以要保人信用卡或要保人存款帳戶作身分輔助驗證者，於辦理首次註冊及身分驗證作業後，即可獲得網路投保資格，並進行線上網路投保。</li>
                            <li className='py-2'>保險期間：10年、15年。</li>
                            <li className='py-2'>投保年齡：20足歲~55歲。</li>
                            <li className='py-2'>
                                繳費年期、繳別：10年、15年，限年繳。
                                <p className='ms-2'>※ 若不繼續繳費可能導致保單停效，在停效起兩年內可申請復效，逾期未申請保單將失效。</p>
                            </li>
                            <li>保費限制：單一保單最低年繳保費為 1,200 元。</li>
                            <li className='py-2'>
                                繳費方式：
                                <p className='py-1'>(1).首期：要保人之信用卡扣款、存款帳戶繳費(全國繳費網)或悠遊付。</p>
                                <p className='py-1'>(2).續期：指定金融機構帳戶自動轉帳、信用卡扣款、指定銀行現金匯款、郵政劃撥、自動櫃員機(ATM)轉帳、臨櫃及便利商店繳款。</p>
                            </li>
                            <li className='py-2'>投保說明：
                                <p className='py-1'>(1).要保⼈與被保險⼈須為同一人，具中華⺠國國籍且有⾏為能⼒之⾃然⼈，並須於中華民國境內進行網路投保。</p>
                                <p className='py-1'>(2).身故受益人以直系血親、配偶或法定繼承人為限。</p>
                                <p className='py-1'>(3).於保險業之壽險累計保額上限：1,500萬元。</p>
                                <p className='py-1'>(4).須受「特殊身分與職業投保規則保額限制」，且被保險人職業等級為五、六級者，於保誠人壽定期壽險累計保額最高以200萬元為限，超過限額者，不予受理。</p>
                                <p className='py-1'>(5).壽險職業加費者或職業屬傷害險拒保者，不予受理。</p>
                                <p className='py-1'>(6).依投保險種、保險金額檢核被保險人職業、財務資料，如有異常且影響風險評估者或達到「核保控管作業規範」應需要進行財務核保、生調作業者或投保同業壽險主附約(不含團體險)網路商品且併有短期密集投保情形者(密集投保係指投保六個月內收件通報超過2家以上)，不予受理。</p>
                                <p className='py-1'>(7).累計體檢保額超過免體檢授權額度者，不予受理。</p>
                            </li>
                        </ol>
                    </ProductBlockTitle>
                </>
            } else if (option == '保單條款') {
                return <>
                    <ProductBlockTitle title='保單條款' isCheckIcon={false}>
                        <a href={getFilePDF('保誠人壽e起健康定期壽險條款樣張')} target="_blank" className="py-1 px-2 btn btn-danger fw-bolder text-light mb-2">
                            <Icon color='#fff' icon='file' size={22} className='pb-1' />
                            保誠人壽ｅ起健康定期壽險條款樣張
                        </a>
                        <p className='text-gary small'>備查文號：⺠國110年11月03日保誠總字第1100804號</p>
                        <p className='text-gary small'>逕行修訂文號：民國112年01月01日依金融監督管理委員會111年08月30日金管保壽字第1110445485號函修正</p>
                    </ProductBlockTitle>
                    <ProductBlockTitle title='注意事項' isCheckIcon={false}>
                        <ol>
                            <li className='my-3' style={{ fontSize: '18px' }}>消費者投保前應審慎瞭解本商品之承保範圍、除外不保事項及商品風險。網頁介紹內容因篇幅有限僅摘錄要點，為保護消費者權益，詳細內容請消費者務必參閱保誠人壽保單條款約定。</li>
                            <li className='my-3' style={{ fontSize: '18px' }}>投保後解約或不繼續繳費可能不利消費者，請慎選符合需求之保險商品。</li>
                            <li className='my-3'>保險契約各項權利義務皆詳列於保單條款，消費者務必詳加閱讀了解，並把握保單契約撤銷之時效(收到保單翌日起算十日內)。</li>
                            <li className='my-3'>本商品之投保規則，依保誠人壽相關核保規定辦理，保誠人壽擁有最終承保與否之權利。</li>
                            <li className='my-3'>本保險為不分紅保險單，不參加紅利分配，且無紅利給付項目。</li>
                            <li className='my-3'>本商品為保險商品，受人身保險安定基金保障，非屬存款，故不受存款保險之保障。</li>
                            <li className='my-3'>本商品經保誠人壽合格簽署人員檢視其內容業已符合一般精算原則及保險法令，惟為確保權益，基於保險公司與消費者衡平對等原則，消費者仍應詳加閱讀保險單條款與相關文件，審慎選擇保險商品。本商品如有虛偽不實或違法情事，應由保誠人壽及負責人依法負責。</li>
                            <li className='my-3'>人壽保險之死亡給付及年金保險之確定年金給付於被保險人死亡後給付於指定受益人者，依保險法第一百十二條規定不得作為被保險人之遺產，惟如涉有規避遺產稅等稅捐情事者，稽徵機關仍得依據有關稅法規定或納稅者權利保護法第七條所定實質課稅原則辦理。消費者如欲進一步參考實質課稅相關案例，請詳保誠人壽網站。</li>
                            <li className='my-3'>消費者於購買前，應詳閱各種銷售文件內容，本商品之預定費用率(預定附加費用率) ，最高53%，最低39%；如要詳細了解其他相關資訊，請洽保誠人壽總公司(地址：台北市信義區松智路1號8樓，免付費客戶服務/申訴專線0809-0809-68、或網址 <a href='http://www.pcalife.com.tw' target='_blank'><u>http://www.pcalife.com.tw</u></a>)，以保障您的權益。</li>
                        </ol>
                        <p className='small text-gary'>版次：112/01</p>
                    </ProductBlockTitle>
                </>
            } else if (option == '範例說明') {
                return (
                    <>
                        <div>
                            <div>
                                <div className='col-12 mx-auto'>
                                    <p>艾小姐25歲，剛出社會的小資族，預算少但想有個基本保障，故投保保誠人壽e起健康定期壽險，選擇10年期，保險金額300萬元，年繳保費1,500元，每年持續繳交保費。</p>
                                    <p className='mt-3'>保誠人壽每奇數保單年度第9個月通知艾小姐，於約定期間內完成定期檢查，檢查結果若<span className='text-danger'>符合體檢標準</span>，則<span className='text-danger'>享有</span>次2保單年度保費折減10%(150元)；<span className='text-danger'>未符合體檢標準</span>，則<span className='text-danger'>無法享有</span>次2保單年度保費折減10%。</p>
                                    <p className='text-end text-gary small mb-2'>單位：新臺幣/元</p>
                                </div>
                                <div className='col-12 mx-auto'>
                                    <div>
                                        <div className='row align-items-center'>
                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                <img src={require(`../image/type/lifeSpillover/prudential/ex1.jpg`)} alt='' className='img-fluid' />
                                            </div>
                                            <div className='col-12 col-lg-7'>
                                                <p className='text-primary-l'>情境一</p>
                                                <h6>假設艾小姐在保險期間內，不幸於30歲時因意外當場身故。</h6>
                                                <ul className='text-gary list-unstyled my-3'>
                                                    <li>● 身故保險金：<span className='fs-5 text-danger'>300</span> 萬</li>
                                                    <li>● 完全失能保險金：-</li>
                                                </ul>
                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>300</span> 萬</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='col-12 mx-auto'>
                                    <div>
                                        <div className='row flex-row-reverse align-items-center'>
                                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 text-center'>
                                                <img src={require(`../image/type/lifeSpillover/prudential/ex2.jpg`)} alt='' className='img-fluid' />
                                            </div>
                                            <div className='col-12 col-lg-7'>
                                                <p className='text-primary-l'>情境二</p>
                                                <h6>假設艾小姐在保險期間內，不幸於26歲時因病完全失能。</h6>
                                                <p className='small text-gary'>註：於第二保單年度完全失能，按當時之「應已繳總保費」的1.03倍給付之。</p>
                                                <ul className='text-gary list-unstyled my-3'>
                                                    <li>● 身故保險金：-</li>
                                                    <li>● 完全失能保險金：<span className='fs-5 text-danger'>3,090</span> 元</li>
                                                </ul>
                                                <div className='text-primary-l border border-2 border-primary-l rounded-pill text-center p-1'>
                                                    <Icon color='#5faa58' size={25} icon='check_outline' className='me-2' />
                                                    <span>理賠金額合計：<span className='fs-5 text-danger'>3,090</span> 元</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <ProductBlockTitle title='保費效益比'>
                                <ol>
                                    <li>
                                        下列表格數值係指投保保誠人壽ｅ起健康定期壽險，10年期，各保單年度末解約金與保險費之比例關係：
                                        <img src={require('../image/type/lifeSpillover/prudential/5513 Premium benefit_202201_2.jpg')} className='img-fluid mt-2 d-block' alt='' />
                                    </li>
                                    <li className='small mt-5'>
                                        保費效益比公式如下：
                                        <img src={require('../image/type/lifeSpillover/prudential/5513 Premium benefit ratio.png')} className='img-fluid mt-2 d-block' alt='' width='240px' />
                                        <div className='mt-4'>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註1：</div>
                                                <div>CVm 為第 m 保單年度之年末解約金</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註2：</div>
                                                <div>GPt 為第 t 保單年度之年繳保費</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註3：</div>
                                                <div>m=1~5、10</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註4：</div>
                                                <div>i 為前一日曆年度之十二個月臺灣銀行股份有限公司、第一商業銀行股份有限公司與合作金庫商業銀行股份有限公司每月初(每月第一個營業日)牌告之二年期定期儲蓄存款最高年利率之平均值(1.13%)</div>
                                            </div>
                                            <div className='d-flex'>
                                                <div style={{ width: '40px', whiteSpace: 'pre' }}>註5：</div>
                                                <div>Σ 為加總之符號</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='small mt-5'>上述保費效益比是依據⼈身保險業辦理資訊公開管理辦法、財政部92.03.31台財保第0920012416號令，以及行政院金融監督管理委員會96.07.26金管保一字第09602083930號函辦理。</li>
                                </ol>
                            </ProductBlockTitle>
                        </div>
                    </>
                )
            }
        }
    } */
}