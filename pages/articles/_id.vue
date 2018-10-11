<template>
    <div class="article-contont">
        <div class="header">
            <div class="fix-line" ref="top_nav"></div>
            <div class="header-bar" :class="{top_nav: isFixedNav}">
                <div class="bar-content">
                    <a href="/" class="logo">
                        <img src="https://i.loli.net/2018/10/09/5bbc55f76cca3.png" alt="">
                    </a>
                    <div class="toolbar">
                        <ul class="tab">
                            <li v-for="(item, index) in category" :key="index" @click="categoryActive = index, smallCateRank = 0" :class="{active: categoryActive === index}">{{index}}</li>
                        </ul>
                        <div class="panel">
                            <div class="sel">
                                <a class="top" href="javascript:;" :style="{'background-position': 'center ' + category[categoryActive][smallCateRank].pos + 'px'}"></a>
                                <ul :class="{none: !isopen}">
                                    <li v-for="(item, index) in category[categoryActive]" :key="index" @click="smallCateRank = index, isopen = !isopen">
                                        <a href="javascript:;" :style="{'background-position': 'center ' + item.pos + 'px'}"></a>
                                    </li>
                                </ul>
                                <span class="toggle" :class="{open: isopen}" @click="isopen = !isopen"></span>
                                <input type="text" v-model="searchInput">
                                <button @click="goSearch()">{{category[categoryActive][smallCateRank].btn}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="article">
            <h2 class="text-center">{{info.title}}</h2>
            <p class="time text-center">发布时间：{{info.pubDate}} | <a :href="info.link">查看原文</a></p>
            <div class="content" v-html="info.content"></div>
            <div class="viewArticel">
                转自: <a :href="info.link"><img :src="info.icon" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
import fetch from '../../client/plugins/api.js'
import category from '../../client/plugins/searchType'
import { topNav } from '../../client/plugins/nav'
import { dateFormat } from '../../client/plugins/utils.js'
export default {
    async asyncData({ params }) {
        let { info } = await fetch('/api/infoById', { id: params.id }, 'post')
        return {
            info: info[0]
        }
    },
    head() {
        return {
            title: 'Q次元-' + this.info.title,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    vmid: 'description',
                    hid: 'description',
                    name: 'description',
                    content:
                        '二次元的导航网站！及时收录动漫网站及资讯、宅网站、萌网站、动画、漫画、游戏等。可以让你更便捷的获取二次元世界的奇妙！'
                },
                {
                    vmid: 'Keywords',
                    hid: 'Keywords',
                    name: 'Keywords',
                    content:
                        '动漫资讯,科技资讯,二次元,动漫,萌系,动画,漫画,动画大全,动画集合,动漫网站大全,动画网站大全,动漫导航,Q次元'
                }
            ]
        }
    },
    data() {
        return {
            searchInput: '',
            smallCateRank: 0,
            isopen: false,
            category,
            topNav,
            isFixedNav: false,
            categoryActive: '网页'
        }
    },
    methods: {
        goSearch() {
            const url = this.category[this.categoryActive][this.smallCateRank].url + this.searchInput
            window.open(url)
        },
        goUrl(url) {
            window.open(url)
        },
        scrollTopNav() {
            document.onscroll = () => {
                if (this.$refs.top_nav.getBoundingClientRect().top < 1) {
                    this.isFixedNav = true
                } else {
                    this.isFixedNav = false
                }
            }
        }
    },
    mounted() {
        this.info.pubDate = dateFormat(new Date(this.info.pubDate), 'yyyy-MM-dd hh:mm:ss')
        console.log(this.info)
        this.scrollTopNav()
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 150px;
    position: relative;
    background: #fff;
    .fix-line {
        position: absolute;
        bottom: 80px;
    }
    .header-bar {
        position: absolute;
        bottom: 40px;
        width: 100%;
        height: 83px;
        &.top_nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: #ffffffe0;
            z-index: 99;
        }
    }
    .bar-content {
        position: relative;
        width: 1000px;
        height: 83px;
        margin: 0 auto;
    }
    a.logo {
        // background-image: url(https://i.loli.net/2018/10/09/5bbc3fd540229.png);
        width: 245px;
        bottom: 10px;
        height: 59px;
        left: 5px;
        position: absolute;
        img {
            max-height: 100%;
        }
    }
    .toolbar {
        width: 625px;
        bottom: 10px;
        height: 63px;
        right: 5px;
        position: absolute;
        .tab {
            line-height: 26px;
            position: absolute;
            top: 0;
            right: 0;
            height: 26px;
            width: 515px;
            li {
                cursor: pointer;
                text-align: center;
                border-radius: 2px;
                float: left;
                width: 69px;
                height: 26px;
                line-height: 26px;
                font-size: 12px;
                color: #fff;
                background: rgba(0, 0, 0, 0.3);
                &.active {
                    background: rgba(0, 0, 0, 0.6);
                }
                & + li {
                    margin-left: 5px;
                }
            }
        }
        .panel {
            position: absolute;
            right: 0;
            top: 31px;
            line-height: 32px;
            width: 100%;
            height: 32px;
            line-height: 32px;
            .sel {
                height: 32px;
                position: relative;
                z-index: 999;
                a.top {
                    width: 86px;
                    height: 32px;
                    display: block;
                    float: left;
                    overflow: hidden;
                    text-indent: -1000px;
                    background: transparent center 32px no-repeat;
                    background-image: url(https://i.loli.net/2018/10/09/5bbc59469db9b.png);
                }
                ul {
                    position: absolute;
                    width: 90px;
                    top: 34px;
                    li {
                        height: 34px;
                        line-height: 34px;
                        background: #fff;
                        border: 1px solid #ddd;
                        & + li {
                            border-top: none;
                        }
                        a {
                            width: 86px;
                            height: 32px;
                            display: inline-block;
                            background: transparent center 32px no-repeat;
                            background-image: url(https://i.loli.net/2018/10/09/5bbc59469db9b.png);
                        }
                    }
                }
                span.toggle {
                    margin: 0 5px;
                    position: relative;
                    top: 6px;
                    display: inline-block;
                    width: 13px;
                    height: 19px;
                    background-position: 3px -22px;
                    cursor: pointer;
                    background-image: url(https://i.loli.net/2018/10/09/5bbc5946539a9.png);
                    background-repeat: no-repeat;
                    &.open {
                        background-position: 3px -42px;
                    }
                }
                input {
                    width: 411px;
                    height: 30px;
                    line-height: 30px;
                    outline: none;
                    padding: 0 10px;
                    border: 1px solid #bbb;
                    border-radius: 2px;
                    background: #fff;
                }
                button {
                    margin-left: 5px;
                    width: 78px;
                    height: 32px;
                    color: #fff;
                    background: #3385ff;
                    border: none;
                    outline: medium;
                    cursor: pointer;
                }
            }
        }
    }
}
.article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 800px;
    padding: 30px 50px;
    display: block;
    margin: 20px auto;
    .viewArticel {
        img {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin: 0;
        }
    }
}
</style>
<style lang="scss">
.article-contont {
    background: #eee;
    padding-bottom: 30px;
    .article {
        img {
            max-width: 100%;
            display: block;
            height: auto;
            margin: 10px auto;
        }
        img + img {
            margin-top: 10px;
        }
        p {
            margin: 10px 0 20px;
            line-height: 1.8;
            text-indent: 2em;
            text-align: left;
            color: #34495e;
        }
        .time {
            text-align: center;
        }
    }
}
</style>
