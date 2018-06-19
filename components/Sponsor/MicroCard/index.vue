<template lang="pug">
.micro-card
  .image
    img.img(:src="sponsor.logoUrl")
  .name {{ sponsor ? sponsor.name_ja : "nonName"}} 
  .text {{ sponsor ? sponsor.description_ja : "noDesc"}}
</template>

<script>
  export default {
    name: 'medium-card',
    props: ["sponsor"]
  }
</script>

<style lang="scss" scoped>
.micro-card {
    height: 100px;
    width: 300px;
    margin: 10px 10px;
    background-color: pink;
    color: white;
}
.img {
  width: 50px;
}
</style>