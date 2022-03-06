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
    <div v-if="showDelete" >
        <Delete_mol @deleteHandler="showDelete=false"/>

    </div>
    <button @click="showModal=true">show modal</button>
    <button @click="showDelete=true">delete</button>
</template>

<script>
import Model_com from "./components/Model_com.vue";
import Delete_mol from "./components/Delete_mol.vue";
export default {
    data() {
        return {
            
            theme: "success",
            showModal:false,
            showDelete:false
            
        }
    },
    components: {
        Model_com,
        Delete_mol
    }
}
</script>

<style scoped>
h1{
    color:blue;
}
</style>