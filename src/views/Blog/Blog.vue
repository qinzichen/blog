<style lang="less">
@import url("./Blog.less");
</style>

<template>
    <div class="app-blog">
        <blog-tag/>
        <blog-articles/>
    </div>
</template>

<script>
import Tag from "./components/Tag"
import Articles from "./components/Articles"
export default {
    name: 'blog',
    components: {
        "blog-tag": Tag,
        "blog-articles": Articles
    },
    created() {
    },
    data() {
        return {

        }
    }
}
</script>
