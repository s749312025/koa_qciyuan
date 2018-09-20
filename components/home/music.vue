<template>
    <div v-if="music.length > 0" class="music_top">
        <div class="block-top">
            <span class="t">云音乐排行 </span>
            <span>HOT ANISONG</span>
            <!-- <div class="imgs">
                <div class="img" v-for="(item, index) in 5" :key="index" :style="{'background-image': 'url(' + pixiv[item] + ')'}"></div>
            </div> -->
            <div class="musics clearfix">
                <div class="music pointer" v-for="item in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
                    <a :href="'https://music.163.com/#/song?id=' + music[item].id" target="_blank">
                        <div>
                            <img :src="music[item].al.picUrl + '?param=120y120'" :alt="music[item].alia ? music[item].alia[0] : music[item].name">
                            <div class="cr"></div>
                        </div>
                        <div class="title">{{music[item].name}}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fetch from '../../client/plugins/api.js'
export default {
    data() {
        return {
            music: []
        }
    },
    async mounted() {
        const data = await fetch('/cloudmusic/?type=playlist&id=71385702', {}, 'get')
        if (data.playlist && data.playlist.tracks.length > 0) {
            this.music = data.playlist.tracks
        }
    }
}
</script>

<style lang="scss" scoped>
.music_top {
    .musics {
        .music {
            position: relative;
            float: left;
            width: 198px;
            height: 165px;
            text-align: center;
            img {
                margin-top: 10px;
                width: 111px;
                height: 109px;
            }
            .cr {
                position: absolute;
                top: 12px;
                left: 40px;
                width: 159px;
                height: 109px;
                background: url(https://asset.static.moe123.net/builds/20180917163225/40d329b200798222bd8d4c77e4b0af2e.png)
                    no-repeat;
            }
            &:hover {
                img {
                    position: relative;
                    top: -5px;
                }
                .title {
                    color: red;
                }
            }
            .title {
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }
}
</style>
