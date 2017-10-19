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
    data(){
        return{
            num: 0,
        }
    },
    methods:{
        increment(){
            this.num++;

        },
        decrement(){
            this.num--;
        },
    }
}
</script>

<style>

</style>
