<template>
    <div class="tag">
        <ul class="tag-list">
            <li class="tag-item" v-for="(t,index) in tags" :key="t.id" @click="chooseTag(t, index)" :class="{active: active == index}">{{t.name}}</li>
        </ul>
    </div>
</template>
 <script>
 export default {
     data() {
         return {
             active: 0,
             tags: [{id: 'all',name:'所有'}]
         }
     },
     created() {
         this.$api.getTags()
         .then(res => {
             this.tags = [...this.tags,...res]
         })
     },
     methods: {
         chooseTag(obj,index) {
             this.active = index
             this.$store.commit('setTag', obj)
         }
     }
 }
 </script>
 
 <style lang="less" scoped>
 @import url('./Tag.less');
 </style>
 