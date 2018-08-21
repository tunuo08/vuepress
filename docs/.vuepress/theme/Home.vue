<template>
    <div id="app" class="app">
        <header class="navbar home header-title">
            <div class="sidebar-button-home">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512"
                     class="icon">
                    <path fill="currentColor"
                          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
                </svg>
            </div>
            <a href="/" class="home-link router-link-active">
                <img src="/images/logo.png" class="logo">
                <span class="site-name ">
                壹通软件支持
                </span>
            </a>
            <div class="links">
                <nav :class="['nav-links', 'can-hide',] ">
                    <div class="nav-item">
                        <a class="nav-link router-link-exact-active " @click="changePage(1)"
                           :class="['nav-link',currentPage===1?'router-link-active':'']">首页</a></div>
                    <div class="nav-item"><a @click="changePage(2)"
                                             :class="['nav-link',currentPage===2?'router-link-active':'']">ERP
                    </a></div>
                    <div class="nav-item"><a @click="changePage(3)"
                                             :class="['nav-link',currentPage===3?'router-link-active':'']">移动服务
                    </a></div>
                    <div class="nav-item"><a @click="changePage(4)"
                                             :class="['nav-link',currentPage===4?'router-link-active':'']">产品特征
                    </a></div>
                    <!--<div class="nav-item"><a  @click="changePage(3)" class="nav-link">店铺首页-->
                    <!--</a></div>-->
                    <div class="nav-item"><a @click="changePage(5)"
                                             :class="['nav-link',currentPage===5?'router-link-active':'']">加盟流程
                    </a></div>
                    <div class="nav-item"><a href="https://www.yttys.com/" target="view_window"
                                             rel="noopener noreferrer" class="nav-link external">
                        壹通资讯
                    </a>
                    </div>
                    <div class="nav-item"><a href="https://oa.yttys.com/erp/" target="_self"
                                             class="login-button nav-link external"
                                             rel="noopener noreferrer" >
                        登陆ERP
                    </a>
                    </div>
                </nav>
            </div>
        </header>
        <!--第一-->
        <page :currentPage="currentPage">
            <section slot-scope="{content}" class="page-container hm-sec1 section">
                <div class="sec-content">
                    <transition
                            enter-active-class="animated slideInDown"
                            leave-active-class="animated fadeOut">
                        <div v-if="content.index===currentPage" class="caption">
                            <div class="h3">解脱繁琐管理，助力创业成功。</div>
                            <h1>壹通堂软件支持</h1>
                            <h4>融合工作汇报、项目任务、CRM、知识分享、审批流程、数据协作等应用于一体的办公云支持系统
                                <br>每天要做什么、做了什么、有什么收获；实时推进目标成果、构建高效率协作团队
                            </h4>
                        </div>
                    </transition>
                </div>
                <transition
                        enter-active-class="animated slideInUp"
                        leave-active-class="animated fadeOut">
                    <div v-if="content.index===currentPage" class="arrow-begin" @click="next">
                        了解壹通堂OA
                    </div>
                </transition>
            </section>
        </page>
        <!--第二-->
        <page :currentPage="currentPage">
            <section slot-scope="{content}" class="page-container section">
                <div class="sec-content">
                    <transition
                            enter-active-class="animated slideInUp"
                            leave-active-class="animated fadeOut">
                        <h2 v-if="showPageCtrl(content.index)" style="border-bottom: none">围绕着团队成员每天的每件事项<br>展开协作和管理
                        </h2>
                    </transition>
                    <transition
                            enter-active-class="animated slideInUp"
                            leave-active-class="animated fadeOut">
                        <div v-if="showPageCtrl(content.index)" class="hm-mod-feature hm-mod-feature-acitve">
                            <div class="feature-list clearfix">
                                <a v-for="(item,index) in data.lists" :key="index" class="list-item"
                                   :href="item.link||'#'">
                                    <div
                                            :class="['list-ico', item.key?'list-ico-'+item.key:'list-ico-'+(index+1)]"></div>
                                    <h4 style="margin-top:0 ">{{item.title}}</h4>
                                    <p>{{item.details}}</p>
                                </a>
                            </div>
                            <!--<a class="feature-more" href="#"-->
                            <!--&gt;更多应用</a>-->
                        </div>
                    </transition>
                </div>
            </section>
        </page>
        <!--第三-->
        <page :currentPage="currentPage" style="background: #7c7c7c">
            <section slot-scope="{content}" class="page-container section">
                <div class="sec-content">
                    <h2 style="border-bottom: none;color: white">随时随地的移动工作</h2>
                    <div class="hm-mod-mOA">
                        <transition
                                enter-active-class="animated fadeInLeft"
                                leave-active-class="animated zoomOutLeft">
                        <div v-if="content.index===currentPage" class="mOA-list">
                            <div class="list-item" @mouseenter="mousehover(1)"
                                 :class="{'list-item-focus':currentTab===1}">
                                <div class="list-ico list-ico-app"></div>
                                <h4>壹通助手</h4>
                                <div class="work-show-img">
                                    <img :src="$withBase('/images/wxxcx.jpg')" alt="壹通助手">
                                </div>
                                <p>一款智能手机，就可轻松地将公司的的任务、日报、文档、销售、报分流程等全部事项放进。</p>
                            </div>
                            <div class="list-item" @mouseenter="mousehover(2)"
                                 :class="{'list-item-focus':currentTab===2}">
                                <div class="list-ico list-ico-wechat"></div>
                                <h4><a href="#/enterprise" target="_blank">壹通商城</a></h4>
                                <!--<div class="work-show-img">-->
                                <!--<img :src="$withBase('/images/ytzs.jpg')" alt="壹通商场">-->
                                <!--</div>-->
                                <p>适配手机端的壹通商城系统。</p>
                                <a class="mOA-list-more" href="https://oa.yttys.com/m/index.html"
                                   style="opacity: 1; margin-top: 20px;">了解更多</a>
                            </div>
                            <div class="list-item" @mouseenter="mousehover(3)"
                                 :class="{'list-item-focus':currentTab===3}">
                                <div class="list-ico list-ico-service"></div>
                                <h4>微信公众号</h4>
                                <div class="work-show-img">
                                    <img :src="$withBase('/images/weixin.jpg')" alt="公众号">
                                </div>
                                <p>无需注册企业号，只要关注服务号就可以马上内部工作协作。</p>
                                <a class="mOA-list-text" href="#/mobile"
                                   style="opacity: 1; margin-top: 20px;">了解更多 &gt;&gt;</a>
                            </div>
                        </div>
                        </transition>
                        <transition
                                enter-active-class="animated fadeInRight"
                                leave-active-class="animated zoomOutRight">
                        <div v-if="content.index===currentPage" class="mOA-pic clearfix">
                            <div class="pic-item" key="pic1" :style="{display:currentTab===1?'block':'none'}">
                                <img class="pic1 fd" :src="$withBase('/images/ytzs.jpg')"
                                     style="">
                                <img class="pic2 fd" :src="$withBase('/images/ytzsindex.png')"
                                     style="">
                            </div>
                            <div class="pic-item" key="pic2" :style="{display:currentTab===2?'block':'none'}">
                                <img class="pic1 fd" :src="$withBase('/images/ytscmap.png')"
                                     style="right: 0px;">
                                <img class="pic2 fd" :src="$withBase('/images/ytscindex.png')"
                                     style="right: 130px;">
                            </div>
                            <div class="pic-item" key="pic3" :style="{display:currentTab===3?'block':'none'}">
                                <img class="pic1 fd" :src="$withBase('/images/gzh1.jpg')"
                                     style="right: 0px;">
                                <img class="pic2 fd" :src="$withBase('/images/gzhtext.png')"
                                     style="right: 130px;">
                            </div>
                        </div>
                        </transition>
                    </div>
                </div>
            </section>
        </page>
        <!--第四幕-->
        <page :currentPage="currentPage">
            <section slot-scope="{content}" class="page-container hm-sec1 section">
                <div class="sec-content">
                    <transition
                            enter-active-class="animated slideInDown"
                            leave-active-class="animated fadeOut">
                        <h2 v-if="showPageCtrl(content.index)" style="border-bottom: none;">
                            能帮到您什么？</h2>
                    </transition>
                    <div class="hm-mod-wecan">
                        <transition enter-active-class="animated zoomIn"
                                    leave-active-class="animated fadeOut">
                            <div class="wecan-list clearfix" v-if="showPageCtrl(content.index)">
                                <div v-for="(item,index) in data.canHelp"
                                     :class="['list-item',(index)%2===0?'list-item-odd':'list-item-even']" :key="index">
                                    <div :class="['list-ico','list-ico-'+item.key]"></div>
                                    <h4>{{item.title}}</h4>
                                    <p>{{item.details}}</p>
                                </div>
                            </div>
                        </transition>
                        </div>
                </div>
            </section>
        </page>
        <!--第五-->
        <!--<page :currentPage="currentPage" style="background: #00A0E8">-->
        <!--<section slot-scope="{content}" class="page-container section">-->
        <!--<h2 style=" margin-top: 20px;">已有40多万家企业注册<span class="en">eteams</span>服务</h2>-->
        <!--<transition-->
        <!--enter-active-class="animated zoomIn"-->
        <!--leave-active-class="animated fadeOut">-->
        <!--<div v-if="showPageCtrl(content.index)" class="customer-wall"></div>-->
        <!--</transition>-->
        <!--</section>-->
        <!--</page>-->
        <!--第六-->
        <page :currentPage="currentPage">
            <section slot-scope="{content}" class="page-container hm-sec1 section">
                <div class="sec-content joinin">
                    <div class="sec-content-top">
                        <h2 style="border-bottom: none">加盟流程</h2>
                        <div class="joinIn-container">
                            <transition-group enter-active-class="animated fadeIn">
                                <div v-for="(item,index) in joinProcess" :key="index" class="process-item">
                                    <div class="process-title">
                                        {{item.index}}. {{item.title}}
                                    </div>
                                </div>
                            </transition-group>
                        </div>
                    </div>
                </div>
                <transition
                        enter-active-class="animated fadeInUp"
                        leave-active-class="animated fadeOut">
                    <div v-if="showPageCtrl(content.index)" class="site-footer">
                        <div class="dter">
                            <div class="dsag">
                                <h3>— 中医养生人才输出基地 —</h3>
                                <p>Output base of TCM health preserving talents</p>
                            </div>
                            <ul class="jt-u2">
                                <li>
                                    <ul class="uul">
                                        <li>● 加入收藏<p>Join the collection</p></li>
                                        <li>● 关于我们<p>About us</p></li>
                                        <li>● 咨询我们<p>Consult us</p></li>
                                    </ul>
                                </li>
                                <li class="lli2">
                                    <p><img :src="$withBase('/images/weixin.jpg')" alt=""><br><b>关注微信</b></p>
                                    <p><img :src="$withBase('/images/weibo.jpg')" alt=""><br><b>关注微博</b></p>
                                </li>
                                <li class="lli3">
                                    <p>官方QQ：1827865929</p>
                                    <p>全国热线：400-9909233</p>
                                    <p>咨询热线：023-67899233</p>
                                    <p>地址：重庆市渝北区中渝梧桐郡D1栋17-5</p>
                                    <p>版权所有：©壹通堂（香港）养生连锁机构</p>
                                    <p>{{data.footer?data.footer:'备案号：渝ICP备16014718号-1'}}</p>
                                </li>
                            </ul>
                        </div>
                </div>
                </transition>
                <div class="mini-footer">
                    <p>全国热线：400-9909233</p>
                    <p>咨询热线：023-67899233</p>
                    <p>版权所有：©壹通堂（香港）养生连锁机构</p>
                    <p>{{data.footer?data.footer:'备案号：渝ICP备16014718号-1'}}</p>
                </div>
            </section>
        </page>

        <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage"
                         :option="controllerOption"></page-controller>
    </div>
