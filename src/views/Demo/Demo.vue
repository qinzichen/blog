<style lang="less">
@import url("./Demo.less");
</style>

<template>
    <div class="app-demo">
        <div class="demo-side-bar">
            <ul class="type-list">
            <li v-for="(type, index) in demoList" :key="'type'+(index+1)">
                    <span class="type-name">{{type.typeName}}</span>   
                    <ul class="demo-list">
                        <li :class="{active: demoActive==demo.active}" v-for="(demo, index) in type.demos" :key="'demo'+(index+1)"  @click="linkToDemo(demo)">
                            {{demo.text}}
                        </li>
                    </ul>
                </li> 
            </ul>
        </div>
        <div class="demo-container" :class="{'show-demo': showDemo}">

            <div v-if="!showDemo">
                <h2 style="margin:120px 20px;">点击左侧列表查看Demo演示</h2>  
            </div>

            <transition name="slide" mode="in-out">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import DemoList from "./demoList.js"

export default {
    data() {
        return {
            demoActive:undefined,
            demoList: DemoList,
            showDemo: false
        }
    },
    created() {
        if(this.$route.name!=="Demo") {
            this.showDemo = true;
        }
    },
    watch: {
        $route: {
            handler(val) {
                if(val.name !== "Demo") {
                    this.showDemo = true;
                }else {
                    setTimeout(()=>{
                        this.showDemo = false;
                    },300)
                }
            },
            deep: true
        }
    },
    methods: {
        linkToDemo(demo) {
            this.demoActive = demo.active;
            this.$router.push({
                name: demo.name
            });

        }
    }
}
</script>
