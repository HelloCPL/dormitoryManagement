<template>
    <div>
        <van-button
            type="primary"
            @click="test1"
        >get请求</van-button><br />
        <!-- <extract-ellipsis id="ds1231">
            <div class="we-padding-left-10 we-padding-right-10">
                <div v-html="content"></div>
            </div>
        </extract-ellipsis> -->
    </div>
</template>

<script>
import extractEllipsis from '@com/common/extractEllipsis.vue'
export default {
    components: {
        extractEllipsis,
    },
    data() {
        return {
            content: '<p style="color: red">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</p><span style="color: gray; font-size: 12px">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</span><p style="color: red; font-size: 18px;">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</p><p style="color: red">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</p><span style="color: gray; font-size: 12px">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</span><p style="color: red; font-size: 18px;">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</p><p style="color: red">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</p><span style="color: gray; font-size: 12px">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</span><p style="color: red; font-size: 18px;">哲学根本问题又称哲学的基本问题、哲学的最高问题，它是指思维和存在、意识和物质的关系问题。恩格斯在1体系、哲学派别以及对它们的客观评价提供了正确的标准。</p>',
        }
    },

    methods: {
        test1() {
            this.$http.getExt('https://api.jisuapi.com/area/province', {
                pageNo: 1,
                pageSize: 10,
                appkey: this.userInfoGetter.appKey
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss" scope>
.content-wrapper {
    line-height: 20px;
    text-indent: 2em;
}
.fixed-box {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: red;
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