</template>
<script>
    import PageController from '../components/pageCtrl'
    import Page from '../components/pageItem'
    // 页面进出动画
    function afterEnteranimate($child) {
        // $child.$el.querySelector('.animated').classList.remove('bounceInLeft');
        // $child.$el.querySelector('.animated').classList.add('bounceInLeft');
    }

    function beforeLeaveanimate($child) {
        // let moveType = Math.random() > 0.5 ? 'roll-out' : 'roll-out';
        // $child.$el.querySelector('.animated').classList.remove('bounceInLeft');
        // let moveType ='bounceInLeft';
        // $child.$el.querySelector('.animated').classList.add(moveType);
    }

    var process = [
        {index: 1, title: '精英觉醒班学习'},
        {index: 2, title: '精华落地班学习'},
        {index: 3, title: '签约加盟协议'},
        {index: 4, title: '下店实习'},
        {index: 5, title: '精英觉醒班学习'},
        {index: 6, title: '新店选址'},
        {index: 7, title: '装修规划'},
        {index: 8, title: '试营业'},
        {index: 9, title: '正式开业'},
        {index: 10, title: '次序系统学习'}
    ]
    export default {
        data() {
            return {
                joinProcess: [],
                currentTab: 1,
                currentPage: 1,
                options: [{
                    // the color of background
                    background: '/images/bg_sec1_new.jpg',
                    // background: 'rgba(79, 204, 76, 0.6)',
                    // the color of text
                    color: '#000000',
                    // is content center
                    isCenter: true,
                    // the function before page show
                    afterEnter: afterEnteranimate,
                    // the function after page show
                    beforeLeave: beforeLeaveanimate
                }, {
                    // background: 'rgba(79, 204, 76, 0.6)',
                    color: '#000',
                    isCenter: true,
                    afterEnter: afterEnteranimate,
                    beforeLeave: beforeLeaveanimate
                }, {
                    background: '/images/mOA_bg.png',
                    color: '#fff',
                    isCenter: true,
                    afterEnter: afterEnteranimate,
                    beforeLeave: beforeLeaveanimate
                }, {
                    // background: 'rgba(46, 13, 229, 0.7)',
                    color: '#fff',
                    isCenter: true,
                    afterEnter: afterEnteranimate,
                    beforeLeave: beforeLeaveanimate
                },
                    //     {
                    //     // background: 'rgba(46, 13, 229, 0.5)',
                    //     color: '#fff',
                    //     isCenter: true,
                    //     afterEnter: afterEnteranimate,
                    //     beforeLeave: beforeLeaveanimate
                    // },
                    {
                        background: '/images/z-bg.jpg',
                    color: '#fff',
                    isCenter: true,
                    afterEnter: afterEnteranimate,
                    beforeLeave: beforeLeaveanimate
                }],
                controllerOption: {
                    arrowsType: false,
                    navbar: true,
                    highlight: true,
                    loop: false
                },
            }
        },
        computed: {
            // 总page数
            pageNum() {
                return this.options.length;
            },
            data() {
                return this.$page.frontmatter
            },
            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                }
            }
        },
        methods: {
            showPageCtrl(num) {
                return this.currentPage === num
            },
            forPage4In() {
                for (let i in process) {
                    setTimeout(() => {
                        if (this.joinProcess[i]) {
                            this.joinProcess[i] = process[i]
                        } else {
                            this.joinProcess.push(process[i]);
                        }
                    }, 120 * i)
                }
            },
            toPage(num) {
                this.currentTab = num;
            },
            next(){
                if(this.pageNum===this.currentPage){
                    return false
                }else{
                    this.currentPage++
                }
            },
            mousehover(num) {
                // console.log(num)
                this.currentTab = num;
                // console.log(num)
            },
            changePage(index) {
                // beforeLeave Hook
                let beforeIndex = this.currentPage - 1;
                let leaveFunction = this.options[beforeIndex].beforeLeave;
                typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
                // change page
                this.currentPage = index;
                // afterEnter Hook
                let nextIndex = index - 1;
                let enterFunction = this.options[nextIndex].afterEnter;
                this.$nextTick(function () {
                    typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
                })
            }
        },
        components: {
            Page, PageController
        },
        mounted() {
            this.$children.forEach((child, index) => {
                // 动态设置各个page内的options
                if (child.option === null) {
                    let childOption = this.options[index];
                    this.$set(childOption, 'index', index + 1);
                    child.option = childOption;
                }
            });
        },
        watch: {
            //如果是页面到4就会触发添加动效
            currentPage(val) {
                if (val === 5) {
                    this.forPage4In()
                } else {
                    clearTimeout();
                    this.joinProcess = []
                }
            }
        }
    }
