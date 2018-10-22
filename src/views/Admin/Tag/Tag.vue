<style lang="less">
@import url("./Tag.less");
</style>

<template>
    <div class="app-tag">
        <app-nodata message="Tag页面暂时还没有内容"/>
    </div>
</template>

<script>
import NoData from '@/components/NoData'
export default {
    components: {
        "app-nodata": NoData
    },
    data() {
        return {

        }
    }
}
</script>
