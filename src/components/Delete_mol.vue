<template>
<div class="delete_Container" @click.self="deleteHandler">
    <div class="delete">
        <h1>Delete Form</h1>
        <p>Are you sure want to delete</p>
    </div>
</div>

  
</template>

<script>
export default {
    methods: {
        deleteHandler(){
            this.$emit('deleteHandler');
    }
        }
}
</script>

<style scoped>
.delete_Container{
        
        background-color: gray;
        width: 100%;
        height:100%;
        position:fixed;
        top : 0;
    
}
.delete{
    background-color: red;
    color: white;
    width: 500px;
    margin: 100px auto;
    padding: 20px;
    border-radius: 20px;
}
</style>