<template>
  <div class="backdrop">
      <div class="modal" :class="{success:theme==='success',danger:theme==='delete'}">
          <h1>{{header}}</h1>
          <p>{{content}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:['header','content','theme']
}
</script>

<style scoped>
    .backdrop{
        background-color: gray;
        width: 100%;
        height:100%;
        position:fixed;
        top : 0;
    }
    .modal{
        background-color: white;
        width: 400px;
        margin : 100px auto;
        padding :30px;
        border-radius: 20px;
    }
    .success{
        background-color: green;
        color: white;
    }
    .danger{
        background-color: crimson;
        color:white;
    }
</style>