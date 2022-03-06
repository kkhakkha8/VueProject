<template>
  <h1 ref="greet">Hi</h1>
    <div v-if="showModal">
        <Model_com  :theme="theme" @close="showModal=false" >
            <h1>Login success</h1>
            <p>Welcome user HAK</p>
            <!-- <template v-slot:links>
                <a href="">Signup</a>
                <a href="">Register</a>
            </template> -->
        </Model_com>
    </div>
    <button @click="showModal=true">show modal</button>
</template>

<script>
import Model_com from "./components/Model_com.vue";
export default {
    data() {
        return {
            
            theme: "success",
            showModal:false
            
        }
    },
    components: {
        Model_com
    }
}
</script>

<style scoped>
h1{
    color:blue;
}
</style>