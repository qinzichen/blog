<template>
    <div class="article">
        <div class="article-container ql-snow"  v-if="article">
            <h1 class="article-container_title">{{article.title}}</h1>
            <div class="article-container_content ql-editor" v-html="article.content"></div>
            <div class="article-container_meta">
                <p>--于<time>{{article.create_time}}</time>，共写了<span>1000</span>个字</p>
                <p v-if="relevantTags.length > 0">--相关标签:<a class="relevant-tag" v-for="t in relevantTags" :key="t.id">{{'#'+t.name}}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            article: undefined,
            relevantTags: []
        }
    },
    created() {
        let id = this.$route.params.id
        if(id) {
            this.$api.getArticleById(id)
            .then(res => {
                this.article = res
                this.getRelevantTages();
            })
        }
    },
    methods: {
        getRelevantTages() {
            let tag = this.article.tag
            if(tag && tag.length > 0) {
                this.$api.getTagsById(tag)
                .then(res=> {
                    this.relevantTags = res
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./Article.less');
</style>


