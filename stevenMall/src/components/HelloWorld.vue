<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 父組件傳遞給子組件 -->
    <Counter v-bind:num="numParent" v-on:incre="increment" v-on:decre="decrement"></Counter>    <!-- 利用動態綁定 -->
    <p>Parent Num: {{numParent}}</p>      <!-- 顯示父組件的值 -->
  </div>
</template>

<script>
 import Counter from "./Counter.vue"

export default {
  name: 'HelloWorld',
  data () {
    return {
      // 動態綁定的值默認給他10
      numParent: 10,    
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // components:{
  //   Counter
  // }

  components:{
    Counter
  },
  methods:{
    increment(){
      this.numParent++;
    },
    decrement(){
      this.numParent--;
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
