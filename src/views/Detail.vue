<template>
    <div id="detail">
        <!-- 头部 -->
        <!-- <router-view :key="$route.fullPath"/> -->
        <div class="header_detail">
            <div class="header_pic" v-on:click="back">
                <van-icon name="arrow-left" />
            </div>
            <ul class="common_tt_tab" id="tab">
                <li @click="tab(index)" v-for="(item,index) in title" :key="index" :class="{cur : index===curId}" v-text="item"></li>
                <!-- <li class="cur">商品</li>
                <li>评价</li>
                <li>详情</li> -->

            </ul>

        </div>
        <!-- 图片轮播 -->
        <van-swipe @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>

            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
        </van-swipe>
        <!-- 包邮 -->
        <div class="pro_label">
            <div class="services_wrap">
                <span>
                    满69包邮
                </span>
                <span>
                    正品保证
                </span>
                <span>
                    正品保险
                </span>
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" alt="" class="ddd">

        </div>
        <!-- 价格 -->
        <div class="pro_part">
            <div class="pro_price">
                <span class="priceText" >
                    <span >￥</span>
                  {{massege.price}}
                    
                </span>
                <span class="lcz_lowPriceDetail" v-text="massege.s_title">
                   
                </span>

            </div>
            <div class="pro_title">
                <img class="icon_ziying" src="data:image/png;base64,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" alt="">
                <span class="productName" v-text="massege.title">
                    

                </span>

            </div>
            <div class="pro_sider_des" v-text="massege.t_title">
                
            </div>
            <p class="pro_note">

                本商品由1药网自营提供现货。

            </p>
            <p class="pro_wenhao">
                国药准字H31022790
                <span>
                    查询食药局批准文号
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwElEQVRIS7XWQUsbURQF4HNmYoIbBVftrhQF9+q2y4bUWC3UgGMSHboIUmx/QEsJzb6LLFpFrElmRBACkjERXSnuRfwFbnRll02pjnPLU4QUWh3jy1vPnG949717hwi5yo53IODB7+bJXC6Xuwj5Ghj2wbLjvRfgC8AdQ7peZ7Pxn2HeDQ2osLK7mRaRZZCHUUNGLWvs7C7kXoAKc93ac19YBXAqvh+37VfHtyH3BlTYilsbYcA6DFzQiCRmrMTR/5C2gCtk1RtggG0B+kzTHM9aL/b+hbQNqLBFp/o4xlgDIoMwjfSsNaq27q/1IOC6Jo2eSwQbIvIMBudnp5PfWoUHAyqsWGzEevsCR0QmBVKwMy8/3SBaABWWz+eNJ/1DRQjekljqjv6aS6VSl9qAmy8uVbyPID6TrP2INqe0AwqqrG6+EZEFCbjfUQDoAFByax8gLGjfoqsiPx0qgqrIXOqONvUVufWYEizMZJL6jmnrRRPynZ1OftV20VbW6494LlsQDMKk3lbR2uwATNiZsV1tza6yVh8O/KAOwtferq8HDqoATyUSidtTCX0Dp+R40wC+kzzs0j0yOz702/1t+QNKFspaCCAQLQAAAABJRU5ErkJggg==" alt="">
                </span>

            </p>

        </div>
        <!-- 说明书 -->
        <div>
            <div class="new_instructions">
                <div class="caption">
                    说明书

                </div>
                <ul class="attr_list">
                    <li>
                        <img src="https://m.111.com.cn/yyw/static/201907/instructions_icon_1.png" alt="">
                        <div class="sub_title">有效期</div>
                        <div class="sub_text">24个月</div>
                    </li>
                    <li>
                        <img src="https://m.111.com.cn/yyw/static/201907/instructions_icon_2.png" alt="">
                        <div class="sub_title">规格</div>
                        <div class="sub_text">100ml/瓶</div>
                    </li>
                    <li>
                        <img src="https://m.111.com.cn/yyw/static/201907/instructions_icon_3.png" alt="">
                        <div class="sub_title">用法用量</div>
                        <div class="sub_text">局部外用，用时摇匀，取适量涂于患处，每日2-3次。</div>
                    </li>
                </ul>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" alt="" class="instructions_more">

            </div>
        </div>
        <!-- 常用搭配 -->
        <div class="comboContainer">
            <div class="comboCaption">
                常用搭配
            </div>
            <ul class="comboLists">
                <li class="comboItem">
                    <div class="comboName">
                        【家庭常备药箱】炉甘石洗剂1瓶+百多邦1盒

                    </div>
                    <ul class="comboProductLists">
                        <li class="comboProductItem">
                            <img src="https://p3.maiyaole.com/img/201503/16/100_20150316233014768.jpg" alt="" class="productPic2">
                            <div class="productPrice">
                                ¥11.50x1件

                            </div>

                        </li>
                        <li class="comboProductItem">
                            <img src="https://p2.maiyaole.com/img/item/201907/24/100_20190724143031992.jpg" alt="" class="productPic2">
                            <div class="productPrice">
                                ¥26.50x1件
                            </div>

                        </li>

                    </ul>
                    <div class="comboPrice">
                        <div class="newPrice">
                            搭配价
                            <span>
                                ¥38.00
                            </span>
                        </div>
                        <div class="totalProductCount">
                            合计2件

                        </div>

                    </div>
                    <div class="comboComment">

                    </div>

                </li>
                <li class="comboItem">
                    <div class="comboName">
                        【家庭常备药箱】炉甘石洗剂1瓶+百多邦1盒

                    </div>
                    <ul class="comboProductLists">
                        <li class="comboProductItem">
                            <img src="https://p3.maiyaole.com/img/201503/16/100_20150316233014768.jpg" alt="" class="productPic2">
                            <div class="productPrice">
                                ¥11.50x1件

                            </div>

                        </li>
                        <li class="comboProductItem">
                            <img src="https://p2.maiyaole.com/img/item/201907/24/100_20190724143031992.jpg" alt="" class="productPic2">
                            <div class="productPrice">
                                ¥26.50x1件
                            </div>

                        </li>

                    </ul>
                    <div class="comboPrice">
                        <div class="newPrice">
                            搭配价
                            <span>
                                ¥38.00
                            </span>
                        </div>
                        <div class="totalProductCount">
                            合计2件

                        </div>

                    </div>
                    <div class="comboComment">

                    </div>

                </li>

            </ul>

        </div>
        <!-- 已选商品 -->
        <div class="proBlock">
            <div class="proLabel">
                已选
            </div>
            <div class="proContent">
                品牌:【信龙 】
            </div>
            <img class="proDDD" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" alt="">

        </div>
        <!-- 送至 -->
        <div class="proBlock address">
            <div class="proLabel">
                送至

            </div>
            <div class="proContent">
                上海 上海市 浦东新区
                <br>
                <span>
                    18:00前下单，预计08月11日（周日）送达
                </span>

            </div>
            <img class="proDDD" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" alt="">

        </div>
        <!-- 商品评价 -->
        <div class="pinjia">
            <div class="commentCaption">
                <div class="caption">商品评价</div>
                <div class="rightMore">
                    查看全部
                    <span>1234</span>
                    条评论 >

                </div>

            </div>
            <ul>
                <li>
                    <p class="commentContent">

                        对商品非常满意
                        <span class="pro_review_star">
                            <span class="real_star stars_width5"></span>

                        </span>

                    </p>
                    <p class="commentInfo">
                        <img class="vip" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAtCAYAAADydghMAAAAAXNSR0IArs4c6QAADTBJREFUaAXtWQ2MVNUVPu93ZnZmZ9ldZxeWnwVZKKVWigpa06oNiVbxJ21R09potUXU1qZqMNpos21Mm9im2kQUf1t/UVDbqmA1MYAJBdIiKCwgCyK7C6z7w/7vzpt5b16/c9+7b97M7gK2XUIbLry595577rnnO+fcc+97S3SCiuvWq+l9Ly13D7/mbl95s7t22bfrT9DSBcuoBb0x7KT3znwgYhpLrL5BSls2mab+i7WPLVoyhkuOKPqEAB7c8/xS01DvzVgZyuVy5Lou5VxSTEN/eP2jV185omZjRBxzwAO7//RDQ1d/k81myXEcAdYFmBwQo0QNU3tm7aPXnjdG+IaJHVPAfTue/o6ua484tqN5YOFdygVKOE6OFIUqDZ1WrF/+vRnBwBg2xgxwf8NTC3RDfwaejGZtR3iUvep5VnhXwMraOUIETFVV++UNj32ragyxCtEC8OZnr5+56YXrkv+txbq3P32OouovQl4yk8mKfct7Vz5wc0Gxsg5FDO0sRzGee+e3F8cLBv+Dzq7X761sXLN0eliEuvm5m26JRKPbDCW6ccuKxT9oXHN7JMzwedsdHz0+S9VoJUK12rKy5MKrxc9IMtMZh6IR7ZJYctyylSuv1kbiOV7a1j//bFzj2/fcYcZz/4hEzG2Na+5eJOeqCtFZuqrEVFWZrSn0x96uwXUfrFj8b2XOwQ+fnKSRukpX1WlpzsguvDrCU+RgqQsxaHj6huoueiAgfo5Gw8rbErtX331LsiS6MRLRfq9CD+SQhKKqZ0oxKk6I7byveC9lEFqaqp4Hj/z1g5cWr96y4tavS8Zj1S2bH6lMu7lXTF09Y3DQCsJXhnG4puKYDgnP8J7WtHvWLV90e4h81CZH5d6/Lb3eKE1siEX1x+C8WXzW20iKIn8QfSgFqMiZuzJIKrJw28F+0zTlMnLt97a8vOSFLa/eGlhI8oXrtrXLEhFdfd40tPMHANaFV10+b0d5joLXP6NdMnXtd+8vvzoIxfB6sr12bb2+e81di0iNrtc07VlD1860MrZwHrYUqYrKgC2F3N1yDoyh7nNybr/KHLKgzYkE4WgYGl2nZO0N21bd9oedq++qlSyybmioN3OJ3BMRQ7+0fyAtPMvHzegP9rScPEotMjkwa5r61Prl11wwEtue1UsvnzjU/56h6at0TTs3k/W8SaTwUYeisNMQTEqrY7lNUobqRHtawdAC5B4tBBzhTmwx3IwSupr7aaa/f/NHr/3k/g/W3JtiZowrFX3lD0UN47sDg+lRPVrsabn40Wob2ww6lSEBvghPz5a8H79554LGt5e+TSq9qev6BRy2DFaCDNfwOujKnllXPdgn5wuUm5+/6a2ooS20sH/CRWLHJEHG/sYdWEPI075cTnvwtIl1tdGo8XMLRw8b53gKXytbGrdSJj3EyhxzCnICYV9/WFFZfb8RNW5EIroS57vG+cYreY+GwbKHS6ImDaWzD02/5Nd3yoV0biCcG5DJFuLCJ+m+xTAtUEpBiLu4+Dt8UZiuqc7j/UdaKBsvJz0S8+YdB2oGfMyYhjTmY3O4qkEVqbI5kWjkDWRckVgtZPNicNz3dPWMyH3ePNjG2wJQaAjAiPMGoYg/IjGGwYYXsB0IUlyyB/toaKifzFgpxQBcMyJikaMB4nWOFQzMoxsGlSSSFC0pwVoqcoMr8gqrGNaFPSn73JbjPAfb0XEVbZcg+j8eYNXdjX2Qw8Tgqjka2IIFhHyFskN95GSGADwpwCsKi/VhQainhkeRnguUkINMwBRN0ykaT1AMQFXsQa/ASAJVHpwEKfXkvqTxHM5JsFG7PaTt94WISgB2M06TYmqdmqqkkLExUWox0gI8j6V7tQLBDvZTxsJ77uAAmZFuiiUr4W3PM0y3M5aQqRkmeDPgzYgEx/Hm5LAXfdsYpkmRkjgZZgRDKuaoCG1sM6HPaLqEgfp6o0KGJ7y0fDLzcjoikPo/AvC8+ED7P7NJZGo15fACosgF8gIDC0qwIHS3d1JPZxe5/OqHeSoWSpa3U2rSZOpqP0JHWg9RDmNsRAUp1wVA4WUYiv/xhUQWz9Ad4FNguAiVVVZQeVWKc4zPInUarQabrxsDVpxcg6LU5xfAsAhh5ZpVnPI+FkxCdFggS8j3pUBWKpNOU1dbhwDEO5O94dg2dXV0Uuun+6njYBM8yhncu4TkHBsAGTD6SPUMVrS5j4fH+MlaaRro6aHDB5rp8P4DGGNT5nWQhs/Xno7hSAA3R05wwxKw8OPtYRanqrAGk4sFg+LTA7DoszeyGe8LhoEsPfey28hE4tr+7pPU89l+6u3qEd4cN/50+vLFN1O6t522rllGZyy4kUqrptIO8PV2NNPZV9xB0USFLxp3IgBP93dT8/b3qLVxizBeNF5CqZoaAVzqkq+Fcqy2KExn3ayszZGyw6Pmf4MkBe12OCL75idyywszliJ6AXjuGgg7jopsuh+hrFNV3flUM+urAijP4/CdOPtrlJqODxroZ9MDVDn5S5Q6/Vw/uSmUqp2D8XmUqJxMJWXVVFY1jSbPuZTOu7aexs+Yh0iwqRsRw55nMKxIYS1IRXTsfXK77LS2j2eESwA4R2ojEpbFikqQsh4GFgtzlOG1kkw8HJrNDe9DrkMTZswn3YwKBq6rp5+NdhYeWyfW5bAm4jD3MpWbQ5in+2jDS/fRu8sW0zuP/Ig+2fQKqUYpTZt7iTBUxrIQ5hnoxYmMxeRBe4RQH6M6LitI6011MWpl7nAJAKt9SgsSdBvfprhIwSOBlQvy1S2eLMURoFHngQZKdx+i5Pg6Kk1NITtrUVn1NCpDf6DjAHW27BRREF483HYyaWTzIRrsaaO2/bz18NYUTUA2vAXF+IVGOqBQt5CuQm/coT0Mu5Rv1LN1C0oA+JwlT/TgLrFfXLgFSphSWDMvUC4ka5bEgDVdp6H+I1B0GzyToPF185C8LBGSih6nw3s2UQaXFN+KBQpwh7N3atocmjBzPtXNv4K+eOH3QVWp63AjEqIt5Js4sgSv7+FiR3hjnsLivUBxPxITin6CpCUmqLQL1rlAUfjsE5TA0xKkZ2XWHXsU/yKxKJ4YEphFhz/eSFO+chmAzqfGTa+L2nUsOrT77+APbFuggjii9AjNvepu0HlR5stS+94N1LjxdT7ncOOK45hiwF62LtYNA0Ifr8ZsvBMAwbAMzeMFgFVS/azGC+f3RR4sT8kLZx4+d+NlpTTY10cdTRzWB0UoT0KySiIB9bbugaf2inBmAxUXYThEw673n6F0H85zZOnB3jbqOrgHIZ7GfjSoamKNMJjY90WOCOvDevIWsG17wFX0PcVrcb8AMF4OdrF1IJ3/o4xUiwGfB21giJeW0hEolu7vQlhvpSlnLaTZF11PqlkC724k2xoS92yR6VhsUeFs3rxjHfW1N0Mue5gNqYvImTC1lhJlZV6SK9KJxciI80RiHhTHbj+IS2mLRyv8LQCc1ZxPlJzSD68lOInmQXsghfDQomxxPi7ElRChnYVHGOCUud+kWHkN5awBsX95jwZFCPXkCRr6LFfTTVLx8MtCPJkUYZysKBenACct2AAl7wDR8xQM9GQaZ2jHdXdPvag+zf3iUrCxqlKTDuMC0sJZzpMlFwhbklcGUL4p4crIHuYw8rK1Tp3NO6m//VORbDqbtlNv+wGRxeXCOTuDhIaPBQhdLjlkczsL3WA8NuC41GlU+4UZdNqECeKcPxZYT27egF5Wp2EXDo/Pt5vscL111a1vRU19YeFXhLxA/grJynnW9ui8iIVrZnPjPnjcpfi4KpzFMWTmXuztI4gAQxwtbKCS8moR3oPdbQCeoUT5eBhXpYHuz8RLRu3MOqqorvYNAvliCW8dGb6yZn2L2xFTxy0re03tRb9axePFpSCkeRA+bQCAhSJTixDyFuOXf/5Uk/e89L7M1jEqh3c6W9uor/OQ8Dwza3hpTyHpZHF5aD/USn0dB4XBFP78gn89bU2Cl9+OSpALSseNE54WSD8nWAZvWXZG1fIf7Y4J2FXcnb49hfW8feqFXxisJwicIaUqa8ZTDEdIenBIgOL32ZLShEhqLIfHLIxxgJj4/MIXFn4B4XiJIgcwWM4HfgAJ8/M60ouyDtPCbT5/sX/bSiLaAaaPVIZ5GISt+GJpx2OGzl8e+SiBnwo8y4LE4p4FChQqLcH3PdB5XBpOHEfoJxIcvj41VAtOJnMU+bOEDLGQ9xPME11PhtfMt/HllLp6B7ZWnPvL4KMd84RLntunwtrK9ld/fKmmK7NtfA3MF5zSQbL1c11QoRFu8yS/z1Mcf6I33R9gFkEI9RHWBUV0PVowEjSYE3/nkBPQwF9QspTR/lKz4L4DknyqPmWBUxb4/7LAsKQl4TWtr78S5+5yJM4Jknay1kj4fEO8ZcqF9W8cS8cgyRUz/q+AZb3ZKaxvMYaR+qMCBvOIl++RhJwktOPSd9jFQyqPvx7cgL8PP4R7QI2knbS1S4eg7x0nrX6nFDuBFvgXIC6nZias0jIAAAAASUVORK5CYII=" alt="">
                        <span>201***</span>
                        <i>|</i>
                        <span>2019-08-09 08:52:31</span>

                    </p>

                </li>
            </ul>

        </div>
        <!-- 图文详情 -->
        <div class="pro_detail">
            <div class="pro_detail_tab">
                <div class="pro_detail_item active">
                    图文详情

                </div>

            </div>
            <div class="pro_detail_box">
                <div class="detail_img">
                    <p>
                        <img src="https://p1.maiyaole.com/img/201311/28/20131128142223819.jpg" alt="">
                    </p>
                    <p>
                        <img src="https://p1.maiyaole.com/img/971/971672/330_330.jpg" alt="">
                        <img src="https://p1.maiyaole.com/img/201309/23/22/20130923225436833.jpg" alt="">
                    </p>
                    <p>
                        <br>
                    </p>
                    <p>
                        <img src="https://s.maiyaole.com/images/2019/tJ1iVdqUFU.jpg" alt="">
                    </p>

                </div>

            </div>

        </div>
        <div class="bottom">

        </div>
        <!-- 商品导航 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服"  />
            <van-goods-action-icon icon="cart-o" text="购物车"  to="/cart" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
         <!-- 底部标签 -->
    <van-tabbar v-model="active" style="font-size: 25px;">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/about">找药</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart" :info="$store.getters.getallcount">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/we">我的</van-tabbar-item>
    </van-tabbar>
    

    </div>
