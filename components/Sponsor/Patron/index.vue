<template lang="pug">
  section#Patron.sponsor-section
      h2 Patron
      .card-block.uk-flex.uk-flex-wrap
        MicroCard(v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import MicroCard from '../MicroCard';
  export default {
    name: 'media-sponsor',
    props: ["sponsors"],
    components: {
      MicroCard,
    }
  }
</script>

<style lang="scss" scoped>
</style>