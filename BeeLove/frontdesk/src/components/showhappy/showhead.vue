<template>
  <div class="ing">
    <img src="../../assets/img/showhappy/showhead.gif" alt />
    <slot ></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ing {
  width: 970px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
}

</style>