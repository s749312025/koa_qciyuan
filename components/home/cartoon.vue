<template>
    <div class="cartoon">
        <div class="block-top">
            <span class="t">新番更新 </span>
            <span>CARTOON DATA</span>
        </div>
        
        <ul class="weekItem" id="weektab" ref="weeks">
            <li v-for="(item, index) in weeks" :key="item" :class="{active: activedItem == index}" @click="activedItem = index">{{item}}</li>
        </ul>
        <div class="weekbox">
            <ul v-if="allCartoon && allCartoon[activedItem]">
                <li v-for="item in allCartoon[activedItem]" :key="item.bgmId">
                    <a class="cartoon-name" href="javascript:;" @click="openSites(item)">
                        <img src="http://ww1.sinaimg.cn/large/eb8c259egy1fw33bqo11gj2050050jrb.jpg" alt="">
                        <span>{{item.titleCN}}</span>
                    </a>
                    <div class="playSite" v-if="showSites === item.bgmId">
                        <div v-if="item.onAirSite && item.onAirSite.length > 0">
                            <a v-for="(site, index) in item.onAirSite" :key="index" :href="site" target="_blank">{{site | hostUrl}}</a>
                        </div>
                        <a v-else href="javascript:;">暂无</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cartoon'],
    data() {
        return {
            showSites: undefined,
            activedItem: new Date().getDay(),
            allCartoon: [],
            weeks: {
                1: '周一',
                2: '周二',
                3: '周三',
                4: '周四',
                5: '周五',
                6: '周六',
                0: '周日'
            }
        }
    },
    filters: {
        hostUrl(url) {
            let a = new URL(url)
            let allName = a.hostname.split('.')
            let len = allName.length
            return allName[len - 2]
        }
    },
    methods: {
        openSites(item) {
            if (this.showSites === item.bgmId) {
                this.showSites = undefined
                return
            }
            this.showSites = item.bgmId
        },
        filterData() {
            Object.values(this.cartoon.cartoon).forEach(item => {
                if (!this.allCartoon[item.weekDayCN]) {
                    this.allCartoon[item.weekDayCN] = []
                }
                this.allCartoon[item.weekDayCN].push(item)
            })
        }
    },
    created() {
        this.filterData()
    }
}
</script>

<style lang="scss" scoped>
.cartoon {
    position: absolute;
    top: 0;
    left: 0;
    width: 352px;
    height: 690px;
    z-index: 99;
    .weekItem {
        border: 1px solid #e5e9ef;
        border-radius: 8px;
        height: 32px;
        li {
            width: 50px;
            line-height: 32px;
            text-align: center;
            cursor: pointer;
            overflow: hidden;
            border-radius: 8px;
            font-size: 14px;
            float: left;
            &.active {
                background: #f60;
                color: #fff;
            }
        }
    }
    .weekbox {
        border: 1px solid #e5e9ef;
        border-radius: 8px;
        padding: 10px 10px 10px 0;
        margin-top: 10px;
        height: 625px;
        overflow: auto;
        .playSite {
            padding: 3px 6px;
            background: #ddd;
            border-radius: 6px;
            box-shadow: 0 0 1px 1px #ccc inset;
            a {
                color: #fff;
                background: #00c099;
                padding: 2px 6px;
                border-radius: 3px;
                margin: 0 5px;
                text-decoration: none;
                cursor: pointer;
            }
        }
        ul {
            li {
                padding-left: 26px;
                line-height: 26px;
                overflow-x: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
            }
            a {
                img {
                    position: relative;
                    top: -1px;
                    vertical-align: middle;
                    max-width: 20px;
                    margin-right: 6px;
                }
            }
        }
    }
}
</style>
