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
             // 有props了 其實就用props即可  >>  (從父傳了用props，local才用data)
                        // You have added article at both places data and props. 
                        //  It should be one of these, thats why you are getting the error. 
                        // You have to remove it one of the place, if you are passing it from parent component,
                        //  than keep it as props, if this is a local instance data, keep it in vue data block.
    // data(){ 
    //     return{
    //         num: 0,
    //     }
    // },
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
