<template>
    <div class="articles">
        <ul class="article-list" v-if="articleList.length > 0">
            <li class="article-item" v-for="a in articleList" :key="a.id" @click="openArticle(a.id)">
                <div class="article-item_title"><a>{{a.title}}</a></div>
                <p class="article-item_summary">{{a.summary}}</p>
                <div class="article-item_footer">
                    <time>{{a.create_time}}</time>
                </div>
            </li>
        </ul>
        <app-nodata v-else/>
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
      articleList: []
    };
  },
  computed: {
    tagId() {
      return this.$store.getters.tagId;
    }
  },
  watch: {
    tagId: function(tagId) {
      if (tagId === "all") {
        this.getBlosg();
      } else {
        this.getBlogsByTagId(tagId);
      }
    }
  },
  created() {
    this.$nextTick().then(() => {
      if (this.tagId) {
        this.getBlogsByTagId(this.tagId);
      } else {
        this.getBlosg();
      }
    });
  },
  methods: {
    getBlogsByTagId(id) {
      this.$api.getBlogsByTagId(id).then(res => {
        this.articleList = res;
      });
    },
    getBlosg() {
      this.$api.getBlogs().then(res => {
        this.articleList = res;
      });
    },
    openArticle(id) {
      this.$router.push("/article/" + id);
    }
  }
};
</script>

<style lang="less" scoped>
  @import url('./Articles.less');
</style>


