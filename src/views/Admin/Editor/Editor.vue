<template>
    <div class="quill-editor-example editor">
      <div class="tags-wrap">
        <v-btn flat><i class="icon" style="margin-right:5px">&#xe684;</i>新增标签</v-btn>

        <ul class="tag-list" v-if="tags.length > 0">
            <li class="tag-item" v-for="t in tags" :key="t.id" @click="chooseTag(t)" :class="{active: tagID == t.id}">{{t.name}}</li>
        </ul>
      </div>
      <div class="articles-wrap">

          <v-btn flat><i class="icon" style="margin-right:5px">&#xe684;</i>新增文章</v-btn>

          <ul class="article-list" v-if="articles.length > 0">
              <li class="article-item" v-for="a in articles" :key="a.id" @click="chooseArticle(a)" :class="{active: articleID == a.id}">{{a.title}}</li>
          </ul>

      </div>
      <div class="editor-wrap">
        <quill-editor v-if="article" v-model="article.content"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>
      </div>
    </div>
</template>

<script>
import VueQuillEditor, { Quill } from "vue-quill-editor";

export default {
  data() {
    return {
      name: "register-modules-example",
      content: ``,
      editorOption: {
        modules: {
          toolbar: [
            [{ size: ["small", false, "large"] }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"]
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white"
            },
            modules: ["Resize", "DisplaySize", "Toolbar"]
          }
        }
      },
      tags: [],
      tagID:undefined,
      articles: [],
      articleID: undefined,
      article: undefined
    };
  },
  mounted() {
  },
  watch: {
    "tagID": function(id) {
      this.getBlogsByTagId(id);
    },
    "articleID": function(id) {
      this.getArticleById(id);
    }
  },
  computed: {},
  created() {
         this.$api.getTags()
         .then(res => {
            this.tagID = res[0].id
             this.tags = [...this.tags,...res]
         })
  },
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    chooseTag(t) {
      this.tagID= t.id;
    }, 
    chooseArticle(a) {
      this.articleID= a.id;
    },

    getBlogsByTagId(id) {
      this.$api.getBlogsByTagId(id).then(res => {
        if(res.length > 0) this.articleID = res[0].id
        else this.article = null;
        this.articles = res;
      });
    },
    getArticleById(id) {
      this.$api.getArticleById(id)
      .then(res => {
          this.article = res
      })
    }
  }
};
</script>
<style lang="less" scoped>

.editor {
    width: 100%;
    height: 100%;
    display: flex;
}
.tags-wrap {
  padding: 20px 0;
  width: 180px;
  border-radius: 8px;
  background-color: #fff;

.tag-list {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    width: 100%;
    .tag-item {
        cursor: pointer;
        position: relative;
        width: 100%;
        padding: 10px 15px;
        font-size: 1rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        &:hover,
        &.active {
            background: #efefef;
        }

        &.active::after {
          position: absolute;
          content: "";
          height: 100%;
          width: 3px;
          background-color: red;
          top: 0;
          left: 0;
        }
    }
}
}
.articles-wrap {
  margin-left: 15px;
  padding: 20px 0;
  width: 180px;
  border-radius: 8px;
  background-color: #fff;
  .article-list {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    width: 100%;
    .article-item {
        cursor: pointer;
        position: relative;
        width: 100%;
        padding: 10px 15px;
        font-size: 1rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        &:hover,
        &.active {
            background: #efefef;
        }

        &.active::after {
          position: absolute;
          content: "";
          height: 100%;
          width: 3px;
          background-color: #42b983;
          top: 0;
          left: 0;
        }
    }
}
}
.editor-wrap {
  margin-left: 15px;
  background-color: #fff;
  flex: 1;
}

@media (min-width: 1200px){
  
.tags-wrap {
  width: 220px;
}
.articles-wrap {
  width: 220px;
}
}
</style>

