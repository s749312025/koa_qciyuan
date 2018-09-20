<template>
    <div class="pixiv">
        <div class="block-top">
            <span class="t">P站日榜 </span>
            <span>PIXIV DAILY</span>
            <div class="imgs clearfix">
                <div class="img" v-for="(item, index) in 5" :key="index" :style="{'background-image': 'url(' + pixiv[item] + ')'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pixiv'],
    data() {
        return {
            key: 'value'
        }
    }
}
</script>

<style lang="scss" scoped>
.pixiv {
    width: 100%;
    .imgs {
        .img {
            float: left;
            margin: 4px;
            height: 250px;
            width: 190px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