</script>
<style src="./styles/animate.css"></style>
<!--<style src="../public/css/common.css"></style>-->
<!--<style src="../public/css/home.css"></style>-->
<style lang="scss" scoped>

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
    }

    body, div, ol, ul, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, iframe, input, textarea, select, label, article, aside, footer, header, menu, nav, section, time, audio, video {
        margin: 0;
        padding: 0;
    }

    .navbar {
        padding: 0.7rem 1.5rem;
    }

    .dibu {
        width: 100%;
        overflow: hidden;
        height: 452px;
        background: #252724;
        margin-top: 5em;
    }

    .dter {
        width: 1030px;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
    }

    .dsag {
        text-align: center;
        margin: 3em auto;
        letter-spacing: 5px;
    }

    .dsag h3 {
        color: #fff;
        font-size: 24px;
        font-weight: normal;
    }

    .dsag p {
        color: #9a9a9a;
        font-size: 12px;
    }

    .jt-u2 {
        width: 100%;
        overflow: hidden;
    }

    .jt-u2 li {
        float: left;
        p {
            line-height: 1;
        }
    }

    .jt-u2 li:nth-child(1) {
        width: 160px;
        text-align: left; /*padding-right:25px;*/
    }

    .uul {
        overflow: hidden;
    }

    .uul li {
        color: #fff;
        font-size: 16px;
        padding-bottom: 25px;
        width: 100%;
    }

    .uul li p {
        text-align: right;
        color: #999;
        font-size: 14px;
    }

    .lli2 {
        width: 400px;
        float: left;
        padding: 0 115px;
    }

    .lli2 p {
        width: 160px;
        float: left;
        text-align: center;
        color: white;
    }

    .lli2 p:last-of-type {
        float: right;
    }

    .lli2 p b {
        font-size: 18px;
    }

    .lli3 {
        width: 240px;
        float: right;
    }

    .lli3 p {
        text-align: left;
        color: white;
        padding-bottom: 10px;
        font-size: 14px;
    }

    .flip-list-move {
        transition: transform 1s;
    }

    .process-item {
        height: 50px;
        width: 145px;
        color: #4e4e4e;
        float: left;
        padding: 10px;
        margin: 20px 10px;

        .process-index {
            font-size: 14px;
        }
        .process-title {
            background: #6bc8fd;
            height: 55px;
            border-radius: 5px;
            line-height: 55px;
            box-shadow: 6px 6px #4e4e4d;
        }
    }

    .app {
        height: 100%;
        width: 100%;
    }

    .clearfix:before, .clearfix:after {
        display: table;
        content: " "
    }

    .clearfix:after {
        clear: both
    }

    .clearfix {
        zoom: 1
    }

    .page-container {
        width: 100%;
        height: 100%;
        position: relative;
        /*display: flex;*/
        /*flex-direction: column;*/

    }
    /* 下面的是与fullPage无关的样式 */
    @media screen and (max-width: 768px) {
        html,
        body {
            font-size: 12px;
        }
    }

    .wecan-list.anidely {
        & > .list-item-odd {
            animation: 3s 3s background linear;
            /*background: #00A0E8;*/
        }
        & > .list-item-even {
            animation: 1s 1s background linear;
            /*background: yellow;*/
        }
    }
    .hm-sec1 {
        text-align: center;
        background-size: cover;
        .arrow-begin {
            position: absolute;
            color: #95bffd;
            bottom: 35px;
            left: 50%;
            margin-left: -38px;
            cursor: pointer;
            padding-bottom: 30px;
            background: url(../public/images/sec_arrow_dbpix.gif) center bottom no-repeat;
        }
        .caption {
            h1 {
                font-size: 48px;
                /*margin:9px 0 12px;*/
                color: #585858;
                letter-spacing: 4px;
            }
            .h3 {
                font-size: 18px;
                color: #888;
                font-weight: normal;
                letter-spacing: 1px;
            }
            h4 {
                font-size: 14px;
                font-weight: normal;
                /*margin-bottom: 50px;*/
                color: #929292;
            }
        }
    }

    .sec-content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        .sec-content-top {
            width: 948px;
            margin: 0 auto;
            transform: translateY(-25vh)
        }
        h2 {
            font-size: 32px;
            text-align: center;
            position: relative;
            filter: alpha(opacity=0);
            font-weight: lighter;
        }
    }



    .fd {
        transform: rotateX(38deg) rotateZ(-37deg) scale(0.8);
        box-shadow: -3px 0px 3px #ededed;
    }

    .hm-mod-mOA .mOA-list-more:hover,
    .sec-text .know-eoffice:hover {
        color: #333;
        background: #fff;
    }
    .mOA-list-text {
        font-size: 18px;
        text-decoration: none;
        margin-top: 30px;
        display: block;
        -webkit-transition: background-color 0.25s ease;
        -o-transition: background-color 0.25s ease;
        transition: background-color 0.25s ease;
        &:hover {
            background: #00A0E8 !important;
            color: #0088cc !important;
        }
    }

    .hm-mod-mOA .mOA-list-more,
    .sec-text .know-eoffice {
        margin: 30px 0 0 0;
        display: block;
        width: 150px;
        height: 38px;
        line-height: 38px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 6px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        /*filter: alpha(opacity=0);*/
        -webkit-transition: background-color 0.25s ease;
        -o-transition: background-color 0.25s ease;
        transition: background-color 0.25s ease;
        &:hover {
            background: #00A0E8;
        }
    }

    /*=====================================================================================*/

    /*==============================footer=====================================*/
    .site-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /*padding-top: 25px;*/
        font-size: 12px;
        line-height: 28px;
        /*padding-bottom: 100px;*/
        background: #333;
    }


    /*===============================================列表===========================================*/
    .top-content {
        margin: 100px auto;
        width: 940px;
        height: 500px;
        overflow: hidden;
        li {
            list-style: none;
        }
        & > div {
            &:nth-child(1) {
                /*background: yellow;*/
                width: 400px;
                float: left;
            }
            &:nth-child(2) {
                /*background: cornflowerblue;*/
                width: 400px;
                float: left;
            }
        }
    }

    /*==================================第五屏幕=======================================*/
    .customer-wall {
        height: 672px;
        width: 1012px;
        background: url(../public/images/customer_wall.png) no-repeat center center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -506px;
        margin-top: -336px;

        filter: alpha(opacity=100);
        /*-webkit-transform: scale(3);*/
        /*-o-transform: scale(3);*/
        /*transform: scale(3);*/
        -webkit-transition: all 0.5s ease-in;
        -o-transition: all 0.5s ease-in;
        transition: all 0.5s ease-in;
    }

    @media screen and (min-width: 1250px) {
        .site-head .head-inner {
            margin: 0 auto;
            width: 1200px;
        }

        .wrap {
            margin: 0 auto;
            width: 1200px;
        }
    }

    @media screen and (max-height: 860px) {
        .logo-icon {
            top: 80px;
        }
    }

    @media screen and (max-height: 800px) {
        .logo-icon {
            top: 60px;
        }
        .top-content {
            top: 110px;
        }
    }

    @media screen and (max-height: 768px) {
        .logo-icon {
            top: 50px;
        }
        .sec-parent .hm-sec3 h2 {
            text-align: left;
            margin-top: -220px;
            font-size: 28px;
        }
        .top-content {
            bottom: 320px;
            top: 80px;
        }
    }

    @media screen and (max-height: 600px) {
        .logo-icon {
            top: 35px;
        }
        .logo-text {
            font-size: 18px;
        }
    }
    .login-button {
        background: #eee;
        width: 70px;
        /* height: 2rem; */
        text-align: center;
        border: 1px solid #00008b8a;
        border-radius: 6px;
    }

