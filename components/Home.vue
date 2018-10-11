<template>
    <div class="home">
        <div class="adj text-center">
            <span>名站推荐</span>
            <a v-for="(item, index) in adjList" :key="index" target="_blank" :href="item.url">{{item.title}}</a>
        </div>
        <div class="nav clearfix">
            <div class="xiantan left">
                <ul>
                    <li v-for="item in xiantan" :key="item.id">
                        <!-- <a :href="item.link" target="_blank">
                            <img :src="item.icon" :alt="item.title">
                            <span>{{item.title}}</span>
                        </a> -->
                        <a :href="'/articles/' + item.id" target="_blank">
                            <img :src="item.icon" :alt="item.title">
                            <span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="all_nav right">
                <ul class="com_url clear">
                    <li v-for="(item, index) in [...recommend.first, ...topSites]" :key="index">
                        <a :href="item.url" target="_blank">
                            <img v-if="item.icon" :src="item.icon" :alt="item.title">
                            <img v-else src="https://www.google.cn/s2/favicons?domain=web.sanguosha.com" alt="">
                            <span>{{item.title}}</span>
                        </a>
                        <span v-if="addSite && item.isHandle" @click="delSite(item)" class="del-site">×</span>
                    </li>
                    <li>
                        <a href="javascript:;" @click="addSite = !addSite">
                            <img src="https://i.loli.net/2018/10/10/5bbdaed190467.png" alt="自定义">
                            <span>自定义添加</span>
                        </a>
                    </li>
                </ul>
                <div class="form" v-if="addSite">
                    <input type="text" v-model="addForm.name" placeholder="站点名称">
                    <input type="text" class="input-url" v-model="addForm.url" placeholder="站点地址">
                    <button @click="addSiteEvent">确定</button>
                    <button class="cancel" @click="addSite = false">取消</button>
                </div>
                <div class="line"></div>
                <ul class="com_url clear">
                    <li v-for="(item, index) in recommend.second" :key="index">
                        <a :href="item.url" target="_blank">
                            <img :src="item.icon" :alt="item.title">
                            <span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <pixiv :pixiv="imgs"></pixiv>
        <music :playlist="music"></music>
        <div class="ct">
            <cartoon :cartoon="cartoon"></cartoon>
            <div class="allwebsite">
                <div class="block-top">
                    <span class="t">网址大全 </span>
                    <span>MORE WEBDIR</span>
                </div>
                <ul>
                    <li v-for="(item, index) in allWebsite" :key="index">
                        <span class="nav-title">{{index}}</span>
                        <ul class="smallCate">
                            <li v-for="(list, i) in item" :key="i">
                                <a :href="list.src" target="_blank"><img v-if="list.img" :src="list.img" alt="">{{list.t}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import { recommend, allWebsite } from '../client/plugins/nav'
import pixiv from './home/pixiv'
import music from './home/music'
import cartoon from './home/cartoon'
const adjList = [
    { title: '人民网', url: 'http://www.people.com.cn' },
    { title: '新华网', url: 'http://www.xinhuanet.com' },
    { title: '中国共产党', url: 'http://cpc.people.com.cn' },
    { title: '中国共青团', url: 'http://www.ccyl.org.cn' },
    { title: '央视网', url: 'http://www.cctv.com' },
    { title: '国际在线', url: 'http://www.cri.cn' },
    { title: '中国网', url: 'http://www.china.com.cn' },
    { title: '中国经济网', url: 'http://www.ce.cn' },
    { title: '中国青年网', url: 'http://www.youth.cn' },
    { title: '中国网信网', url: 'http://www.cac.gov.cn' }
]
export default {
    props: ['xiantan', 'pixiv', 'playlist', 'cartoon'],
    components: { pixiv, music, cartoon },
    data() {
        return {
            addSite: false,
            imgs: this.pixiv,
            music: this.playlist,
            addForm: {
                name: undefined,
                url: undefined
            },
            topSites: [],
            adjList,
            recommend,
            allWebsite
        }
    },
    methods: {
        getMysite() {
            const sites = localStorage.getItem('mySite')
            if (!sites) {
                return
            }
            this.topSites = [ ...JSON.parse(sites) ]
        },
        delSite(item) {
            if (item) {
                let sites = JSON.parse(localStorage.getItem('mySite'))
                sites = sites.filter(x => x.id !== item.id)
                localStorage.setItem('mySite', JSON.stringify(sites))
                this.getMysite()
            }
        },
        addSiteEvent() {
            if (!this.addForm.name || !this.addForm.url) {
                alert('添加站点需站点名与地址，请填写完整！')
                return
            }
            if (!(this.addForm.url.indexOf('http') > -1)) {
                this.addForm.url = 'http://' + this.addForm.url
            }
            let data = localStorage.getItem('mySite')
            data = data ? JSON.parse(data) : []
            data.push({
                id: new Date().getTime(),
                isHandle: true,
                url: this.addForm.url,
                title: this.addForm.name
            })
            localStorage.setItem('mySite', JSON.stringify(data))
            this.addForm.name = undefined
            this.addForm.url = undefined
            this.getMysite()
            this.addSite = false
        }
    },
    mounted() {
        // this.topSites = [...this.recommend.first]
        this.getMysite()
    }
}
</script>


<style lang="scss" scoped>
.home {
    width: 998px;
    margin: 0 auto;
    font-size: 14px;
    .adj {
        font-size: 12px;
        * {
            margin: 0 10px;
        }
        span {
            color: #25a942;
        }
        a {
            outline: 0;
            color: #222;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                color: red;
            }
        }
    }
    .nav {
        margin-top: 20px;
        .xiantan {
            width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 13px;
            li {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 28px;
                img {
                    width: 15px;
                    vertical-align: middle;
                    margin-right: 10px;
                }
                span {
                    vertical-align: middle;
                }
            }
        }
        .all_nav {
            width: 732px;
            ul.com_url {
                li {
                    img {
                        vertical-align: middle;
                        border: none;
                        width: 16px;
                        height: 16px;
                        margin-left: -22px;
                        margin-right: 8px;
                    }
                    span {
                        vertical-align: middle;
                    }
                    float: left;
                    display: block;
                    width: 92px;
                    padding-left: 30px;
                    margin: 3px 0;
                    height: 35px;
                    line-height: 35px;
                }
            }
            .del-site {
                display: inline-block;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                position: relative;
                margin-left: 3px;
                color: #fff;
                background: #999;
                border-radius: 50%;
                cursor: pointer;
            }
            .form {
                width: 720px;
                position: relative;
                float: left;
                padding-left: 10px;
                input {
                    margin-right: 10px;
                    border: 1px solid #ccc;
                    padding: 7px 0px;
                    border-radius: 3px;
                    padding-left: 5px;
                    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
                    &.input-url {
                        width: 230px;
                    }
                    &:focus {
                        border-color: #66afe9;
                        outline: 0;
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
                    }
                }
                button {
                    width: 96px;
                    height: 31px;
                    margin-left: 10px;
                    padding: 0;
                    line-height: 31px;
                    font-size: 14px;
                    border: 1px solid #dcdfe6;
                    box-sizing: border-box;
                    outline: 0;
                    transition: 0.1s;
                    border-radius: 4px;
                    color: #fff;
                    background-color: #409eff;
                    border-color: #409eff;
                    cursor: pointer;
                    &.cancel {
                        color: #444;
                        background: #fff;
                        border-color: #ddd;
                    }
                }
            }
            .line {
                width: 720px;
                position: relative;
                margin: 3px 6px;
                float: left;
                border-top: 1px solid #e4e4e4;
                height: 0;
            }
        }
    }
    .ct {
        position: relative;
        height: 740px;
        .allwebsite {
            position: relative;
            padding-left: 380px;
            height: 690px;
            .nav-title {
                color: #25a942;
            }
            li {
                white-space: nowrap;
            }
            .smallCate {
                height: 36px;
                line-height: 36px;
                display: inline-block;
                margin-left: 12px;
                width: 570px;
                text-align: center;
                white-space: nowrap;
                li {
                    display: inline-block;
                    img {
                        width: 16px;
                        height: 16px;
                        position: relative;
                        top: 3px;
                        margin-right: 3px;
                    }
                    a {
                        margin-left: 7px;
                        margin-right: 7px;
                    }
                }
            }
        }
    }
}
</style>
