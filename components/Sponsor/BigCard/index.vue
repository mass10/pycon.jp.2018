<template lang="pug">
.big-card
    .image
      img.img(:src="sponsor.logoUrl")  
    .body 
        .name {{sponsor.name_ja}}
        .desc {{sponsor.description_ja}}
        .detail-link
</template>

<script>
  export default {
    name: 'card',
    props: ['sponsor']
  }
</script>

<style lang="scss" scoped>
.big-card {
    height: 300px;
    width: 400px;
    margin: 10px 10px;
    background-color: green;
    color: white;
    .img {
      width: 200px;
    }
}
</style>