</template>


<script>

   

   
  



export default {
    
  data() {
    return {
      // 接收ID
      id : this.$route.params._id,
      title: ["商品", "评价", "详情"],
      curId: 0,
      current: 0,
      images: [],
      massege:[],
      active:''

    };
  },
  methods: {
    //   头部选项卡
    tab(index) {
      this.curId = index;
    },
    // 头部轮播图
    onChange(index) {
      this.current = index;
    },
    //回到上一页
    back() {
      this.$router.push({path: 'list'}); //返回上一层
    },
    //下面导航
    onClickIcon() {
      Toast('点击图标');
    },
    //点击加入购物车
    onClickButton() {
      var goodsinfor = {
      goodsId:this.id,
      count:1,
      goodsPrice:this.massege.price,
      goodsPics:this.massege.BigPic,
      goodstitle:this.massege.title,
      isok:true}
      this.$store.commit('AddCart',goodsinfor)
    }
   
  },
  mounted(){
    // import detail from '../vant/detail.js'
    setTimeout(() => {
        let ul = document.getElementById('tab');
        let lis = ul.getElementsByTagName('li');
       //  console.log(lis)点击按钮楼层跳跃
         lis[0].onclick =  ()=> {
          window.scrollTo(0, 0);
        }
        lis[1].onclick =  ()=> {
          window.scrollTo(0, 800);
        }
        lis[2].onclick =  ()=> {
          window.scrollTo(0, 1146);
        }
        //滑动时控制高亮
         window.onscroll=()=>{
             var scrollTop = window.scrollY;//获取滚动距离
             for(var i=0;i<lis.length;i++){
                 if(scrollTop < 800){
                      for (var j = 0; j < lis.length; j++) {
                       lis[j].className = '';
                   }
                     lis[0].className = 'cur';
                 };
                 if(scrollTop >= 800 && scrollTop <1146){
                      for (var j = 0; j < lis.length; j++) {
                       lis[j].className = '';
                   }
                     lis[1].className = 'cur';

                 };
                 if(scrollTop >= 1146){
                      for (var j = 0; j < lis.length; j++) {
                       lis[j].className = '';
                   }
                     lis[2].className = 'cur';

                 };
                
             }
          };

  
       
   }, 500);

  },
  // 获取数据
  async created() {
    let images = await this.$axios(
      "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/1yaolist"
    );
    this.images = images.data.data[this.id].SmallPic

    // console.log(images.data.data[this.id].SmallPic);
    let massege = await this.$axios(
      "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/1yaolist"
    );
    this.massege = massege.data.data[this.id]

    // console.log(massege.data.data[this.id]);
  },

};

