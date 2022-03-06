<template>
  <h1 ref="greet">Hi</h1>
    <div v-if="showModal">
        <Model_com :header="header" :content="content" :theme="theme" @close="showModal=false" />
    </div>
    <button @click="showModal=true">show modal</button>
</template>

<script>
import Model_com from "./components/Model_com.vue";
export default {
    data() {
        return {
            header: "login success",
            content: "Welcome User Hla Aung Khan",
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