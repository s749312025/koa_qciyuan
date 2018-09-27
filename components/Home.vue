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
                        <a :href="item.link" target="_blank">
                            <img :src="item.icon" :alt="item.title">
                            <span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="all_nav right">
                <ul class="com_url clear">
                    <li v-for="(item, index) in recommend.first" :key="index">
                        <a :href="item.url" target="_blank">
                            <img :src="item.icon" :alt="item.title">
                            <span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
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
        <music></music>
    </div>
</template>

<script>
import { recommend } from '../client/plugins/nav'
import pixiv from './home/pixiv'
import music from './home/music'
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
    props: ['xiantan', 'pixiv'],
    components: { pixiv, music },
    data() {
        return {
            imgs: this.pixiv,
            adjList,
            recommend
        }
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
}
</style>
