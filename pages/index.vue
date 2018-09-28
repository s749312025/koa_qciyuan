<template>
    <section class="home">
        <div class="banner" @click="() => isopen ? isopen = false : ''">
        </div>
        <div class="header">
            <div class="header-bar">
                <div class="bar-content">
                    <a href="/" class="logo"></a>
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
        <div class="nav">
            <ul class="big_block">
                <li v-for="(item, index) in topNav" @click="goUrl(item.url)" :key="index">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </li>
            </ul>
            <ul>

            </ul>
        </div>
        <home :xiantan="xiantan" :pixiv="pixiv" :playlist="playlist"></home>
    </section>
</template>
<script>
import fetch from '../client/plugins/api.js'
import category from '../client/plugins/searchType'
import { topNav } from '../client/plugins/nav'
import Home from '../components/Home.vue'
export default {
    async asyncData({ req }) {
        let [{ info }, { image }, {playlist}] = await Promise.all([
            // fetch('/api/xiandu/data/id/appinn/count/10/page/1', {}, 'get'),
            fetch('/api/info', {}, 'post'),
            fetch('/api/pixiv', {}, 'post'),
            fetch('/api/music', {}, 'post')
        ])
        return { xiantan: info, pixiv: image, playlist }
    },
    data() {
        return {
            searchInput: '',
            smallCateRank: 0,
            isopen: false,
            category,
            topNav,
            categoryActive: '网页'
        }
    },
    components: { Home },
    methods: {
        goSearch() {
            const url = this.category[this.categoryActive][this.smallCateRank].url + this.searchInput
            window.open(url)
        },
        goUrl(url) {
            window.open(url)
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    position: relative;
    .banner {
        height: 800px;
        position: absolute;
        width: 100%;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: transparent top center no-repeat;
        display: block;
        background-image: url(https://ww4.sinaimg.cn/large/a15b4afegw1f5s9rj596dj20y60hs7bd);
    }
    .header {
        height: 520px;
        position: relative;
        .header-bar {
            position: absolute;
            bottom: 40px;
            width: 100%;
            height: 83px;
        }
        .bar-content {
            position: relative;
            width: 1000px;
            height: 83px;
            margin: 0 auto;
        }
        a.logo {
            background-image: url(https://asset.static.moe123.net/builds/20180911172601/03977178366e038201e85d8ab5a481ea.png);
            width: 245px;
            bottom: 10px;
            height: 59px;
            left: 5px;
            position: absolute;
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
                        background-image: url(https://asset.static.moe123.net/builds/20180911172601/8d1ab6335cfe0462addac6f839986ae8.png);
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
                                background-image: url(https://asset.static.moe123.net/builds/20180911172601/8d1ab6335cfe0462addac6f839986ae8.png);
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
                        background-image: url(https://asset.static.moe123.net/builds/20180911172601/8b3b7d06d8503759f9e21bf703a9db5c.png);
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
    .nav {
        margin: 0 auto 18px;
        padding: 12px 0;
        width: 998px;
        opacity: 0.85;
        background-color: #fefefe;
        border-bottom: 1px solid #e5e5e5;
        ul.big_block {
            font-size: 0;
            text-align: center;
            position: relative;
            li {
                display: inline-block;
                margin: 0 5px;
                width: 80px;
                font-size: 13px;
                position: relative;
                opacity: 1;
                cursor: pointer;
                img {
                    width: 54px;
                    height: 54px;
                }
                h4 {
                    line-height: 24px;
                    height: 24px;
                    font-size: 13px;
                    font-weight: normal;
                }
            }
        }
    }
}
</style>
