import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function BlogText(id, type) {
    let [articleId8AreaOption, setArticleId8AreaOption] = useState('北北基地區')
    if (type == 'pet') {
        if (id == '1') {
            return (
                <>
                    <article>
                        <div>
                            <h2 className='subtitle'>寵物保險是什麼？</h2>
                            <p className='content'>簡單說，由於寵物沒健保，如果受傷或是生重病，醫療費往往令主人吃不消，但又不能不花，因而就有了「寵物保險」的誕生。</p>
                            <p className='content'>寵物保險主要是給付「寵物生病或發生意外產生的必要開銷」，通常以醫療費為主要保障內容。<strong className='text-danger'>以功能來講，可以想成是「寵物健保 + 其它綜合保障」，性質上屬於財產保險，一年一約，最多可續保到寵物十幾歲。</strong>目前寵物險在臺灣，只有貓狗能投保，所以也算是狗狗和貓咪們專屬的保險。</p>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <h2 className='subtitle'>常見寵物險保障內容有哪些？有推薦必保的項目嗎？</h2>
                            <p>寵物險最重要的便是前面提過的醫療費用，另外市面上還有許多常見保障，理賠方式大多為「額度有上限的實支實付」，也就是用收據來請領。以下將一些常見保障附上簡短說明，讓大家知道大概還有什麼好處和功能。</p>
                            <div className='my-3'>
                                <h3 className='list-title'>（一）寵物醫療</h3>
                                <p>當寵物因傷病就醫時，針對實際支出的醫療花費給予理賠，不包含交通或看護費，通常可再分割成以下三部分。<br />（早期亦有只針對意外而無疾病保障的寵物險，挑選時須留意）</p>
                                <ul className='list-unstyled mt-2'>
                                    <li>1. 門診費</li>
                                    <li>2. 住院費</li>
                                    <li>3. 手術費</li>
                                </ul>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（二）寵物侵權 / 過失責任</h3>
                                <p>當寵物造成他人財產損失或受傷，對方依法求償時，由保險公司代為賠償的保障，建議額度挑選100萬以上的較安心。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（三）協尋廣告費用</h3>
                                <p>當寵物於保險期間內遺失時，給予廣告印刷或協尋支出用的彌補，通常保險期間內限定申請一次。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（四）寄宿日額費用</h3>
                                <p>主人不幸於保險期間住院而無法照顧寵物時，給予寵物「寄宿」用的支出補償，依天數理賠，有每日額度上限和天數限制。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（五）喪葬費用</h3>
                                <p>保險期間寵物不幸過世時，在限制額度內，給予實際喪葬支出的補償。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（六）重新取得費用</h3>
                                <p>承上，寵物過世後，主人欲取得新寵物，需認養或購買而產生相關花費，如植入晶片、體檢、登記、診療、結紮、除蟲、預防性注射等，在限額內皆給予補償。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（七）照護費用</h3>
                                <p>保險期間寵物因傷病須住進具備動物照護機構資格的醫院，以便照護時，給予補償用的金額。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（八）旅遊行程取消費用</h3>
                                <p>當主人在國外或準備出國時，寵物須緊急手術或不幸因傷病死亡，導致許多行程取消無法退款，由保險公司補償這部分的損失。</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='list-title'>（九）癌症病理檢驗費用</h3>
                                <p>寵物罹癌時，針對檢驗給予一筆癌症病理檢驗費，少數商品才有，可能採額外附加保費的方式。</p>
                            </div>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <h2 className='subtitle'>寵物險保障項目多寡非絕對，理賠仍有條款細節要注意！</h2>
                            <p>儘管寵物險保障項目越來越多元，但不是每家都一樣，挑選時務必看清楚，才不會以為有買到什麼項目但實際上卻沒有。另外上述保障許多都帶有<strong className='text-danger'>「自負額」</strong>的規定，意即理賠時自己也必須出一小部分，其餘的才是由保險公司支出。自負額的設計是為了防止道德風險，不讓惡意人士為賺取理賠金而蓄意傷害寵物，並非保險公司刻意刁難。若介意這點也可以選購無自付額的寵物險，只是通常整體保費會略貴一些。</p>
                            <p className='my-3'>此外，醫療理賠在保險期間也常有限定次數，門診、住院、手術能理賠的次數都不同，至於額度上限，有的會分開計算；有的則合併在一起共用額度。如果毛孩首次就診後，數天內再度看診在條款上算同一事故的話，便要注意單一事故有無限定理賠上限；如果不是這樣計算的話，也要注意保險期間內最多可理賠的「總次數」。還有少數保單，會註明「每件單一事故僅理賠一次」，這些也都要事先瞭解再衡量利弊。</p>
                            <p>假如真不清楚細節，也歡迎大家在投保前先詢問我們，提出需求讓 GOGOBO 給予解答，也是個維護自己和毛孩權益的好方法！
                            </p>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <h2 className='subtitle'>為何寵物險都建議盡量要投保？</h2>
                            <p>所謂<strong className='text-danger'>先保大再保小</strong>，越是自己無法承受的局面，一定要優先轉嫁給保險。以風險能否承受的幅度來看，寵物險的<strong className='text-danger'>「醫療保障」與闖禍引起的「侵權 / 過失責任」算是比較重要</strong>，有時會影響整個家庭生計，這也是寵物險的價值所在。至於「協尋費用」這類保障，本身有限額且數目不大，真發生的話，自掏腰包也不致有什麼問題，當次要考量即可。
                            </p>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <h2 className='subtitle'>什麼樣的人適合幫寵物投保？</h2>
                            <p>毛孩就像人一樣，總有生病的時候，尤其中年時狀況便逐漸明顯，有的品種又更頻繁。能狗補償許多醫療開銷的寵物險，實在是<strong className='text-danger'>每位細心、有責任的主人</strong>都該準備的。加上現代人常常帶毛孩在外活動、出遊，難免發生意外受傷，或是闖禍造成別人無法估計的損失，有一份牢靠的保障還是比較安心。早點準備，讓我們的家人真正無憂無慮地享受生活吧！
                            </p>
                        </div>
                    </article>
                </>
            )
        } else if (id == '3') {
            return (
                <article>
                    <div className='mb-4'>
                        <p>近年因少子化趨勢，養寵物的家庭逐漸興盛，根據「寵物登記管理資訊網」統計，全台貓狗新增認養登記數量，光是今年前九個月就高達16萬隻，遠超過新生兒出生登記數的11萬。由此可見，對於寵物認養、把寵物當家中小孩來看待等觀念，在臺灣早已稀鬆平常。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物保險為何？這四件事決定你的寵物能否投保！</h2>
                        <p>寵物險屬於產險的一種，是產險公司近幾年主要業務之一。就像人看病有健保，寵物的醫療花費相當大，往往讓飼主吃不消，所以也發展出相對應的商業保險。<strong>目前在國內，僅開放「貓」與「狗」投保寵物險，其它動物暫時無法保。</strong>每家寵物險投保規則不太一樣，但通常都會有年齡限制，常見的最小投保年齡為「8週」，最大則不一定，超過「8歲」可能就有許多保單無法投保。但也有一些少數商品可以接受更大年齡的毛孩。若寵物本身健康狀況不佳、身體有殘缺，或是還有疾病正在治療，也有可能被拒保。</p>
                        <p className='my-3'>貓咪投保時，比較不會因品種而有所差別，但如果是狗狗，就要看品種。由於寵物險不僅提供醫療補助，也常帶有「侵權 / 過失責任」的保障，因而有些較具攻擊性的犬種會被列入拒保，常見拒保犬種請參看附表一。另外像是專門繁殖、狩獵、醫學用的貓狗，或是供出租、販售、從事競賽、特技表演，以及一些工作犬等，也都不在承保範圍。綜合上述，投保寵物險時，會有的限制條件如附表二。</p>
                        <div className='row justify-content-center mb-4'>
                            <div className='col-12 col-lg-5'>
                                <p className='bg-secondary text-light px-2 text-center'>附表1：寵物險常見拒保犬種</p>
                                <span className='d-block'>比特犬（含史塔佛夏牛頭犬）（Pit Bull Terrier）</span>
                                <span className='d-block'>日本土佐犬（Japanese Tosa）</span>
                                <span className='d-block'>紐波利頓犬（Neapolitan Mastiff）</span>
                                <span className='d-block'>阿根廷杜告犬（DogoArgentino）</span>
                                <span className='d-block'>巴西菲勒犬（Fila Braziliero）</span>
                                <span className='d-block'>獒犬（Mastiff）</span>
                            </div>
                            <div className='col-12 col-lg-5'>
                                <p className='bg-secondary text-light px-2 text-center'>附表2：寵物險常見投保限制因素</p>
                                <span className='d-block'>一、年齡</span>
                                <span className='d-block'>二、疾病、身體缺陷等健康狀況</span>
                                <span className='d-block'>三、品種</span>
                                <span className='d-block'>四、平常用途與定位</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>如何挑選寵物保險？推薦你這樣考量！</h2>
                        <p>市面上的寵物險相當多，挑選時，如沒什麼特殊需求，建議以自家毛孩特質來考量。針對特質選擇必備的保障，才能真正解決擔心的事，簡單整理三種毛孩特質類型如下：</p>
                        <div className='table-responsive-xl'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-third text-dark'>
                                        <th>寵物特質</th>
                                        <th>選擇的寵物險保單特點</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>體質較虛弱、易罹患某些疾病</td>
                                        <td><strong>醫療給付</strong>為<strong>實支實付</strong>型、每次就診都能計算理賠，不以事件來限定就診理賠次數</td>
                                    </tr>
                                    <tr>
                                        <td>好動、愛冒險、時常出去玩</td>
                                        <td><strong>意外事故</strong>的理賠額度充足</td>
                                    </tr>
                                    <tr>
                                        <td>神經質、不易受控、攻擊性略強</td>
                                        <td><strong>寵物侵權 / 過失責任</strong>這方面的理賠額度足夠</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h2 className='subtitle'>寵物投保前須先準備這幾件物品！</h2>
                        <p className='my-2'>寵物險的投保必備文件，常見有下列幾項：</p>
                        <div className='col-12 col-lg-5 mb-4'>
                            <p className='bg-secondary text-light px-2 text-center'>寵物險常見投保必備文件</p>
                            <span className='d-block'>一、晶片序號</span>
                            <span className='d-block'>二、體檢證明</span>
                            <span className='d-block'>三、注射疫苗證明</span>
                            <small>（上述至少具備一項）</small>
                            <hr />
                            <span className='d-block'>四、寵物近期全身彩色照片</span>
                            <span className='d-block'>五、詳實填寫完的要保書</span>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物險不只保障醫療開銷，這些好處一定要知道！</h2>
                        <p>這幾年隨著被認養的毛小孩數量增加，寵物險投保平台也紛紛出現。根據資策會調查，<strong>「醫療開銷」和伙食費，是養寵物最大的兩項支出項目</strong>，所以才越來越多人購買寵物險。</p>
                        <p>如今毛孩對國人來說，不只是寵物，更像是重要的家人，因而保障越來越豐富。除了基本的醫療外，還有許多福利喔！像是寵物走失時的<strong>協尋廣告費</strong>、飼主不幸住院寵物必須去<strong>寄宿的花費</strong>、寵物闖禍要<strong>賠償給別人的損失</strong>以及<strong>喪葬費</strong>等等，這些都包含在寵物保險裡，只要挑對商品就能一次擁有上述保障！趕緊利用方便的網路平台幫身旁寶貝們添購完善福利吧！</p>
                    </div>
                </article>
            )
        } else if (id == '4') {
            return (
                <article>
                    <div className='content'>
                        <p>小琪一個人從嘉義來到台北租屋工作，平日和愛貓「球球」相互陪伴，一起度過許多在異鄉的時光。不幸某天下班途中發生車禍，小琪必須住院五天，儘管媽媽特地從南部上來照顧自己，但此時小琪最擔心的，其實是家中的毛孩。球球一向待在家由小琪獨自照顧，不太親人，而沒養過貓的媽媽又不瞭解貓咪習性，也不知該如何清理球球的窩，到底該怎麼辦才好？</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物寄宿、寵物住宿是什麼？</h2>
                        <p>其實小琪的情況只要找一間有「寵物寄宿」服務的業者就能解決問題。這是目前一個很熱門的行業，讓一些有事情（例如出差、出國、住院等）暫時無法照顧寵物的主人能夠放心的寄放寵物，同時也能供應寵物餐點、幫洗澡、美容、帶出去運動等，並以天數和服務內容來計費。</p>
                        <p>但寵物住宿店收費不便宜，以狗來說，通常中、大型犬一個晚上就要千元以上，貓的話則略便宜些。如果像小琪那樣，已經要煩惱自己的住院醫藥費了，還要再幫貓咪付連續住宿的錢，實在吃不消！</p>
                        <div className='table-responsive-xl'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-third text-dark'>
                                        <th className='text-lg-center' scope='col' colSpan='6'>寵物寄宿業服務內容價格參考</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>寵物 \ 項目</td>
                                        <td className='fw-bolder text-primary bg-primary-s'>住宿（單日）</td>
                                        <td className='fw-bolder text-primary bg-primary-s'>洗澡清潔</td>
                                        <td className='fw-bolder text-primary bg-primary-s'>餐費</td>
                                        <td className='fw-bolder text-primary bg-primary-s'>獨立房（另加價）</td>
                                        <td className='fw-bolder text-primary bg-primary-s'>出外運動</td>
                                    </tr>
                                    <tr>
                                        <td >貓咪</td>
                                        <td >300 ~ 600 元</td>
                                        <td >300 ~ 500 元</td>
                                        <td >50 ~ 200 元</td>
                                        <td >800 ~ 1000 元</td>
                                        <td >-</td>
                                    </tr>
                                    <tr>
                                        <td >小型犬</td>
                                        <td >400 ~ 800 元</td>
                                        <td >300 ~ 500 元</td>
                                        <td >50 ~ 200 元</td>
                                        <td >300 ~ 600 元</td>
                                        <td >100 ~ 150 元</td>
                                    </tr>
                                    <tr>
                                        <td >中型犬</td>
                                        <td >600 ~ 1200 元</td>
                                        <td >500 ~ 800 元</td>
                                        <td >50 ~ 200 元</td>
                                        <td >600 ~ 800 元</td>
                                        <td >100 ~ 150 元</td>
                                    </tr>
                                    <tr>
                                        <td >大型犬</td>
                                        <td >800 ~ 1600 元</td>
                                        <td >1000 元 以上</td>
                                        <td >50 ~ 200 元</td>
                                        <td >800 ~ 1000 元</td>
                                        <td >100 ~ 150 元</td>
                                    </tr>
                                </tbody>
                            </table>
                            <small className='d-block text-end'>※圖表為隨機參考多家業者資訊，僅取大略數值供參考。（單位 / 新台幣 元）</small>
                        </div>
                    </div>
                    <div className='py-3'>
                        <h2 className='subtitle'>寵物險保障這種狀況！寵物住宿不用愁</h2>
                        <p>這幾年許多毛孩主人競相投保的「寵物險」，許多都含有「寵物寄宿日額費用」的細項保障，俗稱「寵物寄宿費用」。保障敘述大致如下：</p>
                        <p><strong>「寵物主人因傷病需住院連續數天以上（通常為 3 天，含入院日、出院日），而無法照顧寵物，將寵物寄託於登記合格的獸醫院或合法設立之寵物業。」</strong></p>
                        <p>保險公司將針對實際支出的費用，在一定限額內，給予「寵物寄宿日額費用保險金」。<strong>（通常最高以 10 日為限）</strong></p>
                        <p>例如小琪如果買了某家寵物險，其寄宿日額限額 1000 元，貓咪共住五天，業者開價一天 900 元，那麼小琪共可獲得 4500 元的補償。但如果寄宿業者每天的價錢為1000元以上，那小琪最多還是只能領取5000 元，因為每天計算的保險金不會超出每天的限額。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物在外住宿或託人寄宿仍有風險！保障一次湊齊才放心</h2>
                        <p>毛孩住在外面時，由於脫離熟悉的主人身邊，情緒上較不穩定。儘管寵物寄宿業者再專業，還是有可能發生<strong>「毀損店家物品、弄傷其它毛孩，趁人不注意逃跑失蹤」</strong>的狀況。在這方面，市面上許多寵物險都有相對應的細項保障，只要幫寶貝選對商品，就可以避免許多煩惱。相比每年才一到三千元的保費，也算是CP值很高又實用的保障了！</p>
                    </div>
                </article>
            )
        } else if (id == '5') {
            return (
                <article>
                    <div>
                        <h2 className='subtitle'>再怎麼省也省不了的寵物醫療費</h2>
                        <p>養過貓狗的人都知道，要讓寵物過得健康又快樂，一堆開銷都有其必要。除了伙食費外，定期打疫苗、醫療檢測、美容清潔以及生活用品等，都是讓毛小孩能夠身心健康的關鍵。</p>
                        <p>貓咪的開銷幅度通常都差不多，差異可能取決於個體健康程度。而養狗的花費除了健康因素外，還要看體型、品種，通常越大的犬種開銷也越大。想省錢的話，伙食可買較便宜的、清潔也能自己DIY，但隨著寵物年齡增長，醫療費便會直線攀升。也因此，只要是一路陪伴貓狗到老年的飼主，絕對會跟你說：<strong>「醫療費，真的不少！」</strong></p>
                    </div>
                    <div>
                        <h2 className='subtitle'>貓狗寵物各類花費參考表</h2>
                        <div className='table-responsive-xl col-lg-8'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-third text-primary bg-primary-s'>
                                        <th className='text-lg-center' scope='col' colSpan='2'>貓狗寵物各類花費粗估（元 / 每年）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-danger fw-bolder'>一次性花費</td>
                                        <td>晶片登記 + 結紮 3,500元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-light'>伙食費</td>
                                        <td>6,000～50,000元（視體型餐點內容而定）</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-light'>清潔美容</td>
                                        <td>7,000～15,000元 （視體型和品種而定）</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-light'>醫療費</td>
                                        <td>數千～數萬（視年齡、健康狀況而定）</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-light'>疫苗費</td>
                                        <td>3,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-light'>日用品添購</td>
                                        <td>3,000～6,000元</td>
                                    </tr>
                                    <tr>
                                        <td>每年合計（扣除一次性花費）</td>
                                        <td>21,000～77,500元以上</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物醫院常見醫療項目與收費價格</h2>
                        <p className='text-lg-center'>至於寵物醫療費用大概是怎樣的情形呢？為求確實，此處整理「台北市獸醫師公會診療費用標準」供大家參考。</p>
                        <div className='table-responsive-xl col-lg-8'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-primary-s text-primary'>
                                        <th className='text-lg-center' scope='col' colSpan='3'>寵物醫院常見醫療項目與收費表（項目 / 元）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='fw-bolder bg-primary-s text-primary'>掛號費</td>
                                        <td>一般掛號</td>
                                        <td className='text-end'>200元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>門診時間內急診掛號</td>
                                        <td className='text-end'>500元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>門診時間外急診掛號</td>
                                        <td className='text-end'>3,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>診察費</td>
                                        <td>一般診察</td>
                                        <td className='text-end'>500元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>急診診察</td>
                                        <td className='text-end'>800元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>出診診察</td>
                                        <td className='text-end'><small>(半小時)</small>800元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>諮詢</td>
                                        <td className='text-end'><small>(半小時、車資另計)</small>500元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>檢驗費</td>
                                        <td>顯微鏡檢查</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>300~500元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>血液檢驗</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>250～3,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>尿液試紙檢驗</td>
                                        <td className='text-end'>600元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>臨床病理檢查</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>500～5,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>免疫學檢驗傳染病檢測</td>
                                        <td className='text-end'>1,500元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>影像學檢查</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>500~3,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>超音波檢查</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>2,000~10,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>治療費</td>
                                        <td>技術費</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>200~10,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>一般治療費</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>500～15,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>特殊治療費</td>
                                        <td className='text-end'><small>(因細項不同而異)</small>1,500~3,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>急救</td>
                                        <td className='text-end'>6,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-primary-s text-primary'></td>
                                        <td>預防接種費</td>
                                        <td className='text-end'>300~1,500元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>手術費</td>
                                        <td>-</td>
                                        <td className='text-end'><small>（視各家診療機構狀況而定）</small></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>鎮定麻醉費</td>
                                        <td>-</td>
                                        <td className='text-end'>1,000~10,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>住院費</td>
                                        <td>-</td>
                                        <td className='text-end'><small>（每日）</small>500~2,500元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>特別照護</td>
                                        <td>-</td>
                                        <td className='text-end'>250元<small>（每小時）</small>~30,000<small>（每日）</small></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder text-primary bg-primary-s'>文件申請</td>
                                        <td>-</td>
                                        <td className='text-end'><small>（因細項不同而異）</small>2,000 ~ 3,500元</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>寵物因為沒有健保，醫療費用會比我們一般人看病時還要貴，這也是許多飼主在寵物老年時期大喊吃不消的原因。而我們生活周遭不幸出現棄養的狀況時，也多半是卡在這階段。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>人有健保，別忘了毛孩也有寵物保險！醫療保障這樣賠！</h2>
                        <p>其實，想要解決寵物醫療支出問題並不難，只要投保「寵物保險」就能有效減輕重擔！<strong>寵物險都有醫療保障，通常分成「門診」、「住院」以及「手術」三類別。</strong></p>
                        <p>例如小明認養了一隻狗，並長期投保網站上的「華南」B方案，即擁有每一次事故「門診 2000元 + 住院 1 萬元 + 手術 5 萬元」的額度。</p>
                        <p>某天小明狗狗因為急性腎臟病需住進動物醫院五天，病房費每天 1200 元，那麼共可從住院1萬元額度裡申請到 6000 元的理賠</p>
                        <p>又假如狗狗在住院期間有動到手術，相關費用 3 萬元，那也可以從手術項目的 5 萬元上限額度來申請。所以前述狀況小明共可得到 36000 元的理賠金額，如此一來是不是減輕了許多負擔？</p>
                        <p className='d-inline-block border border-2 border-primary p-2'>1200 x 5 = 6000 （病房開銷）<br />30000 （手術開銷）<br />30000 + 6000 = 36000（本次事件獲得的理賠金額）</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>貓狗中老年後醫療費大增，應趁健康盡早投保</h2>
                        <p>孩還小時，身體較為健康，但到了中老年，有時症狀一冒出，便很難再跟疾病劃清界線，每隔幾個月就跑動物醫院是常有的事。而那時我們也與毛孩有了深厚的家人情誼，不可能不盡力救治。本來經濟能力較好的人也許還不用操心，但大多數人都會因這些花費而苦惱，建議趁著貓狗還年輕且無疾病的時期盡早投保，才能享有正常的保障。<strong>如果已罹患病症或傷殘，就不一定能夠被承保。</strong>最後也提醒大家，千萬別讓自己成了棄養寵物的主人喔！</p>
                    </div>
                </article>
            )
        } else if (id == '6') {
            return (
                <article>
                    <p>近年來許多人都開始幫自家毛小孩投保寵物險，而根據資料顯示，寵物險發生理賠的機率其實真的頗高，也因為這樣，挑選保單前絕對要先弄懂理賠內容和規則，才能判斷什麼樣的保單最適合自家毛小孩。</p>
                    <div>
                        <h2 className='subtitle'>寵物險的醫療理賠保障些什麼？</h2>
                        <p>保險裡的醫療保障通常會包含「疾病 + 意外」。疾病引起的醫療開銷應該很好理解，而<strong>意外的定義則是「突發性、外來、非疾病」這三要素。</strong>通常可以把前者想成是「生病」，後者則是意外「受傷」。目前仍有少數寵物險的醫療保障是只保意外的，若想要廣泛的保障就務必要看清條款內容。</p>
                        <p>寵物醫療保障通常還分成三種具體項目：<strong>「門診」、「住院」和「手術」</strong>。若純粹門診就依照門診項目裡的額度上限申請理賠，住院或動手術也是同樣道理。三種具體項目各有不同的理賠上限，一般來說，門診花費較少，限額也就低；手術則較高，畢竟有動到手術，醫療費會貴上許多，限額也就跟著提高。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物險的理賠規則？先弄懂「限額實支實付」和「分項限制給付」！</h2>
                        <div>
                            <h3 className='list-title'>限額實支實付</h3>
                            <p>保險理賠一定有其限制，在許多醫療險或意外險裡頭，我們可能常聽到「實支實付」這名詞。意思是說<strong>「保留收據，依照實際上的醫療支出來申請該給付的保險金額」</strong>。但凡事總有上限，所以就會設個「限定額度」，約定好申請的理賠金額不能大過這數字，避免保險公司虧死，這時我們就稱為「限額實支實付」。</p>
                            <p>舉個例：小美養的狗狗肉圓生病必須動手術，後來共花了手術費3萬元，並且在每天收費 1000 元的寵物病房裡待三天。</p>
                            <p>那麼肉圓手術的賠償就須參照手術理賠限額，假如限額大於 3 萬元，就能獲得 3 萬元的理賠，假如限額只有 2 萬，那麼手術部分最多也只能賠 2 萬。同理，住院病房費的請領也是先看「每日住院」的限額，若大於 1000 元，那就能順利獲得三天共 3000 元的保險金。不過若有自負額的規定，那就有自己須負擔的部分囉！<a href='/blog/pet/7' className='fw-bolder text-fb'><u>（自負額是什麼？）</u></a></p>
                        </div>
                        <div>
                            <h3 className='list-title'>分項限制給付</h3>
                            <p>除了額度上限外，理賠次數也是一個常見的賠償限制。「分項限制給付」是說<strong>每個保障項目在保險期間內，能理賠的次數各自都不同，有其上限。</strong>例如門診費用理賠最多 5 次、住院費用最多 3 次、手術最多 2 次等等，就算保險金累積起來還沒達到一整年的額度上限，只要次數超過也不行再理賠。</p>
                            <p>簡單來說，<strong>「限額實支實付」和「分項限制給付」可以想成是「理賠額度和次數的控管」</strong>，瞭解就好，不一定要去記這些名詞解釋。接著再把上述兩個概念融合起來，就是我們常在廣告DM上看到的：「保險期間內累積限額XXXX元、每次最高XXXX元、最多X次」等字眼，可以在挑選保單時多注意這些細節，才能知道花出去的錢究竟換到多少保障。</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物醫療險細節大同小異，保障數字有多少很重要！</h2>
                        <p>以上兩件事都是很重要且攸關理賠的概念，寵物醫療險和人類醫療險比起來，條款描述較具一致性，細節差異沒那麼大，因此大多數的醫療保障還是取決於這些數字上。找商品時，先把醫療保障規劃充足，再來看條款細節和除外事項就會比較容易上手囉！</p>
                    </div>
                </article>
            )
        } else if (id == '7') {
            return (
                <article>
                    <div>
                        <h2 className='subtitle'>寵物醫療費用大、理賠案例多，寵物險漸成飼主必備品</h2>
                        <p>養過貓狗到老的人都知道寵物的醫療開銷很大，而毛孩又不像人類一樣有健保，每次看醫生的花費，就算只是門診做點小治療或拿藥，也要好幾千元。等到了中年，慢慢有些病痛出來，一年內頻繁跑個醫院幾趟，累積下來的花費說是個錢坑都不誇張。</p>
                        <p>好幾年前，保險公司就一直在推廣貓狗專用的寵物險，也不斷調整保障內容，為的就是讓飼主們，不再為了寵物的醫療開銷而苦惱，也間接讓毛孩得到較妥善的照顧。而在近兩年，少子化嚴重，越來越多民眾轉向飼養毛小孩，把其當成自己家人、心愛的寶貝。同時也注意到寵物不能沒有保險，也因此寵物險才逐漸受到重視並慢慢普及。其實，寵物的傷病真的很難避免，利用寵物保險來轉嫁這些醫療支出絕對是最簡單又好用的方法。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物醫療保險理賠必知3大眉角</h2>
                        <p>投保寵物險重點不外乎就是為了醫療理賠，但理賠與DM和條款上的規則息息相關，有些眉角一定要弄清楚，才不會買到和自己所想有落差的保障。以下是攸關理賠規則最重要的幾件事情，挑選時務必留意。</p>
                        <ul className='list-unstyled'>
                            <li>
                                <h3 className='list-title'>（一）許多保單都設有「自付額」，投保前先看清相關規定</h3>
                                <strong>寵物保單裡常見的「自負額」是什麼？</strong>
                                <p>這是說在保險期間內，發生約定的相關損失時，飼主須自行負擔一部份金額，其它多出的部分才由保險公司出。舉例來說，自負額註明為10%的寵物險，假設帶寵物去門診一次共花了2000元，那麼主人須自行出200元，剩下的1800元才由保險公司支付。</p>
                                <p>自負額的設定是為了避免有心人士利用寵物來獲取理賠，不是保險公司刁難，但只要稍微尋找，市場上也有完全沒自負額的商品。簡單說，若是有自負額，可從理賠上限和保障細項吸不吸引人去評估要不要買。而若是不喜歡有自負額規定的人，建議就直接挑比例較低或是完全沒自負額的保單。</p>
                            </li>
                            <li>
                                <h3 className='list-title'>（二）攸關寵物醫療費用的理賠次數與總額限制</h3>
                                <p>寵物險的保障大多為「限額內實支實付」的理賠方式，而「次數」和「額度上限」便是決定醫療保障到底有多少的兩大關鍵。例如有的廣告單上會這樣標註：</p>

                                <p className='d-inline-block border border-2 border-primary p-2'>
                                    <span className='fw-bolder'>門診：</span><br />每一次理賠限額1,500元，一年最多四次<br />
                                    <span className='fw-bolder'>住院：</span><br />每一次理賠限額5,000元，一年最多兩次<br />
                                    <span className='fw-bolder'>手術：</span><br />每一次理賠限額15,000元，一年最多一次
                                </p>
                                <p>這些數字都是保險公司制定的保險金上限，實際理賠時只會少不會多。例如每次門診上限為1500的情況下，實際花了1200元，理賠也就只會賠1200元；反之，如果實際花了1800元，那理賠也不會是這數字，而是賠到單次最高上限1500元，這就是「限額內實支實付」的意思。當然我們也不一定每年都會用完醫療項目裡的總次數，但把這些額度數字相乘相加，仍可當做保障高低的參考。</p>
                            </li>
                            <li>
                                <h3 className='list-title'>（三）廣告單上提到理賠時的「每一次」等字眼是如何定義？</h3>
                                <p>寵物險的DM通常都會標示出保障的重點與簡單規則，但並非每家業者都表達得夠清楚。像是出現「每一次、每次」的字眼時，究竟是指<strong>「每一次事故」亦或是「每一次就醫」</strong>？如果是每一次事故，那短期內視為同一事故的第二度就醫行為，會自動扣掉一次每年可理賠的次數嗎？</p>
                                <small>（註）「每次事故」常見條款定義：「因同一疾病或傷害，或因此引起之併發症，十四天內於登記合格之獸醫院再次診療時，其各項保險金給付合計額，視為同一保險事故。」</small>
                                <p>上述說明，第一、第二點算是消費前必懂觀念，了解後我們就可自行從許多五花八門的商品裡找出適合自己的。最後一點則是大家常會有的疑問，建議在投保前先詢問清楚專業人員或窗口，才不會日後產生寵物醫療糾紛。</p>
                            </li>
                        </ul>
                    </div>
                </article>
            )
        } else if (id == '8') {
            return (
                <article className='article-content'>
                    <p>毛小孩生病、受傷，半夜出現緊急狀況該怎辦？想必遇到這種狀況，主人們一定都很慌張。別擔心！這裡為大家準備了全臺灣24小時看診的寵物（動物）醫院，不少都是網路上常推薦、頗受好評的院所，把文章收藏起來，下次有什麼狀況就不用擔心了！</p>
                    <p>另外再告訴大家一個實用知識，如果你住的縣市真的沒有24H的寵物醫院，那也可以多詢問附近院所，最晚能夠看診到幾點？有沒有開放急診的聯絡電話？有一些醫院雖然沒有全天候營業，但醫生們也願意在一些時段為毛小孩緊急看診喔！如果住處附近有這樣的醫院，建議自行記錄下來，好應變平常各種突發狀況。</p>
                    <div>
                        <div className='mb-3 col-lg-5'>
                            <label htmlFor='item' className='fw-bolder text-danger'>查看全台寵物醫院(請選擇地區)</label>
                            <select className='form-select' id='item' name='item' onChange={e => setArticleId8AreaOption(e.target.value)}>
                                <option value='北北基地區'>北北基地區</option>
                                <option value='桃竹苗地區'>桃竹苗地區</option>
                                <option value='中彰投地區'>中彰投地區</option>
                                <option value='雲嘉南高屏及東部地區' selected>雲嘉南高屏及東部地區</option>
                            </select>
                        </div>
                        {
                            articleId8AreaOption === '北北基地區' ?
                                <div className='table-responsive-xl'>
                                    <table className='table'>
                                        <thead>
                                            <tr className='bg-primary-s text-primary'>
                                                <th className='text-lg-center' scope='col' colSpan='3'>北北基地區24H或提供夜間急診寵物醫院</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>基隆愛犬醫院</td>
                                                <td>基隆市中正區義一路188號</td>
                                                <td><a href='tel:+886-2-24229214'>02-2422-9214</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>成安動物醫院</td>
                                                <td>基隆市中山區成功二路54號</td>
                                                <td><a href='tel:+886-2-24233739'>02-2423-3739</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>大安動物醫院</td>
                                                <td>台北市中正區羅斯福路四段162號</td>
                                                <td><a href='tel:+886-2-27396828'>02-2739-6828</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>展望急診動物醫院</td>
                                                <td>台北市萬華區中華路二段2號</td>
                                                <td><a href='tel:+886-2-23880122'>02-2388-0122</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>全民動物醫院（民生總院）</td>
                                                <td>台北市大同區民生西路249號</td>
                                                <td><a href='tel:+886-2-25530303'>02-2553-0303</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>慈愛動物醫院（台北總院）</td>
                                                <td>台北市大同區寧夏路1號</td>
                                                <td><a href='tel:+886-2-25563320'>02-2556-3320</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>伊甸動物醫院</td>
                                                <td>台北市中山區北安路554巷33號</td>
                                                <td><a href='tel:+886-2-85092579'>02-8509-2579</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>太僕動物醫院</td>
                                                <td>台北市中山區龍江路260號</td>
                                                <td><a href='tel:+886-2-25170902'>02-2517-0902</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>南京太僕動物醫院</td>
                                                <td>台北市松山區南京東路五段286號</td>
                                                <td><a href='tel:+886-2-27562005'>02-2756-2005</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>布達羊急診動物醫院</td>
                                                <td>台北市士林區忠誠路一段102號</td>
                                                <td><a href='tel:+886-2-28341119'>02-2834-1119</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>阿牛犬貓急診醫院</td>
                                                <td>台北市士林區基河路238號</td>
                                                <td><a href='tel:+886-2-28827381'>02-2882-7381</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>大群動物醫院</td>
                                                <td>台北市文山區羅斯福路六段206號</td>
                                                <td><a href='tel:+886-982966674'>0982-966-674</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>全國動物醫院（台北分院）</td>
                                                <td>台北市內湖區舊宗路一段30巷13號</td>
                                                <td><a href='tel:+886-2-87918706'>02-8791-8706</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>翔心動物醫院</td>
                                                <td>新北市板橋區忠孝路203號</td>
                                                <td><a href='tel:+886-2-29569099'>02-2956-9099</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>來來動物醫院</td>
                                                <td>新北市中和區德光路29號</td>
                                                <td><a href='tel:+886-910035175'>0910-035-175</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>中日動物醫院</td>
                                                <td>新北市中和區中山路三段2號</td>
                                                <td><a href='tel:+886-2-22263639'>02-2226-3639</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>來安動物醫院</td>
                                                <td>新北市新店區安康路二段115-1號</td>
                                                <td><a href='tel:+886-2-22118890'>02-2211-8890</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> : ''
                        }
                        {
                            articleId8AreaOption === '桃竹苗地區' ?
                                <div className='table-responsive-xl'>
                                    <table className='table'>
                                        <thead>
                                            <tr className='bg-primary-s text-primary'>
                                                <th className='text-lg-center' scope='col' colSpan='3'>桃竹苗地區24H或提供夜間急診寵物醫院</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>元氣動物醫院</td>
                                                <td>桃園市桃園區三民路三段381號</td>
                                                <td><a href='tel:+886-3-3333816'>03-333-3816</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>元氣動物醫院（藝文分院）</td>
                                                <td>桃園市桃園區莊敬路一段156號</td>
                                                <td><a href='tel:+886-3-3553911'>03-355-3911</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>品湛動物醫院</td>
                                                <td>桃園市桃園區民生路495-9號</td>
                                                <td><a href='tel:+886-3-3363252'>03-336-3252</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>磨鼻子動物醫院</td>
                                                <td>桃園市中壢區延平路20號</td>
                                                <td><a href='tel:+886-3-4535740'>03-453-5740</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> : ''
                        }
                        {
                            articleId8AreaOption === '中彰投地區' ?
                                <div className='table-responsive-xl'>
                                    <table className='table'>
                                        <thead>
                                            <tr className='bg-primary-s text-primary'>
                                                <th className='text-lg-center' scope='col' colSpan='3'>中彰投地區24H或提供夜間急診寵物醫院</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>全國動物醫院（總院）</td>
                                                <td>台中市西區五權八街100號</td>
                                                <td><a href='tel:+886-4-23710496'>04-2371-0496</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>康德急診動物醫院</td>
                                                <td>台中市北屯區崇德路二段270號</td>
                                                <td><a href='tel:+886-4-22412700'>04-2241-2700</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>格林威治動物醫院</td>
                                                <td>台中市南屯區文心路一段486號</td>
                                                <td><a href='tel:+886-4-23202279'>04-2320-2279</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>慈愛動物醫院（台中總院）</td>
                                                <td>台中市大里區國光路二段539號</td>
                                                <td><a href='tel:+886-4-24066688'>04-2406-6688</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>仁愛犬醫院</td>
                                                <td>台中市東區進化路122號</td>
                                                <td><a href='tel:+886-4-22126987'>04-2212-6987</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>成大動物醫院</td>
                                                <td>台中市清水區臨港路五段658巷27號</td>
                                                <td><a href='tel:+886-4-26398365'>04-2639-8365</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>中華動物醫院</td>
                                                <td>台中市清水區中山路503號</td>
                                                <td><a href='tel:+886-911137723'>0911-137-723</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> : ''
                        }
                        {
                            articleId8AreaOption === '雲嘉南高屏及東部地區' ?
                                <div className='table-responsive-xl'>
                                    <table className='table'>
                                        <thead>
                                            <tr className='bg-primary-s text-primary'>
                                                <th className='text-lg-center' scope='col' colSpan='3'>雲嘉南高屏及東部地區24H或提供夜間急診寵物醫院</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>慈愛動物醫院（台南總院）</td>
                                                <td>台南市南區西門路一段473號</td>
                                                <td><a href='tel:+886-6-2203166'>06-220-3166</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>全國動物醫院（永康分院）</td>
                                                <td>台南市永康區中華路103號2樓</td>
                                                <td><a href='tel:+886-6-3133116'>06-313-3116</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>諾亞動物醫院</td>
                                                <td>台南市中西區成功路297號</td>
                                                <td><a href='tel:+886-6-2217291'>06-221-7291</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>聯盟動物醫院（仁武總院）</td>
                                                <td>高雄市仁武區鳳仁路231號</td>
                                                <td><a href='tel:+886-7-3740964'>07-374-0964</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>烏鐸動物醫院</td>
                                                <td>高雄市苓雅區中正一路139號</td>
                                                <td><a href='tel:+886-7-7220804'>07-722-0804</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>冠安動物醫院</td>
                                                <td>高雄市苓雅區中正二路131-1號</td>
                                                <td><a href='tel:+886-7-2236451'>07-223-6451</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>宏力動物醫院</td>
                                                <td>高雄市三民區明誠一路326號</td>
                                                <td><a href='tel:+886-7-3102819'>07-310-2819</a></td>
                                            </tr>
                                            <tr>
                                                <td className='bg-primary-s text-primary fw-bolder'>上海動物醫院</td>
                                                <td>花蓮市上海街63號</td>
                                                <td><a href='tel:+886-3-834-1853'>03-834-1853</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> : ''
                        }
                    </div>
                    <div>
                        <h2 className='subtitle'>24小時寵物醫院高額開銷可善用寵物險轉嫁</h2>
                        <p>以上就是小編收集到的24小時寵物醫院清單，其實可以看出在臺灣還有很多縣市都缺乏這方面資源，如果夜間需要急診，恐怕還得再花一筆交通費或自行開車到鄰近縣市。另外也提醒大家，夜間能急診雖然方便，但除了看診費較貴外，到了這程度，很多時候寵物都已帶有較大的傷病，後續將面臨頻繁就醫或是動手術的局面。建議趁毛孩健康時早點投保寵物險，以免有體況後就無法承保，也沒得轉嫁醫療支出了，養毛小孩，真的不簡單啊！</p>
                    </div>
                </article>
            )
        } else if (id == '9') {
            return (
                <article>
                    <p>貓狗是臺灣最常見的寵物，也是我們疼愛的家人，但寶貝們不會說話，有時只能藉由一些行為舉動來觀察。這時如果出現怪異徵兆，並非都是身體有問題，也有可能是大家常忽略的心理疾病！以下介紹一些貓狗常見行為讓大家了解。</p>
                    <div>
                        <h2 className='subtitle'>狗狗貓貓反覆打噴嚏代表什麼？</h2>
                        <div>
                            <h3 className='list-title'>【狗】</h3>
                            <p>狗如果一直打噴嚏，可以先試著給狗狗喝水，如果是口鼻通道裡有微小異物刺激到，通常喝些水就能順利清除。如果還是不停地打噴嚏，那有可能是對環境過敏，必須給醫生看看同時找出過敏原因。像是「粉塵、花粉、黴菌、塵螨」都可能造成貓狗過敏。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【貓】</h3>
                            <p>跟狗比起來，貓咪打噴嚏比較有可能是感冒，但也同樣有一部分機率是過敏，除了檢查平常環境外也要檢視貓砂的材質是否容易產生粉塵。如果噴嚏常伴隨眼淚，或是眼耳鼻有分泌物、拉肚子，那麼極有可能是生病，較需擔憂的的狀況是上呼吸道病毒感染，其中又以<strong>「貓皰疹病毒」</strong>較為嚴重，類似貓界的流行性感冒，亦有機率造成致命危機。</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>狗狗貓貓狂舔腳代表什麼？</h2>
                        <div>
                            <h3 className='list-title'>【狗】</h3>
                            <p>養過狗的人應該都看過狗狗舔自己腳掌的樣子，如果狀況很頻繁，帶去就醫，通常會發現是感染黴菌而發癢想舔。最後越舔越嚴重，造成皮膚發炎、紅腫、掉毛、脫皮等情形。但也有時候，狗狗舔手腳是跟心理狀況有關！身體健康的狗狗，如果長期感到壓力無法排解，或是十分無聊，也有可能不停地舔自己手腳來舒緩壓力。這時越是制止，狗狗會誤以為主人因為舔腳這行為而跑來互動，結果越舔越兇、惡性循環。正確的方法是找出狗狗壓力來源並滿足一些心理需求。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【貓】</h3>
                            <p>至於貓咪平常舔腳主要是為了清潔毛髮，但如果被細菌給感染也會舔個不停，這時就可能吃入太多毛髮導致腸胃消化出現問題。不過貓咪若長期缺乏主人關愛或是覺得無聊、憂鬱，也同樣會不停地舔身上特定部位，這時就要檢視一下自己與貓咪之間的相處是否有問題。</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物保險的醫療保障也有賠心理方面疾病</h2>
                        <p>寵物也跟人一樣，可能罹患心理疾病，因為這樣而就醫產生的醫療費，原則上也在寵物險的承保範圍內。如果觀察到家中毛小孩有異於平常的舉動，且外觀又沒受傷，也沒有明顯生病，最好盡快就醫了解狀況，及早尋求專業幫助，才不會讓寶貝們的心理疾病越來越加重喔！</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>必知！寵物這些行為可能也跟身體狀況有關</h2>
                        <div className='table-responsive-xl'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-primary-s text-primary'>
                                        <th className='text-center'></th>
                                        <th className='' width='150'>異常行為</th>
                                        <th className=''>可能狀況</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder text-center px-2'>狗</td>
                                        <td className='fw-bolder'>打哈欠</td>
                                        <td style={{ whiteSpace: 'normal' }}>除了疲倦外，也有可能是對環境感到壓力。若此時狗狗身邊有較不熟的人時，代表狗狗對此人的存在還有些不習慣，也還不太能與其互動。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder'></td>
                                        <td className='fw-bolder'>抱頭或頭頂牆壁</td>
                                        <td style={{ whiteSpace: 'normal' }}>常常用前腳壓著頭或是用頭頂著牆壁，很有可能是罹患跟頭部有關的疾病，一發現最好立即就醫。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder'></td>
                                        <td className='fw-bolder'>不停流眼淚</td>
                                        <td style={{ whiteSpace: 'normal' }}>可能是淚腺受感染、發炎，但也要注意是否為過敏徵兆或是睫毛倒插刺激到眼睛。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder'></td>
                                        <td className='fw-bolder'>追自己尾巴繞圈圈</td>
                                        <td style={{ whiteSpace: 'normal' }}>有可能是感到無聊想吸引主人注意，但也有可能是罹患強迫症或是分離焦慮症發作，應及早就醫治療。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder'></td>
                                        <td className='fw-bolder'>指甲有傷還瘋狂挖掘</td>
                                        <td style={{ whiteSpace: 'normal' }}>若指甲太長，狗狗可能會故意磨損爪子，不過如果感到極度鬱悶或無聊，精力無處發洩時，也可能會做出此行為，這時應適度帶狗兒去運動。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder text-center px-2'>貓</td>
                                        <td className='fw-bolder'>走路姿勢不協調</td>
                                        <td style={{ whiteSpace: 'normal' }}>貓平常是種反應動作很迅速的動物，如果走路歪歪斜斜或是有點跛腳感，有可能是腳掌或四肢有傷，可能傷及骨頭，或是腸胃不舒服。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder'></td>
                                        <td className='fw-bolder'>鼻頭乾、鼻涕不透明</td>
                                        <td style={{ whiteSpace: 'normal' }}>有可能是感冒或是上呼吸道遭受感染，如帶有血絲也可能是其它疾病，最好就醫檢查一下。</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary bg-primary-s fw-bolder'></td>
                                        <td className='fw-bolder'>長期躲藏不見人</td>
                                        <td style={{ whiteSpace: 'normal' }}>本來好端端不怕人的寶貝，忽然變成誰都不願見，喜歡躲藏在不易找到的地方，要小心可能是抑鬱症。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            )
        } else if (id == '10') {
            return (
                <article className='article-content'>
                    <p>現代社會腳步忙碌、物價高，與其尋覓伴侶再到結婚生子，不少人直接選擇養個毛小孩當家人，同樣可以讓身心變豐富，生活也更歡樂。但養個毛孩究竟要花多少錢，大家真的知道嗎？</p>
                    <div>
                        <h2 className='subtitle'>貓咪花費參考表</h2>
                        <div className='table-responsive-xl col-lg-8'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-primary-s text-primary'>
                                        <th colSpan='3' className='text-center'>養貓開銷總整理</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-primary-s bg-primary fw-bolder text-center' colSpan='3'>一次性花費</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>植晶片</td>
                                        <td className='' colSpan='2'>300元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>登記</td>
                                        <td className='' colSpan='2'>1,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>節紮</td>
                                        <td className='' colSpan='2'>3,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>生活起居設備</td>
                                        <td className='' colSpan='2'>6,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary-s bg-primary fw-bolder text-center' colSpan='3'>每年固定花費</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>健康維持</td>
                                        <td className=''>各式疫苗</td>
                                        <td className=''>1,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>保健藥品</td>
                                        <td className=''>5,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>健康檢查</td>
                                        <td className=''>3,000～10,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>基本伙食</td>
                                        <td className=''>飼料</td>
                                        <td className=''>9,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>鮮食</td>
                                        <td className=''>12,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>清潔美容</td>
                                        <td className=''>洗澡</td>
                                        <td className=''>1,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>梳理毛髮</td>
                                        <td className=''>1,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>日常必須</td>
                                        <td className=''>貓砂</td>
                                        <td className=''>6,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>玩具其它</td>
                                        <td className=''>2,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>突發醫療</td>
                                        <td className=''>門診</td>
                                        <td className=''>500～1,500元 / 次</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>手術</td>
                                        <td className=''>1,500～6,000元 / 次</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>住院</td>
                                        <td className=''>3,000元～數萬以上 / 次</td>
                                    </tr>
                                    <tr>
                                        <td colSpan='3' className='text-end'>單位：新台幣（元）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>狗狗花費參考表</h2>
                        <div className='table-responsive-xl col-lg-8'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-primary-s text-primary'>
                                        <th colSpan='3' className='text-center'>養狗開銷總整理</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-primary-s bg-primary fw-bolder text-center' colSpan='3'>一次性花費</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>植晶片</td>
                                        <td className='' colSpan='2'>300元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>登記</td>
                                        <td className='' colSpan='2'>1,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>節紮</td>
                                        <td className='' colSpan='2'>2,500~3,500元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>生活起居設備</td>
                                        <td className='' colSpan='2'>6,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='text-primary-s bg-primary fw-bolder text-center' colSpan='3'>每年固定花費</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>健康維持</td>
                                        <td className=''>各式疫苗</td>
                                        <td className=''>4,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>保健藥品</td>
                                        <td className=''>6,000~10,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>健康檢查</td>
                                        <td className=''>3,000～10,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>基本伙食</td>
                                        <td className=''>飼料</td>
                                        <td className=''>
                                            <p>小型犬:6,000元</p>
                                            <p>中型犬:8,000元</p>
                                            <p>大型犬:12,000元</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>鮮食</td>
                                        <td className=''>
                                            <p>小型犬:6,000~20,000元</p>
                                            <p>中型犬:12,000~40,000元</p>
                                            <p>大型犬:25,000~40,000元</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>清潔美容</td>
                                        <td className=''>洗澡</td>
                                        <td className=''>
                                            <p>小型犬:300~500元</p>
                                            <p>中型犬:500~800元</p>
                                            <p>大型犬:800~1,200元</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>梳理毛髮</td>
                                        <td className=''>1,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>日常必須</td>
                                        <td className=''>排泄清潔</td>
                                        <td className=''>5,000~8,000元</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>玩具其它</td>
                                        <td className=''>2,000元</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>突發醫療</td>
                                        <td className=''>門診</td>
                                        <td className=''>500～1,500元 / 次</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>手術</td>
                                        <td className=''>1,500～6,000元 / 次</td>
                                    </tr>
                                    <tr>
                                        <td className=''></td>
                                        <td className=''>住院</td>
                                        <td className=''>3,000元～數萬以上 / 次</td>
                                    </tr>
                                    <tr>
                                        <td colSpan='3' className='text-end'>單位：新台幣（元）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物醫療費是最難估的錢坑！</h2>
                        <p>從上方表格可以看出毛孩的伙食與日常花費雖然多，但至少能先預估並準備，而「突發醫療」的花費卻像是顆不定時炸彈，不知何時會出現，也不知會花多少錢。於是許多飼主都會另外努力存個「寵物醫療基金」，目標大概為 10～20 萬元。像這樣的金額對很多人來說，並非那麼容易就存到，可能要花個幾年時間才能達標。所以不少人會在還沒存好前，先投保一年一期的寵物保單以應付危機。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>努力存錢外也能利用寵物險當醫療後盾</h2>
                        <p>用寵物險來轉嫁醫療支出是最簡單有效的好方法，市面上寵物險最主打的就是醫療保障，畢竟這保單的初始用意即為「寵物的健保」，不希望主人們因為突發的醫療費而陷入經濟困境，無法給予寵物較好的治療。除此之外，寵物險可能還會有<strong>「寵物侵權責任」、「寵物寄宿」、「寵物喪葬」</strong>等細項保障，對比每年一、兩千元的保費，CP值其實相當高。建議認真想養毛孩的主人們，每年花點小錢幫寶貝們規劃保單，好當寶貝們的醫療後盾喔！</p>
                    </div>
                </article>
            )
        } else if (id == '11') {
            return (
                <article>
                    <p>「太期待啦！和死黨們久違的小旅行！但是家中的貓主子該怎辦？」<br />「什麼！公司臨時要我出差，那家中的大爺們誰來顧？」<br />「好久沒回老家看爸媽，終於可回去啦！咦不對，那租屋處的聖上們誰來服侍？」</p>
                    <p>相信許多貓奴們都曾經遇過這類煩惱，想必很有共鳴，但話說回來，這種窘境該怎麼解決呢？如果每次遇到兩難的局面，最後只好犧牲自己成全貓主子，似乎也太殘酷，畢竟人生還有很多事要顧，總不能人際社交、家庭、工作都不管。這時，如果能花一點小小費用，換取貓主子們安然舒適的一天，那該有多好啊？</p>
                    <p>有喔！有需求就會有商機！這幾年市場上快速興起寵物到府服務，其中最夯的就是「貓保母」！</p>
                    <div>
                        <h2 className='subtitle'>為何貓咪保母快速興起？這幾原因貓奴超有感！</h2>
                        <p>在臺灣最多人飼養的前三名寵物分別是狗、魚、貓，比起來，魚的照顧相對簡單不花時間，也較容易請人臨時代勞。而狗的照顧雖然也有不少要注意的細節，但不得已時至少還能配合主人一起行動。至於貓咪，就真沒那麼簡單啦！貓咪天性很難跟著飼主到處移動，對許多變化更是敏感，因而最適合用保母到府的方式來照顧，幾個重點原因如下：</p>
                        <ol className='text-danger fw-bolder'>
                            <li>貓咪天性敏感，會認窩，不適合頻繁更換生活環境</li>
                            <li>貓咪生活用品多，不方便跟著攜帶移動</li>
                            <li>貓咪常會有不吃不排泄的問題，須隨時調整觀察</li>
                            <li>與貓互動需要許多專業知識，不易請人代勞</li>
                            <li>許多貓咪飼主會養數隻貓，需細心與耐心兼備的照護人選</li>
                            <li>每隻貓咪興趣與習慣都差很多，必須客製化服務內容</li>
                        </ol>
                    </div>
                    <div>
                        <h2 className='subtitle'>貓咪保母常見服務，超貼心客製化細節！</h2>
                        <p>明白上述那些貓咪難搞的眉眉角角後，應該能體會為何到府顧貓會受到如此重視了。至於貓咪保母平常都會提供些哪些基本服務呢？一併列出來給大家參考：</p>
                        <ol className='text-danger fw-bolder'>
                            <li>餵食餐點</li>
                            <li>清理排泄物</li>
                            <li>貓咪活動區域打掃</li>
                            <li>梳理毛髮</li>
                            <li>修剪指甲</li>
                            <li>陪貓運動、玩耍</li>
                            <li>其它與貓咪相關交辦事項</li>
                        </ol>
                        <p>寵物的需求百百種，主人觀念也不盡相同，雖然列出常見服務，但關於許多照護細節可能都需要客製化。同時一些事情也必須先約定好，例如清掃的範圍到哪裡？當寶貝們不願意配合時可以採取哪些做法？或是衛生要求到什麼程度？顧貓過程需不需要視訊觀看？甚至是防疫相關的措施，這些都是客製化的精髓。因此雙方仍會以彼此約定為主，建立一定的默契，以便帶給每個寶貝最適合的照顧。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>新型態社會來臨，寵物保母趨勢看好！</h2>
                        <p>根據農委會調查，整個2021年度，全台貓狗晶片登記數量正式超車新生兒！足見現代家庭生活和以前相比，不僅出現明顯變化也更加多元。而農委會為提升寵物福祉，也將成立臺灣史上首個寵物專責單位<b className='text-danger'>「寵物管理科」</b>，期望能輔助寵物新興市場，並賦予適當的管理發展機制，讓寵物相關產業更加美好！這其中便包括：寵物美容、寵物食品、寵物訓練、寵物保姆、寵物保險、寵物生命紀念等等，令人相當期待啊！</p>
                        <p>如今基本的飽暖早已不夠滿足新興家人，從寵物的硬體建設到寵物醫療保險的普及，再到各種寵物服務的崛起，以及政府專責機購的設立，便是一路變遷的最好見證。尤其在繁忙的都會區，未來勢必會更加依賴寵物到府服務。下次貓奴們若遇上事情與顧貓兩難的局面時，不妨來體驗一次「貓保母」看看吧！</p>
                    </div>
                </article>
            )
        } else if (id == '12') {
            return (
                <article>
                    <div>
                        <p>最近北部連下好幾天的雨，終於有機會在週六見到陽光！這個週末還沒安排好要做什麼的人，尤其是家裡有養貓咪的，強烈推薦你一定要去逛逛台北花博公園的「瘋貓祭」！</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>2022 瘋貓祭七大展區與你同樂</h2>
                        <p>「瘋貓祭」是養貓界一大盛事，今年的場地位於台北花博公園。現場分成幾個展區，包含知性型的<span className='fw-bolder text-danger'>「貓咪百科」</span>和<span className='fw-bolder text-danger'>「瘋貓論壇」</span>，還有趣味的<span className='fw-bolder text-danger'>「貓咪插畫」</span>和<span className='fw-bolder text-danger'>「巨大貓神打卡點」</span>，另外還有<span className='fw-bolder text-danger'>「瘋貓市集」</span>和<span className='fw-bolder text-danger'>「愛貓工作坊」</span>可以採買東西並和貓咪互動，享受寵物按摩或是DIY製作紀念品。</p>
                        <p>值得一提的是，本次展覽還特別規劃了<span className='fw-bolder text-danger'>「吸貓專區」</span>，提供個性較親人的幾隻貓主子給人輪流抱抱！想不到吧，除了自家的貓能吸之外，來這裡居然還能吸到其它貓，和別的貓咪同樂、玩耍，貓奴們是不是光想像就覺得超興奮？</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>超強達人與你分享寵物險挑選訣竅！</h2>
                        <p>在5/30禮拜一這天，「瘋貓論壇」裡有難得一見的<span className='fw-bolder text-danger'>寵物險分析講座</span>，由本身也有養毛小孩、身為寵物險達人的公勝保險經紀公司馮崴洋經理來分享寶貴經驗。講座內容包含：如何找出適合自家毛孩的保險商品、寵物醫療費理賠規則解說、投保前必知的注意事項等等。如果有在考慮幫自家毛孩規劃保險的人，或是搞不太懂到底要如何挑寵物險才好的人，千萬不可錯過這場難得又實用的免費講座！</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>擁有毛孩晶片號碼便能快速投保寵物險</h2>
                        <p>現在有不少保險都能利用網路投保，不須另外再跟業務員會面洽談，例如寵物險就是很適合用網路來投保的險種。<span className='fw-bolder text-danger'>投保寵物險，一定要具備「寵物登記晶片號碼」</span>，關於這點可上<a href='https://www.pet.gov.tw/web/o201.aspx' target='_blank'>「寵物登記管理資訊網」</a>來查詢，輸入飼主的相關資料，便會寄出驗證碼到個人信箱，收到後就能連上頁面查到寵物晶片的號碼。</p>
                        <p>當天在「瘋貓市集」的30號攤位上，也會有<span className='fw-bolder text-danger'>寵物險投保平台「GOGOBO」</span>和專業團隊來服務大家，讓使用者體驗網路投保的便捷性。另外要注意，網路投保寵物險時，<span className='text-danger fw-bolder'>「要保人」與寵物晶片登記號碼上的飼主必須是同一人</span>，這樣才能順利核保喔！</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>瘋貓祭攤位豐富，做好防疫玩得開心又安心！</h2>
                        <p>其實幫寵物植入晶片是一件很好的政策，也代表飼主對自身寵物負責任的態度。除了人以外，寵物的醫療保險如今也越來越普及，醫療與過失責任的保障是有寵物的家庭，生活中不可或缺的事。</p>
                        <p>在「瘋貓祭」上，除了保險外，也可以購得許多貓咪日用品，例如衛浴用品、食物、保健、醫護器具等等，甚至還有寵物寫真和超可愛的插畫藝術品，絕對值得一逛！最後也要提醒大家，務必做好防疫措施，全程戴起口罩，才能玩得開心又安心！</p>
                        <img src={require('../image/type/pet/blog/瘋貓祭_地圖.png')} className='img-fluid' />
                    </div>
                </article>
            )
        } else if (id == '13') {
            return (
                <article>
                    <div>
                        <h2 className='subtitle'>流浪動物的問題需你我皆參與才有機會改善</h2>
                        <p>根據農委會統計，截至去年，全台流浪狗就有近16萬隻，流浪貓則較難調查，但數量恐也不輸流浪狗。收容所每年收進來的貓狗，永遠比被領養出去的還多，總是這邊好不容易幸運找到歸宿，另一邊又生出許多小孩！再加上近幾年實施的「零安樂」政策，收容機構早已不堪負荷，必須再有更多配套措施，以及更多人投入，才能逐步改善這現象。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>默默努力付出的流浪動物機構與協會</h2>
                        <p>在臺灣，有許多熱心人士，不惜自掏腰包、奉獻心力，成立一些救援組織，例如常見的狗園、貓屋、毛孩協會等等。只要各地傳出有貓狗需要援助或緊急醫療，往往這些無名英雄們就會火速趕到現場處理。然而，當貓狗短暫脫離困境後，接下來才是傷腦筋的局面。讓一隻貓狗恢復健康並做好結紮手術，再安置到尋得理想主人，這期間的花費相當大。如果又要長期堅持，這些經費究竟要從哪來？難怪常聽到許多貓狗收容園區的主人，都是傾家蕩產並靠各界人士幫忙募款才有辦法支撐下去。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>GOGOBO 與長期為流浪動物付出心力的慈善夥伴</h2>
                        <p>流浪貓狗連生存都有問題，自然也就沒有保險，但我們家中的寶貝毛孩可以透過寵物保險獲得更完善的醫療資源與照護、減免沉重的醫療負擔，而這也是目前多數先進國家對於寵物照護的趨勢。早在國內開始推廣寵物保險時，「GOGOBO-公勝保經網路投保平台」就希望能夠結合一些志同道合的夥伴，一起替臺灣的流浪貓狗做更多事，也很幸運在今年遇到了兩個優秀的夥伴，容我們介紹給大家。</p>
                        <div className='mt-4 bg-third p-3'>
                            <div className='d-lg-flex align-items-center text-center'>
                                <img src={require('../image/type/pet/cooperate-logo/scpa-tai.png')} className='img-fluid' width='180px' />
                                <h3 className='text-primary fw-bolder fs-5 mt-2 mt-lg-0'>【臺北市流浪貓保護協會】</h3>
                            </div>
                            <p>「臺北市流浪貓保護協會」（Taipei Stray Cats Protection Association），為臺灣首見以流浪貓為主題的動物保護團體，非政府組織，財務及資訊透明。成立後持續推廣貓咪認養、做負責任的主人、同時也推廣街貓結紮運動（Trap Neuter Return：TNR，誘捕、絕育、放回原地），希望減少街貓過度繁殖在街頭辛苦討生活。為了讓更多貓咪享受家的溫暖，協會創辦認養中心，主辦認養活動，改變舊有送貓方式，提供更多認養貓咪管道。</p>
                            <p>截至110年底，協會和眾志工的努力下已成功幫3015隻貓咪找到家庭認養，26403隻臺北市街貓完成絕育（TNR）。</p>
                            <div>
                                <p className='fw-bolder text-danger'>成立宗旨與目標</p>
                                <ol>
                                    <li className='fw-bolder'>幫助流浪貓結紮，減少流浪貓數。</li>
                                    <li className='fw-bolder'>幫助流浪貓找到愛心家庭認養。</li>
                                </ol>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-4'><img src={require('../image/type/pet/blog/NO.13_1.jpg')} className='img-fluid' /></div>
                                <div className='col-12 col-md-4 my-3 my-md-0'><img src={require('../image/type/pet/blog/NO.13_2.jpg')} className='img-fluid' /></div>
                                <div className='col-12 col-md-4'><img src={require('../image/type/pet/blog/NO.13_3.jpg')} className='img-fluid' /></div>
                            </div>
                            <p className='text-center'>▲ 協會舉辦的認養活動和等待認養的可愛貓咪們</p>
                        </div>
                        <div className='mt-4 bg-third p-3'>
                            <div className='d-lg-flex align-items-center text-center'>
                                <img src={require('../image/type/pet/cooperate-logo/napanpo.png')} className='img-fluid' width='150px' />
                                <h3 className='text-primary fw-bolder fs-5 mt-2 mt-lg-0'>【諾亞方舟動物同樂會】</h3>
                            </div>
                            <p>是一個非以營利為目標的公益組織，因應「弱勢犬貓」現況與飼養問題，開創新興服務方案。包括：為弱勢犬貓設計中途庇護示範中心、媒合領養、領養人支持機制、飼主支持團體，以及同伴動物臨終關懷等等。</p>
                            <div>
                                <p className='fw-bolder text-danger'>成立宗旨與目標</p>
                                <ol>
                                    <li>
                                        <span className='fw-bolder'>犬貓有所養</span>
                                        <p>創建中途庇護示範中心，提供弱勢犬貓個別需求的醫療照護與社會行為引導。藉由妥善照護示範，連結適合的領養人確保犬貓有良好的生活。</p>
                                    </li>
                                    <li>
                                        <span className='fw-bolder'>社區有所用</span>
                                        <p>對有意願的領養人提供照護教育示範以及喘息支持，並落實居家照護衛教，減輕領養人壓力。</p>
                                    </li>
                                    <li>
                                        <span className='fw-bolder'>生命有所終</span>
                                        <p>開辦生命教育課程與飼主支持團體，實現社會網絡功能，使飼主在面對同伴動物臨終歷程時能有所依靠。</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>一起來！幫自家毛孩保寵物險，GOGOBO 就捐款百元幫助更多無家毛孩！</h2>
                        <p>毛孩如果有寵物險，往往就有更好的醫療後盾，同時為配合投保必須落實的晶片登記，也是毛孩的重要保障。現在起，只要你透過 GOGOBO-公勝保經網路投保平台成功幫自家毛孩投保寵物險，我們將為每一張保單捐出100元給「臺北市流浪貓保護協會」和「諾亞方舟動物同樂會」，以便照顧更多還沒有主人的毛小孩。讓我們一起攜手，從原本對街頭浪浪們的關心直接化成更有意義的具體行動吧！</p>
                    </div>
                </article>
            )
        } else if (id == '14') {
            return (
                <article>
                    <div>
                        <h2 className='subtitle'>愛犬爆衝騎士受傷！毛孩交通意外頻傳</h2>
                        <p>去年在台北市發生一起交通意外，一隻哈士奇從寵物美容店竄出到馬路上，導致一名機車騎士摔車，身上多處骨折。刑事部分，飼主雖已先賠償二十幾萬達成和解，但接下來仍要面對高達數百萬的民事求償。其實除了這起事故外，最近幾年，因為犬隻暴衝導致車禍的案件經常發生。另外還有遛狗時，自家狗咬死別人狗、咬傷路人的事件也是時有所聞。在這些案例中，飼主都須負擔賠償責任，如果沒有相關保險，就得自己支付高額賠償金，生計恐受影響！</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>投保寵物險，悲劇發生至少還有保障可協助處理！</h2>
                        <p>假如自家毛孩有投保寵物險，並且含有<strong className='text-danger'>「寵物侵權責任」</strong>的保障，就能在毛孩闖禍遭受求償時啟動這項保障，用保險金賠給受害者，是一種風險轉嫁的方法。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>「寵物侵權責任」是什麼樣的保障？</h2>
                        <p><strong className='text-danger'>寵物侵權保障可看成是飼主的過失責任險，所以在一些商品文宣裡，又稱「過失責任」，只是名稱不同而已，最主要是保障因寵物闖禍導致飼主有責任須面對賠償的窘境。</strong>在寵物綜合保險裡，可說是除了醫療項目外最重要的保障。通常寵物侵權的理賠方式會採「限額給付」，也就是有設定理賠的上限，大多從數十萬起跳，也有高達一兩百萬的。但這幾年寵物險損率過高，未來許多保單可能在這方面保障會縮水些。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>飼主必知！遵守這些前提才符合寵物侵權理賠條件！</h2>
                        <p>寵物侵權責任保障雖然實用可靠，但並非什麼狀況都能申請理賠。一般來說，主人首先要盡到管理責任，條款上除了「共同不保事項外」，還會註明寵物侵權保障的不理賠情況。像是出入公共場所「未由一定年紀的人伴同，或未採取適當防護措施」就不予理賠。而<strong className='text-danger'>防護措施是指「以長度不超過1.5公尺之繩鍊牽引、犬隻配戴不影響散熱之透氣口罩」</strong>。如果沒有做到上述控管，就不在賠償範圍內，這些重要前提毛孩主人一定要了解。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>狗比貓更易闖禍釀災，寵物險必備！</h2>
                        <p>毛孩闖禍較嚴重的情況，一般來說是咬傷別人或間接影響別人傷亡。根據國內外許多統計，狗比貓更容易弄傷人，狀況也較為嚴重，其中有飼主的家犬又比流浪犬闖禍的比例更大。對於有養毛孩的人來說，寵物險不只是寵物的醫療後盾，同時也是保障主人不因寵物闖禍連帶整個家計受影響的靠山，實在該趁早投保才好！</p>
                    </div>
                </article>
            )
        } else if (id == '15') {
            return (
                <article>
                    <div>
                        <h2 className='subtitle'>近年臺灣寵物保險熱銷但損率驚人！</h2>
                        <p>這幾年疫情衝擊全球經濟，各行各業面臨寒冬，獨獨「寵物商機」逆勢成長。而在臺灣，對毛孩來說十分重要的寵物保險，也是一年比一年賣得更好，但卻也面臨理賠率過高的問題。截至2021去年底，整個業界共承保57000件保單，而理賠件數就高達27000件，理賠率將近一半！至於保費則是收入1.6億元，理賠金額為1.1億元，損失率高達七成！如果再把行政費用和招攬佣金算進去，真的是一門賠本生意。</p>
                        <p>有了防疫保單的經驗，產險業者自然不敢輕忽。早在今年初，就有不少業者紛紛下架寵物險，暫時不推出此類保單。有的則是把舊的去掉，精算出新的保障內容和費用繼續賣，以求穩住損率。還有的是提高核保門檻，確保寵物的健康狀況，避免帶病投保的情形。</p>
                    </div>
                    <div>
                        <h2 className='subtitle'>近期寵物險保障內容調整，以華南產險為例</h2>
                        <p>寵物險若希望繼續發展，減少損失是必然前提，除了各家業者必須完善核保規則外，剩下的就是調整保障內容。以華南產險 2022 年夏天推出的一般經代通路網投方案為例子，跟原本的舊保單相比，有不少重要事項改變，整理出來讓大家多少了解一下現在寵物險的保障內容變化。</p>
                        <div>
                            <h3 className='list-title'>（一）寵物投保資格調整</h3>
                            <p>原華南保單無論貓狗，首次投保可收10歲的寵物，改版後首次投保最大年齡限制變為8歲，可續保到15歲。投保文件則從原本的三選一變成「必須施打寵物晶片並完成農委會登記」，被保險之寵物不可再投保其它保險公司。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>（二）共同不保事項和醫療費用除外責任變多</h3>
                            <p>和舊版相比，保單條款上的「共同不保事項」，多了一行文字：「被保險寵物因颱風、暴風、龍捲風、洪水、閃電（以下略）……土石流、地陷等天然災變所致者」。這代表保單<span className='fw-light text-danger'>排除了「天災因素」所造成的寵物傷害或損失</span>。同時醫療費用的「特別除外責任」也新增不少事項，重點整理如下：</p>
                            <ol className='text-danger'>
                                <li>原第三條事項從「不賠牙齒疾病」改為「口腔事故皆不理賠，無論疾病或意外傷害」</li>
                                <li>皮膚相關疾病不理賠</li>
                                <li>因退化引起的眼睛相關疾病不理賠</li>
                                <li>被保險寵物「9歲」後的各種疾病衍生費用不賠</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='list-title'>（三）醫療保障細節調整</h3>
                            <p>醫療保障變動頗多，多為保額數字與細節調整，重點如下：</p>
                            <ol>
                                <li>保險期間內累積最高賠償金額降低</li>
                                <li>增設保險期間內的就醫理賠次數限制</li>
                                <li>保留一個不限次數但保障較陽春的方案</li>
                                <li>增設帶有「自負額」的方案</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='list-title'>（四）寵物侵權（寵物過失責任）與其它變化</h3>
                            <p>推過兩次以上寵物險的產險公司，如今有許多都把新保單的「寵物侵權」保險金額度上限給降低。華南產險這張保單也不例外，原先的200萬額度變為50萬，同時也推出不包含寵物侵權這項保障的方案。</p>
                            <p>另外有件事須注意，新版保單不再具備「自動續保」特性，所以消費者需要每年留意續約的時間，以免因疏忽出現保障空窗期。</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>寵物保單仍然重要，醫療與侵權過失雙重保障不可少！</h2>
                        <p>其實不只華南，許多有賣寵物險的產險公司近年來也都做出相同性質的調整，更有業者因損失過高，索性下架不再販售這類保單。若真越來越少業者願意推廣，對如今毛小孩登記數量超越新生兒的臺灣社會來說，反而是一大損失。</p>
                        <p>儘管寵物險頻繁調整，保障細節也頗多修改，但對毛小孩來說仍非常重要。尤其是「醫療費用」和「寵物侵權」，前者容易發生，後者則是一發生恐怕令飼主損失慘重，兩種保障實在缺一不可！希望整個業界，能利用近幾年累積的理賠數據，逐漸開發出對保險公司和消費者都有好處、在買賣雙方間達到平衡的保單。如此才能經營長久，讓民眾提升保險意識，令毛小孩們都有常態性的基本保障。</p>
                    </div>
                </article>
            )
        } else if (id == '16') {
            return (
                <>
                    <article className='article-content'>
                        <p>今年2023農曆過年一口氣放十天，實在令人開心！不過家中有養毛孩的主人們，是不是也有點擔憂，在過年期間，最寵愛的寶貝們萬一身體突然不舒服或是受傷該怎麼辦？別煩惱，以下我們提供一些全台各縣市在過年期間有營業，且為24小時或接近24小時的寵物醫院清單，讓大家存取在身邊，方便取用。部分縣市沒有符合條件的醫院，只能選擇收錄營業時間相對較長或隨機選錄一、兩家的方式，如有需要，也可自行上網搜尋更多醫院看看。</p>
                        <p>另外也要提醒大家，畢竟是過年，除了收費可能調整外，有些醫院仍會安排一些例外時段，讓醫護人員能夠陪伴家人或稍微休息一下，建議出發前最好還是打個電話到院內確認，同時還請多多體諒醫護人員喔！</p>
                        <div>
                            <h2 className='subtitle'>除夕～初五有營業 + 24h營業或營業時間較長的寵物醫院</h2>
                            <div className='mb-3 col-lg-5'>
                                <label htmlFor='item' className='fw-bolder text-danger'>查看全台寵物醫院(請選擇地區)</label>
                                <select className='form-select' id='item' name='item' onChange={e => setArticleId8AreaOption(e.target.value)}>
                                    <option value='北北基地區'>北北基地區</option>
                                    <option value='桃竹苗地區'>桃竹苗地區</option>
                                    <option value='南部及東部'>南部及東部</option>
                                </select>
                            </div>
                            {
                                articleId8AreaOption === '北北基地區' ?
                                    <div className='table-responsive-xl'>
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>太僕動物醫院（台北南京分院）</td>
                                                    <td>台北市松山區南京東路五段286號</td>
                                                    <td><a href='tel:+886-2-27562005'>02-2756-2005</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>伊甸動物醫院（部分時間休診）</td>
                                                    <td>台北市中山區北安路554巷33號</td>
                                                    <td><a href='tel:+886-2-85092579'>02-8509-2579</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>展望急診動物醫院</td>
                                                    <td>台北市萬華區中華路二段2號</td>
                                                    <td><a href='tel:+886-2-23880122'>02-2388-0122</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>全國動物醫院（台北內湖分院）</td>
                                                    <td>台北市內湖區舊宗路一段30巷13號</td>
                                                    <td><a href='tel:+886-2-87918706'>02-8791-8706</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>布達羊急診動物醫院</td>
                                                    <td>台北市士林區忠誠路一段102號</td>
                                                    <td><a href='tel:+886-2-28341119'>02-2834-1119</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>全民動物醫院</td>
                                                    <td>台北市大同區民生西路247號</td>
                                                    <td><a href='tel:+886-2-25530371'>02-2553-0371</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>慈愛動物醫院（台北寧夏分院）</td>
                                                    <td>台北市大同區寧夏路1號</td>
                                                    <td><a href='tel:+886-2-25563320'>02-2556-3320</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>興泰動物醫院</td>
                                                    <td>台北市松山區延吉街57號</td>
                                                    <td><a href='tel:+886-2-25795722'>02-2579-5722</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>阿牛犬貓急診醫院</td>
                                                    <td>台北市士林區基河路238號</td>
                                                    <td><a href='tel:+886-2-28810478'>02-2881-0478</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>來來動物醫院（夜間無診）</td>
                                                    <td>新北市中和區德光路29號</td>
                                                    <td><a href='tel:+886-2-89539739'>02-8953-9739</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>雙和動物醫院（深夜早上無診）</td>
                                                    <td>新北市永和區中正路621號</td>
                                                    <td><a href='tel:+886-2-29466633'>02-2946-6633</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>辛巴動物醫院（部分時間無診）</td>
                                                    <td>基隆市七堵區百六街7號</td>
                                                    <td><a href='tel:+886-2-24514792'>02-2451-4792</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> : ''
                            }
                            {
                                articleId8AreaOption === '桃竹苗地區' ?
                                    <div className='table-responsive-xl'>
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>元氣動物醫院（桃園三民總院）</td>
                                                    <td>桃園市桃園區三民路三段381號</td>
                                                    <td><a href='tel:+886-3-3333816'>03-333-3816</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>品湛動物醫院</td>
                                                    <td>桃園市桃園區民生路495-9號</td>
                                                    <td><a href='tel:+886-3-3363252'>03-336-3252</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>磨鼻子動物醫院</td>
                                                    <td>桃園市中壢區延平路20號</td>
                                                    <td><a href='tel:+886-3-4535740'>03-453-5740</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>全國動物醫院-台中總院（除夕部分時間休診）</td>
                                                    <td>台中市西區五權八街100號</td>
                                                    <td><a href='tel:+886-4-23710496'>04-237-10496</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>康德動物醫院</td>
                                                    <td>台中市北屯區崇德路二段270號</td>
                                                    <td><a href='tel:+886-4-22412700'>04-2241-2700</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>濟生動物醫院</td>
                                                    <td>台中市北屯區北平路三段75-12號</td>
                                                    <td><a href='tel:+886-4-22385886'>04-2238-5886</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>慈愛動物醫院（中港分院）</td>
                                                    <td>台中市大里區國光路二段539號</td>
                                                    <td><a href='tel:+886-4-24066688'>04-2406-6688</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>宏仁動物醫院（夜間無診）</td>
                                                    <td>新竹市北區民富街57號</td>
                                                    <td><a href='tel:+886-2-5259308'>02-525-9308</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>新竺動物醫院（夜間無診、部分時間休診）</td>
                                                    <td>新竹市北區竹光路98號</td>
                                                    <td><a href='tel:+886-3-5429961'>03-542-9961</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>忠愛動物醫院（夜間無診）</td>
                                                    <td>彰化縣員林市中山路2段490號</td>
                                                    <td><a href='tel:+886-4-8335520'>04-833-5520</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> : ''
                            }
                            {
                                articleId8AreaOption === '南部及東部' ?
                                    <div className='table-responsive-xl'>
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>萌寵動物醫院（深夜無診、部分時間休診）</td>
                                                    <td>嘉義市東區大雅路二段434號</td>
                                                    <td><a href='tel:+886-5-2760177'>05-276-0177</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>全國動物醫院（台南東區分院）</td>
                                                    <td>台南市東區崇德路620號2樓</td>
                                                    <td><a href='tel:+886-6-2673191'>06-267-3191</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>慈愛動物醫院（台南總院）</td>
                                                    <td>台南市南區西門路一段473號</td>
                                                    <td><a href='tel:+886-6-2203166'>06-220-3166</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>聯盟動物醫院 - 仁武店（深夜無診、部分時間休診）</td>
                                                    <td>高雄市仁武區鳳仁路231號</td>
                                                    <td><a href='tel:+886-7-3740964'>07-374-0964</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>宏力動物醫院（部分時間休診）</td>
                                                    <td>高雄市三民區明誠一路326號</td>
                                                    <td><a href='tel:+886-7-3102819'>07-310-2819</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>花蓮動物醫院（夜間無診）</td>
                                                    <td>花蓮縣花蓮市國富十街118號</td>
                                                    <td><a href='tel:+886-3-8571650'>03-857-1650</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-primary-s text-primary fw-bolder'>蘭陽動物醫院（夜間無診）</td>
                                                    <td>宜蘭市東港路二段79號</td>
                                                    <td><a href='tel:+886-3-9373187'>03-937-3187</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> : ''
                            }
                        </div>
                        <div>
                            <h2 className='subtitle'>寵物年紀大易伴隨傷病，可善用寵物險轉嫁</h2>
                            <p>最後提醒大家，貓與狗如果到了常需要臨時急診的情形，通常也代表罹患某些麻煩傷病，很快就會面臨頻繁治療或手術的局面。如果能趁毛孩健康時早點投保寵物險，便能在支出重大醫療費用時，獲得一些幫助。由於現在寵物險承保年齡有逐漸下降的趨勢，年紀一大就越少公司願意承保，建議還是早點規劃比較安心，在此先預祝大家新年快樂，平安健康！</p>
                        </div>
                    </article>
                </>
            )
        }
        else {
            window.location.href = '/blog'
        }
    } else if (type == 'life') {
        if (id == '1') {
            return (
                <article>
                    <div>
                        <p className='content'>「如果有一天我不在了……」相信每個人都有想過這類問題，只是最後有沒有付諸行動去規畫事情就因人而異了。大多數情況下，只要不是年老的長者，對於這種提早離開世上的風險，最掛念的總是家人，例如小孩、配偶，以及自己的父母。 「我離開後，小孩他們的學雜費怎麼辦？還有好多年要繳！」「爸爸媽媽他們怎麼辦，他們養老的錢夠嗎？他們年紀大了很難再去工作。」「房貸還有十幾年要繳，另一半有辦法邊工作還貸款又邊顧小孩嗎？」​ 壽險的存在意義就是用來解決上述煩惱，也是我們留給家人的一份愛。常見最單純的壽險規劃，便是安排約數百萬以上的保額，當自己因為各種不幸而在保險期間內過世時，重視的人還有一筆保險金可繼續支撐生活。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>壽險最重要的功用與適合規劃的人</h2>
                        <p>壽險的初衷是讓自身所愛的人，在失去我們的情況下，還能有一筆經濟後盾過生活，這種穩定社會與家庭的作用，也是其最重要的價值。<span className='fw-bolder text-danger'>通常家中的經濟支柱最需要規畫這保險</span>，例如工作中的父母為被保險人，沒有經濟能力的子女或配偶當受益人，若不幸被保險人過世，受益人可運用保險金支撐生活直到能獨立賺錢。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>快速了解壽險本質，輕鬆搞懂保障有什麼！</h2>
                        <p>不過依特性來看，壽險其實還有一些不同的分類，而上述較常見的舉例，在學理上歸類為「死亡保險」，也就是說被保險人過世了才能獲取保險金。另外還有一種「生存保險」，可以把活得太久也看成一種需要錢的煩惱，當被保險人依約定活到幾歲時，就能獲得一筆生存保險金，有時也稱為祝壽金、滿期金。 而最後還有一種前兩者綜合起來的「生死合險」，比如以前我們常聽到可以讓自己存錢的保單，未來滿期後能拿回略多的總金額，同時在保險期間內如不幸過世，家人也能獲得死亡保險金，這種商品的原理就是生死合險。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>終身壽險和定期壽險又是什麼？一張表看懂差異！</h2>
                        <p>除了搞懂壽險本質有助於釐清商品內容外，弄清楚「終身」與「定期」的差異其實更重要！ 兩種保單的劃分通常在商品名稱上就能看出來，主要是以「保障期間」來做界定。終身事實上也是有期限，例如可能是到100或110歲左右， 而多數人在這之前會過世，合理可知這保費勢必會比較貴，否則保險公司絕對倒閉。如果是定期，就是說保障期間會限定為某段時間，可能是十年、二十年、三十年，在這期間內過世才有理賠，由於保障期較短，保費就相對便宜。以下便用一張表來簡單說明一下兩者差異！</p>
                        <div className='table-responsive-lg'>
                            <table className='table'>
                                <thead>
                                    <tr className='bg-primary-s text-primary'>
                                        <th className='text-center'></th>
                                        <th className='text-center'>終身壽險</th>
                                        <th className='text-center'>定期壽險</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>保障期間</td>
                                        <td>投保生效日～終身（實際上是到九十幾至一百多歲）</td>
                                        <td>一年期類型：保障期間一年，大多可逐年續保 多年期類型：通常等同繳費年期，常見如：10、20、30年等</td>
                                    </tr>
                                    <tr>
                                        <td>必備保障</td>
                                        <td>身故/完全失能保險金</td>
                                        <td>身故/完全失能保險金</td>
                                    </tr>
                                    <tr>
                                        <td>其它可能 常見保障</td>
                                        <td>喪葬費、祝壽金</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>保費特性</td>
                                        <td>◆ 保費與年齡相關，保障期間長，每年因攤平原理所繳保費都一樣 <br />
                                            ◆ 常見繳費期間為10、20年等</td>
                                        <td>◆ 一年期可逐年續保，保費會隨年齡漸漸上升 <br />
                                            ◆ 多年期投保時，保費與年齡相關，選定期間後，該期間因平攤原理所繳保費都一樣。</td>
                                    </tr>
                                    <tr>
                                        <td>概念差異</td>
                                        <td>跟定期壽險相比保費較貴</td>
                                        <td>同額度時，因年期有限比終身型短，保費較便宜</td>
                                    </tr>
                                    <tr>
                                        <td>主要用途</td>
                                        <td>還可細分多種類型，用途較複雜，通常跟存錢理財、資產傳承、解決稅務問題有關</td>
                                        <td>規劃足以解決長期經濟問題的高額度保險金，在人生打拼階段，當做不幸狀況發生時能代替自己留給家人的經濟靠山</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='text-center'>
                            <a href='/life' target='_blank' className='btn btn-secondary btn-lg fw-bolder text-light'>看看定期壽險</a>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>一般平凡大眾，推薦規劃哪種壽險好？</h2>
                        <p>其實終身壽險、定期壽險各有用處，不同考量和被保險人的背景，會產生不同的運用方式。<span className='fw-bolder text-danger'>如果是想要預留自身的喪葬費給子女，或是想規劃一筆錢在年老的時候讓家人拿到，便很適合運用「終身壽險」；而如果是在壯年期間，擔心自己哪天倉促離開，小孩、配偶或年邁的父母尚需依賴長期金援才能維生，那首選便是定期壽險。</span>因為解決生活問題需要較大額的保險金，而定期壽險相對便宜，容易規劃到「足額」，值得優先考量。同理，若有房貸等問題，擔心走了後沒人可繳納，除了專門的「房貸壽險」外，也同樣能運用定期壽險來解決。</p>
                        <p>簡單說，只要是「生計」考量，且想在有限預算內解決擔憂的風險問題，就選擇定期壽險。而如果有其它打算，能動用的閒錢也較充裕，那麼可從終身壽險裡再細挑符合自己需求的保單。對於還在為生活打拼的平凡大眾而言，通常生活中的短暫應急金都不一定存夠，何況是幾十年內要用的錢？能夠花少少保費透過定期壽險來轉化成支撐家庭用的錢，絕對是解決問題最簡單的方法，其重要性自然不言而喻囉！</p>
                    </div>
                </article>
            )
        } else if (id == '2') {
            return (
                <article>
                    <div>
                        <p className='content'>「壽險理賠不是因為有人死亡，而是因為還有人要活下去！」這句在保險界和網路上廣為流傳的話，應該不少人聽過。的確，當不幸發生時，儘管難過，但逝者已矣，除了喪葬費用跟亡者有關外，其餘的保險金都是為了繼續生活的親人而存在。所以壽險在規劃的時候，我們心裡想到的，都是心中最放不下的人，也難怪大家會常用愛與責任來形容壽險了！</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>壽險在家庭責任上的運用</h2>
                        <p>壽險與家庭責任息息相關，種類不只一種，運用方式也很多元，但一般平民百姓大多是用做身後的規劃。當自己哪天不幸離開，能預留一筆較大額的錢給家人當成經濟來源。例如爸爸擔心自己突然辭世，還在唸幼兒園的小孩和妻子沒有足夠的教育基金和生活費支撐到小孩長大，就規劃數百萬元的壽險身故保險金。又或者剛買了房子，怕房貸還未繳完自己就先離開導致配偶獨自負擔龐大貸款。另外也有人用來安排給年長父母的孝親費，或是償還其它債務用。</p>
                        <p>總之，上述例子都能簡化成<span className='fw-bolder text-danger'>「擔心自己太早走，遺留下來的家庭責任仍須處理，所以要規劃一筆足夠的金錢來代替自己原本的收入。」</span>了解這點就知道為何人一到壯年或成家立業，就要紛紛規劃壽險。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>定期壽險是什麼？如何運用定期壽險？</h2>
                        <p>依照保險期間的特性來分，壽險有<span className='fw-bolder text-danger'>「定期壽險」</span>和<span className='fw-bolder text-danger'>「終身壽險」</span>兩種，前者只保障「特定期間」的身故理賠；後者則是保障終身（實際上是100歲左右）。不過終身壽險因為拉長了保障時間，再加上年齡越增長買壽險的成本就會越貴的因素，費用遠比定期壽險還貴。</p>
                        <p>換句話說，想規劃足夠解決家庭責任的大筆金錢，要透過終身壽險辦到，對一般受薪階層來講實在非常困難。<span className='fw-bolder text-danger'>而只有保障特定期間的定期壽險，每年要繳的費用就親切許多，壯年時每百萬保額僅需幾千元。所以可以只在最需要負起養家責任的壯年階段，投保定期壽險。</span>如果這期間沒事，就慶幸自己順利平安能陪伴家人、小孩成長，保費就當是一種消費。如果真不幸出了事，規劃的身故金額度也足夠解決未盡的養家責任或是償還貸款。</p>
                        <img src={require(`../image/type/life/blog/life2_額度簡易估算步驟.jpg`)} className='img-fluid text-center' />
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>用保費便宜的定期壽險試著幫自己規劃額度吧！</h2>
                        <p>接著我們來練習一下如何計算自己所需的壽險額度，這裡舉一個情境當例子。</p>
                        <p>阿寶和老婆育有一名8歲小孩，家裡還有約200萬的房屋貸款和20萬的汽車貸款未繳清。阿寶認為孩子23歲大學畢業取得工作前，自己都要支撐老婆和孩子的生活開銷。經評估，稍微省吃儉用加上未來的教育費，兩人的生活大約一年需要50萬。那麼計算方式如下：</p>
                        <div>
                            <p>
                                23 – 8 = 15（年）<br />
                                50萬 x 15 =750萬（15年來所需的生活費）<br />
                                750萬 + 200萬 + 20萬 = 970萬（生活費加上未還清的貸款）<br />
                            </p>
                        </div>
                        <p>阿寶總共需規劃970萬元的身故保險金，才能讓家人在孩子獨立工作以前不用煩惱生活費，這就是阿寶所需要的壽險額度。假如阿寶身邊還有一些現金存款，最後也能再減掉存款的數字，少規劃一點。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>快速學會！定期壽險這樣規劃</h2>
                        <p>像這樣近千萬元的保額需求，在阿寶30歲時也不過每年只要繳2萬多元保費，但如果換算成終生壽險，一年就要繳30萬元以上，所以想在「完善解決金錢額度問題」的這個前提下規劃保險，定期壽險自然是一般人的首選。讀者也可以像上述例子一樣，列出自己的背景和需求，試著計算看看，瞭解一下自己到底背負著多少責任吧</p>
                        <div className='text-center'>
                            <a href='/life' target='_blank' className='btn btn-secondary btn-lg fw-bolder text-light'>看看定期壽險</a>
                        </div>
                    </div>
                </article>
            )
        } else if (id == '3') {
            return (
                <article>
                    <div>
                        <p className='content'>在這個物價與房價飆漲的時代，賺錢打拼、養家買房，實在越來越不容易。許多買車、買房或是育有小孩的家庭，都必須是雙薪，才有辦法支撐生活。很難想像如果伴侶其中一方不幸離開了，另一方到底要如何面對未繳完的龐大貸款以及孩子們的成長開銷？</p>
                        <p className='content'>如此環境下讓國人投保壽險的意識逐漸升高，為了哪天自己真不幸提早離開時，家人能有一筆充足保險金，繼續支持小孩長大到能獨立賺錢生活為止。<span className='fw-bolder text-danger'>而充足的保險金來自於高額度的投保規畫，這便讓費率便宜、保障夠高的「定期壽險」成了首選工具。</span></p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>先認識再規劃！簡單介紹幾種定期壽險</h2>
                        <p>事實上定期壽險已經是種滿精細的保險商品，但依市面上現有的商品來看，還能再挑出一些特別商品和簡單分類。認識保單內容的同時，也能看看自己有無需要什麼特性的定期壽險。至於想了解<a href='/blog/life/1' target='_blank'><u className='text-fb'>「定期壽險是什麼」</u></a>或是<a href='/blog/life/1' target='_blank'><u className='text-fb'>「額度該買多少」</u></a>的事，可點擊連結看之前的文章做初步瞭解。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>定期壽險：依照年期來分</h2>
                        <div className='my-3'>
                            <h3 className='list-title'>一年期定期壽險</h3>
                            <p>討論定期壽險時最常用年期來分類，可分成一年期以及多年期兩種。一年期的保單顧名思義，便是一年一約，保費會隨年齡增長逐年升高。一年期限到了後，多數商品也有保證續保的特性，方便消費者維持保障。</p>
                            <p className='fw-bolder text-danger'>特性：一年一約、自然費率、許多商品有保證續保</p>
                        </div>
                        <div className='my-3'>
                            <h3 className='list-title'>多年期定期壽險</h3>
                            <p>常見年期大致上有：6年期、10年期、15年期、20年期、30年期等等，大多時候繳費期間就是保障期間，也有些商品繳費期間和保障期間略有不同。舉個簡單例子：一位30歲剛當父親的男性，因為家庭責任考量，投保了20年期的定期壽險。那麼他在保障生效後一直到50歲保險期限內，都享有這份壽險保障。而每年的保費不像一年期壽險一樣，若沒有中途變動保障，則每年要繳的費用，都是均攤過後一樣的價錢，這特性又稱為「平準費率」。</p>
                            <p className='fw-bolder text-danger'>特性：繳費年期常等於保障期間、平準費率</p>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>補充特色性定期壽險</h2>
                        <div className='my-3'>
                            <h3 className='list-title'>優體定期壽險</h3>
                            <p>買保險時，保險公司通常都會把保戶的身體依健康狀況分成下列幾種：優良體、標準體、次標準體以及拒保體，越前面代表越健康。而「優體壽險」指的是專門給身體健康、沒有不良習慣、沒有嚴重疾病的優良體保戶來投保，保費會比一般定期壽險保單來得便宜一些。如果想規劃此類壽險，除了準備健檢資料外，也可能會另外要求不能有抽菸習慣、一次要買多少保額等規則。</p>
                            <p className='fw-bolder text-danger'>特性：要求體況等條件、保費略便宜</p>
                        </div>
                        <div className='my-3'>
                            <h3 className='list-title'>外溢型定期壽險</h3>
                            <p>現在許多健康保險都推出含有「外溢」效果的商品，稱為<span className='bg-primary-m text-primary fw-bolder'>「外溢保單」</span>，定期壽險自然也有，只是數量較稀少。所謂的外溢，是希望讓保險公司和保戶都能得到好處，獲得雙贏的局面，創造注重健康與運動的社會風氣。大致用意是：「管理好自身健康，除了享有既定保障外還可獲得其它回饋」。</p>
                            <p>常見透過運動或其它健康管理行為來制定獎勵機制，例如健走里程、健檢狀況、其它行為等等，目前以健走和健檢型保單較為熱門。只要保戶達到要求標準，就可享有保費折扣或其它獎賞。外溢型保單對於保戶來說有了維持健康的動力；對保險公司來說則有助於維持良好的損率，風氣順利塑造起來，對整體社會的影響更是無價。</p>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>推薦善用定期壽險來規劃保障達到差額理財效果</h2>
                        <p>若沒有特殊需求，只是單純背負家庭責任，便不須用終身型壽險來構築保障，畢竟保費昂貴容易卡資金甚至繳不出來而斷保。推薦一般人多利用定期壽險便宜、保障額度易規劃的特性，在青壯年階段建構風險來襲時的保護傘。盡可能把現金存起來盡早做更好的生財運用，等到老年再利用增加的財富來當做晚年靠山，這便是保險規劃學問裡<span className='bg-primary-m text-primary fw-bolder'>「差額理財」</span>的精髓。</p>
                        <p>如果對定期壽險有興趣，或是要查詢一些特殊類型的保單，都可以到<a href='https://www.xn--ruq77d4w3fo7k.tw/%E5%AE%9A%E6%9C%9F%E5%A3%BD%E9%9A%AA/?utm_medium=%E7%B6%B2%E7%AB%99%E6%96%87%E7%AB%A0%E5%BB%B6%E4%BC%B8%E9%96%B1%E8%AE%80&utm_campaign=%E5%AE%9A%E6%9C%9F%E5%A3%BD%E9%9A%AA%E7%A8%AE%E9%A1%9E%E4%BB%8B%E7%B4%B903' target='_blank'><u className='text-fb'>商品資料區</u></a>仔細查看，有任何問題也歡迎填表詢問我們！</p>
                        <div className='text-center'>
                            <a href='/life' target='_blank' className='btn btn-secondary btn-lg fw-bolder text-light'>看看定期壽險</a>
                        </div>
                    </div>
                </article>
            )
        } else if (id == '4') {
            return (
                <article>
                    <div className='my-4'>
                        <h2 className='subtitle'>定期壽險是什麼？功能與用途為何？</h2>
                        <p>關於「壽險」這類保險，初衷是想讓自身所愛的人，在失去我們的情況下，還能有一筆經濟後盾過生活，通常家中的經濟支柱最需要規畫。不過要解決生活問題，往往需要大額的保險金。而「定期壽險」相對終身壽險來說便宜許多，額度規劃上更容易達到充足的數字，因而適合一般大眾優先考量。在受益人方面，有些人會用來遺留給子女，有些人則是用來給年邁的雙親或掛念的配偶，總之無論如何，都是一種「愛與責任」的體現。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>面臨這些狀況記得趕緊規劃定期壽險！</h2>
                        <div>
                            <h3 className='list-title'>（一）有了配偶與小孩</h3>
                            <p>結了婚的那一刻，不再是自由自在一個人，就算沒有養育小孩的計畫，讓另一半能夠好好生活也是自己責任之一。而如果有小孩，肩頭的擔子絕對更重。由於小孩無法自給自足，如果哪天我們不幸提早離開，至少要規劃一筆足夠讓小孩成長到能獨立賺錢的保險金，來當做經濟後盾才行。</p>
                            <p>假如小孩當時10歲，預計23歲可以開始賺錢，再視配偶獨力養育的生活型態和工作狀況來抓平均一年的生活費。例如一年需50萬元才能支撐生活，那就共需規劃650萬元的保險金來當做我們不在時的經濟後盾。</p>
                            <strong>算法為：50萬 x （23 - 10）= 650萬</strong>
                            <p>如果這時候已打拼到一些可活用的現金資產，可以減少一點額度；反之，如果有負債或貸款，則要把該清償的額度給添加上去。大致上可以整理成以下算式：</p>
                            <p className='text-danger'>（小孩能獨立賺錢的年紀 - 小孩現在年紀） x 配偶與小孩每年所需生活費 + 現有貸款 - 現有存款</p>
                            <img src={require('../image/type/life/blog/life4_家庭責任.png')} className='img-fluid' />
                        </div>
                        <div>
                            <h3 className='list-title'>（二）買車買房或創業有貸款未還完</h3>
                            <p>家庭成員裡做為經濟支柱的人走了後，欠缺生活費用，所以必須規畫保險金。那如果遺留下來的是債務呢？例如還未繳完的房貸或車貸，最少都是數十萬到數百萬甚至破千萬的債務。此時另一半往往無法獨自清償，嚴重時可能房子被銀行收回進入法拍程序，多年心血化為烏有。而創業也常常要借貸，無論有沒有成功，過程總是會有許多負資產，也很適合規劃定期壽險。總之，為了避免上述狀況發生，只要有了比較大額的債務時，就一定要設想相關保障，才不會在不幸發生時，令家人失去經濟依靠的當下還同時面臨巨大債務，產生連環打擊。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>（三）父母還需要靠自己來扶養</h3>
                            <p>第三種狀況是父母還健在，並且必須靠自己給予孝親費父母才能夠維持生活。這情形來說，我們算是父母的經濟支柱，跟養小孩類似，也需要規劃一筆保險金，讓年邁的父母在不幸發生時還有個依靠。不過差別在於父母通常也有一些退休後的生活資源，例如他們的存款、勞退和勞保老年給付等等。同時普遍來說，此時的父母花費也不像念書中的小孩那麼高，因而每年的生活費可以抓得比養育小孩再少些。由此可以看出，正值壯年的三明治族群真的辛苦，是家庭責任最大、最需要規畫壽險的時期。</p>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>投保定期壽險前先看一下！推薦用網路工具試算幾遍再規劃</h2>
                        <p>了解什麼時候該用定期壽險後，網站上我們也介紹一款保費便宜，以5年為單位，方便人生各階段自由做調整的<a href='/life/case'><u>定期壽險</u></a>讓大家認識。並且推薦大家利用網頁工具來試算一下自己年紀所需的保費。如此一來對建構保障的花費會較有概念，即使想要貨比三家到處看看也有個大致的基準做參考。</p>
                        <div className='text-center'>
                            <a href='/life/case' target='_blank' className='btn btn-secondary btn-lg fw-bolder text-light'>看看定期壽險</a>
                        </div>
                    </div>
                </article>
            )
        } else {
            window.location.href = '/blog'
        }
    } else if (type == 'healthy') {
        if (id == '1') {
            return (
                <article>
                    <div className='my-4'>
                        <h2 className='subtitle'>人人不可或缺的健康保險──實支實付醫療險</h2>
                        <p>健康保險是我們人體健康出狀況，必須治療或遭受損失時能給予一定保障的保險。除了常聽到的醫療保險外，一些跟疾病有關的險種，如癌症、重大疾病類的保單，也都算是健康險的一環。廣義點來看，就連失能、長期照護的相關保單，也都算健康方面的保障。</p>
                        <p className='mt-3'>所以若要徹底規劃好攸關健康的人身保險時，學問其實非常大，並非單買一、兩張保單就可從此高枕無憂。但假設預算不足，整套的健康保險沒法一次到位的話，那至少也要先投保用途最廣泛、經常派上用場的醫療險，其中「實支實付」型的醫療保單更是十分重要，不僅理賠住院費，還能跟上醫療趨勢，在手術費用和醫療雜費這類支出上也都有不錯的理賠，建議每個人一定要有。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>人人不可或缺的健康保險──實支實付醫療險</h2>
                        <p>不少醫療保單的商品全名都會含有「住院」兩字，因為醫療險啟動保障的關鍵通常便是先看「有沒有住院」。如果住院了，許多保障項目都派得上用場；如果沒住院，通常代表花費較小，比較沒有理賠的對應項目。但像現在有許多手術都是不用住院只需門診就能做好的，花費也頗高，就可能發生「人沒住院卻有很大的醫療開銷」之窘境。因而比較好的醫療保單，至少還是要具備「門診手術」這類相關保障，否則便跟不太上如今的醫療趨勢。</p>
                        <p className='mt-3'>提到為了接受治療而住院，大家知道我們住院期間，最大的花費是什麼嗎？答案可不是病房費喔！根據衛服部統計，近年來，<span className='text-danger'>國人平均住院期間，支出最大宗的其實是「住院醫療雜費」這一項目，其次才是「病房費」和「手術費」。</span>換句話說，若沒有雜費相關保障的醫療保單，在防護上等於有很大的缺漏，無法有效抵禦風險。</p>
                        <img src={require('../image/type/healthy/blog/life4-table.jpg')} className='img-fluid' />
                        <p className='text-gary'>資料來源：衛生福利部中央健康保險署《一般案件住院醫療費用明細》</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>什麼是「住院醫療雜費」？保障範圍有哪些？</h2>
                        <p><span className='text-danger'>雜費，在保險條款上比較常見的正式名稱是「住院醫療費用保險金」，通常會獨立出一個保障項目。</span>概括式的條款描述上會先舉幾個理賠事項的例子，如醫生指示用藥、血液、證明文件等等，最後再添上類似這樣的話：「超過全民健康保險給付之住院醫療費用」。簡單說，即是設立一個額度上限，專門理賠各種超過全民健保給付範圍的醫療雜項支出。其內容非常寬廣，像是動手術時人體用的鋼板、人工關節、其它耗材與設備等，這些開銷很可能都不在健保給付範圍內。就算部分有，但想追求品質越好的治療內容，就要自費越多，動輒十幾萬到數十萬的花費，往往不是一般人消受得起，因而好的醫療保單一定要有專門理賠雜費的保障才行。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>關於雜費說明常看到有人說「概括式」和「列舉式」，各是指什麼？</h2>
                        <p>前面提到的「超過全民健康保險給付之住院醫療費用」這段文字，若是概括式的寫法，便常做為舉例的總結，以概括、涵蓋的描述方式來總結保障用途。反過來說，列舉則是說明完一段定義後，盡可能地舉例許多事項，同時要求被保險人發生的醫療情況必須是在這些舉例事項裡。</p>
                        <p className='mt-3'>由此可知，<span className='text-danger'>概括式的理賠範圍明顯比較寬鬆，且有更彈性空間</span>。尤其現在醫療技術進步快速，每隔數年就可能有許多新技術問世，如果採用列舉式的保障，便可能會出現做了新穎的療程卻無法理賠的窘況，規劃保險時應盡量避免。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>網路也能投保實支實付醫療險，保費便宜、保障實惠！</h2>
                        <p>以往醫療險大多都要透過保險業務員來投保，若要規劃實支實付型保單，因為多屬附約，無法獨立出單，又得另外搭配終身壽險、終身醫療，或是長年期的保險來當主約才能投保，總是令人感到些許壓力。</p>
                        <p className='mt-3'>而這幾年，經過保險公司和相關通路的努力，也開始能在網路上自己投保醫療險了，且不須再綁其它主約。對於預算有限或是各種保障還無法一次規劃到位的人，算是一個不錯的選擇。另外還有些網路投保的醫療實支保單，雖然是一年一約，卻也有「保證續保」的優點，不用擔心身體變差後保障斷掉的問題，實在是保戶一大福音！建議趁著身體健康時，趕緊利用網路投保的好處幫自己做好最基本的醫療保障吧！</p>
                    </div>
                    <div className='text-center'>
                        <a href={`${window.location.origin}/healthy`} className='btn btn-secondary btn-lg fw-bolder text-light'>立即查看超實惠健康險</a>
                    </div>
                </article>
            )
        }
    } else if (type == 'travel') {
        if (id == '1') {
            return (
                <article>
                    <div className='my-4'>
                        <h2 className='subtitle'>為何要買旅平險？旅遊保險用意和重要性</h2>
                        <p>出國玩為何一定要買旅行平安險？在國內玩也要買嗎？相信不少人都曾有過這種疑惑，不過現在人風險意識較高，幾乎只要出國大家都會先投保好，很少有人沒投保就出國。</p>
                        <p>簡單來說，到一個和以往生活環境不同的陌生國度，如果發生風險，基於物價指數、社會風氣、地理交通等各種因素影響，可能會出現比平常在國內來得更大的損失，進而影響到家庭。另外也有一些因旅行特別容易發生的窘況，關於這些旅平險也都有對應的保障。所以無論是不是出國，只要是和平時生活稍有不同的旅行，建議最好都要備妥旅行平安保險。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>生命無價！旅遊平安險最重要的人身保障</h2>
                        <p>如果出遊不幸發生意外導致嚴重失能或身故時，其保險金便是支撐整個家庭能否繼續生活的重要靠山，因而<strong className='text-danger'>「意外身故 / 失能」</strong>這兩項可說是旅平險最重要的保障，也是主要保額。若是受傷，則有<strong className='text-danger'>「傷害醫療（實支實付）」</strong>的保障，補償在國外受傷治療的花費。</p>
                        <p>平常大家可能習慣了國內有健保後的醫療費，但其實一脫離國境，再加上國外的消費、物價等因素，這些赤裸裸的海外醫療開銷，無論是門診或住院，通常都會讓國人在看到明細表後大吃一驚。如果有動到手術或一些醫療處置，費用可能又更加難以負擔。<strong className='text-danger'>為了避免陷入這種「付不出醫療費」的局面發生，無論如何絕對要準備好旅平險才出國。</strong></p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>其它重要保障「海外突發疾病」和「海外急難救助」</h2>
                        <p>在保險裡，意外「受傷」治療和「生病」治療是兩種不同的事。前面我們提過「傷害醫療」便屬於意外受傷治療的情境，而<strong className='text-danger'>「海外突發疾病」</strong>則是保障突然生重病需要就醫的局面。值得注意的是，「法定傳染病」雖是疾病，但受COVID-19影響，現在許多保險業者已把法定傳染病排除在外，如因這類疾病而就醫，便沒有理賠。不過目前仍有少數商品，有涵蓋法定傳染病的保障，有需要的話，出國前記得多花點時間查詢。</p>
                        <p><strong className='text-danger'>「海外急難救助」</strong>是指跟「SOS」有關的一些事。例如提供法律和醫療相關的諮詢服務、協助處理緊急狀況、搜索救援費用、緊急就醫的交通運送費、往生者後事處理等，各家業者提供的內容皆不同。</p>
                        <p>同時須注意，這一兩年受疫情影響，旅平險商品有些變動。關於「海外突發疾病」和「海外急難救助」，目前有不少商品都是以「另外附加」的方式涵蓋在保障裡。上網投保旅平險時一定要先看清楚保障內容，並檢查是否有重要保障歸類在附加項目裡，才不會以為有保到實際上卻沒有喔！</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>彌補旅程突發狀況以及保障財產損失的旅遊「不便險」</h2>
                        <p>明白了重大風險對應的旅遊保障後，接著來認識一些跟出國有關的諸多小風險。在我們周遭，應該都聽過出國時「班機延誤」或是「行李遺失」的倒楣事吧？另外像是「旅程被迫更改或取消」、「旅行文件損失」、「信用卡遺失」等等，也都有對應的保障，這些都是<strong className='text-danger'>「旅遊不便險」</strong>的細項。若符合條款定義，便能夠在限額內請領相關花費，或是得到數千元的定額給付來做為彌補。儘管這些損失比起人身保障來說，算是較小的風險，但因為常派上用場，所以大受市場歡迎，目前產險公司所販售的旅平險幾乎都會包含這項保障，只是各家細節不同。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>一份完善的旅平險應該包含這些保障！</h2>
                        <p>一份適合出國遊玩的旅平險，應該包含許多重要保障，可參看下圖。</p>
                        <img src={require('../image/type/travel/blog/travel1-1.jpg')} className='img-fluid' width='650px' />
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>國內外旅平險差別，國內旅平險一天只要銅板價</h2>
                        <p>國內旅遊時，雖然醫療費不會特別高，但發生風險的機率同樣可能上升，最好也要備妥「國內型旅平險」。尤其平常就沒有醫療險或意外險的人，更不能不保。至於國內旅平險一天大約多少錢呢？其實保障需求都會反映在保費裡，國內出遊相較在國外事情單純許多，也因為這樣保費非常便宜，每天只要一個銅板價而已！基於「機率小但一發生便無法負荷的風險最該優先投保」的觀念，國內旅平險不僅該投保，往往還具有很大的槓桿效益，可有效加強保障，千萬要養成投保的好習慣。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>網路投保旅平險好處超多！</h2>
                        <p>投保旅平險時推薦利用「網路投保」的方式，在出發前提早做功課，花一點時間動動手指即可完成，快速又方便，也不需擔心被推銷的壓力。如果是到了機場才要臨櫃投保，選擇性便大幅限縮，同時因機場人力及店租成本關係，專櫃銷售的方案價錢也會較貴，還是網路投保最實惠。另外值得一提的是，有些<a href={`${window.location.origin}/travel`}><u>旅平險投保網站</u></a>在登機前一小時都還可接受投保，無論如何，難得出遊，一定要做足保障，千萬不要輕易放棄自身權益才好。</p>
                    </div>
                    <div className='text-center'>
                        <a href={`${window.location.origin}/travel`} className='btn btn-secondary btn-lg fw-bolder text-light'>馬上查看站上旅遊平安險</a>
                    </div>
                </article>
            )
        } else if (id == '2') {
            return (
                <article>
                    <p>記得好幾年前，小編朋友曾因為大雪而導致班機停飛滯留國外機場，差點就趕不及回國吃年夜飯。此時如果有「旅遊不便險」就能發揮不小功用，可針對一些突發狀況獲得彌補。PTT上也時常有網友分享不便險出險心得，大多都很慶幸還好當初有投保。所以說出去玩，只要花幾百塊幫自己DIY規劃個保險，不但玩得開心也能玩得放心。但須注意，「不便險」通常不能單買，必須搭配「旅行平安險」一起購買，且因為是跟財產較相關的保險，須找產險公司的方案才能夠買到。</p>
                    <div className='my-4'>
                        <h2 className='subtitle'>簡單來說，旅遊不便險是什麼？</h2>
                        <p><strong className='text-danger'>旅遊不便險也稱旅行不便險，和一般旅遊人身保障不同，主要是針對旅遊常發生的不便狀況而設計，大多跟「財產損失」有關。</strong>保障可分成許多細項，舉例來說，像是「行程縮短或取消」、「班機延誤」、「行李延誤和行李遺失 」、「個人責任保險」等等，都是不便險常見內容。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>旅行不便險很需要嗎？主要用在什麼狀況？</h2>
                        <p>記得前幾年常聽到某某航空公司罷工，如出國旅行遭遇罷工該怎辦？或者到了每年暑假的颱風季時，颱風的入侵常常會搞得機場班次大亂，更可能影響旅客行程。為了不想遭受旅費損失而掃興，甚至造成重大困擾，建議加購「不便險」。海外不便險，通常有針對因班機延誤、行李出狀況、旅遊行程受影響，以及各種財產損失等風險來提供相對應的細項保險。其範圍廣泛，包括多種不便情境、財物、法律責任等保障。只要花少少的錢，就能將這些煩人的狀況統統轉嫁給保險公司，非常值得投保。</p>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>旅行不便險常見保障說明（各家條款敘述不一，僅供參考）</h2>
                        <div>
                            <h3 className='list-title'>【班機延誤】</h3>
                            <p>最為消費者熟悉的保障就是「班機延誤」，以往每家保險公司對於班機要延誤幾小時才能申請理賠，各自有不同規定。而現在依據金管會與產險工會的指示，目前不便險上的班機延誤，其時間定義都已統一為「4小時」。至於理賠方式，有些保險公司是定額給付， 有些保險公司則是實支實付，可依喜好自行選擇，或是兩者各買一份也可。</p>
                            <p className='mt-3'>常見「班機延誤」理賠申請所需文件：</p>
                            <ol>
                                <li>理賠申請書</li>
                                <li>被保險人護照影本或出入境證明資料</li>
                                <li>航空公司出具之班機延誤相關證明，包括原班機及轉機日期及時間</li>
                                <li>原訂位確認證明文件</li>
                                <li>餐食費用、交通費用及住宿費用之收據（如為實支實付理賠方式，可另外準備）</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='list-title'>【行李延誤或損毀遺失】</h3>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>行李延誤：</p>
                                <p>被保險人於海外旅行期間，隨行托運之行李因公共交通工具業者處理失當，導致在抵達目的地後，6小時內仍未取得，賠付保險金。</p>
                            </div>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>行李損毀遺失：</p>
                                <p>被保險人於海外旅行期間，因竊盜、強盜與搶奪，或是住宿旅館或搭乘交通工具處理失當而導致其行李損毀或遺失，賠付保險金。</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='list-title'>【其它補償】</h3>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>住宿及旅行費用：</p>
                                <p>因下列不可預知之事故，所發生之合理額外住宿及旅行費用： </p>
                                <ol>
                                    <li>護照或旅行文件遺失，但因遭任何政府扣押或沒收充公者除外。</li>
                                    <li>檢疫之規定，但被保險人明知或未採取合理之步驟除外。</li>
                                    <li>天災。</li>
                                    <li>因搭乘汽車、火車、航空器或輪船等交通工具所生之意外事故。</li>
                                    <li>因被保險人之直系親屬或配偶於旅遊期間內死亡需變更行程，立即回程者。</li>
                                </ol>
                            </div>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>旅行文件重置費用：</p>
                                <p>被保險人之護照或其他旅行文件因毀損、遺失、被竊或被劫，所發生之必要重置成本或費用。前述旅行文件係指若其因毀損、 遺失、被竊或被劫，對於進行中之旅程或後續旅程造成阻礙或必須停止之文件。</p>
                            </div>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>家屬看護費用：</p>
                                <p>被保險人於旅遊期間內遭受非因本契約約定不保事項而引起之意外事故，所致之死亡或重大傷害，必須安排被保險人之家屬前往照顧傷者或處理死者善後所發生之合理且實際費用，包括食宿、交通、簽證、傷者運送、遺體或骨灰運送等花費。 前項「重大傷害」，意謂被保險人因遭遇意外事故致其身體蒙受傷害，其傷情無法在短期內穩定，且經當地合格診所或醫院以書面證明必須留置治療7日以上者。</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='list-title'>【劫機補償保險】</h3>
                            <p>如被保險人於海外旅行期間內遭遇劫機事故時，自其遭遇劫機之日起，至脫離劫機狀況之日為止，給付劫機補償保險金。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【旅程取消保險與旅程縮短保險】</h3>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>旅程取消保險：</p>
                                <p>被保險人因保險公司規定於條款中所列事故（各保險公司定義不同，請詳閱各保險公司條款）致其必須取消預定之旅程，對於被保險人因而無法取回之已預付交通費、住宿費用或旅行團團費，依本承保項目之約定，負理賠之責。</p>
                            </div>
                            <div className='p-0 m-0'>
                                <p className='fw-bolder text-danger'>旅程縮短保險：</p>
                                <p>被保險人於海外旅行期間內，因保險公司規定於條款中所列事故（各保險公司定義不同，請詳閱各保險公司條款）必須提早結束旅程而返回中華民國境內之住居所，所需額外支出之交通及住宿費用；或是因而無法取回之已預付交通費、住宿費用或旅行團團費，本公司依本承保項目之約定，負理賠之責。</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='list-title'>【旅行責任保險】</h3>
                            <p>被保險人於保險期間內從事旅行活動於公共場所發生下列意外事故，致第三人體傷、死亡或第三人財物損害，依法應負賠償責任，而受賠償請求時，本公司在保險金額之限度內負賠償之責。</p>
                            <ol>
                                <li>被保險人於公共場所，因自己行為之過失造成第三人之體傷、死亡或財物損害。</li>
                                <li>被保險人從事競技、比賽、特技表演以外之休閒活動，因過失造成第三人之體傷、死亡或財物損害之賠償責任。</li>
                                <li>除共同及特別不保事項規定外，其他依法被起訴請求的事實，被保險人應負過失之損害賠償責任。</li>
                                <li>被保險人因上述各款意外事故經本公司同意後所為必要之法律抗辯及訴訟費用。</li>
                            </ol>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>實際體驗旅平險購買流程，觀看各家商品，更快掌握保障內容</h2>
                        <p>看到這，可能蠻多朋友已經陷入昏迷，一大堆理賠描述，實在令人難以消化。其實各家條款敘述不太一樣，也可以用較淺白的話來簡略說明，但為了不造成錯誤解讀，才盡量還原條款上的繁雜文字，讓大家知道保險公司們的理賠細節及規範。</p>
                        <p>別擔心，投保旅平險非常簡單，只要到GOGOBO旅平險頁面上，實際登入試算一遍，就會對旅平險的保障內容及規定更有概念喔！每個人都會有出遊的時候，弄懂旅平險是超級實用的知識，趕緊來試試看吧！</p>
                    </div>
                    <div className='text-center'>
                        <a href={`${window.location.origin}/travel`} className='btn btn-secondary btn-lg fw-bolder text-light'>馬上查看站上旅遊平安險</a>
                    </div>
                </article>
            )
        } else if (id == '3') {
            return (
                <article>
                    <p>關於旅平險，我們可以把它當成是一個較短期的傷害保險，關鍵在於旅平險會有「保單開始時間」和「保單結束時間」可供自由選擇。一般來說跟旅行有關的所有保險，業者常會統稱為「旅綜險（旅行綜合保險）」，依旅遊地點可分為國內和國外兩種。 <strong>以保障內容來看，也可拆成兩種範圍，而其中跟人身安全有關的是【旅遊平安險】，和金錢財產損失有關的則是【旅遊不便險】。</strong></p>
                    <div className='my-4'>
                        <h2 className='subtitle'>投保前必懂！旅行綜合險兩大保障範圍</h2>
                        <div>
                            <h3 className='list-title'>【旅遊平安險】</h3>
                            <p>指被保險人於保險期間內，因遭受意外傷害事故，致其身體蒙受傷害而致特定燒燙傷、失能、死亡或需接受治療時，保險公司依約付保險金的保障。要注意的是，前面說的意外是指「非由疾病引起的外來突發事件」，簡單來說就是不包括跟生病有關的事。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【旅遊不便險】</h3>
                            <p>通常涵蓋旅程中跟財產有關的保障，因為跟財產有關，所以產險公司才有這方面商品。舉例來說，像是「行程短縮或取消」、「班機延誤」、「行李延誤和行李遺失 」、「個人責任保險」等等，都是不便險常見內容。</p>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>旅平險的通路與投保管道</h2>
                        <div>
                            <p>目前市面上大概有三類最常見，但保障內容程度不一樣的旅平險：</p>
                            <ol className='text-cjk'>
                                <li>刷信用卡附的旅平險</li>
                                <li>跟旅行社買行程時附的旅平險</li>
                                <li>保險公司販售的旅平險</li>
                            </ol>
                            <p>上述三者內容差異頗大，以保障全面性來看，第三類保險公司自己推出的旅平險在保障方面通常較完整，也有很多方案能選。投保前一定要了解，才不會在規劃保障時產生疏漏。</p>
                        </div>
                        <div>
                            <p>以「投保管道」來看又大致可分成以下三種：</p>
                            <ol className='text-cjk'>
                                <li>直接跟業務員購買旅平險</li>
                                <li>到機場櫃檯購買旅平險</li>
                                <li>在網路投保平台購買旅平險</li>
                            </ol>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>網路投保旅平險好處超多！</h2>
                        <p>雖然投保旅平險有多種管道，但從優點來看，自行網路投保（線上投保）是絕對划算又方便，好處如下：</p>
                        <ol>
                            <li>不需透過業務員，能上網就可完成投保，無時間和地域限制</li>
                            <li>省去相關管銷費用來回饋消費者，故保費通常較便宜</li>
                            <li>只要做OTP驗証和信用卡確認為本人購買即可，不用簽回保單</li>
                            <li>因不用往返簽收保單，所以核保較快速，不需等待太久</li>
                        </ol>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>網路線上投保方法步驟參考：以GOGOBO網站為例</h2>
                        <p>雖然投保旅平險有多種管道，但從優點來看，自行網路投保（線上投保）是絕對划算又方便，好處如下：</p>
                        <ul className='list-unstyled text-danger'>
                            <li>步驟一、登入 / 加入會員</li>
                            <li>步驟二、試算保費</li>
                            <li>步驟三、選擇商品專案</li>
                            <li>步驟四、填寫要保資料</li>
                            <li>步驟五、簡訊驗証碼填入</li>
                            <li>步驟六、線上刷卡（直接依目前各保險公司與發卡銀行之安全機制進行交易本平台不存卡號資料）</li>
                        </ul>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>旅平險保障額度如何挑選？有該注意的重點項目嗎？</h2>
                        <div>
                            <h3 className='list-title'>【身故及失能保障怎麼規劃？】</h3>
                            <p>一般旅平險包含身故和失能保障，由於這筆錢是留下來給親愛的家人使用，也就是自己肩上的家庭責任。通常會假設自己還能為家庭賺得多少經濟後盾來當依據，建議投保額度為年收入的10～20倍。例如年收入60萬者，投保身故600萬以上的主額方案。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【傷害醫療保險怎麼規劃？】</h3>
                            <p>由於海外許多國家的醫療費用相對昂貴，旅行途中如果因為一些意外事故產生醫療支出，可能會難以負擔。所以專家建議出國買旅平險一定要包含「意外傷害醫療」，而且建議保額至少要有新台幣50萬元以上。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【海外突發疾病該注意什麼？】</h3>
                            <p>在保險裡，生病和意外受傷是兩種不同概念的損失於常見的「傷害醫療」便是專指意外事件，生重病住院不在這理賠範圍內，如果擔心疾病引起的嚴重後果，那最好要另外附加，或是挑選包含「海外突發疾病」在內的旅平險。</p>
                            <p>這項保障的定義重點在於「突發」，相關定義是「被保險人非以獲得海外醫療為目的，須即時在海外醫療機構診療始能避免損害身體健康之疾病且在本保險契約生效前180天（有的保險公司設定為90天）以內，未曾接受該疾病之治療者。」簡單來說，被保險人這趟出國，不能以醫療為主要目的，否則可能會被拒賠。但如果是真的在國外生病需就醫時，該看醫生還是得趕緊看，否則錯過黃金治療時間就嚴重了。這時如果有「海外突發疾病」的保障，就不怕昂貴的醫療費，也可以毫不猶豫的趕快就醫。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【海外急難救助是指什麼樣的幫助？】</h3>
                            <p>海外急難救助的前提是依據緊急事故的定義來做依據，通常緊急事故的發生必須是源於「突發疾病或意外傷害所導致急需外來援助的嚴重狀況或災難」 通常根據保險公司定義服務項目不同而有所差異，常見可概分成以下三部分。</p>
                            <ul className='list-unstyled'>
                                <li><span className='text-danger'>旅遊和法律諮詢：</span>包括旅行資訊提供和法律諮詢的服務</li>
                                <li><span className='text-danger'>醫療諮詢：</span>海外相關的醫療諮詢</li>
                                <li><span className='text-danger'>緊急協助：</span>緊急醫療轉送、遺體運送、代墊住院醫療費用等依保險公司不同而有不同項目</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='list-title'>【旅行不便險需要附加嗎?】</h3>
                            <p>搭機最怕遇到航空公司罷工，或者國內颱風影響、國外機場暴風雪等等，導致機場班次大亂，影響旅客行程。為了不想遭受財物損失或想在掃興時還有一些彌補，可以考慮加購旅遊不便險。不便險是指在境外旅行的途中，針對因班機延誤、行李遺失等各種麻煩狀況所設立的保險。等於花少少的錢將這些煩人的損失轉嫁給保險公司，建議出國一定要加保。</p>
                        </div>
                        <div>
                            <h3 className='list-title'>【旅行責任保險是什麼?】</h3>
                            <p>被保險人於保險期間內從事旅行活動於公共場所發生下列意外事故，致第三人體傷、死亡或第三人財物損害，依法應負賠償責任，而受賠償請求時，本公司在保險金額限度內負賠償之責：</p>
                            <ol>
                                <li>被保險人於公共場所，因自己行為之過失造成第三人體傷、死亡或財物損害。</li>
                                <li>被保險人從事競技、比賽、特技表演以外之休閒活動，因過失造成第三人體傷、死亡或財物損害之賠償責任。 </li>
                                <li>除共同及特別不保事項規定外，其他依法被起訴請求的事實，被保險人應負過失之損害賠償責任。</li>
                                <li>被保險人因上述各款意外事故經本公司同意後所為必要之法律抗辯及訴訟費用。</li>
                            </ol>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <h2 className='subtitle'>網站熱門旅平險內容參考</h2>
                        <p>說明了這麼多，乾脆直接給大家觀看實際旅平險的內容，以下為網站上的熱門方案，列出來推薦給大家，可針對內容參考看看，對於保障範圍也會更有概念。</p>
                    </div>
                    <div className='text-center'>
                        <a href={`${window.location.origin}/travel`} className='btn btn-secondary btn-lg fw-bolder text-light'>馬上查看站上旅遊平安險</a>
                    </div>
                </article>
            )
        }
    } else {
        window.location.href = '/blog'
    }
}