</style>
<style lang="scss" scoped>
    /*==================================自适应======================================*/

    // colors
    $accentColor: #6bc8fd;
    $textColor: #2c3e50;
    $borderColor: #eaecef;
    $codeBgColor: #282c34;
    $arrowBgColor: #ccc;

    // layout
    $navbarHeight: 2.3rem;
    $sidebarWidth: 20rem;
    $contentWidth: 740px;

    // responsive breakpoints
    $MQNarrow: 959px;
    $MQMobile: 719px;
    $MQMobileNarrow: 419px;

    // code
    $lineNumbersWrapperWidth: 3.5rem;

    $mobileSidebarWidth: $sidebarWidth*0.82;
    .hm-mod-feature {
        width: 948px;
        margin: 0 auto 0;
        .feature-list {
            font-size: 0;
            /*filter: alpha(opacity=0);*/
            position: relative;
            top: 3vh;
        }
        .list-item {
            width: 196px;
            height: 85px;
            overflow-y: hidden;
            display: inline-block;
            *display: inline;
            *zoom: 1;
            padding: 16px 26px 16px 94px;
            margin-bottom: 10px;
            position: relative;
            text-decoration: none;
            color: #333;
            &:hover {
                cursor: pointer;
                background-color: #e8f3f9;
            }

            h4 {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            p {
                line-height: 20px;
                font-size: 12px;
                color: #888;
            }

            .list-ico {
                position: absolute;
                top: 18px;
                left: 16px;
                height: 52px;
                width: 52px;
                border-radius: 3px;
                background: url(../public/images/ico_feature_52.png) no-repeat;
            }
            .list-ico-task {
                background-position: 0 0;
            }

            .list-ico-goal {
                background-position: -52px 0;
            }

            .list-ico-report {
                background-position: -104px 0;
            }

            .list-ico-doc {
                background-position: -156px 0;
            }

            .list-ico-crm {
                background-position: -208px 0;
            }

            .list-ico-blog {
                background-position: -260px 0;
            }

            .list-ico-message {
                background-position: -312px 0;
            }

            .list-ico-sign {
                background-position: -364px 0;
            }

            .list-ico-wfl {
                background-position: -416px 0;
            }
        }

        .feature-more {
            margin: 5vh auto 0;
            display: block;
            width: 214px;
            height: 44px;
            line-height: 44px;
            color: #55c1e7;
            border: 1px solid #55c1e7;
            border-radius: 3px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            /*filter:alpha(opacity=0);*/
            -webkit-transition: all 0.25s ease;
            -o-transition: all 0.25s ease;
            transition: all 0.25s ease;
        }

        .feature-more:hover {
            color: #fff;
            background: #55c1e7;
        }

    }

    .hm-mod-mOA {
        width: 948px;
        margin: 0 auto;
        height: 500px;
        .mOA-list {
            /*margin-left: 10vw;*/
            width: 276px;
            float: left;
            .list-item {
                color: #fff;
                padding-left: 60px;
                position: relative;
                margin-bottom: 30px;
                /**/
                filter: alpha(opacity=0);
                cursor: pointer;
                h4 {
                    font-size: 24px;
                    margin-bottom: 5px;
                    -webkit-transition: all 0.25s ease;
                    -o-transition: all 0.25s ease;
                    transition: all 0.25s ease;
                }
                p {
                    font-size: 12px;
                    line-height: 24px;
                }
                .list-ico {
                    height: 42px;
                    width: 42px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: url(../public/images/ico_mOA_42.png) no-repeat;
                    -webkit-transition: all 0.25s ease;
                    -o-transition: all 0.25s ease;
                    transition: all 0.25s ease;
                }
                .list-ico-app {
                    background-position: 0 0;
                }
                .list-ico-wechat {
                    background-position: -42px 0;
                }
                .list-ico-service {
                    background-position: -84px 0;
                }
                a {
                    &:link,
                    &:hover,
                    &:active,
                    &:visited {
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }

        }

        .mOA-pic {
            float: left;
            width: 672px;
            height: 500px;
            position: relative;
            .pic1, .pic2 {
                width: 400px;
            }
            &:hover .pic2 {
                transform: rotateX(0deg) rotateZ(0deg) scale(0.8) translateX(140px);
                /*transform: translateX(140px);*/
                box-shadow: none;
            }

            &:hover .pic1 {
                margin-right: 20px;
                transform: rotateX(0deg) rotateZ(0deg) scale(0.8) translateX(-60px);
                box-shadow: none;
                /*<!--transform: translateX(-60px);-->*/
            }
            .pic1 {
                position: absolute;
                left: 100px;
                top: -10px;
                z-index: 1;
            }

            .pic2 {
                left: 300px;
                top: -10px;
                position: absolute;
                z-index: 2;
            }

            .pic-item img {
                -webkit-transition: transform 0.5s ease;
                -o-transition: transform 0.5s ease;
                transition: transform 0.5s ease;
                /* 	transform:translateX(100px); */
            }

            .pic-item img.pic2 {
                transition: all 0.4s ease;
                /* 	transition-delay:0.3s; */
            }
        }
        .mOA-list .list-item-focus .list-ico-app {
            background-position: 0 -42px;
        }

        .mOA-list .list-item-focus .list-ico-wechat {
            background-position: -42px -42px;
        }

        .mOA-list .list-item-focus .list-ico-service {
            background-position: -84px -42px;
        }

        .mOA-list .list-item h4 {
            font-size: 24px;
            margin-bottom: 5px;
            -webkit-transition: all 0.25s ease;
            -o-transition: all 0.25s ease;
            transition: all 0.25s ease;
        }

        .mOA-list .list-item-focus h4,
        .mOA-list .list-item-focus h4 > a:link,
        .mOA-list .list-item-focus h4 > a:hover,
        .mOA-list .list-item-focus h4 > a:active,
        .mOA-list .list-item-focus h4 > a:visited {
            color: #00a0e9;
        }
    }

    .mini-footer {
        display: none;
    }

    .hm-mod-wecan {
        margin: 80px auto 0;
        width: 948px;
        .wecan-list {
            .list-item {
                width: 350px;
                float: left;
                height: 100px;
                position: relative;
                margin-bottom: 23px;
                filter: alpha(opacity=0);
                h4 {
                    font-size: 18px;
                    margin: 12px 0 8px;
                }
                p {
                    font-size: 12px;
                    line-height: 24px;
                    color: #838383;
                }
            }
            .list-item-odd {
                padding-right: 120px;
                transform: translateX(0px);
                text-align: right;
            }
            .list-item-even {
                transform: translateX(0px);
                padding-left: 120px;
                text-align: left;
            }
            .list-ico {
                height: 64px;
                width: 64px;
                background: url(../public/images/ico_wecan_64_64.png) no-repeat;
                position: absolute;
                top: 21px;

                /*filter:alpha(opacity=0);*/
                -webkit-transition: background-position 0.25s ease-in;
                -o-transition: background-position 0.25s ease-in;
                transition: background-position 0.25s ease-in;
            }
            .list-item-odd .list-ico {
                right: 20px;
            }
            .list-item-even .list-ico {
                left: 20px;
            }
            .list-ico-ach {
                background-position: 0 0;
            }
            .list-ico-trail {
                background-position: -64px 0;
            }
            .list-ico-rule {
                background-position: -128px 0;
            }
            .list-ico-cooper {
                background-position: -192px 0;
            }
            .list-ico-do {
                background-position: -256px 0;
            }
            .list-ico-mobile {
                background-position: -320px 0;
            }
            .list-item:hover .list-ico-ach {
                background-position: 0 -64px;
            }
            .list-item:hover .list-ico-trail {
                background-position: -64px -64px;
            }
            .list-item:hover .list-ico-rule {
                background-position: -128px -64px;
            }
            .list-item:hover .list-ico-cooper {
                background-position: -192px -64px;
            }
            .list-item:hover .list-ico-do {
                background-position: -256px -64px;
            }
            .list-item:hover .list-ico-mobile {
                background-position: -320px -64px;
            }
        }
    }

    .work-show-img {
        display: none;
    }
.sidebar-button-home{
    display: none;
}
    // narrow desktop / iPad
    @media screen and (max-width: $MQNarrow) {
        .sidebar-button-home {
            display: block;
            width: 1.25rem;
            height: 1.25rem;
            position: absolute;
            padding: .6rem;
            top: .6rem;
            right: 1rem;
        }
    }

    // wide mobile
    @media screen and (max-width: $MQMobile) {
        .hm-sec1 .caption {
            /*color:yellow;*/
            /*border: 1px solid black;*/
            h1 {
                font-size: 26px;
            }
        }
        .hm-mod-feature {
            width: $MQMobile;
            .list-item {
                width: 140px;
                padding: 6px 0 0 70px;
            }
        }
        .hm-mod-mOA {
            width: $MQMobile;
            /*transform: scale(0.5);*/
            .mOA-list{
                width: 30%;
            }
             .mOA-pic{
               width: 70%;
            }
        }
    }



    @media screen and (max-width: $MQMobileNarrow) {
        .hm-sec1 .caption {
            /*color:yellow;*/
            /*border: 1px solid blue;*/
            h1 {
                font-size: 25px;
            }
        }
        .sec-content {
            h2 {
                font-size: 24px;
            }
        }
        .hm-mod-feature {
            width: $MQMobileNarrow;

            .list-item {
                box-sizing: border-box;
                width: 160px;
                /*text-align: right;*/
                padding: 30px 0 0 80px;
                margin-bottom: 1px;
                p {
                    display: none;
                }
            }

        }
        .hm-mod-mOA {
            width: $MQMobileNarrow;
            .mOA-list {
                margin: 0 auto;
                width: 360px;
                box-sizing: border-box;
                padding: 20px;
                float: none;
                .list-item {
                    p {
                        display: none;
                        width: 200px;
                    }
                    margin-bottom: 0;
                }
                .work-show-img {
                    display: block;
                    width: 130px;
                    margin-left: 50px;
                    img {
                        width: 100%;
                        /*border-radius: 50%;*/
                    }
                }

            }
            .mOA-pic {
                display: none;
            }
        }
        .hm-mod-wecan {
            width: 360px;
            .wecan-list {
                .list-item {

                }
            }
        }
        .joinIn-container {
            width: 360px;
            .process-item {
                width: 130px;
                height: 30px;
                .process-title {
                    width: 130px;
                    font-size: 13px;
                }
            }

        }
        .sec-content.joinin {
            /*position: relative;*/
            top: 30%;
        }
        .site-footer {
            display: none;
        }
        .mini-footer {
            display: block;
            height: 100px;
            position: absolute;
            bottom: 0;
            width: 100%;
            /*padding-top: 25px;*/
            font-size: 12px;
            line-height: 28px;
            color: white;
            /*padding-bottom: 100px;*/
            background: #333;
            z-index: 1000;

        }
        .hm-mod-wecan {
            margin: 0px auto 0;
            width: 300px;
            .wecan-list {
                .list-item {
                    width: 300px;
                    float: left;
                    height: 80px;
                    position: relative;
                    margin-bottom: 3px;
                    h4 {
                        font-size: 18px;
                        margin: 12px 0 8px;
                    }
                    p {
                        width: 240px;
                        font-size: 12px;
                        line-height: 12px;
                        color: #838383;
                    }
                }
                .list-item-odd {
                    padding-left: 70px;
                    transform: translateX(0px);
                    text-align: left;
                }
                .list-item-even {
                    transform: translateX(0px);
                    padding-left: 70px;
                    text-align: left;
                }

                .list-item-odd .list-ico {
                    left: 0;
                }
                .list-item-even .list-ico {
                    left: 0;
                }
                .list-item .list-ico-ach {
                    background-position: 0 -64px;
                }
                .list-item .list-ico-trail {
                    background-position: -64px -64px;
                }
                .list-item .list-ico-rule {
                    background-position: -128px -64px;
                }
                .list-item .list-ico-cooper {
                    background-position: -192px -64px;
                }
                .list-item .list-ico-do {
                    background-position: -256px -64px;
                }
                .list-item .list-ico-mobile {
                    background-position: -320px -64px;
                }
            }
        }

    }
</style>