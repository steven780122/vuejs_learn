<template>
    <div>
        <button @click="increment">+</button>
        <button v-on:click="decrement">-</button>       
        <!-- v-on也可以 -->
        <p><span>{{num}}</span></p>
    </div>
    
</template>

<script>
export default {
    props:["num"],
    data(){
        return{
            num: 0,
        }
    },
    methods:{
        increment(){
            // this.num++;
            this.$emit("incre");

        },
        decrement(){
            // this.num--;
            this.$emit("decre");
        },
    }
}
</script>

<style>

</style>
