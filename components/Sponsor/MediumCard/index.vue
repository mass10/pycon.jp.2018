<template lang="pug">
.medium-card
    .image
      img.img(:src="sponsor.logoUrl")
    .desc
      .name {{ sponsor ? sponsor.name_ja : "nonName"}} 
      .text {{ sponsor ? sponsor.description_ja : "noDesc"}}
      .detail-link
</template>

<script>
  export default {
    name: 'medium-card',
    props: ["sponsor"]
  }
</script>

<style lang="scss" scoped>
.medium-card {
  height: 200px;
  width: 300px;
  margin: 10px 10px;
  background-color: green;
  color: white;
}
.img {
  width: 50px;
}
</style>