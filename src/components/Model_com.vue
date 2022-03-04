<template>
  <div class="backdrop">
      <div class="modal">
          <p>Modal Content</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .backdrop{
        background-color: gray;
        width: 100%;
        height:100%;
        position:fixed;
        top : 0;
    }
    .modal{
        background-color: white;
        width: 200px;
        margin : 100px auto;
        padding :10px;
        border-radius: 20px;
    }
</style>