</script>

<style>
#detail {
  width: 100%;
}
/*头部*/
#detail .header_pic {
  position: absolute;
  top: 0;
  left: 20px;
}
.header_detail {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  text-align: center;
  background: #f9f9f9;
  background-color: #fff;
  box-shadow: 0.02666667rem 0.13333333rem 0.24rem 0 rgba(0, 0, 0, 0.02);
  /* top: 1.65333333rem; */
}
.common_tt_tab {
  height: 1.2rem;
  /* font-size: 0rem; */
}
.common_tt_tab li {
  width: auto;
  height: auto;
  font-size: 0.34666667rem;
  font-weight: bold;
  color: #262d56;
  line-height: 1.2rem;
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 0.64rem;
  box-sizing: border-box;
}
.common_tt_tab li:nth-child(1) {
  margin: 0;
}
.common_tt_tab .cur {
  font-weight: bold;
  color: #5577fb;
  border-bottom: 2px solid #5577fb;
}
#detail .van-swipe {
  margin-top: 45px;
  height: 240px;
  background-color: white;
}
#detail .van-swipe .van-swipe-item img {
  height: 240px;
  width: 240px;
  margin-left: 75px;
}
/* // 轮播 */
#detail .custom-indicator {
  position: absolute;
  height: 0.426667rem;
  width: 0.55rem;
  top: 210px;
  right: 10px;
  color: white;
  background: #ccc;
  border-radius: 3px;
}
/*包邮*/
#detail .pro_label {
  position: relative;
  height: 0.42666667rem;
  margin: 0;
  padding: 0.32rem 1.01333333rem 0.32rem 0.4rem;
  background-color: #f6f6f6;
}
#detail .services_wrap {
  white-space: nowrap;
  overflow: hidden;
}
#detail .pro_label .services_wrap span {
  display: inline-block;
  box-sizing: border-box;
  width: 2.77333333rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262d56;
  font-size: 0.32rem;
  line-height: 0.42666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0U1QzVBRDBBN0ExMUU5ODU4NzkyODkwRDZCQkRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0U1QzVBRTBBN0ExMUU5ODU4NzkyODkwRDZCQkRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDRTVDNUFCMEE3QTExRTk4NTg3OTI4OTBENkJCREFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDRTVDNUFDMEE3QTExRTk4NTg3OTI4OTBENkJCREFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yQN+2AAABEJJREFUeNrMl11oHFUUx8+596bpohVawerqgxGh2oKgUGilKlpFtKhVm1hrDT4pCPrgS7bbWJYmdRuEPigiCip+VdONqEV9EVpEpQXxs1gRhCLotkEtopRNunfm+D93dkI2yaaTdCu5sDCzc+f8zj3fw5RxdZdkEZ/2N1PMdwvRSibJC3Fen+G6iusqEx0lI/tlkTtYKfHpLHI5A/hiqkU7mOkhEbkgk1Dmf0TobcrZnVDkxLwUeOI56Ryt+u0k/JSQnNfY/S2J+YBt/DmL+z3upKr+bcYpL+wvlcjcQBxvJKFrk+18ilj2LM+7Xc8/yeOZFdBTc82/D1OvaWwboQ7bXxnknzO5q19WUD0aJJJNDchhybl7Z7LGNAUeLMo1Poo+xsuX4fEx4+yW4V18mOaxHtgua2If7YWsLsj6jcjeWRniIy0VaPj7qwBn+izH7v43yvwXncXq3SYX1sS/B7fcFJTI2dWTLWEm+1zNnsKXdrnbzhauS2WoLJWpspWhrGkKaMAlPudjevKXH+M6tWmpLJWpspURgnuyC5Kgi37RaDfOrZ2vz7PFhD+k2SE5e6W6IrEA8jxJNR45V3BdiWweCSwwgwtChUORCTuQanSuV4OhTGUbLa+hwqHIZM3zuazuvqjQ3ee3pPeBAZYylW20tocnqHDtBJdKYnoK/gWiuIzTvrK5JPmJhykLbKeNJZgE5bVtp94juaOj0V74eiP6whj+2vpuiasTkQ+WRNADbJd0NfyJ2j6TMJgKMljmVHhG/X68cD2knhSx96D6fdFU/cAS8tpF8yZtqWljaTpJoX5Lzzb/9daiXJIFvrkgl9di/yUpnPlX02HXTYVPZil7ohAtyc3QmIQGtLONR/5gKNOz5XhRroskOoTLFfh912ns2uFB/mmmvRMs+MjoMKHXp/6m6afMubtUWBA61lqJnmL99jiOtNTiOX+6ZJm78a1n+HgrZVMWPHtcXZCYA/186kZUqpM5425FFH8Pba9CHT+Abrm82U3+EYn5IwTL+ZD45tIr7IZX+/jf2ayVspRtwhilNzpMtGgmi9mth9F+QGBd7WN/4OGSXBRO3hf1A/wafg5Kliu7XW+WHpKylG10hktCE5PMLB3NLYYSREeg9soxWAI5/rpQPIAMiVFQH9+3u6OYOU9TFthGB0id4TTYwiTTYr1T4j/JuPUw2Y+4XYX07IWkGhL0vsqQfTFzjVAGWGFuBNvo9BoGSF1hjGq9KmX+gyKnYCQxezZ20/CQ+3BOVarBUKaykzTE9BoGSMxw2jJn7WjP8jfM9o6Y7bp9Zf5kru1YGYEFZtNI1lOo74RWT4eBxNjV7ZiGplXIOIx7XQjYAcTMjqaJSEdnnV51g85wj74kHe2Cq6wwFyocDGUtvKG0UXhOOGs3hI14QU12ppg4k8+D2VO4juVTvg0W3ofJgvg0WxAfp//X5/l/AgwAdfx09d/w7IoAAAAASUVORK5CYII=) no-repeat;
  background-size: 0.37333333rem auto;
  padding-left: 0.53333333rem;
}
#detail .ddd {
  position: absolute;
  top: 0.16rem;
  right: 0.26666667rem;
  width: 0.74666667rem;
  height: 0.74666667rem;
}
/*价格*/
#detail .pro_part {
  position: relative;
  background: #fff;
  font-size: 0.37333333rem;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 0.267rem;
}
#detail .pro_price {
  height: 1.33333333rem;
  background-color: #fff;
  padding-top: 0.26666667rem;
  padding-left: 0.26666667rem;
  position: relative;
  vertical-align: middle;
  font-size: 0;
}
#detail .pro_price span {
  font-size: 0.37333333rem;
  font-weight: 700;
}
#detail .pro_price .priceText {
  display: inline-block;
  margin-right: 0.13333333rem;
  font-size: 0.64rem;
  font-weight: bold;
  color: #ff394e;
  line-height: 1.33333333rem;
  vertical-align: middle;
}
#detail .pro_price .lcz_lowPriceDetail {
  display: inline-block;
  margin-left: 0.13333333rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: #ff394e;
  vertical-align: middle;
}
/*自营*/
#detail .pro_title {
  padding: 0px 0.26666667rem 0.13333333rem;
  background-color: #fff;
  font-size: 0.48rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
}
.icon_ziying {
  height: 0.42666667rem;
  margin-right: 0.08rem;
}
.pro_sider_des {
  padding: 0 0.26666667rem 0.26666667rem;
  font-size: 0.32rem;
  color: #686b85;
  line-height: 0.48rem;
  background: #fff;
  border-bottom: 1px solid #f4f4f6;
}
.pro_note {
  padding: 0.08rem 0.26666667rem;
  background-color: #fff;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.38rem;
}
#detail .pro_wenhao {
  height: 0.32rem;
  padding: 0 0.26666667rem 0.45333333rem;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.32rem;
}
#detail .pro_wenhao span {
  float: right;
  line-height: 0.32rem;
  vertical-align: top;
}
#detail .pro_wenhao span img {
  width: 0.32rem;
  margin-left: 0.10666667rem;
  vertical-align: top;
}
/*说明书*/
#detail .new_instructions {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 0.26666667rem;
  padding: 0.64rem 1.01333333rem 0.64rem 1.49333333rem;
  position: relative;
  background-color: #fff;
}
#detail .new_instructions .caption {
  position: absolute;
  top: 50%;
  left: 0.26666667rem;
  margin-top: -0.16rem;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.32rem;
}
#detail .new_instructions .attr_list {
  display: block;
  height: 100%;
  overflow: hidden;
}
.new_instructions .attr_list li {
  float: left;
  width: 30.5%;
  text-align: center;
}
.new_instructions .attr_list li img {
  width: 0.37333333rem;
  height: 0.37333333rem;
  margin-bottom: 0.26666667rem;
  vertical-align: middle;
}
.new_instructions .attr_list li .sub_title {
  font-size: 0.32rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.32rem;
  margin-bottom: 0.08rem;
}
#detail .sub_text {
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.42666667rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#detail .instructions_more {
  position: absolute;
  top: 50%;
  right: 0.26666667rem;
  margin-top: -0.373333335rem;
  width: 0.74666667rem;
  height: 0.74666667rem;
}
/*常用搭配*/
#detail .comboContainer {
  margin-top: 0.4rem;
}
#detail .comboCaption {
  padding: 0 0.26666667rem;
  font-size: 0.42666667rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
}
#detail .comboLists {
  padding: 0.26666667rem 0 0.4rem 0.26666667rem;
  white-space: nowrap;
  overflow: auto;
}
#detail .comboLists .comboItem {
  box-sizing: border-box;
  display: inline-block;
  width: 8rem;
  margin-right: 0.4rem;
  padding-top: 0.26666667rem;
  background-color: #ffffff;
  box-shadow: 0 0.02666667rem 0.64rem 0 rgba(38, 45, 86, 0.1);
  border-radius: 0.16rem;
}
#detail .comboLists .comboItem .comboName {
  margin: 0 0.26666667rem 0.4rem;
  font-size: 0.37333333rem;
  color: #262d56;
  line-height: 0.53333333rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#detail .comboLists .comboItem .comboProductLists {
  white-space: nowrap;
  overflow: auto;
  padding-bottom: 0.4rem;
  font-size: 0;
}
#detail .comboLists .comboItem .comboProductLists .comboProductItem {
  box-sizing: border-box;
  display: inline-block;
  width: 2.66666667rem;
  position: relative;
  text-align: center;
}
#detail .productPic2 {
  width: 1.86666667rem;
  height: 1.86666667rem;
  margin-bottom: 0.4rem;
  vertical-align: middle;
}
#detail .productPrice {
  font-size: 0.32rem;
  color: #262d56;
  line-height: 0.32rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.comboProductLists .comboProductItem + .comboProductItem::before {
  content: "";
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0.74666667rem;
  left: -0.18666667rem;
  width: 0.37333333rem;
  height: 0.37333333rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAgMAAAAPYzcHAAAACVBMVEVHcEyXl5eXl5f9jrk6AAAAAnRSTlMAf7YpoZUAAAAeSURBVAjXY2BAABEorUELWmsVCKyA07SyB8kfIAAAMDcL4ShK5f8AAAAASUVORK5CYII=);
  background-size: 0.37333333rem 0.37333333rem;
}
/*合计*/
#detail .comboLists .comboItem .comboPrice {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -webkit-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0.32rem 0.26666667rem;
  background: linear-gradient(90deg, #fbfbfb 0%, #f6f6f6 100%);
  font-size: 0.32rem;
  font-weight: bold;
  color: #686b85;
  line-height: 0.32rem;
}
#detail .comboLists .comboItem .comboPrice .newPrice span {
  margin-left: 0.26666667rem;
  color: #ff394e;
}
#detail .comboLists .comboItem .comboPrice .totalProductCount {
  margin-left: 0.53333333rem;
}
#detail .comboLists .comboItem .comboComment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -webkit-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 0.32rem;
  padding: 0.4rem;
  font-size: 0.32rem;
  color: #262d56;
  line-height: 0.32rem;
}
/*已选商品*/
#detail .proBlock {
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.26666667rem;
  padding: 0.53333333rem 1.01333333rem 0.53333333rem 0.26666667rem;
  background-color: #fff;
  vertical-align: top;
}
#detail .proBlock .proLabel {
  display: inline-block;
  vertical-align: top;
  width: 1.06666667rem;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.32rem;
}
#detail .proBlock .proContent {
  vertical-align: top;
  display: inline-block;
  width: 7.52rem;
  font-size: 0.32rem;
  color: #262d56;
  font-weight: bold;
  line-height: 0.32rem;
}
.proDDD {
  position: absolute;
  top: 0.32rem;
  right: 0.26666667rem;
  width: 0.74666667rem;
  height: 0.74666667rem;
  vertical-align: middle;
}
/*送至*/
#detail .proBlock {
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.26666667rem;
  padding: 0.53333333rem 1.01333333rem 0.53333333rem 0.26666667rem;
  background-color: #fff;
  vertical-align: top;
}
#detail .proBlock .proLabel {
  display: inline-block;
  vertical-align: top;
  width: 1.06666667rem;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.32rem;
  line-height: 0.48rem;
}
#detail .proBlock .proContent {
  vertical-align: top;
  display: inline-block;
  width: 7.52rem;
  font-size: 0.32rem;
  color: #262d56;
  font-weight: bold;
  line-height: 0.32rem;
  line-height: 0.48rem;
}
#detail .proBlock .proContent span {
  color: #686b85;
  line-height: 0.48rem;
}
/*商品评价*/
#detail .pinjia {
  padding: 0.266667rem 0.266667rem 0px;
  padding-left: 0.26666667rem;
  margin-bottom: 0.26666667rem;
  background: #fff;
}
#detail .pinjia .commentCaption {
  clear: both;
  overflow: hidden;
}
#detail .pinjia .caption {
  font-size: 0.42666667rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
  float: left;
}
#detail .pinjia .rightMore {
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.64rem;
  float: right;
}
#detail .pinjia .rightMore span {
  font-weight: bold;
  color: #262d56;
}
/*满意度*/
#detail .pinjia ul {
  padding: 0 0.26666667rem 0.26666667rem 0;
}
#detail .pinjia ul li {
  border-bottom: 1px solid #e1e1e1;
  padding: 0.26666667rem 0;
}
#detail .pinjia ul li .commentContent {
  font-size: 0.32rem;
  font-weight: bold;
  color: #686b85;
  line-height: 0.64rem;
  position: relative;
  line-height: 0.64rem;
  color: #020202;
  font-size: 0.37333333rem;
  word-break: break-all;
}
#detail .pinjia ul li .commentContent .pro_review_star {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  overflow: hidden;
  width: 1.94666667rem;
  height: 0.29333333rem;
  margin-top: 0.13333333rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAsCAYAAABygggEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjMyNzZBQzM0RkUxMUU5QTY3MEVFQjY2NERDNjg0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjMyNzZBRDM0RkUxMUU5QTY3MEVFQjY2NERDNjg0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMzI3NkFBMzRGRTExRTlBNjcwRUVCNjY0REM2ODQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMzI3NkFCMzRGRTExRTlBNjcwRUVCNjY0REM2ODQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WvwCSQAACFlJREFUeNrMWFtsVVUa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);
  background-size: 0.4rem auto;
}
#detail .pinjia ul li {
  padding: 0.26666667rem 0;
}
#detail .pinjia ul li p {
  position: relative;
  line-height: 0.64rem;
  color: #020202;
  font-size: 0.37333333rem;
  word-break: break-all;
}
#detail .pinjia ul li span {
  color: #828282;
}
#detail .pinjia ul li i {
  color: #949494;
  padding: 0 0.13333333rem;
  font-style: normal;
}
.stars_width5 {
  display: inline-block;
  height: 0.29333333rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAsCAYAAABygggEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjMyNzZBQzM0RkUxMUU5QTY3MEVFQjY2NERDNjg0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjMyNzZBRDM0RkUxMUU5QTY3MEVFQjY2NERDNjg0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMzI3NkFBMzRGRTExRTlBNjcwRUVCNjY0REM2ODQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMzI3NkFCMzRGRTExRTlBNjcwRUVCNjY0REM2ODQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WvwCSQAACFlJREFUeNrMWFtsVVUa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);
  background-size: 0.4rem auto;
  vertical-align: top;
  width: 100%;
}
#detail .pinjia ul li .commentInfo {
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.64rem;
}
#detail .pinjia ul li .commentInfo .vip {
  width: 0.56rem;
  height: 0.45333333rem;
}
/* // 图文详情 */
#detail .pro_detail_tab {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  padding: 0;
  border-bottom: 1px solid #eff0f3;
  font-size: 0.42666667rem;
  margin: 0 0.26666667rem;
}
#detail .pro_detail_tab .pro_detail_item {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 0.26666667rem 0;
  text-align: center;
  font-size: 0.37333333rem;
  font-weight: 700;
  color: #262d56;
}
.pro_detail_tab .pro_detail_item.active:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0.8rem;
  height: 0.05333333rem;
  background: linear-gradient(132deg, #5577fb 0%, #738efc 100%);
  margin-left: -0.4rem;
}
#detail .pro_detail_box {
  background: #fff;
  padding: 0.26666667rem 0.4rem;
  margin-bottom: 0.26666667rem;
}
.detail_img img {
  width: 100% !important;
  height: auto !important;
  display: block;
}
#detail .bottom{
    height: 70px;
    width: 100%;
}
/* //底部购物栏 */
#detail .van-goods-action {
  bottom: 50px;
}


</style>

