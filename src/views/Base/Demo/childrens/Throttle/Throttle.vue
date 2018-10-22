<template>
    <div class="demo">
        <div class="throttle">
              <v-text-field
                v-model="input1"
                label="使用节流"
                ></v-text-field>
              <v-text-field
                v-model="input2"
                label="不使用节流"
                ></v-text-field>
            <ul>
                <li v-for="r in searchResult" :key="r.index">{{r}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import throttle from "./throttle.js";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      throttleOn: true,
      searchResult: []
    };
  },
  watch: {
      input2() {
          this.search2();
      }
  },
  created() {
    let vm = this;
    vm.$watch(
      "input1",throttle(() => {
            vm.search1();
          }, 1000)
    );
  },
  methods: {
    search1() {
      this.searchResult.push("执行查询请求，key:" + this.input1);
    },
    search2() {
      this.searchResult.push("执行查询请求，key:" + this.input2);
    }
  }
};
</script>

<style lang="less" scoped>
.demo {
  position: absolute;
    background: #fff;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.throttle {
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
}
</style>
