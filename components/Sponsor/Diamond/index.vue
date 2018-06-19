<template lang="pug">
section#DiamondSponsor.sponsor-section
  h2 Diamond Sponsor
  .uk-grid.body
    .uk-width-2-5.card
       img.img(:src="sponsor.logoUrl")
    .uk-width-3-5.text
       .name {{ sponsor ? sponsor.name_ja : '' }} 
       .desc {{ sponsor ? sponsor.description_ja : '' }}
</template>

<script>
  export default {
    name: 'diamond',
    props: ["sponsor"]
  }
</script>

<style lang="scss" scoped>
.body {
    margin: 0;
    padding: 0;
}
.card, .text {
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: white;
    height: 300px;
    opacity: .7;
}
.card {
    background-color: brown;
}
.text {
    background-color: purple;
}
.img {
    width: 200px;
}
</style>